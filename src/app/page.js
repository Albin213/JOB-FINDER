"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function page() {

  const router = useRouter();
  useEffect(() => {
    router.push("/jobs")
  }, []);
  return (
    <div>Main Index Page</div>
  )
}

export default page