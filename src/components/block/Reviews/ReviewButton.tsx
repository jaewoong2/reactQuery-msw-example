import Button from 'components/atom/Button'
import React, { useCallback, useEffect } from 'react'
import { useQuery } from 'react-query'

type ReviewButtonProps = {}

const ReviewButton: React.FC<ReviewButtonProps> = ({}) => {
  /**  Error Boundary Suspense가 작동하지 않게 하려면 suspense: false로 해줘야한다
  아니면 에러 React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary 발생한다.  */
  const { isSuccess, isLoading, refetch, remove } = useQuery('reviews', {
    enabled: false,
    suspense: false,
  })

  const handleLoadReviews = useCallback(() => {
    refetch()
  }, [refetch])

  const handleDeleteReviews = useCallback(() => {
    remove()
  }, [remove])

  return (
    <label className="my-4">
      {isSuccess ? (
        <Button className="w-96" onClick={handleDeleteReviews}>
          Reviews
        </Button>
      ) : (
        <Button className="w-96" onClick={handleLoadReviews}>
          {isLoading ? 'Loading...' : 'Load reviews'}
        </Button>
      )}
    </label>
  )
}

export default ReviewButton
