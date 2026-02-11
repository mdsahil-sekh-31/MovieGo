export default function Cards({data,url}){
    
    return(
        <div className="w-[200px] rounded-2xl mt-[20px]">
            <div>
                <img className="w-fit rounded-t-2xl object-cover" src={`${url}${data.poster_path}`} alt="" />

            </div> 
            <div>
                <p>{data.title}</p>
            </div>
        </div>
    )
}