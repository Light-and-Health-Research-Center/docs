import Card from "./Card";
import img from "../../public/img/docs/cscalc/card.png";

export default function CardSection({ data }) {
  return (
    <section className="bg-white-off p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {data.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </section>
  );
}
