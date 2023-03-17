async function sayJoke() {
  // use mocked `fetch(url)`
  const BASE_URL = "https://v2.jokeapi.dev/joke/Christmas";

  try {
   const response = await fetch(BASE_URL).then((res) => {
      return res.json();
    });
    return response
  } catch (error) {
    console.log("error!");
  }
}

async function getData(){
  sayJoke().then(data=> console.log(data.id))
}

getData()