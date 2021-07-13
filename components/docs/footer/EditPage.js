import EditPageButton from "./EditPageButton";

export default function EditPage({ link }) {
  return (
    <div className="">
      <h5>Edit</h5>
      <p className="text-xs mb-2">See a typo? Did we miss something?</p>
      <EditPageButton link={link} />
    </div>
  );
}
