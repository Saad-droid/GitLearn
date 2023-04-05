
export const getStaticProps=async()=>{
  const res= await fetch ("http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c6b81467acc245b8a69d728bf1350cc0")
  const data= await res.json();

   return{
    props:{
      data,
    }
   }
}
const  noabout=({data})=>{
  return <>
  <h2>sportsssssss</h2>
      <div className="">
        <div className="row">
      {data.articles.map((value) => {
        return (
          <div className="col-3">
            <div className="card" style={{ width: '18rem' ,height:'20'}}>
              <img src={value.urlToImage} className="card-img-top" alt=" "  style={{ height: '10rem' }} />
              <div className="card-body" >
                <h5 className="card-title">{value.title}</h5>
                <p  className="card-text" >{value.description}</p>
                <a href={value.url} className="btn btn-primary"> Read More</a>
              </div>
            </div>
          </div>
           )
      })}
       </div>
        </div>
  
  </>
}
export default about