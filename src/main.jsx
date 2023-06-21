import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './router/routes'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <head>
   <link
    rel="stylesheet"
    href="https://bootswatch.com/5/flatly/bootstrap.min.css"
   />
   <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
   />
  </head>
  <Routes />
 </React.StrictMode>
)
