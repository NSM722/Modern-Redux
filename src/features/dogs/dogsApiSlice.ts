import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_SLICE_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

// defining the expected data type from the API
interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

// define the api slice
export const dogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_SLICE_KEY)
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        }
      })
    }
  }
})

export const { useFetchBreedsQuery } = dogsApiSlice