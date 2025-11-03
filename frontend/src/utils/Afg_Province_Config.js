export const afghanistanProvinces = [
  { id: "AFG-BAL-001", value: "balkh", label: "بلخ" },
  { id: "AFG-HER-002", value: "herat", label: "هرات" },
  { id: "AFG-KAB-003", value: "kabul", label: "کابل" },
  { id: "AFG-KAN-004", value: "kandahar", label: "قندهار" },
  { id: "AFG-NAN-005", value: "nangarhar", label: "ننگرهار" },
  { id: "AFG-BDS-006", value: "badakhshan", label: "بدخشان" },
  { id: "AFG-BDG-007", value: "badghis", label: "بادغیس" },
  { id: "AFG-BGL-008", value: "baghlan", label: "بغلان" },
  { id: "AFG-BAM-009", value: "bamyan", label: "بامیان" },
  { id: "AFG-DAY-010", value: "daykundi", label: "دایکندی" },
  { id: "AFG-FRA-011", value: "farah", label: "فراه" },
  { id: "AFG-FYB-012", value: "faryab", label: "فاریاب" },
  { id: "AFG-GHA-013", value: "ghazni", label: "غزنی" },
  { id: "AFG-GHO-014", value: "ghor", label: "غور" },
  { id: "AFG-HEL-015", value: "helmand", label: "هلمند" },
  { id: "AFG-JOW-016", value: "jowzjan", label: "جوزجان" },
  { id: "AFG-KAP-017", value: "kapisa", label: "کاپیسا" },
  { id: "AFG-KHO-018", value: "khost", label: "خوست" },
  { id: "AFG-KNR-019", value: "kunar", label: "کنر" },
  { id: "AFG-KDZ-020", value: "kunduz", label: "کندز" },
  { id: "AFG-LAG-021", value: "laghman", label: "لغمان" },
  { id: "AFG-LOG-022", value: "logar", label: "لوگر" },
  { id: "AFG-NIM-023", value: "nuristan", label: "نورستان" },
  { id: "AFG-PKA-024", value: "paktia", label: "پکتیا" },
  { id: "AFG-PIA-025", value: "paktika", label: "پکتیکا" },
  { id: "AFG-PAN-026", value: "panjshir", label: "پنجشیر" },
  { id: "AFG-PAR-027", value: "parwan", label: "پروان" },
  { id: "AFG-SAM-028", value: "samangan", label: "سمنگان" },
  { id: "AFG-SAR-029", value: "sar-e-pol", label: "سرپل" },
  { id: "AFG-TAK-030", value: "takhar", label: "تخار" },
  { id: "AFG-URU-031", value: "uruzgan", label: "ارزگان" },
  { id: "AFG-WAR-032", value: "wardak", label: "وردک" },
  { id: "AFG-ZAB-033", value: "zabul", label: "زابل" }
];

// home situation rental/selling/morragage
export const homeSituation = [
  {
    id:"homeSituation_1",
    label: 'کرایی',
    value:'rental'
  },
    {
    id:"homeSituation_2",
    label: 'گیرویی',
    value:'mortgaged'
  },
    {
    id:"homeSituation_3",
    label: 'فروشی',
    value:'selling'
  }

]


// home prices started from 10/50
export const homePrices = [ 
  {
    id:"PriceModelRentalHome_1",
    label: 'زیر ده هزار',
    value:'rent_10'
  },
    {
    id:"PriceModelRentalHome_2",
    label: 'زیر 20 هزار',
    value:'rent_20'
  },
  {
    id:"PriceModelRentalHome_3",
    label: 'زیر 50 هزار',
    value:'rent_50'
  },
    {
    id:"PriceModelRentalHome_3",
    label: 'بالایی 50 هزار',
    value:'rent_200'
  },
]

export const numberOfRooms = [
    {
    id:"HomeBedRooms_1",
    label: '2 اظاقه',
    value:'2 rooms'
  },
      {
    id:"HomeBedRooms_2",
    label: '3 اظاقه',
    value:'3 rooms'
  },
  {
    id:"HomeBedRooms_3",
    label: '4 اظاقه',
    value:'4 rooms'
  },
  {
    id:"HomeBedRooms_4",
    label: 'بیشتر از 4',
    value:'more then 4'
  },
]

import { image1 } from "../assets/images";

export const housesData = [
  {
    id: 1,
    title: "ویلای مدرن در کارته سخی",
    type: "ویلا",
    description: "ویلای لوکس و مدرن با طراحی داخلی شیک، دارای ۴ خوابه، ۳ حمام، آشپزخانه مجهز و حیاط بزرگ. موقعیت عالی در بهترین منطقه مسکونی کابل با دسترسی آسان به مراکز خرید و بیمارستان.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 2,
    title: "آپارتمان نوساز در شهر نو",
    type: "آپارتمان",
    description: "آپارتمان ۳ خوابه کاملاً نوساز با نمای زیبا، سیستم گرمایش مرکزی، پارکینگ اختصاصی و امنیت ۲۴ ساعته. مناسب برای خانواده‌های جوان در منطقه آرام و مسکونی.",
    imageUrl: image1,
  houseType: 'گیراویی'  },
  {
    id: 3,
    title: "خانه کلاسیک در کارته سه",
    type: "خانه مستقل",
    description: "خانه سنتی با معماری اصیل افغانی، ۵ خوابه، حیاط بزرگ با باغچه، حوض سنتی و فضای مناسب برای مهمانی. در منطقه تاریخی و فرهنگی کابل واقع شده است.",
    imageUrl: image1,
  houseType: 'فروشی'  },
  {
    id: 4,
    title: "پنت هاوس در وزیرآباد",
    type: "پنت هاوس",
    description: "پنت هاوس لوکس با تراس بزرگ و چشم‌انداز پانوراما از شهر، ۳ خوابه، آشپزخانه اروپایی و سیستم هوشمند. مناسب برای زندگی مدرن و لاکچری.",
    imageUrl: image1,
  houseType: 'کرایی'  },
  {
    id: 5,
    title: "آپارتمان استودیو در مکرویان",
    type: "آپارتمان",
    description: "آپارتمان استودیو کاملاً مبله با فضای بهینه‌سازی شده، مناسب برای افراد مجرد یا زوج‌های جوان. شامل تمام امکانات ضروری و اینترنت پرسرعت.",
    imageUrl: image1,
  houseType: 'گیراویی'  },
  {
    id: 6,
    title: "خانه باغ در پغمان",
    type: "خانه باغ",
    description: "خانه ویلایی با باغ بزرگ و درختان میوه، ۴ خوابه، استخر شنا و فضای باربیکیو. محیط آرام و طبیعی دور از شلوغی شهر اما با دسترسی آسان.",
    imageUrl: image1,
  houseType: 'گیراویی'  },
  {
    id: 7,
    title: "آپارتمان دو خوابه در ده افغانان",
    type: "آپارتمان",
    description: "آپارتمان مقرون به صرفه با ۲ خوابه، آشپزخانه مجهز و بالکن. منطقه آرام با همسایه‌های خوب و نزدیک به مدارس و بازار محلی.",
    imageUrl: image1,
  houseType: 'فروشی'  },
  {
    id: 8,
    title: "ویلای تفریحی در دره پنجشیر",
    type: "ویلا",
    description: "ویلای زیبا در دامنه کوه‌های پنجشیر با چشم‌انداز طبیعی خیره‌کننده، ۳ خوابه، شومینه سنگی و فضای عالی برای استراحت و تفریح.",
    imageUrl: image1,
  houseType: 'فروشی'  },
  {
    id: 9,
    title: "آپارتمان نوساز در تیمنی",
    type: "آپارتمان",
    description: "آپارتمان مدرن در منطقه تجاری تیمنی، ۲ خوابه با طراحی داخلی مدرن، سیستم امنیتی پیشرفته و نزدیک به دفاتر دولتی و بانک‌ها.",
    imageUrl: image1,
  houseType: 'فروشی'  },
  {
    id: 10,
    title: "خانه سنتی در چندول",
    type: "خانه مستقل",
    description: "خانه قدیمی با معماری سنتی، ۴ خوابه، حیاط داخلی بزرگ و حوض مرکزی. مناسب برای خانواده‌های بزرگ با سبک زندگی سنتی.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 11,
    title: "آپارتمان لوکس در کارته چهار",
    type: "آپارتمان",
    description: "آپارتمان لوکس با امکانات پنج ستاره، ۳ خوابه، جکوزی، سونا و سالن ورزشی اختصاصی. امنیت کامل با گارد و دوربین‌های مداربسته.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 12,
    title: "خانه مدرن در قلعه فتح الله",
    type: "خانه مستقل",
    description: "خانه نوساز با طراحی مدرن، ۵ خوابه، استخر سرپوشیده و باغ ژاپنی. در منطقه تاریخی با امکانات مدرن زندگی کنید.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 13,
    title: "آپارتمان اقتصادی در دشت برچی",
    type: "آپارتمان",
    description: "آپارتمان مقرون به صرفه با ۲ خوابه، مناسب برای خانواده‌های کم درآمد. منطقه در حال توسعه با امکانات اولیه زندگی.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 14,
    title: "ویلای ساحلی در کارگاه",
    type: "ویلا",
    description: "ویلای زیبا نزدیک دریاچه، ۴ خوابه با تراس بزرگ رو به آب، قایق اختصاصی و فضای ماهیگیری. محیط آرام برای فرار از شلوغی.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 15,
    title: "آپارتمان مبله در پل محمود",
    type: "آپارتمان",
    description: "آپارتمان کاملاً مبله با ۱ خوابه، مناسب برای اجاره کوتاه مدت. شامل تمام وسایل ضروری و خدمات نظافت هفتگی.",
    imageUrl: image1,
    houseType: 'فروشی'
  },
  {
    id: 16,
    title: "خانه باغ در ارگ",
    type: "خانه باغ",
    description: "خانه تاریخی با باغ بزرگ و درختان قدیمی، ۶ خوابه، حوضخانه و فضای مناسب برای مراسم. در منطقه تاریخی و ارزشمند.",
    imageUrl: image1,
    houseType: 'گیروایی'
  },
  {
    id: 17,
    title: "آپارتمان دو طبقه در کارته پروان",
    type: "آپارتمان دوبلکس",
    description: "آپارتمان دوبلکس با طراحی خاص، ۴ خوابه در دو طبقه، آشپزخانه بزرگ و پذیرایی مجزا. مناسب برای خانواده‌های گسترده.",
    imageUrl: image1,
    houseType: 'گیراویی'
  },
  {
    id: 18,
    title: "ویلای کوهستانی در دره اونی",
    type: "ویلا",
    description: "ویلای چوبی در ارتفاعات، ۳ خوابه با شومینه بزرگ و چشم‌انداز کوهستان. هوای پاک و محیط کاملاً طبیعی برای علاقه‌مندان به طبیعت.",
    imageUrl: image1,
    houseType: 'فروشی'
  },
  {
    id: 19,
    title: "آپارتمان نوساز در قلعه مراد بیک",
    type: "آپارتمان",
    description: "آپارتمان مدرن در منطقه مسکونی مرفه، ۳ خوابه با امکانات کامل، پارکینگ زیرزمینی و آسانسور. نزدیک به مراکز خرید معروف.",
    imageUrl: image1,
    houseType: 'کرایی'
  },
  {
    id: 20,
    title: "خانه سنتی بازسازی شده در چهل ستون",
    type: "خانه مستقل",
    description: "خانه تاریخی با بازسازی مدرن، ۴ خوابه با حفظ معماری اصیل اما با امکانات امروزی. حیاط بزرگ با فواره و باغچه‌های گل.",
    imageUrl: image1,
    houseType: 'کرایی'
  }
];

// export default housesData;

export const getHouseTypeColor = (houseType) => {
        switch(houseType) {
            case 'کرایی':
            return 'bg-red-500';
            case 'گیراویی':
            return 'bg-blue-500';
            case 'فروشی':
            return 'bg-yellow-500';
            default:
            return 'bg-gray-500';
        }
};