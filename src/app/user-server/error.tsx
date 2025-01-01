"use client"

import { useEffect } from "react"

const Error = ({error}: {error: Error}) => {

  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl text-rose-500">Error fetching user data</div>
    </div>
  )
}

export default Error