import TestComponents from './components/testcomponents/TestComponents';
import Product from './components/Product/Product';
import HomePage from './components/homepage/HomePage';
import Category from './components/Category/Category';
import {Link, Routes, Route} from 'react-router-dom';
import ParamRoute from './components/paramRoute/ParamRoute';
import AdminPage from './components/adminPage/AdminPage';
import './App.css';
// link =<a></a>

const authUser = () => {
  const isAdmin = false;
  return isAdmin
}

function App() {

  const checking = authUser();
  // console.log("checking", checking)

  return (
    <div className="App">
      <div>
        <Link class="admin-container" to="/admin">Admin</Link>
      </div>
      <div class="nav-bar-container">
        <Link class="menu-to" to="/">home</Link>
        <Link class="menu-to" to="/testcomponent">test components</Link>
        <Link class="menu-to" to="/product">product</Link>
        <Link class="menu-to" to="/category">category</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/testcomponent" element={<TestComponents/>}></Route>
      </Routes>
      <Routes>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
      <Routes>
        <Route path="/category" element={<Category/>}></Route>
      </Routes>
      <Routes>
        <Route path="oncheck/:name" element={<ParamRoute/>}></Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminPage isAuth={checking} />}></Route>
      </Routes>

    </div>
  );
}

export default App;


