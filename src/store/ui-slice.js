import { createSlice } from '@reactjs/toolkit';

createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false},
    reducers: {
        // map of methods that represent the cases we handle
        toggle(state) {
            state.cartIsVisible =! state.cartIsVisible;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;