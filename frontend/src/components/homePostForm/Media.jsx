import React from 'react'

const Media = () => {
  return (
            <section>
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">رسانه</h2>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              آپلود تصویر یا ویدیو
            </label>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>
  )
}

export default Media