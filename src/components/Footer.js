export const Footer = ({item, count, setCount}) =>{
    console.log("footer",typeof item.length);
     const totalPacked = (count * 100) / item.length;
     console.log(totalPacked);
  
    return(
        <div style={{textAlign:"center", backgroundColor:"#67c1a3", paddingTop:"14px", paddingBottom:"5px"}}>
            <p style={{backgroundColor:"#67c1a3", margin:"0" , fontSize:"14px", fontWeight:"500", color:"#4b604a"}}><i>You have {item.length} items on your list, and you already packed {count} ({!totalPacked ? "0": Math.floor(totalPacked)}%)</i></p>
        </div>
    )
}