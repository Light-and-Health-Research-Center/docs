export function Reference({ num, children }) {
  return (
    <p className="text-sm">
      {num && <span className="font-bold mr-2">{num}.</span>}
      {children}
    </p>
  );
}

export function References({ children }) {
  return (
    <div className="bg-white-off p-2 rounded-md m-4 border">
      <h5>References:</h5>
      <div>{children}</div>
    </div>
  );
}
