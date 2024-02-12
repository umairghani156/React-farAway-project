import "./logo.css"
export const BottomButtons = ({item, setItem, count, setCount}) =>{
    const clearAllItems = ()=>{
       setItem([])
       count = 0
       setCount(count)
    }
    const sortingItems = (val) =>{
        console.log("hello", val);
        if(val == "1"){

          const check =  item.sort((a, b) => a.quantity > b.quantity ? 1 : -1); 
          console.log("chek", check);
          const check2 = [...item]
           setItem(check2)
        }
         if(val == "2"){
            const check =  item.sort((a, b) => a.userText.localeCompare(b.userText)); 
            console.log("chek", check);
            const check2 = [...item]
             setItem(check2)
        }
        if(val == "3"){
            const check =  item.sort((a, b) => a.packed === b.packed ? 0 : a.packed? -1 : 1); 
            console.log("chek", check);
            const check2 = [...item]
             setItem(check2)
        }
        
    }
    return(
        <div className="bottomSelectList" style={{display:"flex", justifyContent:"center", marginBottom:"20px", gap:"10px"}}>
            <select onChange={(e)=> sortingItems(e.target.value)} name="cars" className="cars">
                <option className="option1" value="1" >SORT BY INPUT ORDER</option>
                <option value="2">SORT BY DESCRIPTION</option>
                <option value="3">SORT BY PACKED STATUS</option>
            </select>
            <button className="btmBtn" onClick={clearAllItems}>CLEAR LIST</button>
        </div>
    )
}