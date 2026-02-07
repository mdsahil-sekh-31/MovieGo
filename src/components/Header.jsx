import user from "../assets/user.png"
export default function Header(){
    return(
        <div className="flex justify-between bg-[#0A0A0C] w-full h-[80px]">
            
            <div className="font-extrabold text-xl md:text-3xl lg:text-5xl m my-auto ml-10 text-[#E50914] ">MovieGo</div>
            <div className="my-auto mr-10 bg-white">
                <img className="w-10" src={user} alt="user logo" />
            </div>
        </div>
    )
}