import { useState } from "react"
import Timebar from "./Timebar"
export default function Showtime_selection(){
    const[data,setData]=useState()
    const arr=[{
        time:"11.00 AM",
        screen: "Screen 1",
        price:"12"

    },{
        time:"02.30 PM",
        screen: "Screen 2",
        price: "15"
    },{
        time:"06.00 PM",
        screen: "Screen 3",
        price: "20"
    },{
        time:"09.30 PM",
        screen: "Screen 4",
        price: "30"
    },
]
    console.log(data)
    return(
        <div>
            <p>Select Showtime</p>
            <div>
                <input type="date"  onChange={(e)=>setData(e.target.value)}/>
            </div>
           <div>
                {data?.length ? (
                    arr.map((item, id) => (
                    <Timebar 
                        key={id}
                        data={data}
                        time={item.time}
                        Screen={item.screen}
                        price={item.price}
                    />
                    ))
                ) : null}
            </div>
        </div>
    )
}