import './App.css';
import Filters  from './components/filters/Filters'
import Recommendations from './components/recommendations/Recommendations'

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1>Apps recommendation system</h1>            
                <Filters/>
                <Recommendations/>
            </div>
            
        </div>
    );
}

export default App;