console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
  let myKey = "MIznixM4hVw124TVUXM7Z4bUWsVS3AFv";
  let topic = queryField.value;
  console.log(topic);
  let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`; 
  console.log(myQuery);
  const response=await fetch(myQuery);
  console.log(response);
  const myjson=await response.json();
  console.log(myjson);
  let i= getRandomInt(10);
  const imgurl=myjson.data[i].images.downsized.url;
  console.log(imgurl);
  imageHolderDiv.innerHTML = `<img src="${imgurl}"/>` + imageHolderDiv.innerHTML;
});
