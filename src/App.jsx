import Bienvenue from "./components/Bienvenue";
import Compteur from "./components/Compteur";
import Formulaire from "./components/Formulaire";
import ListeCourses from "./components/ListeCourses";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div>
        <Bienvenue nom="Amir" />
        <Compteur />
        <Formulaire />
        <ListeCourses />
      </div>
      <div className="App">
        <TodoApp />
      </div>
    </>
  );
}

export default App;