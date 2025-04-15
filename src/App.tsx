import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/pages2/Design";
import DataTable from "./components/pages1/Datatable";
import TodoContext from "./components/pages1/TodoContext";
import About from "./components/pages2/About";
import Service from "./components/pages2/Service";
import Contact from "./components/pages2/Contact";
import Login from "./components/pages2/Login";
import Sigin from "./components/pages2/Sigin";
import Sidebar from "./components/pages2/Sidebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />
        <Route path="/" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/todocontext" element={<TodoContext />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
