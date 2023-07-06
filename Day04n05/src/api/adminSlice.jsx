// Day 05 RTK query (Optional of asyncThunk)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    endpoints: (builder) => ({
        getAccounts: builder.query({
            // Api ko path kun lai query garne?
            query:()=>`account`
        })
    })
})

// Export Hook
// Custom hook,aagadi use Lekhne auto option aaucha

export const {useGetAccountsQuery } = adminApi;