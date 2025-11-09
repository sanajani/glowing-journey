
const ContactWithSeller = () => {
  return (
          <div className="bg-gray-50 my-6 p-6 rounded-2xl text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          تماس با مالک
        </h1>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 rounded-lg text-white text-lg px-6 py-2 transition cursor-pointer">
            📞 تماس تلفنی
          </button>
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white text-lg px-6 py-2 transition cursor-pointer">
            💬 ارسال پیام
          </button>
        </div>
      </div>
  )
}

export default ContactWithSeller