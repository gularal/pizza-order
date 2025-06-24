import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Description from './components/Description';
import Order from './components/Order';
function App() {


  return (
    <>
    <Header />
    <Description />
    <Order />
    </>
  )
}

export default App
