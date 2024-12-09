
// import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';

function App() {

  return (
    <>
    <div className="min-h-screen bg-gray-100 w-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Welcome to Our Website</h1>
        <p className="mt-4 text-center">This is a sample content area. Your main content goes here.</p>
      </main>
    </div>
      
    </>
  )
}

export default App
