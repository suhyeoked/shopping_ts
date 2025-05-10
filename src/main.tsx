import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Detail from './component/detail.tsx'
import Page404 from './component/page404.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element ={<App/>}/>
        <Route path='/detail' element={<Detail />} />
        <Route path='*' element={<Page404 />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)