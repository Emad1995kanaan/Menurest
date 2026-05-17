export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon?: string;
  image: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "hot-drinks",
    title: "مشروبات ساخنة",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "h1", name: "قهوة تركية", description: "قهوة تركية غنية ومحضرة على الأصول", price: 15, isPopular: true },
      { id: "h2", name: "اسبريسو", description: "شوت اسبريسو مكثف", price: 12 },
      { id: "h3", name: "كابتشينو", description: "اسبريسو مع الحليب المبخر والرغوة الغنية", price: 18 },
      { id: "h4", name: "لاتيه", description: "قهوة مع الكثير من الحليب المبخر", price: 18 },
      { id: "h5", name: "شاي", description: "شاي أحمر أو أخضر", price: 10 },
    ]
  },
  {
    id: "cold-drinks",
    title: "مشروبات باردة",
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "c1", name: "موهيتو فراولة", description: "موهيتو منعش بنكهة الفراولة والنعناع", price: 22, isPopular: true },
      { id: "c2", name: "آيس لاتيه", description: "اسبريسو مع الحليب والمثلج", price: 20 },
      { id: "c3", name: "عصير برتقال طازج", price: 15 },
      { id: "c4", name: "مشروبات غازية", price: 8 },
    ]
  },
  {
    id: "desserts",
    title: "الحلويات",
    icon: "CakeSlice",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "d1", name: "تشيز كيك فراولة", description: "شريحة تشيز كيك مع صوص الفراولة الطازج", price: 25 },
      { id: "d2", name: "كيكة شوكولاتة", description: "كيكة غنية بطبقات الشوكولاتة البلجيكية", price: 28 },
      { id: "d3", name: "براونيز مع آيس كريم", price: 24 },
      { id: "d4", name: "تيراميسو", description: "حلوى إيطالية كلاسيكية بنكهة القهوة", price: 30, isPopular: true },
    ]
  },
  {
    id: "main-courses",
    title: "الأطباق الرئيسية",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "m1", name: "بيتزا مارغريتا", description: "صلصة الطماطم والجبن الإيطالي والريحان", price: 40, isPopular: true },
      { id: "m2", name: "باستا ألفريدو", description: "مكرونة مع الدجاج وصلصة الكريمة والفطر", price: 48 },
      { id: "m3", name: "برجر كلاسيك", description: "شريحة لحم بقري مع الجبن، خس، طماطم تقدم مع البطاطس", price: 45 },
      { id: "m4", name: "سلطة سيزر", description: "خس طازج مع الدجاج المشوي وصلصة السيزر والخبز المحمص", price: 35 },
    ]
  }
];
