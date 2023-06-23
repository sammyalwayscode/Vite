import imgg from "../../assets/product.png";

const ProductLanding = () => {
  return (
    <main className=" h-screen w-full flex justify-center items-center">
      <div className=" w-11/12 flex justify-center">
        <section className=" w-[550px] mx-6">
          <small className=" font-bold text-base">FIGMA DESIGN OVERVIEW</small>
          <p className=" text-[52px] font-bold leading-none py-7">
            Work together to build the best products
          </p>
          <p className=" w-[420px] mb-7">
            Explore design possibilities, build prototypes, and easily translate
            your work into code with Figma—a collaborative product development
            platform for teams.
          </p>
          <div>
            <button className=" text-white font-semibold mr-5">
              Get Started
            </button>
            <button className=" bg-transparent border-2 border-black font-bold">
              Contact Sales
            </button>
          </div>
        </section>
        <section className="mx-7">
          <img src={imgg} alt="" />
        </section>
      </div>
    </main>
  );
};

export default ProductLanding;
