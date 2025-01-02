import {
  fromEvent,
  debounceTime,
  map,
  startWith,
  pairwise,
  filter,
  scan,
} from "https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm";

const button = document.getElementById("myButton"); //supondo um botão no arquivo html
const click$ = fromEvent(button, "click");

const processedClick$ = click$.pipe(
  debounceTime(300),
  map((event) => event.timeStamp),
  startWith(0),
  pairwise(),
  filter(([previous, current]) => {
    return current - previous > 1000;
  }),
  map(([_, current]) => current),
  scan((count) => count + 1, 0)
);

processedClick$.subscribe((count) => {
  console.log(`clicado ${count}x`);
});
