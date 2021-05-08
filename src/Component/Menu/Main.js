import React,{useState} from 'react';
import Menu from './menu';
import Category from './category';
import items from './Mdata';



function Main()
{
    const [menuItems,setMenuItems] = useState(items);
    const [categories,setCategories] = useState([]);

    const filterItems = category=>{
        if(category == 'All')
        {
            setMenuItems(items);
        }
        else
        {
            const newItems = items.filter((item)=>item.category === category)
            
            setMenuItems(newItems);
        }
         
    }


    return(
        <main>
            <h2>Our Menu</h2>
            <Category filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </main>
    )

}

export default Main;