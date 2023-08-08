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
        addInfo: (state, { payload }) => {
            state.id = 1,
                state.name = payload.name,
                state.email = payload.email,
                state.phone = payload.phone,
                state.document_type = payload.document_type,
                state.document = payload.document,
                state.user_reference = 1,
                state.amount = 59,
                state.currency = 'USD',
                state.adress = {
                    state: payload.state,
                    city: payload.city,
                    zip_code: payload.zip_code,
                    full_address: payload.full_address
                }
        },

    }
});
export const { addInfo } = userSlice.actions;