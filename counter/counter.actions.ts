import { Action } from '../ngrx-test/ngrx';

export const incAction: Action = {
    type: 'INCREMENTAR'
}
export const decAction: Action = {
    type: 'DECREMENTAR'
}
export const mulAction: Action = {
    type: 'MULTIPLICAR',
    payload: 3
}
export const divAction: Action = {
    type: 'DIVIDIR',
    payload: 3
}
export const resetAction: Action = {
    type: 'RESET',
}


