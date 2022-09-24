import Router from "../src/router"
import {userProvider} from "./context/UserContext"

function App() {
  return (
    <userProvider>
    <div>
      <Router />
    </div>
    </userProvider>

  );
}

export default App;
