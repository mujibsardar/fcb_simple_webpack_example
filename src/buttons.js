import { displayHome } from './home'
import { displayPageOne } from './pageOne'
import { displayPageTwo } from './pageTwo'

const setupButtons = () => {
  const buttons = document.getElementsByTagName('button');
  console.log(`buttons.length ${buttons.length}`);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
      let buttonValue = buttons[i].value;
      console.log(`buttonValue ${buttonValue}`);
      switch(buttonValue){
        case "Home":
        displayHome();
        break;
        case "Page 1":
        displayPageOne();
        break;
        case "Page 2":
        displayPageTwo();
        break;
      }
    })
  }
}

export { setupButtons }
