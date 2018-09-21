// angular
import { animate, state, style, transition, trigger } from '@angular/animations';
const DURATION = 400;

export const routeAnimation = trigger('routeAnimation', [
    state('void', style({
        position: 'fixed',
        width: '100%'
    })),
    state('*', style({
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    })),
    transition(':enter', [
        style({
            transform: 'translateY(100%)',
            opacity: 0
        }),
        animate(`${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateY(0%)',
            opacity: 1
        }),
        animate(`${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);
export const routerTransition = {
    rightSlide:
        trigger('routerTransition', [
            state('void', style({ position: 'fixed', width: '100%' })),
            state('*', style({ position: 'fixed', width: '100%' })),
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
            ])
        ]),
    leftSlide:
        trigger('routerTransition', [
            state('void', style({ position: 'fixed', width: '100%' })),
            state('*', style({ position: 'fixed', width: '100%' })),
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ])
        ]),
    bottomSlide:
        trigger('routerTransition', [
            state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
            state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
            ])
        ]),
    topSlide:
        trigger('routerTransition', [
            state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
            state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
            transition(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
            ])
        ])
};
