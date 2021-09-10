
import * as AllData from './action';

const initialState =
{

    productName : "A-Z-12-Glasses",

    Pid : 1000010100,

    productPrice : 1000

};

export function myReducer(state = initialState ,action : AllData.actionClass)
{

switch(action.type)
{

case AllData.ADD_PRODUCT:
    return { ...state};

default :
return state;

}

}
