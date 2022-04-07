import { getAuth } from "firebase/auth";
import app from "./Firebase.init";
import './App.css';

const auth = getAuth(app)
const getEmailBlur = event =>{
  console.log(event.target.value);
}
function App() {
  return (
    <div className="App">
      <form>
        <input onBlur={getEmailBlur} type="email" name="" id="" />
        <input type="password" name="" id="" />
      </form>

    </div>
  );
}

export default App;
