import dynamic from 'next/dynamic';
import React from 'react'

const Homepage7 = () => {
    const MapWithNoSSR = dynamic(() => import("../../component/ui/map"), {
        ssr: false
      });
  return (
    <div>
      <MapWithNoSSR />
    </div>
  )
}

export default Homepage7
