/* المصدر المركزي لمعرض المختبرات والألعاب التفاعلية. */
window.BANDAR_LAB_CATEGORIES = [
  { id: 'molecular', title: 'الجزيئات والروابط' },
  { id: 'elements', title: 'العناصر والتوزيع الإلكتروني' },
  { id: 'reactions', title: 'الأحماض والتفاعلات' },
  { id: 'games', title: 'ألعاب صفية' }
];

window.BANDAR_LABS = [
  {
    id: 'ionic-metals-review',
    title: 'المركبات الأيونية والفلزات',
    category: 'molecular',
    description: 'تكوين الأيونات والمركبات الأيونية، الشبكة البلورية، التسمية، الروابط الفلزية والسبائك',
    meta: 'كيمياء 2-1 · الفصل 3 ←',
    icon: 'layers-3',
    preview: 'periodic',
    search: 'الأيونات تكوين الأيونات الروابط الأيونية الشبكة البلورية التسمية الروابط الفلزية السبائك'
  },
  {
    id: 'covalent-bonds',
    title: 'مختبر الروابط التساهمية',
    category: 'molecular',
    description: 'تشارك الإلكترونات وتراكيب لويس والسالبية والقطبية وأشكال الجزيئات وفق VSEPR',
    meta: 'مختبر تفاعلي متقدم ←',
    icon: 'share-2',
    preview: 'molecule',
    search: 'تراكيب لويس أشكال الجزيئات السالبية القطبية VSEPR'
  },
  {
    id: 'metallic-bond',
    title: 'مختبر الرابطة الفلزية',
    category: 'molecular',
    description: 'نموذج بحر الإلكترونات وعلاقته بالتوصيل والطرق والسحب والصلادة والسبائك',
    meta: 'كيمياء 2-1 · الدرس 3-4 ←',
    icon: 'zap',
    preview: 'bars',
    search: 'بحر الإلكترونات التوصيل السبائك خواص الفلزات'
  },
  {
    id: 'daily-molecules',
    title: 'جزيئات من حياتنا اليومية',
    category: 'molecular',
    description: 'استكشاف نماذج ثلاثية الأبعاد لجزيئات ومركبات من الحياة اليومية مع التعرف إلى الذرات والروابط',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'atom',
    preview: 'molecule',
    search: 'نماذج ثلاثية الأبعاد مركبات الحياة اليومية'
  },
  {
    id: 'molecular-shapes',
    title: 'أشكال الجزيئات',
    category: 'molecular',
    description: 'تطبيق نموذج VSEPR لاستكشاف أشكال الجزيئات والتهجين وزوايا الروابط وأثر الأزواج غير الرابطة',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'atom',
    preview: 'molecule',
    search: 'أشكال الجزيئات التهجين زوايا الروابط'
  },
  {
    id: 'molecular-structures',
    title: 'التراكيب الجزيئية',
    category: 'molecular',
    description: 'التفريق بين الصيغة الجزيئية والبنائية ورسم تراكيب لويس وفهم الرنين والرابطة التساهمية التناسقية',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'share-2',
    preview: 'molecule',
    search: 'تراكيب لويس الرنين الروابط التساهمية التناسقية'
  },
  {
    id: 'atomic-structure',
    title: 'مختبر مكونات الذرة',
    category: 'elements',
    description: 'تطور نماذج الذرة وتجارب اكتشاف الإلكترون والنواة والبروتون والنيوترون',
    meta: 'كيمياء 1 · أول ثانوي ←',
    icon: 'atom',
    preview: 'periodic',
    search: 'مكونات الذرة كيمياء 1 أول ثانوي دالتون الإلكترون طومسون رذرفورد البروتون النيوترون'
  },
  {
    id: 'molecular',
    title: 'تدرج خواص العناصر',
    category: 'elements',
    description: 'استكشاف الاتجاهات الدورية ومقارنة خواص العناصر وطاقات التأين المتتالية',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'atom',
    preview: 'periodic',
    search: 'تدرج خواص العناصر الاتجاهات الدورية'
  },
  {
    id: 'elements',
    title: 'العناصر والمركبات والجدول الدوري',
    category: 'elements',
    description: 'تمييز العناصر والمركبات والمخاليط واستكشاف مواضع العناصر في الجدول الدوري',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'layers',
    preview: 'periodic',
    search: 'العناصر المركبات المخاليط المواد النقية الجدول الدوري خواص المركبات'
  },
  {
    id: 'lesson',
    title: 'مختبر التوزيع الإلكتروني',
    category: 'elements',
    description: 'تمثيل التوزيع الإلكتروني للعناصر بنموذج بور والترميز الإلكتروني ومخطط أوفباو وتمثيل لويس',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'book-open-check',
    preview: 'periodic',
    search: 'التوزيع الإلكتروني مستويات الطاقة العناصر'
  },
  {
    id: 'conductivity',
    title: 'خواص الأحماض والقواعد',
    category: 'reactions',
    description: 'تمييز الأحماض والقواعد واختبار الأدلة والتوصيل الكهربائي وتفاعلها مع الفلزات والكربونات',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'zap',
    preview: 'bars',
    search: 'الأحماض القواعد التوصيل الكهربائي'
  },
  {
    id: 'acid-ph',
    title: 'قوة الأحماض والقواعد والرقم الهيدروجيني',
    category: 'reactions',
    description: 'مقارنة قوة الأحماض والقواعد والرقم الهيدروجيني وثوابت التأين للأحماض والقواعد الضعيفة',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'flask-conical',
    preview: 'bars',
    search: 'قوة الأحماض القواعد الرقم الهيدروجيني pH'
  },
  {
    id: 'reaction-types',
    title: 'تصنيف التفاعلات الكيميائية',
    category: 'reactions',
    description: 'تصنيف الأنواع الخمسة للتفاعلات وكتابة صيغها واستخدام سلاسل النشاط للتنبؤ بالإحلال الأحادي',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'shuffle',
    preview: 'equation',
    search: 'أنواع التفاعلات الكيميائية تصنيفها'
  },
  {
    id: 'redox',
    title: 'الأكسدة والاختزال',
    category: 'reactions',
    description: 'تتبع انتقال الإلكترونات وحساب أعداد التأكسد وموازنة معادلات الأكسدة والاختزال',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'refresh-cw',
    preview: 'equation',
    search: 'الأكسدة الاختزال انتقال الإلكترونات أعداد التأكسد موازنة'
  },
  {
    id: 'reactions-equations',
    title: 'التفاعلات والمعادلات',
    category: 'reactions',
    description: 'التعرف على دلائل التغير الكيميائي وتمثيل التفاعلات بالمعادلات الكيميائية الموزونة',
    meta: 'فتح الصفحة المستقلة ←',
    icon: 'shuffle',
    preview: 'equation',
    search: 'التفاعلات المعادلات الكيميائية وزن المعادلات'
  },
  {
    id: 'compound-struggle',
    title: 'صراع المركبات',
    category: 'games',
    description: 'مسابقة جماعية لمراجعة رموز العناصر والصيغ والمركبات والروابط الكيميائية',
    meta: 'فتح اللعبة ←',
    icon: 'trophy',
    preview: 'equation',
    search: 'مسابقة جماعية العناصر المركبات الروابط الكيميائية لعبة'
  },
  {
    id: 'tahsili-challenge',
    title: 'تحدي التحصيلي — كيمياء 1',
    category: 'games',
    description: 'مسابقة فرق في خمسة محاور: مقدمة الكيمياء، خواص المادة، تركيب الذرة، التفاعلات الكيميائية، والمول',
    meta: 'فتح اللعبة ←',
    icon: 'trophy',
    preview: 'equation',
    search: 'مسابقة فرق أسئلة تحصيلية كيمياء 1 خمسة محاور لعبة'
  },
  {
    id: 'chemistry-challenge',
    title: 'تحدي الكيمياء 1',
    category: 'games',
    description: 'مراجعة تنافسية في مقدمة الكيمياء وخواص المادة وتركيب الذرة والتفاعلات والموازنة والمول',
    meta: 'فتح اللعبة ←',
    icon: 'gamepad-2',
    preview: 'equation',
    search: 'مراجعة اختيار من متعدد صح وخطأ موازنة المعادلات لعبة'
  }
];
