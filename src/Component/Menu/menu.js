
const Menu = ({items})=>
{
    return(
        <div className="containe">
            <h1>Our Menu</h1>
            <section>
                {
                    items.map((item,key)=>
                    {
                        return(
                        <article key={item.id}>
                           <img src={item.img} alt="No"/> 
                           <h2>{item.title}</h2>
                           <h5>{item.price}</h5>
                           <p>{item.desc}</p><hr />
                        </article>
                        )
                    })
                }
            </section>
        </div>

    )
}

export default Menu;


// {
//     mdata.map(item=>
//     {
        
//         if(btns.indexOf(item.category)===-1)
//         {
            
//             btns.push(item.category);
           
//             setButtons(btns);
//             console.log(btns);
                                 
//         }
//         btns.map((item)=>
//         {
//             return(
//                 <button>/8</button>
//             ) 
//         })
       
//     })
    
    
// }