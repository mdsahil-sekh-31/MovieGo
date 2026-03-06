import date from "../assets/date.png"
import timer from "../assets/timer.png"
import pricing from "../assets/pricing.png"
import persons from "../assets/persons.png"
import screen from "../assets/screen.png"
import { Link } from "react-router"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import {setTime, setPrice} from "./slice/movieinfo"
export default function Timebar({data,time,Screen,price}){
        const dispatch = useDispatch();
        
        
    const { id } = useParams()
    
    return(
        <div className="px-3 sm:px-5 py-2 border my-3 border-gray-300 rounded-lg shadow-sm">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 w-full">

                <div className="flex flex-wrap gap-4 sm:gap-6">

                    {/* Date */}
                    <div className="flex items-center">
                        <img src={date} className="w-3 sm:w-4 md:w-5" alt="" />
                        <div className="px-2">
                            <p className="text-[10px] sm:text-[11px] text-gray-500">Date</p>
                            <p className="text-[11px] sm:text-[12px] md:text-sm font-medium">{data}</p>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="flex items-center">
                        <img src={timer} className="w-3 sm:w-4 md:w-5" alt="" />
                        <div className="px-2">
                            <p className="text-[10px] sm:text-[11px] text-gray-500">Time</p>
                            <p className="text-[11px] sm:text-[12px] md:text-sm font-medium">{time}</p>
                        </div>
                    </div>

                    {/* Screen */}
                    <div className="flex items-center">
                        <img src={screen} className="w-3 sm:w-4 md:w-5" alt="" />
                        <div className="px-2">
                            <p className="text-[10px] sm:text-[11px] text-gray-500">Screen</p>
                            <p className="text-[11px] sm:text-[12px] md:text-sm font-medium">{Screen}</p>
                        </div>
                    </div>

                    {/* Available */}
                    <div className="flex items-center">
                        <img src={persons} className="w-3 sm:w-4 md:w-5" alt="" />
                        <div className="px-2">
                            <p className="text-[10px] sm:text-[11px] text-gray-500">Available</p>
                            <p className="text-[11px] sm:text-[12px] md:text-sm font-medium"></p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center">
                        <img src={pricing} className="w-3 sm:w-4 md:w-5" alt="" />
                        <div className="px-2">
                            <p className="text-[10px] sm:text-[11px] text-gray-500">Price</p>
                            <p className="text-[11px] sm:text-[12px] md:text-sm font-medium">{price}</p>
                        </div>
                    </div>

                </div>

                {/* Button */}
                <div className="bg-black px-3 py-1 sm:px-4 sm:py-2 rounded-md cursor-pointer text-center w-fit" onClick={() => {dispatch(setTime(time)); dispatch(setPrice(price));}}>
                    <p className="text-white text-[10px] sm:text-[11px] md:text-sm font-medium">
                         <Link to={`/movieexplore/moviedetails/${id}/seat-payment`} >
                          Select Seats
                          </Link>
                       
                    </p>
                </div>

            </div>
        </div>
    )
}