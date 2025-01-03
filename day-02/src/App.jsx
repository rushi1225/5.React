
import './App.css'
import User from './component/User';
import Sports from './component/Sports'
import NewSport from './component/NewSport';

function App() {
  const firstName ="Rushikesh";
  const lastName ="B"

return (
  <>
    <h1>Sports </h1>
{/* <Sports></Sports> */}

<User fName={firstName} lName={lastName}></User>


{/* NewSport.jsx file */}
<NewSport></NewSport>
  </>
)
}

export default App
