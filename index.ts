import { take, tap, interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// https://indepth.dev/reference/rxjs/operators/publish

const echo = (inum) => (v) => console.log(`subsion ${inum}\t: ` + v);

const obs = interval(200).pipe(
  take(3),
  tap({
    complete() {
      console.log('underlying stream completed');
    },
  })
);

const shared = obs.pipe(publish());

shared.subscribe(echo(1));
shared.subscribe(echo(2));
shared.subscribe(echo(3));
shared.subscribe(echo(4));

shared.connect();
