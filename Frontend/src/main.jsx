import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux'
import store from './Redux/Store/Store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>

)
