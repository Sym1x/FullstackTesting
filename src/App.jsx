import { ThemeProvider, ThemeToggle } from './components/Theme';
import UserList from './components/UserList'; 


function App() {
  return (
    <>
    <div>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </div>
    <div>
      <h1>TP - Appel API avec useEffect</h1> <UserList /> 
    </div>
    </>
  );
}

export default App;
