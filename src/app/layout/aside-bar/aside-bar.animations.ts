import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = [
    trigger('munuStatus', [
        state('true', style({
            left: '0px',
            width:'100%'
        })),
        state('false', style({
            left: '-250px',
            width:'250px'
        })),
        transition('false => true', animate('100ms')),
        transition('true => false', animate('100ms'))
    ])
];

