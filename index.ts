import './style.css';

import { of, map } from 'rxjs';

const log = (index) => (v) => console.log(`subscription ${index}\t: ` + v);

const obs = interval(200).pipe(
   take(3),
   tap({ complete() { console.log('underlying stream completed') }})
);

const shared = obs.pipe(
   publish()
);

shared.subscribe(log(1));
shared.subscribe(log(2));

shared.connect();

