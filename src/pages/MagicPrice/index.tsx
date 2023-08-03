import { KeyboardEvent, useState, ChangeEvent, useRef } from "react";
import DefaultPageTemplate from "templates/DefaultPageTemplate/DefaultPageTemplate";
import CardItem from "components/CardItem/CardItem";
import TextField from "@mui/material/TextField";
import PricingUtil from "utils/PricingUtil";
import ScryFallService from "services/ScryFallService";
import Snack, { SnackRef } from "components/Snack/Snack";
import { ScryfallCardData } from "models/ScryfallCardData";
import "./style.scss";

const MagicPriceView = () => {
  const pricingUtil = new PricingUtil();
  const scryFallService = new ScryFallService();

  const snackRef = useRef<SnackRef | null>(null);

  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const [cardImage, setCardImage] = useState<string | undefined>();
  const [cardSetName, setCardSetName] = useState<string | undefined>();
  const [cardNormalPrice, setCardNormalPrice] = useState<string | undefined>();
  const [cardFoilPrice, setCardFoilPrice] = useState<string | undefined>();
  const [cardEtchedPrice, setCardEtchedPrice] = useState<string | undefined>();

  const searchPress = (e: KeyboardEvent<HTMLImageElement>): void => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = (): void => {
    closeSnackbar();

    let searchStr: string = textFieldValue.replace(" ", "");

    let setCode: string = searchStr.substring(0, 3);
    let cardNumber: string = searchStr.substring(3, searchStr.length);

    if (setCode.length !== 3) {
      console.error("Invalid set code");
      openSnackbar("Invalid set code");
      return;
    } else if (!cardNumber || Number.isNaN(Number(cardNumber))) {
      console.error("Invalid card number");
      openSnackbar("Invalid card number");
      return;
    }

    getCard(setCode, cardNumber);
  };

  const getCard = (setCode: string, cardNumber: string): void => {
    setCardImage(undefined);
    setCardSetName(undefined);
    setCardNormalPrice(undefined);
    setCardFoilPrice(undefined);
    setCardEtchedPrice(undefined);

    scryFallService.getCardInfo(setCode, cardNumber).subscribe({
      next: (card: ScryfallCardData) => {
        setCardImage(getCardsImage(card));
        setCardSetName(card.set_name);
        setCardNormalPrice(getCadPrice(card.prices.usd));
        setCardFoilPrice(getCadPrice(card.prices.usd_foil));
        setCardEtchedPrice(getCadPrice(card.prices.usd_etched));

        setTextFieldValue("");
      },
      error: (error) => {
        console.error(error);
        openSnackbar("Failed to get card info");
      },
    });
  };

  const getCadPrice = (price: string | undefined | null): string => {
    if (price === undefined || price === null) {
      return "";
    }

    let priceNum: number = Number(price);
    if (!isNaN(priceNum)) {
      let cadPrice: number = pricingUtil.usdToCad(priceNum);
      return `${cadPrice.toFixed(2)} CAD`;
    } else {
      return "";
    }
  };

  const getCardsImage = (card: ScryfallCardData | undefined): string => {
    if (card === undefined) {
      return "";
    }

    if (card.image_uris && card.image_uris.png) {
      return card.image_uris.png;
    }

    if (
      card.card_faces &&
      card.card_faces[0].image_uris &&
      card.card_faces[0].image_uris.png
    ) {
      return card.card_faces[0].image_uris.png;
    }
    return "";
  };

  const handleTextFieldChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setTextFieldValue(event.target.value);
  };

  const openSnackbar = (message: string): void => {
    if (!snackRef || !snackRef.current) {
      console.error("Snackbar ref is null");
      return;
    }
    snackRef.current.open(message);
  };

  const closeSnackbar = (): void => {
    if (!snackRef || !snackRef.current) {
      console.error("Snackbar ref is null");
      return;
    }
    snackRef.current.close();
  };

  return (
    <DefaultPageTemplate>
      <CardItem id="magic-card-item">
        <TextField
          label="Card Code"
          variant="filled"
          autoComplete="off"
          onKeyDown={searchPress}
          onChange={handleTextFieldChange}
          value={textFieldValue}
        />
        <div id="card-box">
          <div id="card-image">
            {cardImage && <img src={cardImage} alt="" />}
          </div>
          <div id="card-info">
            {cardSetName && <h1>Set: {cardSetName}</h1>}
            {cardNormalPrice && <h1>Normal: {cardNormalPrice}</h1>}
            {cardFoilPrice && <h1>Foil: {cardFoilPrice}</h1>}
            {cardEtchedPrice && <h1>Etched: {cardEtchedPrice}</h1>}
          </div>
        </div>
        <Snack autoHideDuration={3000} severity="error" ref={snackRef} />
      </CardItem>
    </DefaultPageTemplate>
  );
};

export default MagicPriceView;
