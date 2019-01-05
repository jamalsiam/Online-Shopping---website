import { trigger, state, style, animate, transition } from '@angular/animations';
import { CardViewerStates } from 'src/app/common/enums/cardViewerStates.enum';

export const Animations = [
    trigger('shift', [
        state(CardViewerStates.stateOne, style({
            transform: 'translate3d({{shiftValue}}px, 0px, 0px)',
        }), { params: { shiftValue: 0 } }),
        state(CardViewerStates.stateTwo, style({
            transform: 'translate3d({{shiftValue}}px, 0px, 0px)',
        }), { params: { shiftValue: 0 } }),

        transition(`* => ${CardViewerStates.stateOne}`, animate('500ms ease-out')),
        transition(`* => ${CardViewerStates.stateTwo}`, animate('500ms ease-out')),
        // transition('* <=> *', animate('500ms ease-out')), Or you can use this line



    ])
];
