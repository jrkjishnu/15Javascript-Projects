import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from './tabs';
import Buttons from './Buttons';
let url = "https://course-api.com/react-tabs-project";
export default function Main() {


    const [data,setData] = useState([]);
    const [btns,setBtns] = useState([]);
    const filterItems = id=>{
        const abc = data.filter((item)=>console.log(id));
        const newItems = btns.filter((item)=>item.company === id.com);
        setData(newItems);
    }
    useEffect(()=>
    {
        axios.get('https://course-api.com/react-tabs-project').then((res)=>
        {
            setData(res.data);
            setBtns(res.data);
        })
     
    },[]);


    return (
        <div>
            <Tabs data={data} />
            <Buttons data={btns} filterItems={filterItems}/>
        </div>
    )
}
