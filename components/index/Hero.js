import Books from "../undraw/Books";

export default function Hero() {
  return (
    <section className="p-4 md:flex flex-row-reverse gap-16 justify-between md:p-12 md:mx-4 lg:mx-12">
      <div className="content-center w-auto md:w-2/4 md:flex relative">
        <div className="w-3/6 sm:w-2/6 md:w-auto m-auto overflow-hidden relative">
          <Books />
        </div>
      </div>
      <div className="md:flex">
        <div className="md:m-auto md:mt-12">
          <h5 className="text-barbiePink-100 w-2/4">docs.light-health.org</h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Light and Health Docs
          </h1>
          <p>Choose a module below to get started reading its documentation.</p>
        </div>
      </div>
    </section>
  );
}
