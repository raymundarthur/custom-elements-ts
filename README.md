# custom-elements-ts

[![Coverage Status](https://coveralls.io/repos/github/geocine/custom-elements-ts/badge.svg?branch=master)](https://coveralls.io/github/geocine/custom-elements-ts?branch=master) 
[![Build Status](https://travis-ci.org/geocine/custom-elements-ts.svg?branch=master)](https://travis-ci.org/geocine/custom-elements-ts)
[![npm version](https://badge.fury.io/js/custom-elements-ts.svg)](https://www.npmjs.com/package/custom-elements-ts)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


Create native custom elements using Typescript without using any third party libraries.

```
npm install custom-elements-ts
```

### Usage

```ts
import { CustomElement } from 'custom-elements-ts';

@CustomElement({
  tag: 'counter-element',
  templateUrl: 'counter-element.html',
  styleUrl: 'counter-element.scss'
})
export class CounterElement extends HTMLElement {
  // code as you would when creating a native HTMLElement
}
```

### Running the demos

```
npm start <element-name>
```
eg. If you want to run the `counter-element` demo

```
npm start counter-element
```

### Building the demo

```
npm run build <element-name>
```
eg. If you want to build the `counter-element` demo

```
npm run build counter-element
```
If you want to create a minified bundle
```
npm run build -- counter-element --prod
```