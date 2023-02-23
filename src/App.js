import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* switch make sure that only one route shows at any one time // in version 5 */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* :id represents the id of the blog (dynamic) */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            {/* (*) means not catch any other route */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;





// function App() {

  //we can dynamically use variables
  //we use curly braces in the component( App ) for dynammic variables
 
// const title = 'Welcome to the new blog';
// const likes = 50;

//we cannot dynamically use boolean and objects
// const person = { name: 'snk', age: 30 };

//we can use dynamic value for link in a tag 
// const link = "http://www.google.com";

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{ title }</h1>
//         <p>Liked { likes } times</p>

//         {/* we use curly braces to return values on page */}
//         <p>{ 10 }</p>
//         <p>{ "hello snk" }</p>
//         <p>{ [1,2,3,4,5] }</p>
//         <p>{ Math.random() * 10 }</p>

//         {/* we can use dynamic value for link in a tag using curly braces */}
//         <a href={ link }>Google Site</a>

//       </div>
//     </div>
//   );
// }

// export default App;
//we always need to export so that in can be imported in other files.
//inside the App it is jsx not html which is similar to html which is converted to html at the browser
//use camelcase




//component name always starts with capital letter


//react is javascript library for creating single page websites

//components :-

//App.js  ->  root component  , that gets render to the dom ( that the index file renders)
// all others components are nested inside the App.js component like Navbar.js, BlogDetail.js Sidebar.js etc
//again Sidebar.js can be nested into more components

