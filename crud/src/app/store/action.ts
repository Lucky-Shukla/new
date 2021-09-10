
import { Action } from '@ngrx/store';
import { productInfo } from './productinfo';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export class actionClass implements Action
{

    type = ADD_PRODUCT;

    payLoad ? : productInfo;

    constructor(public payload ? : productInfo)
    {

        this.payLoad = payload;

    }

}