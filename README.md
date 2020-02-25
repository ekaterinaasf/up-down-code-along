# Up/Down Code-Along

A simple little website where users can increase and decrease a value. The User Interface (DOM & Styles) are provided. You need to add user interactions one step at a time:

1. **setup**: (done for you)
1. **data & log**: (done for you)
1. **initialize**: log initial state, and render initial state to the UI
1. **up**: a user can increase the current number by a value of their choice
1. **down**: a user can decrease the current number by a value of their choice
1. **reset**: a user can reset state & the DOM back to their initial values

PLAN:

1.

- Attach a handler on the UP button and increment the global number by 1 each time.
- Use console.log() to display the number in the console for now.
- Initially, the global number is 0.

2. Use .innerHTML to modify the number in the DOM instead of using console.log
3. Handle DOWN button
4. Handle reset
5. Log actions ('up', 'down', 'reset') in a global array
6. Handle user input increment (using .value) (

---

A helpful project to study: up/down

- [stepped source code](https://github.com/HackYourFutureBelgium/state/tree/master/example-projects/up-down-stepped)
- [separated source code](https://github.com/hackyourfuturebelgium/state/tree/master/example-projects/up-down-separated)
- [separated live demo](http://127.0.0.1:5500/03-state/repo/example-projects/up-down-separated/index.html)

And supporting exercises/slides:

- [state: week 1 lesson plan](http://127.0.0.1:5500/03-state/repo/week-1/index.html)

## DOM

| tag name    | attributes                               | role                                                  |
| ----------- | ---------------------------------------- | ----------------------------------------------------- |
| `<section>` | `id="user-interface" class="centered"`   | the section that contains all user interface elements |
| `<code>`    | `id="current-number"`                    | the current number of increaser-decreaser             |
| `<input>`   | `id="increment" type="number" value="_"` | the value for "incremented by"                        |
| `<button>`  | `id="plus-one"`                          | button to increase the current value                  |
| `<button>`  | `id="minus-one"`                         | button to decrease the current value                  |
| `<button>`  | `id="reset"`                             | button to reset the current value                     |

## Styling

| class name  | description                    | role                                     |
| ----------- | ------------------------------ | ---------------------------------------- |
| `.centered` | sets position for all elements | make block of buttons more user-friendly |
| `.input`    | sets input value style         | make input value more visible            |

## Listeners

| type      | attached to      | callback       |
| --------- | ---------------- | -------------- |
| `'click'` | `id='minus-one'` | `downHandler`  |
| `'click'` | `id='plus-one'`  | `upHandler`    |
| `'click'` | `id='reset'`     | `resetHandler` |

## Handlers

| syntax           | parameters | return value                                    | behavior                                                                                                                                      |
| ---------------- | ---------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `upHandler()`    | no         | Boolean: should the browser continue as normal? | reads user input and use it as an increment, then provide the result to the user, logs old state and alerts the browser 'OK'                  |
| `downHandler()`  | no         | Boolean: should the browser continue as normal? | reads user input and use it as a decrement, then provide the result to the user, logs old state and alerts the browser 'OK'                   |
| `resetHandler()` | no         | Boolean: should the browser continue as normal? | reset the user input and current number to the default state, then provide the result to the user, logs old state and alerts the browser 'OK' |
