let obj = {
    saySetup : function(){
        
    },
    sayPunchLine : function(){

    }
};
const BASE_URL = "https://v2.jokeapi.dev/joke/Christmas";

async function sayJoke() {
  try {
    const response = await fetch(BASE_URL);
    const data = response.json();
    return data;
  } catch (error) {
    console.log("error!");
  }
}

async function getData() {
  try {
    const data = await sayJoke();
    obj.id = data.id;
    obj.setup = data.setup;
    obj.delivery = data.delivery;
    

    return obj;
  } catch (error) {
    console.log("error");
  }
}


getData();

async function getKata(apiUrl,jokeId){
    try{const response = await fetch(apiUrl)
    }
}

async function displayData() {
  const joke = document.getElementsByTagName("h3");
  const data = await getData();

  joke[0].innerHTML = `${obj.setup} => ${obj.delivery}`;
}

displayData();
