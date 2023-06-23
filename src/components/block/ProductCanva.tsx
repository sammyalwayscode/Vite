import imgg from "../../assets/canva.png";

const ProductCanva = () => {
  return (
    <main className=" h-[120vh] w-full flex justify-center items-center ">
      <div className=" w-11/12 flex items-center  ">
        <section className="  w-auto flex  mx-7 ">
          <img src={imgg} alt="Image" />
        </section>
        <section className=" w-[250px] mx-10">
          <b className=" text-lg">
            Bring your designs to life— without leaving the canvas
          </b>
          <p className=" text-base my-4">
            Create realistic, no-code interactions with <b>prototyping</b>. Fine
            tune every element of your user experience by iterating and testing
            in a single tool.
          </p>
          <p className="underline cursor-pointer">
            Learn more about prototyping
          </p>
        </section>
      </div>
    </main>
  );
};

export default ProductCanva;
