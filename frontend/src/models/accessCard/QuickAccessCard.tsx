import "./QuickAccessCard.css";
import { Link } from "react-router-dom";
import type {
  IQuickAccess,
  IButtonCardProps,
} from "../../../../shared/interface";

const ButtonCard = ({ text }: IButtonCardProps) => {
  return (
    <button className="recomendation-carousel-article-footer-button text-[#3483fa] font-bold text-sm">
      {text}
    </button>
  );
};

export const QuickAccessCard = ({
  title,
  img,
  description,
  button_text,
}: IQuickAccess) => {
  return (
    <article className="quickaccess-card p-5 text-black font-bold bg-[#FF0000] shrink-0 w-45.75 h-75 cursor-pointer">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold">
          {title}
        </h2>
      </div>
      <div className="recomendation-carousel-article-img flex text-center justify-center">
        <img src={img} alt="#" className="w-26.25 h-26.25" />
      </div>
      <div className="recomendation-carousel-article-title-ml text-center text-sm">
        <Link to="#">{description}</Link>
      </div>
      <div className="recomendation-carousel-article-footer">
        <div className="recomendation-carousel-article-footer-button-container bg-blue-100 text-center">
          <ButtonCard text={button_text} />
        </div>
      </div>
    </article>
  );
};
