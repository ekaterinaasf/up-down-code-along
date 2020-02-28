function resetHandler() {
  debugger;
  // reset state (0, empty array)
  numbers.current = 0;
  numbers.past = [];
  numbers.increment = 1;

  // reset UI (numbers.current, increment input 1)
  document.getElementById("current-number").innerHTML = numbers.current;
  document.getElementById("increment").innerHTML = numbers.increment;

  // log user interaction
  //  user story name, copy of state
  const copiedState = JSON.parse(JSON.stringify(numbers));
  log.push({
    handler: "reset",
    numbers: copiedState
  });
  return true;
}
