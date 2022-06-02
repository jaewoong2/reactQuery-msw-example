import Spinner from 'components/atom/Spinner'
import Suspense from 'components/atom/Suspense'
import React from 'react'
import ReviewButton from './ReviewButton'
import ReviewList from './ReviewList'

const Reviews: React.FC = ({}) => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <ReviewButton />
      <Suspense fallback={<Spinner />}>
        <ReviewList />
      </Suspense>
    </section>
  )
}

export default Reviews
