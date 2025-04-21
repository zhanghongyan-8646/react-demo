
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/global.scss'
import '@ant-design/v5-patch-for-react-19'; // react19兼容包

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}