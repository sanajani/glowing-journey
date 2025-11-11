import Button from '../../components/ui/Button'

const Buttons = ({showDealerFormHandler,isValid, showMessage}) => {
  return (
          <div className="space-y-2 flex mt-5 flex-col md:flex-row gap-4 col-span-2">
        <Button
          type="submit"
          text={"دنبال خانه استم"}
          containerStyle="bg-blue-800 h-full text-white cursor-pointer flex-1 py-3 rounded-lg"
        />
        <div className="flex-1 relative">
          <Button
            type="button"
            onClick={showDealerFormHandler}
            text={"دفتر معاملات دارم"}
            containerStyle={`${isValid ? 'cursor-pointer' : 'cursor-not-allowed'} w-full bg-green-800 h-full text-white py-3 rounded-lg`}
          />
          {showMessage && (
            <p className="absolute -bottom-7 text-sm text-red-600 right-0">
              ⚠️ لطفا تمام فیلدهای ضروری را پر کنید
            </p>
          )}
        </div>
      </div>
  )
}

export default Buttons