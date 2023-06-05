import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
//storing api key


//setting up headers and url for our api call
export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
prepareHeaders: (headers) => {
    headers.set('X-RapidAPI-Key',rapidApiKey);
   
 headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
 return headers;
}

    
    }),
    //endpoints rep what we are actually querying/fetching
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior.
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
            
        }),
    }),
   
})
//lazy is used because we only want to load when url is input in field and when submit button is pressed
export const {useLazyGetSummaryQuery} = articleApi;

