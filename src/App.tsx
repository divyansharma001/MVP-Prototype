import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Templates from './pages/Templates';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import { ToastProvider } from './components/UI/Toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { WebsiteProvider } from './contexts/WebsiteContext'; 

function App() {
  return (
       <ThemeProvider>
        <WebsiteProvider>

    <ToastProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-100">
          <Routes>
            {/* Route for the homepage, which does not use the main layout */}
            <Route path="/" element={<Home />} />
            <Route path="/preview" element={<Preview />} /> 
            
            {/* Routes for the rest of the app, which use the main layout */}
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/builder" element={<Builder />} />                                                            
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
    </WebsiteProvider>
    </ThemeProvider>
  );
}

export default App;