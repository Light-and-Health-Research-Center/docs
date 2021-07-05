import Card from "./Card";
import img from "../../public/img/docs/cscalc/card.png";

export default function CardSection({ data }) {
  return (
    <section className="bg-white-off p-4 md:p-8 lg:p-12">
      <div className="text-center">
        <h6 className="pb-4 md:pb-8 lg:pb-12">Choose a Product</h6>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {data.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
