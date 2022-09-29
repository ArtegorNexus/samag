import axios from "axios";
import Header from "./components/Header";
import React from "react";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const [itemsDrawer, setItemsDrawer] = React.useState([]);
  const [itemsLiked, setItemsLiked] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://62fe0b08a85c52ee482e5644.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://62fe0b08a85c52ee482e5644.mockapi.io/cart').then(res => {
      setItemsDrawer(res.data);
    })
    axios.get('https://62fe0b08a85c52ee482e5644.mockapi.io/liked').then(res => {
      setItemsLiked(res.data);
    })
  }, [])
  
  const itemsToDrawer1 = (obj) => {
    axios.post('https://62fe0b08a85c52ee482e5644.mockapi.io/cart', obj)
    setItemsDrawer(prev => [...prev, obj])
  }
  const itemsToLiked1 = (obj) => {
    setItemsLiked(prev => [...prev, obj])
    axios.post('https://62fe0b08a85c52ee482e5644.mockapi.io/liked', obj)
  }
  const onRemoveFromDrawer = (id) => {
    setItemsDrawer(prev => prev.filter(item => item.id !== id))
    axios.delete(`https://62fe0b08a85c52ee482e5644.mockapi.io/cart/${id}`);
  }
  const setDrawerTrue = () => {
    setIsDrawer(true)
  }
  const setDrawerFalse = () => {
    setIsDrawer(false)
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  } 

  return (
    <div className="wrapper">
      <Header isDrawerOpened={setDrawerTrue} />
      {isDrawer ? <Drawer isDrawerOpened={setDrawerFalse} itemsFromAppToDrawer={itemsDrawer} onRemove={onRemoveFromDrawer} /> : null}

      <Routes>
        <Route path="/" element={<Home items={items} searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} itemsToDrawer1={itemsToDrawer1} itemsToLiked1={itemsToLiked1} />}></Route>
        <Route path="/liked" element={<Liked items={itemsLiked} itemsToDrawer1={itemsToDrawer1} itemsToLiked1={itemsToLiked1}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
