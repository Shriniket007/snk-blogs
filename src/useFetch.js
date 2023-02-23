import { useEffect, useState } from "react";




//this is a custom hook (user defined). it should always start with use like useFetch

const useFetch = (url) => {

    const [data, setData] = useState(null
        //   [
        //   {
        //     title: "My new website",
        //     body: "lorem ipsum...",
        //     author: "snk",
        //     id: 1,
        //   },
        //   {
        //     title: "Welcome party",
        //     body: "lorem ipsum...",
        //     author: "messi",
        //     id: 2,
        //   },
        //   {
        //     title: "web dev top tips",
        //     body: "lorem ipsum...",
        //     author: "snk",
        //     id: 3,
        //   },
        // ]
        
        );
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);
      
        // const [name, setName] = useState('snk');
      






    // to run the function not for all the renders but only a certain render we use dependency array
  //second argument, if the array is empty then the function only run one time initially at start
  //and not after that
  useEffect(() => {

    const abortCont = new AbortController();
    // console.log('use effect run');
    // console.log(name);
    // console.log(blogs);
    setTimeout(() => {
        fetch(url, {signal: abortCont.signal})
        .then(res => {
          if(!res.ok) {
              throw Error('could not fetch the data for that resource')
          }
          return res.json();
        })
        .then((data) => {
            // console.log(data);
            setData(data);

            // when the data is loaded isPending is set to false
            setIsPending(false);
            setError(null);
        })
        .catch( err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted')
            }
            else{
                setIsPending(false);
                setError(err.message);
            }
            
        })
    }, 1000);
          //1000 milisecond , fetch will performed after 1000 miliseconds, which is given as second argument


    return () => abortCont.abort();
  }, [url]);


  // }, [name])
//here name is a dependency if we change the name , the useEffect is executed


return { data, isPending, error };
}




export default useFetch;