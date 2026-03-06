import { Link } from "react-router";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
export default function SeatUI() {
  const booking=useSelector((state)=> state.moviedata.currentBooking)
    const { id } = useParams()
    console.log(booking);
  const seats = [
    { row: "A", col: 1 },{ row: "A", col: 2 },{ row: "A", col: 3 },{ row: "A", col: 4 },{ row: "A", col: 5 },{ row: "A", col: 6 },{ row: "A", col: 7 },{ row: "A", col: 8 },{ row: "A", col: 9 },{ row: "A", col: 10 },{ row: "A", col: 11},{ row: "A", col: 12 },
    { row: "B", col: 1 },{ row: "B", col: 2 },{ row: "B", col: 3 },{ row: "C", col: 4 },{ row: "C", col: 5 },{ row: "C", col: 6 },{ row: "B", col: 7 },{ row: "B", col: 8 },{ row: "B", col: 9 },{ row: "C", col: 10 },{ row: "C", col: 11 },{ row: "C", col: 12 },
    { row: "C", col: 1 },{ row: "C", col: 2 },{ row: "C", col: 3 },{ row: "C", col: 4 },{ row: "C", col: 5 },{ row: "C", col: 6 },{ row: "C", col: 7 },{ row: "C", col: 8 },{ row: "C", col: 9 },{ row: "C", col: 10 },{ row: "C", col: 12 },{ row: "C", col: 14},
    { row: "D", col: 1 },{ row: "D", col: 2 },{ row: "D", col: 3 },{ row: "D", col: 4 },{ row: "D", col: 5 },{ row: "D", col: 6 },{ row: "D", col: 7 },{ row: "D", col: 8 },{ row: "D", col: 9 },{ row: "D", col: 10 },{ row: "D", col: 12 },{ row: "D", col: 14},
    { row: "E", col: 1 },{ row: "E", col: 2 },{ row: "E", col: 3 },{ row: "E", col: 4 },{ row: "E", col: 5 },{ row: "E", col: 6 },{ row: "E", col: 7 },{ row: "E", col: 8 },{ row: "E", col: 9 },{ row: "E", col: 10 },{ row: "E", col: 12 },{ row: "E", col: 14},

];
  console.log(id)
  return (
    <div className=" w-[80%] mx-auto mt-[30px]">
            <div className="cursor-pointer">
                <Link to={`/movieexplore/moviedetails/${id}`} >
                Back to Movie
                </Link>
            </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="grid grid-cols-12 gap-2">

        {seats.map((seat, index) => (
          <div
            key={index}
            className="w-8 h-8 bg-green-400 rounded flex items-center justify-center text-white rounded-t-xl"
          >
            {seat.row}{seat.col}
          </div>
        ))}

      </div>

    </div>

          





        </div>
  );
}