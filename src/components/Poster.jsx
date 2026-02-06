import p from "../assets/p.png";

export default function Poster() {
  return (
    <div className="bg-[#0A0A0C]">
      <div className="w-full h-[650px] flex items-center  container mx-auto">
        <div className="flex-1 pl-[100px]">
          <div className="text-[#EDEDED] font-bold text-5xl max-w-[500px]">
            Book Movie Shows at Your Favourite Theatres Instantly
          </div>

          <div className="text-[#B5B5B5] font-medium text-xl mt-[25px] max-w-[600px]">
            Discover the latest blockbuster, exclusive shows, and seamless ticket booking —
            all in one magical platform
          </div>

          <div className="text-[#F5C518] font-bold text-6xl mt-[25px]">
            Hey! Why wait any longer?
          </div>
          <button className="text-white mt-8 font-medium text-2xl  bg-red-800 rounded-2xl px-5 py-1">Book Now</button>
        </div>

        
        <div className=" flex justify-end">
          <img
            src={p}
            alt=""
            className="
              max-w-[550px]
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
