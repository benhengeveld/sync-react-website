import { ReactNode } from "react";
import "./CardItem.scss";

const CardItem = ({
  id = "",
  children,
}: {
  id?: string;
  children?: ReactNode;
}) => {
  return (
    <div className="card" id={id}>
      {children}
    </div>
  );
};

export default CardItem;
