import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
            }}>
                <Box sx={{
                    width: { xs: '90%', md: '75%' },
                    maxWidth: '1200px',
                    py: 4, // Optional: Add vertical padding
                }}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            {/* Add other routes here */}
                            {/* Example: <Route path="/projects" element={<ProjectsPage />} /> */}
                        </Routes>
                    </Router>
                </Box>
            </Box>
        </div>
    );
}

export default App;