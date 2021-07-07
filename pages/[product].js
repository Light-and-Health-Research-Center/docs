import SideBar from "../components/docs/SideBar";
import TopBar from "../components/docs/TopBar";
import { getProductPages } from "../lib/docs";

export default function product() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <main className="flex-grow">
          <TopBar />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({}) {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const paths = getProductPages();
  return {
    paths,
    fallback: false,
  };
}
