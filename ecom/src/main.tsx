import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Wwe from './components/Wwe.tsx'
import Traditional from './components/Traditional.tsx'
import Ethnic from './components/Ethnic.tsx'
import Review from './components/Review.tsx'
import Shop from './components/Shop.tsx'
import PostFetch from './components/PostFetch.tsx'
import Checkout from './components/Checkout.tsx'
import Category from './components/Category.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>,
)
