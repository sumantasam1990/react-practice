import './App.css';
import Articles from "./components/Articles";

function App() {
  return (
    <div className="container">
      <div className="row">

          <Articles name="Today's posts" />
      </div>
    </div>
  );
}

export default App;
