import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  // data: blogs means we export data from useFetch but use it in name of blogs in current component
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


  // this function does'nt deleted the original array(data) , it returns a new array based on filter method
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  


  return (
    <div className="home">

    { error && <div>{ error }</div> }

{/* to show loading at start at initially isPending = true */}
    { isPending && <div>loading...</div> }

    {/* initially as the value is blogs = null && operation will only check the left and if it is false it will not even check right side  , so there will be no error
    if left is true then only the right will output to browser
    this is called conditional template*/}
  {blogs && <Bloglist blogs={blogs} title="all blogs!" />}






      {/* blogs={blogs}  is a prop  */}

      {/* <Bloglist blogs={blogs} title="all blogs!" handleDelete={handleDelete} /> */}


     

      {/*filter method is used filter a particular item or items depending on a attribute , so it makes it true for item id 1 and id 3 and false for id 2,
      and the new filtered array is passed  */}
      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'snk')} title="snk's blogs!" />   */}
      {/* <button onClick={() => setName('shriniket')}>change name</button>
      <p>{ name }</p> */}
    </div>
  );
};

export default Home;

//props:-
//props are a way to pass data from on component, a parent component into a child component
//i.e to pass the blog data (title , body id etc (items)) into Bloglist component
// blogs={blogs}  is a prop  ( here we are passing the blogs as a prop)
//this can be accessed in the Bloglist.js by using props
// const blogs = props.blogs;
//in the same way we can create another prop title with value "all blogs" and
//access it in Bloglist.js(or any another component) by const title = props.title;
//any changes made will be applied to the props as well

//map method is use for mapping the items rather writing code for each object
//each iteration we get access to the next element

//react need the key property/attribute to keep track of the each item in the DOM as it outputs it
// when we add or delete any item react can keep track of it
//it is normally the id property

//above blog is the obj to parse the items

// const Home = () => {

// e = event object for all info related to the event
// const handleClick = (e) => (
//   console.log('hello snk', e)
// )

// let name = 'snk';
//use of usestate allows us to change the the name rectively on the webpage
//setName is used to change the value of the name

// const [name, setName] = useState('snk'); //'snk' is the initial value
// const [age, setAge] = useState(25);

//setName can be updated in the function for onclick
// const handleClick = () => {
//   setName('shriniket'); // updating the name = snk to name = shriniket
//   setAge(100);
// }

// const handleClickAgain = (name, e) => (
//     console.log('hello ' + name, e.target)
// )

// return (
//   <div className="home">
//       <h2>Homepage</h2>

{
  /* after we click the (click me) the value changes from snk to shriniket */
}
// <p>{ name } is {age} years old</p>

{
  /* do not use parenthesis in function as it will call as soon as we save it, so just type the name it will call it on click */
}
// <button onClick={ handleClick }>click me</button>

{
  /* to pass a value in function we use arrow function */
}
{
  /* <button onClick={ (e) => handleClickAgain('mario', e) }>click me again</button> */
}
// </div>
//   )
// }

// export default Home

// usestate is a hook gives us a way to use a reactive value and change the value whenever we want

// const Home = () => {

// e = event object for all info related to the event
// const handleClick = (e) => (
//   console.log('hello snk', e)
// )

// let name = 'snk';
//use of usestate allows us to change the the name rectively on the webpage
//setName is used to change the value of the name

// const [name, setName] = useState('snk'); //'snk' is the initial value
// const [age, setAge] = useState(25);

//setName can be updated in the function for onclick
// const handleClick = () => {
//   setName('shriniket'); // updating the name = snk to name = shriniket
//   setAge(100);
// }

// const handleClickAgain = (name, e) => (
//     console.log('hello ' + name, e.target)
// )

// return (
//   <div className="home">
//       <h2>Homepage</h2>

{
  /* after we click the (click me) the value changes from snk to shriniket */
}
// <p>{ name } is {age} years old</p>

{
  /* do not use parenthesis in function as it will call as soon as we save it, so just type the name it will call it on click */
}
// <button onClick={ handleClick }>click me</button>

{
  /* to pass a value in function we use arrow function */
}
{
  /* <button onClick={ (e) => handleClickAgain('mario', e) }>click me again</button> */
}
// </div>
//   )
// }

// export default Home

// usestate is a hook gives us a way to use a reactive value and change the value whenever we want

//useEffect hook :-
// this hook runs a function every render of the component
//the component initially renders when it first loads to the dom
//and it also happens when the state changes , it re renders the DOM, so that we can update it
//in the browser
//useEffect hook is way to run the code on every render.


//json server - fake restApi
