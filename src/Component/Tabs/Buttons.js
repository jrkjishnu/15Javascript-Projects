import React from 'react';
export default function Buttons({data,filterItems}) {
    const ids = [...new Set(data.map((items)=>items.company))]
    return (
        <div>
            {

                ids.map((com)=>
                {
                    return <button onClick={()=>filterItems({com})}>{com}</button>

                })

            }
        </div>
    )
}
