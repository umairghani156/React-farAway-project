import logoImg from "./logoFaraway.PNG"
import "./logo.css"
export const Logo = ()=>{
   return (
    <div className="logoBar">
     <img  className="logoImage"src={logoImg} alt=""/>
    </div>
   )
}