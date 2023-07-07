const getData = async () => {
  let url = "https://api.adviceslip.com/advice";
  let data = await fetch(url);
  let response = await data.json();
  console.log(response);

  let advice = document.getElementById("advice");
  advice.innerHTML = response.slip.advice;

  let id = document.getElementById("advice-id");
  id.innerHTML = response.slip.id;
};

setTimeout(() => {
  alert("Click on the dice to load a piece of advice");
}, 1500);
