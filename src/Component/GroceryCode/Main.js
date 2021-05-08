import React,{useState,useEffect} from 'react';
import List from './List';
import Alert from './Alert';
export default function Main() {


    const getLocatStorage = ()=>
    {
        let list = localStorage.getItem('list');
        if(list)
            return JSON.parse(localStorage.getItem('list'));
        else
            return []
    }
    const [name,setName] = useState('');
    const [list,setList] = useState(getLocatStorage());
    const [isEditing,setIsEditing] = useState(false);
    const [editId,setEditId] = useState(null);
    const [alert,setAlert] = useState({show:false,msg:''});

    const showAlert = (show=false,msg='')=>
    {
        setAlert({show,msg});
    }
const handleSubmit = (e)=>
{
    
    console.log('hii');
    e.preventDefault();

    if(!name)
    {
                //display alert
        showAlert(true,'Please Enter value');
    }
    else if(name && isEditing)
    {
        setList(list.map((item)=>
        {
            if(item.id === editId)
            {
                return {...item,title:name}
            }
            return item;
        }))
        setIsEditing(false);
        setName('');
        setEditId(false); 

    }
    else
    {
        showAlert(true,'Item Added');
        const newItem = {id: new Date().getTime().toString(),
        title:name}
        setList([...list,newItem]);
        setName('');
    }
    
  
}
const clearall = ()=>
{
    showAlert(true,'empty list');
    setList([]);
    setName('');
}


const removeItem = (id)=>
{
    showAlert(true,'Item Deleted');
    setList(list.filter((item)=>item.id !== id));
}

const editItem = (id)=>
{
    const currentItem = list.find((item)=>item.id === id);
    console.log(currentItem);
    setIsEditing(true);
    setEditId(id);
    setName(currentItem.title);
}

useEffect(()=>
{
    localStorage.setItem('list',JSON.stringify(list));
},[list])
    return (
        <section className="container">
            <form onSubmit={handleSubmit}>
            {alert.show && <Alert alert ={alert} removeAlert={showAlert} list={list}/>}
            <h3>Grocery Bud</h3>
            <input type="text" name="" id="" placeholder="eg.Eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type="submit">{isEditing?'Edit':'Submit'}</button>
            </form>
            {list.length > 0 && (
                 <div className="container">
                 <List items={list} removeItem={removeItem} editItem={editItem}/>
                 <button onClick={clearall}>Clear All</button>
             </div>
            )}
           
        </section>
    )
}
