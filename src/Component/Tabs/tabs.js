import React from 'react'
export default function Tabs({data}) {

    return (
        <div>
            <h1>Experience</h1>
            <section>
                {
                    console.log(data),
                    data.map((item)=>
                    {
                        const {id,title,duties,dates} = item;
                        console.log(item.title);
                        return(
                            <article>
                                 <h2>{title}</h2>
                                 <h5>{dates}</h5>
                                 {duties.map((dutie)=>
                                 {
                                     return <p>{dutie}</p>
                                 })}
                                 

                            </article>
                           
                        )
                    })
                }
            </section>
        </div>
    )
}
