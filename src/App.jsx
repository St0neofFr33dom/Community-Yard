
import { useEffect } from 'react';

import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import useBrowserWidth from './hooks/useBrowserWidth';
import browserWidthContext from './context/browserWidthContext';

function App() {

    /*
        Make a get request to server for foodbanks
        Consider the time it takes for the get request and the google map api request.

        if requests are successful render the return with all the pages below, if not console error
    */
    useEffect(() => {
        // GET request using fetch inside useEffect React hook

        async function getFoodBanks() {
            const response = await fetch('http://localhost:3000/foodbanks')
            const data = await response.json(response);
            console.log(data);
        }
        
        getFoodBanks()
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
 
    
    //custom hook to determine screen size (stored in useContext)
    const desktop = useBrowserWidth(800);

    return (
        <browserWidthContext.Provider value={desktop}>
            <MapPage />
            {/* <LoginPage /> */}
        </browserWidthContext.Provider>
    );
}

export default App;
