export function Reference({ children }) {
  return <p className="text-sm">{children}</p>;
}

export function References({ children }) {
  return (
    <div className="bg-white-off p-2 rounded-md m-4 border ">
      <h5>References:</h5>
      <div>{children}</div>
    </div>
  );
}
