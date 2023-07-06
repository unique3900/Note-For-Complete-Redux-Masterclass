// Day 05 RTK query (Optional of asyncThunk)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    endpoints: (builder) => ({
        getAccounts: builder.query({
            // Api ko path kun lai query garne?
            query: () => `account`,

            //Important to add providesTag for realtime update
            providesTags:['account']
        }),
        // Only get is done using query other POST,put... is done by mutation
        addAccounts: builder.mutation({
            query: (amount,id) => ({
                url: 'account',
                method: 'POST',
                body:{amount,id}
            }),
            //Caching hataidincha
            invalidatesTags: ['account']
            
        }),
        deleteAccount: builder.mutation({
            query: (id) => ({
                url: `account/${id}`,
                method: 'DELETE',
                body:{id}
            }),
            invalidatesTags:['account']
        }),
        updateAccount: builder.mutation({
            query: ({amount, id}) => ({
                url: `account/${id}`,
                method: 'PATCH',
                body:{amount,id}

            }),
            invalidatesTags:['account']
        })
    })
})

// Export Hook
// Custom hook,aagadi use Lekhne auto option aaucha

export const {useGetAccountsQuery,useAddAccountsMutation ,useDeleteAccountMutation,useUpdateAccountMutation} = adminApi;