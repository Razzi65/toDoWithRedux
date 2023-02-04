import UseToDo from "@/custom hooks/useToDo"


const ToDoApp = () => {

    const {onChangeHandler, event, addHandler, addEvent} = UseToDo()

    return(
        <>
            <input onChange={(e)=>onChangeHandler(e)} type={"text"}/> {event} <br/>
            <button onClick={()=>addHandler()} >Add</button>
        <br/>
        {
            addEvent.map((items)=> {
               return ( 
               <div>
                <li>{items.item} </li> 
                </div>)
            })
        }
        

        </>

    )
}

export default ToDoApp