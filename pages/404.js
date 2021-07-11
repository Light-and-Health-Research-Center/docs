import Head from "next/head";
import Logistics from "../components/undraw/Logistics";
import TopBar from "../components/index/TopBar";

export default function Custom404() {
  return (
    <div className="h-screen">
      <TopBar />
      <div className="flex flex-wrap content-center m-8">
        <div className="lg:flex mx-auto">
          <div className="lg:m-8">
            <Logistics />
          </div>
          <div className="xs:w-96 lg:my-auto lg:m-8">
            <div className="border-b mb-4">
              <h1 className="text-7xl">Uh oh...</h1>
              <h4>It looks like this page doesnt exist</h4>
            </div>
            <div>
              <p>
                If you think the problem is on our end, please{" "}
                <a
                  className="text-vividCerulean-100 hover:underline focus:outline-none focus-visible:underline active:text-vividCerulean-80"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Light-and-Health-Research-Center/docs/issues/new"
                >
                  submit an issue on Github
                </a>{" "}
                or{" "}
                <a
                  className="text-vividCerulean-100 hover:underline focus:outline-none focus-visible:underline active:text-vividCerulean-80"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:michael.morrison@mountsinai.org"
                >
                  {" "}
                  send us an email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
