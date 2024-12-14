import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import Sidebar from './components/shared/Sidebar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <Router>
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/update/:id" element={<UpdatePost />} />
          </Routes>
        </main>
      </div>
    </div>
    <Toaster />
  </Router>
  );
}

export default App;

