import useMounted from 'hooks/useMounted'
import React, { Suspense as ReactSuspense } from 'react'

type Props = {}

const Suspense: React.FC<React.SuspenseProps & Props> = ({
  fallback,
  children,
}) => {
  const moutned = useMounted()

  if (!moutned) {
    return <></>
  }

  return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>
}

export default Suspense
