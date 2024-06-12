import React from 'react'
import {useState} from'react'
import './App.css'
 const App = () => {
   const Cell = ({filled,onClick,isDisable}) =>
     {
       return <button className={filled?'cell cell-activate' : 'cell'} onClick={onClick} disabled={isDisable} />
     }
     const [order,setOrder] = useState([])
    //  const [isDeactivating,setisDeactivating] = useState(false)

   const boxes = [
     [1,1,1],
     [1,0,1],
     [1,1,1]
   ]
   const deactivate=()=>
    {
   
      const timer = setInterval(()=>
      {
            setOrder((og)=>
            {
              const newOrder = og.slice()
              newOrder.pop()
              if(newOrder.length===0)
                {
                  clearInterval(timer);
                
                }
                return newOrder
            })
      },300)
    }
   const activate=(index)=>
    {
         const newOrder = [...order,index];
         setOrder(newOrder)
         console.log(newOrder)
         if(newOrder.length === boxes.flat(1).filter(Boolean).length)
          {
            deactivate()
          }
          return newOrder
    }
   return (
     <>
      <h1>Grid Lights</h1>
      <div className="wrapper">
       <div className="grid">
           {
             boxes.flat(1).map((val,index)=>
             {
                   return val ? <Cell key = {index} filled={order.includes(index)} onClick={()=>activate(index)} isDisable={order.includes(index)}/>: <span key={index}/> 
             })
           }
       </div>
       </div> 
     </>
   )
 }


export default App
