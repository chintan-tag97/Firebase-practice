import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/pages2/Design";
import DataTable from "./components/pages1/Datatable";
import TodoContext from "./components/pages1/TodoContext";
import About from "./components/pages2/About";
import Service from "./components/pages2/Service";
import Contact from "./components/pages2/Contact";
import Login from "./components/pages2/Login";
// import Protected from "./components/route/Protected";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route element={<Protected />}>
        <Route path="login" element={<Login />} />
        </Route>  */}
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Design />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/todocontext" element={<TodoContext />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
