import ImageContainer from "../image/ImageContainer"

let imageaddress = 'https://a0.muscache.com/im/pictures/dc9f2e94-efda-4bd2-a0f4-2bde6152b9a9.jpg?im_w=1200'
let imageaddress1 = 'https://a0.muscache.com/im/pictures/7f2f5963-3324-4996-8259-4fd06599992f.jpg?im_w=720'
let imageaddress2 = 'https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=720'
let imageaddress3 = 'https://a0.muscache.com/im/pictures/cfe9eca5-0f1f-4bb9-bb50-0a4044a50e7c.jpg?im_w=720'
let imageaddress4 = 'https://a0.muscache.com/im/pictures/11ddf357-03fd-4135-94f4-2335e9b54c7e.jpg?im_w=720'


const ImagesComponent = () => {
  return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 [direction:ltr]">
          <div className="w-full">
            <ImageContainer styles='h-[400px]' imageUrl={imageaddress} title='house for rent' />
          </div>
          <div className="grid-cols-2 gap-3 grid relative">
            <ImageContainer styles='h-48' imageUrl={imageaddress4} title='house for rent' />
            <ImageContainer styles='h-48' imageUrl={imageaddress1} title='house for rent' />
            <ImageContainer styles='h-48' imageUrl={imageaddress2} title='house for rent' />
            <ImageContainer styles='h-48' imageUrl={imageaddress3} title='house for rent' />
            <span className="absolute bottom-5 right-4 px-3 py-1 rounded-md border-gray-700 cursor-pointer border-2 bg-white animate-pulse">نشان دادن تمام عکس ها 19</span>
          </div>
        </div>
  )
}

export default ImagesComponent