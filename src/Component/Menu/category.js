import data from './Mdata';
const Category = ({filterItems})=>
{

    const cat = ['All',...new Set(data.map((item)=>item.category))];
    console.log(cat);
    return(
        <div className="cate"> 
        {
             cat.map((item)=>
             {
                 console.log(item);
                return <button onClick={()=>{filterItems(item)}}>{item}</button>
             }) 
                        
        } 
        
        </div>
    )
}

export default Category; 