import { UserProvider } from './components/UserProvider';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifications';
import NotificationCounter from './components/NotificationCounter';

function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: 'Arial', padding: 20 }}>
        <h1>lil application</h1>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </div>
    </UserProvider>
  );
}

export default App;
