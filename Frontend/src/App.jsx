import {BrowserRouter, Route, Routes} from "react-router-dom"
import User from "./component/User";
import Create from "./component/Create";
import Update from "./component/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<User/>}/>
         <Route path="/create" element={<Create/>}/>
         <Route path="/update/:id" element={<Update />}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App