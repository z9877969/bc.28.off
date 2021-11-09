import {
  Route,
  Switch,
  useRouteMatch,
  withRouter,
  Link,
  NavLink,
} from "react-router-dom";
import CountryNewsPage from "./pages/CountryNewsPage";
import NewsPage from "./pages/NewsPage";
import TimerPage from "./pages/TimerPage";
import ToDoPage from "./pages/ToDoPage";

const Home = ({ title }) => {
  const match = useRouteMatch();
  console.log("match :>> ", match);
  return <h1>{title}</h1>;
};
const About = () => <h1>About</h1>;
// const ProductCard = withRouter(() => <h1>ProductCard</h1>);
const ProductCard = () => <h1>ProductCard</h1>;
const CategoryList = () => <h1>CategoryList</h1>;

const btnStyle = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "green",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "24px",
};

const App = () => {
  const title = "Hello! Home Page";

  return (
    <div className="App">
      <nav>
        <NavLink style={btnStyle} activeStyle={{ color: "red" }} exact to="/">
          Home
        </NavLink>
        <NavLink style={btnStyle} activeStyle={{ color: "red" }} to="/timer">
          Timer
        </NavLink>
        <NavLink style={btnStyle} activeStyle={{ color: "red" }} to="/todo">
          ToDo
        </NavLink>
        <NavLink style={btnStyle} activeStyle={{ color: "red" }} to="/news">
          News
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home title={title} />
        </Route>
        <Route path="/timer" component={TimerPage} />
        <Route path="/todo" component={ToDoPage} />
        <Route path="/news/:lang" component={CountryNewsPage} />
        <Route path="/news" component={NewsPage} />
      </Switch>
    </div>
  );
};

export default App;

{
  /* <Route path="/" exact component={Home} /> */
}
{
  /* <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} title={title} />}
        /> */
}
{
  /* <Route path="/foods/:category/:productId">
          <ProductCard />
        </Route> */
}
{
  /* <Route path="/foods/:category" component={CategoryList} /> */
}
