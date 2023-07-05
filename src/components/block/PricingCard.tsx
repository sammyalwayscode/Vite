import { AiFillEye } from "react-icons/ai";
import imgg from "../../assets/canva.png";
import { useQuery } from "@tanstack/react-query";
import { getAllproducts, getOneBook } from "../../utils/ApiCalls";
import { useParams } from "react-router-dom";

const PricingCard = () => {
  const getAllBooks = useQuery({
    queryFn: getAllproducts,
    queryKey: ["myBooks"],
  });

  const { id } = useParams();

  //get one book
  const getOneBooks = useQuery({
    queryFn: () => getOneBook(id),
    queryKey: ["SingleBook"],
  });

  const bookFn = getAllBooks?.data?.data;

  return (
    <div className="w-full flex justify-center">
      <div className=" w-11/12 flex justify-center flex-wrap">
        {bookFn?.map((el: any) => (
          <div
            className=" h-60 w-[276px]   rounded-t-md m-3"
            onClick={() => {
              getOneBooks;
              console.log(`single book gotten`);
            }}
          >
            <div className=" h-52 w-full  rounded-md">
              <img
                src={el.coverImage}
                alt=""
                className=" object-cover h-52 w-full rounded-md"
              />
            </div>
            <div className=" h-8  flex items-center justify-between">
              <div className=" flex items-center">
                <div className=" mx-2 h-6 w-6 rounded-full bg-slate-300 flex justify-center items-center font-extrabold text-sm">
                  {" "}
                  {el.authorImage}
                </div>
                <label className=" text-sm font-bold"> {el.author} </label>
              </div>
              <div className=" flex items-center">
                <AiFillEye />
                <span className=" mx-1 font-medium text-sm">11</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
