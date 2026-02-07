import popcorn2 from "../assets/popcorn2.jpg"
import { Link } from "react-router";
export default function Poster() {
//#0A0A0C
  return (
    <div className="bg-black">
      <div className="w-full h-[650px] flex items-center  container mx-auto  flex-wrap">
        <div className="flex-1 pl-[100px]">
          <div className="text-[#EDEDED] font-bold text-5xl max-w-[500px] animate-slide-up delay-1">
            Book Movie Shows at Your Favourite Theatres Instantly
          </div>

          <div className="text-[#B5B5B5] font-medium text-xl mt-[25px] max-w-[600px] animate-slide-up delay-2">
            Discover the latest blockbuster, exclusive shows, and seamless ticket booking —
            all in one magical platform
          </div>

          <div className="text-[#F5C518] font-bold text-6xl mt-[25px] animate-slide-up delay-3">
            Hey! Why wait any longer?
          </div>
          <Link to="/movies">
            <button className="text-white mt-8 font-medium text-2xl  bg-red-800 rounded-2xl px-5 py-1 cursor-pointer" >Explore Movies</button>
          </Link>
        </div>

        
        <div className=" flex justify-end">
          <img
            src={popcorn2}
            alt=""
            className="
               animate-slide-up delay-4 w-[600px] 
              rounded-2xl
              shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_120px_rgba(11,15,20,1)]
              [mask-image:radial-gradient(circle,black_75%,transparent_100%)]
              [-webkit-mask-image:radial-gradient(circle,black_75%,transparent_100%)]
            "
          />
        </div>

      </div>
    </div>
  );
}
