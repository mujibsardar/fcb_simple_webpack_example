const load = () => {
  const content = document.getElementById('content');

  const button_1 = document.createElement('button');
  const button_2 = document.createElement('button');
  const button_3 = document.createElement('button');

  const msg_output = document.createElement('h1');
  msg_output.setAttribute('id', 'msg_output');

  button_1.value = "Home";
  button_2.value = "Page 1";
  button_3.value = "Page 2";

  button_1.innerText = "Home";
  button_2.innerText = "Page 1";
  button_3.innerText = "Page 2";

  content.appendChild(button_1);
  content.appendChild(button_2);
  content.appendChild(button_3);
  content.appendChild(msg_output);
}

export { load };
