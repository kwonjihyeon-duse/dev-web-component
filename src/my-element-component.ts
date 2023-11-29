// import type {EventName} from '@lit/react';

import * as React from 'react';
import {createComponent} from '@lit/react';
import {MyElement} from './my-element.ts';

export const MyElementComponent = createComponent({
  tagName: 'my-element',
  elementClass: MyElement,
  react: React,
  events: {
    // onClick: 'pointerdown' as EventName<PointerEvent>,
    // onChange: 'input',
  },
});