import TaskList from "./components/TaskList";
import "./styles/App.css";

function App() {
  const noteApp = "https://img.icons8.com/external-bearicons-outline-color-bearicons/48/000000/external-notes-graphic-design-bearicons-outline-color-bearicons.png";

  return (
    <div className="App">
      {/* Evaluar si puedo componetizar el Logo*/}
      <div className="containerLogo">
        <img src={noteApp} alt="note icon" height={48}/>
      </div>
        <h1>Lista de Tareas</h1>
        <TaskList />
    </div>
  );
}

export default App;
