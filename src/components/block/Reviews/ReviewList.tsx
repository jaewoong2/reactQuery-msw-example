import useGetReviews from 'hooks/useGetReviews'
import React from 'react'

type ReviewListProps = {}

const ReviewList: React.FC<ReviewListProps> = () => {
  const { data: reviews } = useGetReviews('reviews', { enabled: false })

  return (
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
  )
}

export default ReviewList
