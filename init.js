window.onload = () => {
  debugger;
  // log initial state
  window.onload = () => {
    log.push({ initialNumbers: JSON.parse(JSON.stringify(numbers)) });
    document.getElementById("current-number").innerHTML = numbers.current;
  };

  // render initial UI from state
};
