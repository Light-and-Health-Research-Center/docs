import EditPageButton from "./EditPageButton";

export default function EditPage({ link }) {
  return (
    <div>
      <h5>Edit</h5>
      <p className="lg:text-sm mb-2">See a typo? Did we miss something?</p>
      <EditPageButton link={link} />
    </div>
  );
}
