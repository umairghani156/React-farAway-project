import "./logo.css"
export const ListItems = ({item, setItem, count, setCount}) =>{
    console.log("ListItem",item);
    return(
        <div className="listItems">
                {
                    item.map((singleItem, index)=> (
                      <Item singleItem={singleItem} indx={index} setItem={setItem} itemList={item} count={count} setCount={setCount}/>
                 ))
                }
           
        </div>
        
    )
}

const Item = ({singleItem, setItem, indx, itemList, count, setCount}) =>{
    console.log("singleItem", singleItem);
    if(singleItem){

    

    const checkBoxhandler = (packedValue, index) =>{
        const cvtIntoSpreadToPush = [...itemList];
        cvtIntoSpreadToPush[indx].packed = !packedValue;
        setItem(cvtIntoSpreadToPush)
        setCount(count + 1)
    }
    const deletePackingItem = (index) => {
        console.log("Running", index);
        const check = [...itemList]
        console.log(check);
       const myCheck =  check.filter((val, ind) => ind !== index)
       console.log("myCheck", myCheck);
       setItem(myCheck)
        setCount(count - 1)
    }
    return(
        <div className="listPar">

        <input  onChange={()=> checkBoxhandler(singleItem.packed, indx)} type="checkbox" checked={singleItem.packed}/>
        <p style={{color:"#b9a582", textDecoration: singleItem.packed? "line-through": "none"}}>{singleItem.quantity} {singleItem.userText}</p>
        <button className="dltBtn" onClick={() => deletePackingItem(indx)} style={{border:"none", fontSize:"16px", color:"#ea0402", fontWeight:"500",paddingTop:"3px", paddingBottom:"0"}}>X</button>
     </div>
    )
    }
}
