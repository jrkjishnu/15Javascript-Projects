import React, { useEffect } from 'react'

export default function Alert({alert,removeAlert,list}) {

    useEffect(()=>
    {
        const timeout = setTimeout(()=>
        {
            removeAlert()},2000)
            return () => clearTimeout(timeout);
    },[list]);
    return (
        <div>
            <h5>{alert.msg}</h5>
        </div>
    )
}
