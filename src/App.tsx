import React from "react";
import CounterContainer from "./containers/CounterContainer";
import MyForm from "./Components/MyForm";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";
import TestPage from "./Components/TestPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // };

  // return <Greetings name="React" onClick={onClick} />;
  // return <Counter />;
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  // return <MyForm onSubmit={onSubmit} />;
  const Home = () => {
    return <h3>Home</h3>;
  };

  const Post = (props: RouteComponentProps<{ postId: string }>) => {
    // console.log(props);
    const goNextPost = () => {
      const nextPostId = Number(props.match.params.postId) + 1;
      props.history.push(`/posts/${nextPostId}`);
    };

    return (
      <div>
        <h3>Post {props.match.params.postId}</h3>
        <button onClick={goNextPost}>Next post</button>
        <p>{new URLSearchParams(props.location.search).get("body")}</p>
      </div>
    );
  };

  const PostList = (props: RouteComponentProps<{}>) => {
    return (
      <div>
        <Route
          exact={true}
          path={`${props.match.url}`}
          render={() => <h3>PostList</h3>}
        />
        <Route path={`${props.match.url}/:postId`} component={Post} />
      </div>
    );
  };

  const NotFound = () => {
    return <h3>Not Found!!</h3>;
  };

  const Admin = () => {
    const isAdmin = false;
    return isAdmin ? <h3>Admin Page</h3> : <Redirect to="/" />;
  };

  return (
    <Router>
      <div>
        <h1>Welcome to React-Router</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greetings">Greetings</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/myform">MyForm</Link>
          </li>
          <li>
            <Link to="/todo">todo</Link>
          </li>
          <li>
            <Link to="/test">testPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/intro" render={() => <h3>소개</h3>} />
        <Route path="/posts" component={PostList} />
        <Route path="/admin" component={Admin} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/test" component={TestPage} />
        <Route path="/myform" render={() => <MyForm onSubmit={onSubmit} />} />
        <Route
          path="/todo"
          render={() => (
            <>
              <TodoInsert />
              <TodoList />
            </>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
