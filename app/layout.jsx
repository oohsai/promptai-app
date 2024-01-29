import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Share AI Prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <div>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">{children}</main>
    </div>
  );
};
export default Rootlayout;
