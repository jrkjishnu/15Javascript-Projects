import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children})=>
{
  const [isSidebarOpen,setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
  const [location,setLocation] = useState({});
  const [textValue,setTextValue] = useState('');
  const [page,setPage] = useState({page:'',links:[]});
  const openSidebar =()=>
  {
    setIsSidebarOpen(true);
  }

  const closeSidebar =()=>
  {
    setIsSidebarOpen(false);
  }

  const openSubmenu =(text,coordinates,textcontent)=>
  {

    const page = sublinks.find((item)=>item.page === textcontent.toLowerCase());
    setPage(page);
    console.log(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
    setTextValue(textcontent);
  }

  const closeSubmenu =()=>
  {
    setIsSubmenuOpen(false)
  }





  return <AppContext.Provider value={{
    page,isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar,location,textValue
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = ()=>
{
  return useContext(AppContext);
}

//export {AppContext,AppProvider}