      //   console.log("Before");
      //   setTimeout(() => {
      //     console.log("b/w");
      //   }, 0);
      //   console.log("After");

      //   console.log("Before");
      //   const button = document.querySelector("button");
      //   // Asynchronous
      //   button.addEventListener("click", () => {
      //     console.log("I was clicked");
      //   });
      //   console.log("After");

      //API calls using promises:

      //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      //     function (response) {
      //       console.log(response);

      //       if (response.status == 200) {

      //         response.json().then(function(jsonData){
      //             console.log(jsonData)
      //         })
      //       } else {
      //         alert("Data not found!");
      //       }
      //     },
      //   ); //Promise -> pending state -> promise is handled/ responded

      
      //Async/await

    //   console.log("Before");

    //   async function fn() {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/todos/1",
    //     );
    //     console.log(response);

    //     const jsonData = await response.json();
    //     console.log(jsonData);
    //   }
    // fn();
    //   console.log("After");