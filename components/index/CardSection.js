import Card from "./Card";
import img from "../../public/img/docs/cscalc/card.png";

export default function CardSection({ data }) {
  return (
    <section className="bg-white-off p-4 md:p-8 lg:p-12">
      <div className="text-center">
        <h6 className="pb-4 md:pb-8 lg:pb-12">Modules</h6>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((card) => (
          <Card key={card.module_title} card={card} />
        ))}
      </div>
    </section>
  );
}
