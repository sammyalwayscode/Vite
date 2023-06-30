import { AiFillEye } from "react-icons/ai";

const PricingCard = () => {
  return (
    <div className=" h-60 w-[276px]  bg-emerald-100 rounded-t-md">
      <div className=" h-52 w-full bg-amber-400 rounded-md">
        <img src="" alt="" />
      </div>
      <div className=" flex">
        <div>
          <div>
            {" "}
            <img src="" alt="" />{" "}
          </div>
          <label>Olorunda Samuel</label>
        </div>
        <div className=" flex">
          <AiFillEye />
          <span>20</span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
