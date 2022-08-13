import React from 'react'
import ContentLoader from 'react-content-loader'

const PlaceholderLoader = () => (
  <div className="shadow-lg bg-white rounded-lg p-4 text-center flex justify-center h-48">
    <ContentLoader
      speed={2}
      width={120}
      height={100}
      viewBox="0 0 120 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="34" y="10" rx="6" ry="6" width="52" height="12" />
      <rect x="16" y="36" rx="3" ry="3" width="88" height="6" />
      <rect x="34" y="52" rx="3" ry="3" width="52" height="6" />
      <rect x="16" y="68" rx="3" ry="3" width="88" height="6" />
      <rect x="34" y="84" rx="3" ry="3" width="52" height="6" />
    </ContentLoader>
  </div>
)

const SemesterLoader = () => (
  <div className="grid grid-cols-fill-80 gap-3 pr-3">
    <PlaceholderLoader/>
    <PlaceholderLoader/>
    <PlaceholderLoader/>
    <PlaceholderLoader/>
    <PlaceholderLoader/>
    <PlaceholderLoader/>
  </div>
)

export default SemesterLoader
