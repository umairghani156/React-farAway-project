import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { ListItems } from './components/ListItems';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Packaginlist } from './components/PackagingList';

function App() {
  const [count , setCount] = useState(0)
  const [item , setItem] = useState([
  ])
  return (
    <div>
     <Logo/>
     <Form item={item} setItem={setItem}/>
     <Packaginlist item = {item} setItem={setItem} count={count} setCount={setCount}/>
     <Footer item={item} count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
