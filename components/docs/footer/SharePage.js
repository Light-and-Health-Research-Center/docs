import ShareSocials from "./ShareSocials";

export default function SharePage({ links }) {
  return (
    <div>
      <h5>Share</h5>
      <p className="text-xs mb-2">Help us spread this information.</p>
      <ShareSocials links={links} />
    </div>
  );
}
