import { ComponentProps, useState } from "react"
import { UseQueryOptions, useQuery, UseQueryResult } from "react-query"
import { fetcher } from "utils"


export type Review = {
    id: string
    text: string
    author: string
}

type Options = Omit<UseQueryOptions<Review[], Error, Review[], string>, "queryKey" | "queryFn">

const useGetReviews = (key = 'review', defaultOptions: Options) => {
    const data = useQuery<Review[], Error, Review[], string>(key, () => fetcher('/reviews'), {
        ...defaultOptions,
    })


    return data
}

export default useGetReviews