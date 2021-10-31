import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Component/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageOder from "./Component/ManageAllOders/ManageOder";
import AddService from "./Component/AddService/AddService";
import ServiceDtl from "./Component/Service/ServiceDtl/ServiceDtl";
import PlaceHolders from "./Component/PlaceHolder/PlaceHolders";
import MyOrders from "./Component/MyOders/MyOrders";
import Blog from "./Component/Blog/Blog";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/campBlog">
              <Blog></Blog>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <PrivateRoute path="/manageOder">
              <ManageOder></ManageOder>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDtl></ServiceDtl>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
