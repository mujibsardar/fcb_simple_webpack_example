const getUserInfo = () => {
  console.log(`getUserInfo reached`);
  let name, location;
  if (!sessionStorage.name) {
    name = prompt(`What is your name?`);
    sessionStorage.name = name;
  }else {
    name = sessionStorage.name;
    alert(`Welcome back ${name}`)
  }
  if (!sessionStorage.location) {
    location = prompt(`Where are you located?`);
    sessionStorage.location = location;
  }else {
    location = sessionStorage.location;
  }
}


export { getUserInfo }
