import Books from "../undraw/Books";

function Hero() {
  return (
    <section className="p-4 md:flex md:flex-row gap-16 justify-between md:p-12">
      <div className="md:flex">
        <div className="md:m-auto md:mt-12">
          <h5 className="text-barbiePink-100 w-2/4">docs.light-health.org</h5>
          <h1>Light and Health Docs</h1>
          <p>
            Choose an application below to get started reading its
            documentation.
          </p>
        </div>
      </div>
      <div className=" content-center hidden md:flex w-2/4 relative">
        <div className="w-auto m-auto overflow-hidden relative">
          <Books />
        </div>
      </div>
    </section>
  );
}

export default Hero;
