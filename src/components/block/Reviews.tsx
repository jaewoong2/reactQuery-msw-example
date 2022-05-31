import Spinner from 'components/atom/Spinner'
import useGetReviews, { Review } from 'hooks/useGetReviews'
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { fetcher } from 'utils'
import Button from '../atom/Button'

const Reviews: React.FC = ({}) => {
  // const [reviews, setReviews] = useState<Review[] | null>(null)
  const {
    data: reviews,
    refetch,
    remove,
  } = useGetReviews('reviews', {
    enabled: false,
  })

  const handleLoadReviews = useCallback(() => {
    refetch()
  }, [refetch])

  const handleDeleteReviews = useCallback(() => {
    remove()
  }, [remove])

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <label className="my-4">
        {!Boolean(reviews) ? (
          <Button className="w-96" onClick={handleLoadReviews}>
            Load reviews
          </Button>
        ) : (
          <Button className="w-96" onClick={handleDeleteReviews}>
            Delete reviews
          </Button>
        )}
      </label>
      <section className="flex justify-center">
        {reviews?.map(({ id, text, author }) => (
          <ul
            key={id}
            className="w-96 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900"
          >
            <li className="w-full rounded-t-lg border-b border-gray-200 px-6 py-2">
              {id}
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 px-6 py-2">
              {text}
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 px-6 py-2">
              {author}
            </li>
          </ul>
        ))}
      </section>
    </section>
  )
}

export default Reviews
