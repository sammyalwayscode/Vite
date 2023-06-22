import { FiPenTool } from "react-icons/fi";
import { TbBrush, TbCodeCircle2 } from "react-icons/tb";

const Landing = () => {
  return (
    <div className=" w-full  flex justify-center mb-20 ">
      <div className=" w-11/12 h-full">
        <div className="text-7xl leading-tight font-semibold mb-7">
          <div className=" flex items-center ">
            How you {""}{" "}
            <b className=" pl-2 text-blue-500 flex items-center">
              {" "}
              design <FiPenTool />,{" "}
            </b>
            <b className=" pl-2 text-violet-600 flex items-center">
              align
              <TbBrush />
            </b>
          </div>
          <div className="flex items-center">
            and{" "}
            <b className=" pl-2 text-green-600 flex items-center">
              build <TbCodeCircle2 />{" "}
            </b>
            matters.
          </div>
          <div>Do it together with Figma.</div>
        </div>
        <button className="px-24 py-4 bg-black text-white text-lg font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
