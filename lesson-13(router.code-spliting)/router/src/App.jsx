import { Suspense, lazy } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Nav from "./components/Nav/Nav";
// import HomePage from "./pages/HomePage";
// import CountryNewsPage from "./pages/CountryNewsPage";
// import NewsPage from "./pages/NewsPage";
// import TimerPage from "./pages/TimerPage";
// import ToDoPage from "./pages/ToDoPage";
// import SingleArticlePage from "./pages/SingleArticlePage";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const CountryNewsPage = lazy(() =>
  import("./pages/CountryNewsPage" /* webpackChunkName: "country-news-page" */)
);
const NewsPage = lazy(() =>
  import("./pages/NewsPage" /* webpackChunkName: "news-page" */)
);
const TimerPage = lazy(() =>
  import("./pages/TimerPage" /* webpackChunkName: "timer-page" */)
);
const ToDoPage = lazy(() =>
  import("./pages/ToDoPage" /* webpackChunkName: "todo-page" */)
);
const SingleArticlePage = lazy(() =>
  import(
    "./pages/SingleArticlePage" /* webpackChunkName: "single-article-page" */
  )
);

const App = () => {
  const title = "Home Page";

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage title={title} />
          </Route>
          <Route path="/timer" component={TimerPage} />
          <Route path="/todo" component={ToDoPage} />
          <Route path="/article/:articleId" component={SingleArticlePage} />
          <Route path="/country-news/:lang" component={CountryNewsPage} />
          <Route path="/news" component={NewsPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
