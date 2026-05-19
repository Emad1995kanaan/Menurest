export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
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
    title: "المشروبات الساخنة",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "h1", name: "اسبريسو سنجل", description: "جرعة مكثفة من القهوة الغنية لبداية يومك بطاقة كاملة", price: 8, isPopular: true },
      { id: "h2", name: "اسبريسو دبل", description: "جرعة مضاعفة من الاسبريسو لعشاق القهوة القوية", price: 12 },
      { id: "h3", name: "ميكاتو", description: "اسبريسو مع لمسة ناعمة من رغوة الحليب", price: 10 },
      { id: "h4", name: "كابتشينو", description: "مزيج متناغم من الاسبريسو مع الحليب المبخر والرغوة المخملية", price: 12, isPopular: true },
      { id: "h5", name: "فلات وايت", description: "قهوة ناعمة ومركزة مع حليب مبخر بدون رغوة كثيفة", price: 12 },
      { id: "h6", name: "امريكانو", description: "قهوة سوداء كلاسيكية خفيفة ومثالية في أي وقت", price: 10 },
      { id: "h7", name: "كافيه لاتيه", description: "الكثير من الحليب الدافئ مع طبقة رقيقة من القهوة", price: 12 },
      { id: "h8", name: "شاي لاتيه", description: "شاي ممزوج مع الحليب المبخر لتجربة دافئة ومريحة", price: 12 },
      { id: "h9", name: "كراميل", description: "مشروب دافئ محلى بصوص الكراميل الغني بنكهة لا تقاوم", price: 12 },
      { id: "h10", name: "فرنش فانيلا", description: "مشروب بنكهة الفانيليا الفرنسية الأصيلة الفاخرة", price: 12 },
      { id: "h11", name: "فرنش بندق", description: "نكهة البندق المحمص الدافئة مدمجة في مشروبك اللذيذ", price: 12 },
      { id: "h12", name: "لوتوس", description: "طعم الكراميل والبسكويت الغني في مشروب اللوتس المميز", price: 14, isPopular: true },
      { id: "h13", name: "موكا", description: "تناغم رائع بين القهوة وصوص الشوكولاتة اللذيذة", price: 14 },
      { id: "h14", name: "وايت موكا", description: "مذاق الشوكولاتة البيضاء الحلو يتجانس مع القهوة الفاخرة", price: 14 },
      { id: "h15", name: "سحلب", description: "مشروب الشتاء المفضل مزين بالمكسرات والقرفة الساحرة", price: 8, isPopular: true },
      { id: "h16", name: "نسكافيه", description: "القهوة السريعة الكلاسيكية لبداية يومك بلطف", price: 8 },
      { id: "h17", name: "زهورات مكس", description: "مجموعة منتقاة من الأعشاب المفيدة لتهدئة الأعصاب", price: 7 },
      { id: "h18", name: "شاي اطعمه", description: "شاي بنكهتك المفضلة لتجربة منعشة ودافئة", price: 7 },
      { id: "h19", name: "اضافه أي طعم لاي مشروب", description: "اجعل مشروبك على ذوقك مع إضافة نكهتك المفضلة", price: 2 },
    ]
  },
  {
    id: "cold-drinks",
    title: "المشروبات الباردة",
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "c1", name: "ايس كوفي", description: "قهوة منعشة مبردة تروي عطشك وتزيد تركيزك", price: 10, isPopular: true },
      { id: "c2", name: "ايس امريكانو", description: "الامريكانو المنعش مع قطع الثلج لأيام الصيف", price: 10 },
      { id: "c3", name: "ايس لاتيه", description: "اسبريسو مع الحليب البارد والثلج لمذاق خفيف ونضر", price: 12 },
      { id: "c4", name: "ايس مسفلورا", description: "مشروب صيفي بارد بنكهة فاكهة الباشن فروت (المسفلورا)", price: 12 },
      { id: "c5", name: "ايس جوز هند", description: "برودة الصيف مع نكهة جوز الهند الاستوائية", price: 12 },
      { id: "c6", name: "ايس تي خوخ", description: "شاي مثلج بنكهة الخوخ، الانتعاش الحقيقي في رشفة", price: 12, isPopular: true },
      { id: "c7", name: "بينا كولادا", description: "المزيج الاستوائي الأشهر من الأناناس وجوز الهند", price: 12 },
      { id: "c8", name: "ايس اناناس", description: "برودة وعذوبة الأناناس في مشروب منعش ولذيذ", price: 14 },
    ]
  },
  {
    id: "waffles",
    title: "الوافل",
    icon: "CakeSlice",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "w1", name: "وافل كلاسيك", description: "قطعة وافل ذهبية هشة تقدم مع شراب القيقب الحلو" },
      { id: "w2", name: "وافل اوريو", description: "وافل مغطى بفتات بسكويت الأوريو مع صوص الشوكولاتة" },
      { id: "w3", name: "وافل فستق حلبي", description: "لعشاق الفستق، وافل مغطى بكريمة ومقرمشات الفستق الحلبي", isPopular: true },
      { id: "w4", name: "وافل لوتوس", description: "طعم فريد مع زبدة ومقرمشات اللوتس الغنية" },
      { id: "w5", name: "وافل جيلاتولاب محشي", description: "تجربة استثنائية لوافل محشي بمكونات سرية لدينا" },
    ]
  },
  {
    id: "crepes",
    title: "الكريب",
    icon: "CakeSlice",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "cr1", name: "كريب كلاسيك", description: "كريب فرنسي رقيق وهش مع إضافات السكر أو النوتيلا الكلاسيكية" },
      { id: "cr2", name: "كريب لوتوس", description: "حلاوة الكريب مع زبدة لوتس المذابة الساحرة", isPopular: true },
      { id: "cr3", name: "بان كيك فستق حلبي", description: "عجينة لذيذة تتشبع بصوص الفستق الحلبي الفاخر" },
      { id: "cr4", name: "كريب اوريو", description: "عجينة كريب مميزة مع حشوة الأوريو المقرمش" },
      { id: "cr5", name: "فوتوشيني كريب", description: "كريب مقطع كشرائط الباستا غارقة بصوصات شوكولاتة متنوعة", isPopular: true },
      { id: "cr6", name: "كريب جيلاتولاب محشي", description: "كريب محشو بلمسة جيلاتولاب السرية لمذاق لا ينسى" },
    ]
  },
  {
    id: "affogato-gelato",
    title: "افوكاتو جيلاتو",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "af1", name: "افوكاتو كلاسيك", description: "كرة جيلاتو فانيلا غارقة في جرعة اسبريسو ساخنة", price: 12 },
      { id: "af2", name: "افوكاتو نوتيلا", description: "الافوكاتو مع لمسة من شوكولاتة النوتيلا الغنية", price: 14, isPopular: true },
      { id: "af3", name: "افوكاتو فوريرو", description: "مزيج القهوة مع نكهة شوكولاتة الفريرو روشيه", price: 16 },
      { id: "af4", name: "افوكاتو فستق حلبي", description: "فستق حلبي مميز مدمج مع تناقض القهوة الساخنة والجيلاتو", price: 16 },
      { id: "af5", name: "افوكاتو لوتوس", description: "مزيج مبهر من النكهات يجمع اللوتس، الجيلاتو والقهوة", price: 16 },
      { id: "af6", name: "افوكاتو تيراميسو", description: "حلوى التيراميسو الإيطالية بصيغة الافوكاتو المنعش الساخن", price: 16, isPopular: true },
    ]
  },
  {
    id: "pancakes-fashafesh",
    title: "البان كيك \\ فشافيش",
    icon: "CakeSlice",
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "pc1", name: "بان كيك كاسة", description: "طبقات من ميني بان كيك تقدم في كوب مع صوصات غنية" },
      { id: "pc2", name: "بان كيك كلاسيك", description: "شرائح البان كيك الذهبية، الطرية، مع السيرب اللذيذ" },
      { id: "pc3", name: "بان كيك لوتوس", description: "بان كيك مغطى بكرم من صوص اللوتس الدافئ", isPopular: true },
      { id: "pc4", name: "بان كيك فستق حلبي", description: "طعم الشرق الفاخر يتألق مع البان كيك وصوص الفستق" },
      { id: "pc5", name: "بان كيك اوريو", description: "مزيج طراوة البان كيك مع قرمشة بسكويت الأوريو" },
      { id: "pc6", name: "بان كيك جيلاتولاب محشي", description: "لمحبي المفاجآت، بان كيك محشو بالنكهة التي تحبها", isPopular: true },
    ]
  },
  {
    id: "fresh-drinks",
    title: "المشروبات الطازجة",
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "fd1", name: "ليموناضة", description: "عصير الليمون الطازج بالنعناع لانتعاش مثالي في أي وقت", price: 10 },
      { id: "fd2", name: "ليمون ونعنع", description: "الخلطة الكلاسيكية لأقصى درجات الانتعاش الصيفي", price: 12, isPopular: true },
      { id: "fd3", name: "مانجا", description: "عصير المانجا الاستوائي الكثيف والغني بالطعم", price: 14 },
    ]
  },
  {
    id: "milkshakes",
    title: "ملك شيك",
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "ms1", name: "ملك شيك شوكليت", description: "ميلك شيك كلاسيكي لعشاق الشوكولاتة الغنية" },
      { id: "ms2", name: "ملك شيك فانيلا", description: "مزيج الحليب والفانيليا الفاخرة لطعم ناعم وحلو" },
      { id: "ms3", name: "ملك شيك فراولة", description: "حلاوة الفراولة الطازجة في ميلك شيك لذيذ وبارد" },
      { id: "ms4", name: "ملك شيك اوريو", description: "بسكويت الأوريو المطحون يمتزج مع الحليب للذة مضاعفة", isPopular: true },
      { id: "ms5", name: "ملك شيك لوتوس", description: "صوص اللوتس وبسكويته يذوبان في مشروب غني وحالي" },
      { id: "ms6", name: "ملك شيك كورنيتو", description: "نكهة ايسكريم الكورنيتو الشهيرة على شكل مشروب بارد" },
      { id: "ms7", name: "ملك شيك فوريرو", description: "شوكولاتة البندق الفاخرة ممزوجة في مشروب ملكي" },
      { id: "ms8", name: "ملك شيك جيلاتولاب", description: "وصفة جيلاتولاب الخاصة والسرية للميلك شيك" },
      { id: "ms9", name: "ملك شيك دبي بالفستق الحلبي", description: "نكهة الشوكولاتة الشهيرة دبي مع الفستق الحلبي الأصيل", isPopular: true },
    ]
  },
  {
    id: "soft-drinks",
    title: "سوفت درنكس",
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "sd1", name: "كولا / سبرايت", description: "المشروبات الغازية الكلاسيكية والمنعشة", price: 5 },
      { id: "sd2", name: "اكس ال", description: "مشروب طاقة لزيادة حيويتك ونشاطك", price: 8 },
      { id: "sd3", name: "بلو. داي/ نعنع / سك", description: "مشروب بلو المنعش بنكهات متعددة", price: 7 },
      { id: "sd4", name: "فيروز اناناس", description: "مشروب شعير خالي من الكحول بنكهة الأناناس", price: 7 },
      { id: "sd5", name: "بافاريا تفاح", description: "مشروب التفاح الغازي الخالي من الكحول", price: 7 },
      { id: "sd6", name: "صودا سك", description: "مياه غازية سادة لمزيد من الانتعاش", price: 7 },
      { id: "sd7", name: "مياه معدنية صغير", description: "الخيار الصحي والأساسي، حجم مناسب", price: 3 },
      { id: "sd8", name: "مياه معدنية كبير", description: "مياه نقية منعشة حجم عائلي", price: 6 },
    ]
  },
  {
    id: "mojito",
    title: "الموهيتو",
    icon: "CupSoda",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "mo1", name: "ديتوكس صودا وخيار", description: "مشروب نقي ومنعش لتصفية الجسم والمزاج", price: 10 },
      { id: "mo2", name: "موهيتو ليمون", description: "موهيتو كلاسيكي لا غنى عنه، ليمون ونعناع منعش" },
      { id: "mo3", name: "موهيتو بطيخ", description: "حلاوة البطيخ الصيفي ممزوجة بالموهيتو المنعش", isPopular: true },
      { id: "mo4", name: "موهيتو رمان", description: "نكهة الرمان الغنية تضفي لوناً وطعماً مميزاً", isPopular: true },
      { id: "mo5", name: "موهيتو كيوي", description: "الكيوي الحامض الحلو يندمج ببراعة في مشروبك" },
      { id: "mo6", name: "موهيتو بيل جام كاندي", description: "طعم الحلوى الساحر الذي سيذكرك بأيام الطفولة" },
      { id: "mo7", name: "موهيتو بلو اناناس", description: "مزيج منعش من أناناس استوائي بلمسة بلوبيري رائعة" },
      { id: "mo8", name: "موهيتو فواكه استوائيه", description: "تشكيلة من فواكه الصيف الاستوائية في كوب واحد" },
      { id: "mo9", name: "موهيتو تفاح اخضر", description: "حموضة التفاح الأخضر اللذيذة تنعش حواسك" },
      { id: "mo10", name: "موهيتو جيلاتولاب", description: "الموهيتو الخاص بالمكان بمكونات فريدة" },
      { id: "mo11", name: "اكس ال اضافه", description: "أضف مشروب الطاقة لمزيد من الحيوية", price: 4 },
    ]
  },
  {
    id: "gelato",
    title: "جيلاتو",
    icon: "IceCream",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: "g1", name: "فانيلا", description: "بوظة الجيلاتو الإيطالية الكلاسيكية والناعمة جداً" },
      { id: "g2", name: "شوكليت", description: "لعشاق الكاكاو، جيلاتو الشوكولاتة الداكنة أو الحليب" },
      { id: "g3", name: "فراوله", description: "جيلاتو منعش بنكهة الفراولة الطبيعية", isPopular: true },
      { id: "g4", name: "مانجا", description: "عشقالصيف بنكهة المانجا اللذيذة والمنعشة" },
      { id: "g5", name: "اوريو", description: "جيلاتو بقطع الأوريو المقرمشة" },
      { id: "g6", name: "لوتوس", description: "نكهة زبدة اللوتس تتألق في هذا الجيلاتو المتقن", isPopular: true },
      { id: "g7", name: "فوريرو", description: "البندق والشوكولاتة يجتمعان في جيلاتو فريرو روشيه الدافئ بالمذاق" },
      { id: "g8", name: "رفايلو", description: "طعم جوز الهند الرائع مستوحى من شوكولاتة رافايلو البيضاء" },
      { id: "g9", name: "سنكرز", description: "کراميل وفول سوداني في جيلاتو السنيكرز الشهي" },
      { id: "g10", name: "بلجيكي دارك", description: "مذاق الشوكولاتة البلجيكية الداكنة لمحبي القهوة القوية" },
      { id: "g11", name: "تيراميسو", description: "حلوى التيراميسو الإيطالية تحولت لجيلاتو فاخر" },
      { id: "g12", name: "تفاح اخضر", description: "جيلاتو سوربيه التفاح الأخضر الخفيف والحامض" },
      { id: "g13", name: "مسفلورا", description: "السوربيه المنعش بنكهة فاكهة الحب المسفلورا" },
      { id: "g14", name: "ليمون ونعنع", description: "انتعاش السوربيه المطلق بالليمون والنعناع" },
      { id: "g15", name: "تشيز كيك", description: "جيلاتو بنكهة التشيز كيك الغنية والجبن الكريمي" },
      { id: "g16", name: "رمان", description: "نكهة الرمان الرائعة في بوظة سوربيه لذيذة" },
      { id: "g17", name: "مانجا سوربيه", description: "سوربيه مانجا استوائي بدون منتجات ألبان" },
    ]
  }
];
