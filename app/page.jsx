import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br />
        <br className=" max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          AI - Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quisquam
        necessitatibus, quasi sequi nihil reiciendis ipsam nobis rem
        voluptatibus tempore quidem, consequatur dolore doloribus? Saepe minima
        vero illum consectetur commodi.
      </p>
      <Feed />
    </section>
  );
};
export default Home;
