const propertyImages = [
  {
    id: "img-living-room-001",
    alt: "Modern living room area with sofa, coffee table, and large windows",
    url: "https://a0.muscache.com/im/pictures/dc9f2e94-efda-4bd2-a0f4-2bde6152b9a9.jpg?im_w=1200"
  },
  {
    id: "img-bedroom-001", 
    alt: "Comfortable bedroom featuring a queen bed, nightstands, and wardrobe",
    url: "https://a0.muscache.com/im/pictures/7f2f5963-3324-4996-8259-4fd06599992f.jpg?im_w=720"
  },
  {
    id: "img-kitchen-001",
    alt: "Fully equipped kitchen with refrigerator, stove, and counter space",
    url: "https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=720"
  },
  {
    id: "img-bathroom-001",
    alt: "Clean bathroom with shower, sink, and toilet facilities",
    url: "https://a0.muscache.com/im/pictures/cfe9eca5-0f1f-4bb9-bb50-0a4044a50e7c.jpg?im_w=720"
  },
  {
    id: "img-outdoor-001",
    alt: "Outdoor patio space with seating arrangement and greenery",
    url: "https://a0.muscache.com/im/pictures/11ddf357-03fd-4135-94f4-2335e9b54c7e.jpg?im_w=720"
  },
    {
    id: "img-living-room-501",
    alt: "Modern living room area with sofa, coffee table, and large windows",
    url: "https://a0.muscache.com/im/pictures/dc9f2e94-efda-4bd2-a0f4-2bde6152b9a9.jpg?im_w=1200"
  },
  {
    id: "img-bedroom-401", 
    alt: "Comfortable bedroom featuring a queen bed, nightstands, and wardrobe",
    url: "https://a0.muscache.com/im/pictures/7f2f5963-3324-4996-8259-4fd06599992f.jpg?im_w=720"
  },
  {
    id: "img-kitchen-301",
    alt: "Fully equipped kitchen with refrigerator, stove, and counter space",
    url: "https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=720"
  },
  {
    id: "img-bathroom-201",
    alt: "Clean bathroom with shower, sink, and toilet facilities",
    url: "https://a0.muscache.com/im/pictures/cfe9eca5-0f1f-4bb9-bb50-0a4044a50e7c.jpg?im_w=720"
  },
  {
    id: "img-outdoor-101",
    alt: "Outdoor patio space with seating arrangement and greenery",
    url: "https://a0.muscache.com/im/pictures/11ddf357-03fd-4135-94f4-2335e9b54c7e.jpg?im_w=720"
  }
];

const PropertyGallery = () => {
  return (
    <div className="min-h-screen mt-4 grid grid-cols-2 gap-3 w-full">
      {propertyImages.map(({id, alt, url}, index) => (
        <div key={id} className={`overflow-hidden ${index % 3 == 0 ? 'col-span-2' : 'col-span-1'}`}>
          <img 
            src={url} 
            alt={alt} 
            className=" max-h-96 h-full overflow-hidden w-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyGallery
