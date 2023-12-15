import "./App.css";

const App = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className="app-container">
      <div className="names-list">
        <h2>List of Names:</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
