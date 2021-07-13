import EditPage from "./EditPage";
import Feedback from "./Feedback";
import SharePage from "./SharePage";

export default function DocFooter({ data }) {
  console.log(data);
  return (
    <div className="border-t py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 rounded-lg bg-white-off justify-between px-4 py-2 border">
        <div className="mb-4 lg:mb-2">
          <SharePage links={data.links.socials} />
        </div>
        <div className="mb-4 lg:mb-2">
          <EditPage link={data.links.edit} />
        </div>
        <div className="mb-4 lg:mb-2">
          <Feedback link={data.links.issue} />
        </div>
      </div>
    </div>
  );
}
