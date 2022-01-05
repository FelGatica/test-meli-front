import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import ItemDetailScreen from './screens/ItemDetailScreen';
import ItemsScreen from "./screens/ItemsScreen";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchScreen />} />
        <Route exact path="/items" element={<ItemsScreen />} />
        <Route exact path="/items/:id" element={<ItemDetailScreen />} />
        <Route exact path="*" element={<SearchScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
