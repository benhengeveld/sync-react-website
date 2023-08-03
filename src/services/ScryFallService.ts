import { ScryfallCardData } from "models/ScryfallCardData";
import { Observable, from, map, switchMap } from "rxjs";

export default class ScryFallService {
  getCardInfo(setCode: string, cardNum: string): Observable<ScryfallCardData> {
    const baseUrl = "https://api.scryfall.com/cards";
    const requestUrl = `${baseUrl}/${setCode.toLowerCase()}/${cardNum.replace(
      /^0+/,
      ""
    )}`;

    return from(fetch(requestUrl)).pipe(
      switchMap((response: Response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok: " + response.status);
        }

        return response.json();
      }),
      map((data: ScryfallCardData) => {
        return data;
      })
    );
  }
}
