import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header";

function App() {
    return (
        <Router basename={process.env.REACT_APP_BASE_PATH}>
            <div className="App">
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        width: { xs: '90%', md: '70%' },
                        maxWidth: '1150px',
                        pb: 4,
                        flexGrow: 1,
                        margin: '0 auto',
                    }}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            {/*TBD: Disable for implementation*/}
                            {/*<Route path="/Projects" element={<ProjectsPage />} />*/}
                        </Routes>
                    </Box>
                    {/*<Footer /> /!* Now inside <Router> *!/*/}
                </Box>
            </div>
        </Router>
    );
}

export default App;