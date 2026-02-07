export default function Cards({data,url}){
    
    return(
        <div className="w-[200px] rounded-2xl">
            <div>
                <img className="w-fit rounded-t-2xl" src={`${url}${data.poster_path}`} alt="" />
            </div> 
        </div>
    )
}