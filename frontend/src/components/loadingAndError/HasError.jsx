import React from 'react'

function HasError() {
  return (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-20">
            <div className="text-center text-gray-500 p-4">
              <div className="text-2xl mb-2">🏠</div>
              <p className="text-sm font-medium">Image not available</p>
              <p className="text-xs mt-1">Property visual</p>
            </div>
          </div>
  )
}

export default HasError