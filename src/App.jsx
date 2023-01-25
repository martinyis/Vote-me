import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePoll from './components/CreatePoll';
import NotFound from './components/NotFound';
import TrendingPolls from './components/TrendingPolls';
import YourPolls from './components/YourPolls';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<TrendingPolls />} />
            <Route path="createpoll" element={<CreatePoll />} />
            <Route path="yourpolls" element={<YourPolls />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
