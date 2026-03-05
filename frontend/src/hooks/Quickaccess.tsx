import axios from "axios";
import { useState, useEffect } from "react";
import type { IQuickAccess } from "../../../shared/interface";
import { QuickAccessCard } from "../models/accessCard/QuickAccessCard";
import { QuickaccessCarousel } from "../models/carousels/QuickaccessCarousel";

export function QuickAccess() {
  const [access, setAccess] = useState<IQuickAccess[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<IQuickAccess[]>(
          "http://localhost:4000/api/quickaccess",
        );
        setAccess(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="mr-1.25">
      <QuickaccessCarousel>
        {access.map((card, i) => (
          <QuickAccessCard
            key={i}
            title={card.title}
            img={card.img}
            description={card.description}
            button_text={card.button_text}
          />
        ))}
      </QuickaccessCarousel>
    </section>
  );
}
