import NewsItem from "./NewsItem";

const News=(props)=>{
   let newsElement =  props.news.map(n=><NewsItem title={n.title}/>);

   return(
       <div>{newsElement}</div>
   )
}
export default News;