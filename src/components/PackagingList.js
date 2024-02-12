import { BottomButtons } from "./BottomButtons"
import { ListItems } from "./ListItems"
import "./logo.css"
export const Packaginlist=({item, setItem, count, setCount}) =>{
    console.log("item", item);
    return(
        <div style={{backgroundColor:"#4c3423", height:"72vh", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
         <ListItems item={item} setItem={setItem} count={count} setCount={setCount}/>
         <BottomButtons item={item} setItem={setItem} count={count} setCount={setCount}/>
        </div>
    )
}