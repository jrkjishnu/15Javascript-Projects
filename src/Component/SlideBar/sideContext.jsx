import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=>
{
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isSideOpen,setIsSideOpen] = useState(false);

    const openSidebar = ()=>
    {
        setIsSideOpen(true);
    }
    const closeSidebar = ()=>
    {
        setIsSideOpen(false);
    }
    const openModal = ()=>
    {
        setIsModalOpen(true);
    }
    const closeModal = ()=>
    {
        setIsModalOpen(false);
    }




    return <AppContext.Provider value={{
        isModalOpen,isSideOpen,openSidebar,closeSidebar,openModal,closeModal
    }}>{children}</AppContext.Provider>
}

//hooks

export const useGlobalContext = ()=>
{
    return useContext(AppContext);
}

export {AppContext,AppProvider};