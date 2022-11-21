import './App.css';
import { Toaster } from 'react-hot-toast';

import Header from './components/header';
import Footer from './components/footer';
import RoutesMain from './routes';

function App() {
    return (
        <div className="App">
            <Header />
            <RoutesMain />
            <Footer />
            <Toaster />
        </div>
    );
}

export default App;
