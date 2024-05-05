import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header.jsx'
import Utama from './components/utama.jsx'
import Contoh from './components/contoh.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/*<App />*/}
  <Header />
  <Utama />
  <Contoh />
  </React.StrictMode>,
)
