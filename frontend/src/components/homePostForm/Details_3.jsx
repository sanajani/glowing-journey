import HouseFormInput from "./shared/HouseFormInput"
import HouseFormLabel from "./shared/HouseFormLabel"

const Details_3 = () => {
  return (
            <section>
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">جزئیات ملک</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "bedrooms", label: "تعداد خواب", type: 'number', min:1, placeholder: 'مثال 4' },
              { id: "bathrooms", label: "تعداد تشناب", type: 'number', min:1, placeholder: '2' },
              { id: "area", label: "مساحت (متر مربع)", type: 'number', min: 40, placeholder: '80' },
              { id: "floor", label: "طبقه فعلی", type: 'number', placeholder: '3' },
              { id: "totalFloor", label: "کل طبقات", type: 'number', placeholder:'4' },
              { id: "yearBuilt", label: "سال ساخت", type: 'text', placeholder:'2000 || 1388' },
            ].map((field) => (
              <div key={field.id}>
                <HouseFormLabel htmlFor={field.id} text={field.label} />
                <HouseFormInput placeholder={field.placeholder} min={field.min} id={field.id} type={field.type}  />
              </div>
            ))}
          </div>
        </section>
  )
}

export default Details_3