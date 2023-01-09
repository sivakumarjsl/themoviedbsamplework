import configureStore from "./redux/store/configureStore";
import AppRoute from "./routes/appRoutes";
import { Provider } from "react-redux";
import './App.css';


const store = configureStore();


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
