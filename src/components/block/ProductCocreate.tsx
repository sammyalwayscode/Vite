import imgg from "../../assets/cocreate.png";

const ProductCocreate = () => {
  return (
    <main className=" h-[120vh] w-full bg-violet-300 flex justify-center items-center ">
      <div className=" w-10/12 flex items-center  ">
        <section className=" w-[470px] ">
          <b className=" text-lg">Co-create with ease</b>
          <p className=" text-base my-4">
            Figma brings together powerful <b>design</b> tools with multiplayer
            collaboration, allowing teams to explore ideas while capturing
            quality feedback in real time—or anytime.
          </p>
          <p className="underline cursor-pointer">Explore design features</p>
        </section>
        <section className="  w-auto flex justify-end">
          <img src={imgg} alt="Image" className=" w-10/12 " />
        </section>
      </div>
    </main>
  );
};

export default ProductCocreate;
