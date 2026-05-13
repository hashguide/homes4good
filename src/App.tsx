import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Analytics from './pages/Analytics'
import Home from './pages/Home'

function App() {
    return (
        <BrowserRouter>
            <div id="root" className="min-h-screen flex flex-col">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
