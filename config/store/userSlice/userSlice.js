import { createSlice, } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null,
        email: null,
        phone: null,
        document_type: null,
        document: null,
        user_reference: null,
        amount: null,
        currency: 'USD',
        adress: {
            state: null,
            city: null,
            zip_code: null,
            full_address: null
        }
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
});
export const { increment } = userSlice.actions;