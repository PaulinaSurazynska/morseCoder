import { trigger, animate, style, query, transition, state } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('*<=>*', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
        }),
      ],
      { optional: true },
    ),
    query(':leave', [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0 }))], {
      optional: true,
    }),

    query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);

export const formAnimation = trigger('formAnimation', [
  state(
    'initial',
    style({
      opacity: 1,
    }),
  ),
  state(
    'active',
    style({
      opacity: 0,
    }),
  ),
  transition('initial => active', animate('0.3s')),
  transition('active => initial', animate('0.5s')),
]);
