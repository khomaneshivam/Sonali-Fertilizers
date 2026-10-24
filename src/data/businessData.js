// Sonali Fertilizers - Business Data & Bilingual Content
// Derived from Google Business Profile & local agricultural market specifics (Sansar, Indapur, Pune)

export const BUSINESS_INFO = {
  name: "Sonali Fertilizers",
  nameMr: "सोनाली फर्टिलायझर्स",
  tagline: "Agro Service Center & Complete Crop Nutrition Solutions",
  taglineMr: "शेतकऱ्यांचा विश्वासू कृषी सेवा केंद्र व पीक पोषण सल्लागार",
  address: "Sansar-Kurawali Road, Mankarwadi, Sansar, Tal. Indapur, Dist. Pune, Maharashtra 413104",
  addressMr: "संसार-कुरा Frank-कुरावली रोड, मानकरवाडी, संसार, ता. इंदापूर, जि. पुणे, महाराष्ट्र ४१३१०४",
  phone: "+91 94230 34155",
  phoneSecondary: "+91 98816 54155",
  whatsappNumber: "919423034155",
  rating: 4.2,
  reviewsCount: 68,
  establishedYear: "2010",
  hours: "Monday – Sunday: 8:00 AM – 7:00 PM",
  hoursMr: "सोमवार ते रविवार: सकाळी ८:०० ते संध्याकाळी ७:००",
  isOpenToday: true,
  googleMapsUrl: "https://maps.google.com/?q=Sonali+Fertilizers+Sansar+Indapur+Maharashtra",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.354673892557!2d74.9200000!3d18.0600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc38d77c3a00001%3A0x1c3a000000000000!2sSonali%20Fertilizers!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
};

export const HIGHLIGHTS = [
  {
    id: 1,
    titleEn: "100% Genuine Certified Brands",
    titleMr: "१००% अस्सल व प्रमाणित ब्रँड्स",
    descEn: "Authorized stockist for IFFCO, GSFC, RCF, Mahadhan, Bayer, Syngenta, Mahyco, and leading agro brands.",
    descMr: "इफको, जीएसएफसी, आरसीएफ, महाधन, बायर, सिजेंटा आणि नामवंत कंपन्यांचे अधिकृत विक्रेते.",
    icon: "ShieldCheck"
  },
  {
    id: 2,
    titleEn: "Doorstep Farm Delivery",
    titleMr: "शेतात घरपोच डिलिव्हरी सुविधा",
    descEn: "Fast delivery for bulk fertilizers & seeds across Sansar, Kurawali, Indapur, Baramati & surrounding talukas.",
    descMr: "संसार, कुरावली, इंदापूर, बारामती व परिसरातील शेतकऱ्यांना थेट बांधावर खते पोहोच.",
    icon: "Truck"
  },
  {
    id: 3,
    titleEn: "Free Agronomist Crop Consultation",
    titleMr: "मोफत कृषी सल्ला व मार्गदर्शन",
    descEn: "Expert guidance for Sugarcane, Onion, Grapes, and Vegetables soil testing & disease control.",
    descMr: "ऊस, कांदा, द्राक्षे आणि भाजीपाला पिकांसाठी तज्ज्ञांकडून योग्य खत व फवारणी नियोजन.",
    icon: "GraduationCap"
  },
  {
    id: 4,
    titleEn: "Fair & Government Controlled Rates",
    titleMr: "रास्त व शासकीय नियमांनुसार दर",
    descEn: "Transparent subsidized pricing with digital billing on all chemical & bio fertilizers.",
    descMr: "पारदर्शक व्यवहार, पक्के बिल आणि रास्त शासकीय दरात सर्व प्रकारची खते उपलब्ध.",
    icon: "BadgePercent"
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "all", nameEn: "All Products", nameMr: "सर्व उत्पादने" },
  { id: "chemical", nameEn: "Chemical Fertilizers", nameMr: "रासायनिक खते" },
  { id: "soluble", nameEn: "100% Water Soluble / Drip", nameMr: "विद्राव्य खते (ठिबक)" },
  { id: "organic", nameEn: "Organic & Bio-Fertilizers", nameMr: "सेंद्रिय व जैविक खते" },
  { id: "cropcare", nameEn: "Crop Care & Protection", nameMr: "कीटकनाशके व बुरशीनाशके" },
  { id: "seeds", nameEn: "Certified Hybrid Seeds", nameMr: "प्रमाणित हायब्रिड बियाणे" }
];

export const PRODUCTS = [
  {
    id: "p1",
    nameEn: "IFFCO NPK 10:26:26 (Grade 1)",
    nameMr: "इफको एनपीके १०:२६:२६ (ग्रेड १)",
    category: "chemical",
    brand: "IFFCO",
    packaging: "50 kg Bag",
    image: "/assets/fertilizers.jpg",
    descriptionEn: "Top-choice basal fertilizer high in phosphorus and potassium. Essential for vigorous root establishment and heavy sugarcane/onion yields.",
    descriptionMr: "ऊस व कांदा पिकासाठी अत्यंत गुणकारी बेसल डोस खत. फॉस्फरस व पोटॅशचे उत्कृष्ट प्रमाण मुळांचा विकास करते.",
    keyBenefits: ["Root development booster", "Enhances drought resistance", "Ideal basal application for cash crops"],
    featured: true
  },
  {
    id: "p2",
    nameEn: "GSFC Sardar DAP (18:46:0)",
    nameMr: "जीएसएफसी सरदार डीएपी (१८:४६:०)",
    category: "chemical",
    brand: "GSFC",
    packaging: "50 kg Bag",
    image: "/assets/fertilizers.jpg",
    descriptionEn: "High nitrogen and phosphate content for robust vegetative start and heavy tillering in grain and cash crops.",
    descriptionMr: "पिकांची सुरुवातीची जोमदार वाढ व फुटवे वाढवण्यासाठी उच्च दर्जाचे डीएपी खत.",
    keyBenefits: ["18% Ammoniacal Nitrogen", "46% Available Phosphorus", "Quick root activation"],
    featured: true
  },
  {
    id: "p3",
    nameEn: "FACT Neem Coated Urea 46%",
    nameMr: "फॅक्ट नीम कोटेड युरिया ४६%",
    category: "chemical",
    brand: "FACT / RCF",
    packaging: "45 kg Bag",
    image: "/assets/fertilizers.jpg",
    descriptionEn: "Slow-release neem oil coating ensures minimal nitrogen leaching, vibrant green foliage, and healthy plant tillering.",
    descriptionMr: "कडुलिंब अर्कयुक्त युरिया, नत्राचा हळूहळू पुरवठा करतो, पानांमध्ये हिरवेगारपणा व सशक्त वाढ टिकवतो.",
    keyBenefits: ["Slow nitrogen release", "Prevents nitrification loss", "Cost-effective crop vigor"],
    featured: true
  },
  {
    id: "p4",
    nameEn: "Jaivik Bhumi Organic Bio-Fertilizer",
    nameMr: "जैविक भूमी सेंद्रिय जैव-खत",
    category: "organic",
    brand: "Jaivik Bhumi",
    packaging: "25 kg / 50 kg Bag",
    image: "/assets/fertilizers.jpg",
    descriptionEn: "FSSAI & NPOP certified organic manure with beneficial microbial consortia. Restores soil carbon and microbial balance.",
    descriptionMr: "सेंद्रिय प्रमाणित १००% नैसर्गिक खत. जमिनीचा पोत सुधारून सेंद्रिय कर्ब व उपयुक्त जिवाणू वाढवतो.",
    keyBenefits: ["Increases soil organic carbon", "Boosts earthworm activity", "Long-term soil health"],
    featured: true
  },
  {
    id: "p5",
    nameEn: "Mahadhan 19:19:19 100% Water Soluble",
    nameMr: "महाधन १९:१९:१९ विद्राव्य खत",
    category: "soluble",
    brand: "Mahadhan",
    packaging: "1 kg / 25 kg Bag",
    image: "/assets/crop_care.jpg",
    descriptionEn: "Balanced NPK for drip irrigation fertigation and foliar spray during active vegetative growth phase.",
    descriptionMr: "ठिबक सिंचन व फवारणीसाठी १००% विद्राव्य संतुलित खत. वाढीच्या काळात पिकाला समतोल पोषण.",
    keyBenefits: ["100% water soluble", "Fast nutrient absorption", "Prevents drip nozzle clogging"],
    featured: true
  },
  {
    id: "p6",
    nameEn: "Nutri-Drip 0:52:34 (MKP - Bloom Booster)",
    nameMr: "न्यूट्रि-ड्रीप ०:५२:३४ (मोनो पोटॅशियम फॉस्फेट)",
    category: "soluble",
    brand: "Imported / Grade A",
    packaging: "1 kg / 25 kg",
    image: "/assets/crop_care.jpg",
    descriptionEn: "Zero-nitrogen booster formulation designed to promote abundant flowering, prevent flower drop, and increase fruit setting.",
    descriptionMr: "फुलधारणा वाढवण्यासाठी आणि फुलोरा गळ थांबवण्यासाठी उत्कृष्ट फॉस्फरस व पोटॅश विद्राव्य खत.",
    keyBenefits: ["Promotes profuse flowering", "Stops flower abortion", "Strengthens plant immunity"],
    featured: false
  },
  {
    id: "p7",
    nameEn: "Potassium Nitrate 13:0:45",
    nameMr: "पोटॅशियम नायट्रेट १३:०:४५",
    category: "soluble",
    brand: "K-Sol",
    packaging: "1 kg / 25 kg",
    image: "/assets/crop_care.jpg",
    descriptionEn: "Essential for fruit sizing, uniform color, brix sugar accumulation in grapes, pomegranate, and onion bulb expansion.",
    descriptionMr: "फळांचा आकार, वजन, चकाकी आणि कांद्याची फुगवण वाढवण्यासाठी गुणकारी पोटॅश खत.",
    keyBenefits: ["Increases fruit & bulb weight", "Improves fruit color & brix", "Enhances shelf life"],
    featured: false
  },
  {
    id: "p8",
    nameEn: "Bio-Stimulant & Micronutrient Tonic (5L / 1L)",
    nameMr: "अॅग्री बायो-स्टिम्युलंट व मायक्रोन्यूट्रियंट टॉनिक",
    category: "cropcare",
    brand: "Agri-Tech",
    packaging: "500 ml / 1 L / 5 L",
    image: "/assets/crop_care.jpg",
    descriptionEn: "Concentrated humic acid, seaweed extracts, and chelated zinc/iron for stress recovery, yellowing cure, and heavy yield.",
    descriptionMr: "ह्युमिक ॲसिड, सी-वीड व सूक्ष्म अन्नद्रव्ये. पिकाचा ताण कमी करून फुटवे व फुटवे संख्या वाढवते.",
    keyBenefits: ["Contains Zinc, Iron, Boron, Humic", "Reverses chlorosis yellowing", "Stimulates root biomass"],
    featured: true
  },
  {
    id: "p9",
    nameEn: "Trichoderma Viride & Bio-Fungicide",
    nameMr: "ट्रायकोडर्मा व्हिरीडी जैविक बुरशीनाशक",
    category: "cropcare",
    brand: "Bio-Guard",
    packaging: "1 kg / 1 L",
    image: "/assets/crop_care.jpg",
    descriptionEn: "Biological treatment for soil-borne pathogens, root rot (मवा), fusarium wilt, and damping-off in seedlings.",
    descriptionMr: "जमिनीतील हानिकारक बुरशी, मूळकुज, मर रोग रोखण्यासाठी १००% जैविक सुरक्षित उपाय.",
    keyBenefits: ["Controls root rot & damping off", "Eco-friendly bio control", "Safe for pollinators"],
    featured: false
  },
  {
    id: "p10",
    nameEn: "Bharat Nasik Red Onion Seeds (Certified Hybrid)",
    nameMr: "भारत नाशिक लाल कांदा बियाणे (प्रमाणित हायब्रिड)",
    category: "seeds",
    brand: "Bharat Seeds",
    packaging: "500g / 1 kg Packs",
    image: "/assets/seeds.jpg",
    descriptionEn: "High-germination certified seed producing uniform dark red, tight-skinned bulbs with excellent storage stability for 4-6 months.",
    descriptionMr: "उत्कृष्ट उगवण क्षमता, आकर्षक गडद लाल रंग, घट्ट गोल कांदा आणि ४-६ महिने टिकवण क्षमता.",
    keyBenefits: ["92%+ Germination rate", "Uniform bulb size", "Superior market price yield"],
    featured: true
  },
  {
    id: "p11",
    nameEn: "Premium Hybrid Maize Seeds (मका बियाणे)",
    nameMr: "हायब्रिड धान्य व चारा मका बियाणे",
    category: "seeds",
    brand: "Mahyco / Pioneer",
    packaging: "4 kg Bag",
    image: "/assets/seeds.jpg",
    descriptionEn: "High-yielding hybrid maize known for heavy cobs, disease resistance, and premium grain as well as fodder quality.",
    descriptionMr: "मोठा दाणेदार कणीस, लष्करी अळीस सहनशील आणि उत्तम चारा देणारे हायब्रिड मका बियाणे.",
    keyBenefits: ["Heavy cob grain weight", "Drought tolerant", "High fodder tonnage"],
    featured: false
  },
  {
    id: "p12",
    nameEn: "Specialized Powdery & Downy Mildew Spray Kit",
    nameMr: "द्राक्ष व भाजीपाला भुरी व केवडा रोग नियंत्रण किट",
    category: "cropcare",
    brand: "Pro-Agro",
    packaging: "Complete Kit for 1 Acre",
    image: "/assets/crop_care.jpg",
    descriptionEn: "Targeted curative and preventive spray solution specifically designed for grape vineyards, pomegranates, and vegetables in Pune/Indapur.",
    descriptionMr: "इंदापूर व परिसरातील द्राक्ष, डाळिंब व भाजीपाल्यावरील भुरी व करपा नियंत्रणासाठी खात्रीशीर औषध संच.",
    keyBenefits: ["Fast knockdown of fungal spores", "Rain-fast within 2 hours", "Residual protective shield"],
    featured: true
  }
];

export const FERTILIZER_CALCULATOR_DATA = {
  crops: [
    {
      id: "sugarcane",
      nameEn: "Sugarcane (ऊस)",
      nameMr: "ऊस (सुरु / पूर्वहंगामी / आडसाली)",
      avgBasalBags: {
        "NPK 10:26:26": 3,
        "Urea": 1.5,
        "Potash (MOP)": 1,
        "Neem Cake / Bio-Fertilizer": 2
      },
      topDressing: "At 45 days: 2 bags Urea + 1 bag 10:26:26. At Big earthing up: 3 bags 10:26:26 + 2 bags Urea + 1 bag Potash + Micronutrient mixture.",
      topDressingMr: "४५ दिवसांनी: २ पोती युरिया + १ पोते १०:२६:२६. मोठ्या बांधणीवेळी: ३ पोती १०:२६:२६ + २ पोती युरिया + १ पोते पोटॅश + सूक्ष्म अन्नद्रव्ये.",
      waterSolubleTips: "Drip Fertigation: 19:19:19 at vegetative stage (5 kg/acre/week), 12:61:00 at root stage, 0:0:50 at maturity stage for cane girth & sugar recovery.",
      waterSolubleTipsMr: "ठिबक खत वेळापत्रक: फुटवे व कांडी वाढीसाठी १९:१९:१९ (५ किलो/एकर/आठवडा), पक्वतेच्या वेळी ०:०:५० (वजन व गोडी वाढीसाठी)."
    },
    {
      id: "onion",
      nameEn: "Onion (कांदा)",
      nameMr: "कांदा (खरीप / रांगडा / रब्बी-उन्हाळी)",
      avgBasalBags: {
        "NPK 10:26:26": 2,
        "Single Super Phosphate (SSP)": 2,
        "Sulphur Granules 90%": 0.5,
        "Organic Manure": 2
      },
      topDressing: "At 30 days after transplanting: 1.5 bags Urea. At 45 days: 1 bag 10:26:26 + 1 bag Potash (MOP). Foliar spray of Micronutrients at 35 and 55 days.",
      topDressingMr: "पुनर्लागवडीनंतर ३० दिवसांनी: १.५ पोते युरिया. ४५ दिवसांनी: १ पोते १०:२६:२६ + १ पोते पोटॅश. ३५ व ५५ दिवसांनी मायक्रोन्यूट्रियंट फवारणी.",
      waterSolubleTips: "Drip Schedule: 19:19:19 in initial 40 days, followed by 0:52:34 for bulb initiation, and 0:0:50 + Boron for bulb sizing & storage coat.",
      waterSolubleTipsMr: "ठिबक शेड्युल: सुरुवातीचे ४० दिवस १९:१९:१९, मान फुगवण काळात ०:५२:३४, आणि कांदा फुगवणीसाठी ०:०:५० + बोरॉन."
    },
    {
      id: "grapes",
      nameEn: "Grapes (द्राक्षे)",
      nameMr: "द्राक्ष बागायत",
      avgBasalBags: {
        "DAP / 10:26:26": 2,
        "Organic Compost": 4,
        "Magnesium Sulphate": 1,
        "Zinc & Boron": 0.5
      },
      topDressing: "Post-October pruning fertigation via drip based on leaf petiole analysis. Balanced NPK with Calcium Nitrate.",
      topDressingMr: "ऑक्टोबर छाटणीनंतर ठिबकद्वारे टप्प्याटप्प्याने खत देणे. कॅल्शियम नायट्रेट व बोरॉनचे योग्य नियोजन.",
      waterSolubleTips: "Berry elongation: 12:61:00 + CPPU spray. Berry sizing: 0:52:34 & 13:0:45. Veraison & Sugar: 0:0:50 (SOP).",
      waterSolubleTipsMr: "मनी वाढ व लांबीसाठी ०:५२:३४, १३:०:४५ आणि साखर उतरताना ०:०:५० (एसओपी) चा डोस."
    },
    {
      id: "pomegranate",
      nameEn: "Pomegranate (डाळिंब)",
      nameMr: "डाळिंब बागायत",
      avgBasalBags: {
        "10:26:26": 1.5,
        "Neem Cake": 2,
        "Bio-Fertilizer": 1.5,
        "Zinc + Iron": 0.5
      },
      topDressing: "Apply nutrition during rest period before Bahar treatment. Foliar sprays of Calcium Nitrate & Boron to prevent fruit cracking.",
      topDressingMr: "बहार धरण्यापूर्वी विश्रांती काळात बेसल डोस. डाळिंब तडकणे रोखण्यासाठी कॅल्शियम व बोरॉनची फवारणी.",
      waterSolubleTips: "Flowering: 0:52:34. Fruit setting: 19:19:19. Sizing & Bright red rind: 13:0:45 + Micronutrient mix.",
      waterSolubleTipsMr: "सेटिंग वाढीसाठी ०:५२:३४, फळ वाढीसाठी १३:०:४५ आणि चकाकीसाठी मायक्रोन्यूट्रियंट्स."
    },
    {
      id: "vegetables",
      nameEn: "Vegetables & Tomato (भाजीपाला / टोमॅटो / मिरची)",
      nameMr: "भाजीपाला, टोमॅटो, मिरची, वांगी",
      avgBasalBags: {
        "10:26:26 or DAP": 1.5,
        "Organic Vermicompost": 2,
        "Sulphur": 0.25
      },
      topDressing: "Weekly fertigation through drip with calcium, magnesium, and water-soluble fertilizers.",
      topDressingMr: "ठिबक सिंचनातून दर आठवड्याला कॅल्शियम नायट्रेट, मॅग्नेशियम आणि विद्राव्य खतांचा डोस.",
      waterSolubleTips: "Vegetative: 19:19:19. Flowering: 12:61:00. Fruit development: 0:52:34 & 0:0:50.",
      waterSolubleTipsMr: "वाढ: १९:१९:१९, फुलधारणा: १२:६१:००, फळ फुगवण: ०:०:५०."
    }
  ]
};

export const REVIEWS = [
  {
    id: 1,
    name: "Ramesh Patil",
    nameMr: "रमेश पाटील",
    village: "Sansar, Indapur",
    villageMr: "संसार, इंदापूर",
    rating: 5,
    date: "1 month ago",
    crop: "Sugarcane (ऊस)",
    commentEn: "Got genuine IFFCO 10:26:26 and Urea right on time during our sugarcane planting. The shop owner guided us on the basal dosage which noticeably increased our tillers per clump. Highly reliable shop!",
    commentMr: "ऊस लागवडीच्या वेळी इफकोचे १०:२६:२६ आणि युरिया वेळेत मिळाले. दुकानातील तज्ज्ञ मार्गदर्शनामुळे उसाचे फुटवे खूप छान निघाले. संसार व इंदापूर भागातील शेतकऱ्यांचे सर्वात विश्वासू दुकान!"
  },
  {
    id: 2,
    name: "Balasaheb Shinde",
    nameMr: "बाळासाहेब शिंदे",
    village: "Kurawali Road",
    villageMr: "कुरावली रोड",
    rating: 5,
    date: "3 weeks ago",
    crop: "Onion & Grapes (कांदा व द्राक्ष)",
    commentEn: "All fungicides, powdery mildew remedies, and certified Bharat onion seeds are available at genuine government-approved rates. They also arranged tractor delivery directly to our field.",
    commentMr: "कांदा बियाणे आणि द्राक्षावरील भुरी, डाउनी रोगावरील सर्व औषधे वाजवी दरात मिळतात. बांधावर डिलिव्हरी सुविधा दिल्याने आमचा वेळ आणि वाहतुकीचा खर्च वाचला."
  },
  {
    id: 3,
    name: "Dnyaneshwar Jagtap",
    nameMr: "ज्ञानेश्वर जगताप",
    village: "Mankarwadi, Sansar",
    villageMr: "मानकरवाडी, संसार",
    rating: 5,
    date: "2 months ago",
    crop: "Grape Vineyard (द्राक्ष बाग)",
    commentEn: "Prompt response on WhatsApp whenever I send crop leaf photos. Their agronomist immediately suggested the exact micronutrient combination. Saved our vineyard from chlorosis.",
    commentMr: "व्हॉट्सॲपवर पिकाच्या पानावरील रोगाचा फोटो पाठवल्यावर लगेच योग्य औषधाचा सल्ला दिला. यामुळे आमच्या द्राक्ष बागेतील पिवळेपणा पूर्णपणे नाहीसा झाला."
  },
  {
    id: 4,
    name: "Santosh Khomane",
    nameMr: "संतोष खोमणे",
    village: "Indapur Rural",
    villageMr: "इंदापूर परिसर",
    rating: 5,
    date: "4 months ago",
    crop: "Dairy Fodder & Sugarcane (चारा व ऊस)",
    commentEn: "Authentic Jaivik Bhumi bio-fertilizers and drip accessories are always in stock. Transparent digital billing and polite, cooperative staff.",
    commentMr: "सेंद्रिय खते, जैविक खते आणि ठिबक साहित्यासाठी उत्तम ठिकाण. पक्के संगणकीकृत बिल आणि अतिशय नम्र संभाषण. सर्वांनी नक्की भेट द्यावी."
  },
  {
    id: 5,
    name: "Sunita More",
    nameMr: "सुनिता मोरे",
    village: "Sansar",
    villageMr: "संसार",
    rating: 4,
    date: "6 months ago",
    crop: "Vegetables & Maize (भाजीपाला व मका)",
    commentEn: "Clean and well-organized showroom. The hybrid seeds had more than 90% germination. We are very satisfied with their service.",
    commentMr: "दुकान अतिशय स्वच्छ आणि सुसज्ज आहे. भाजीपाला बियाणांची ९०% पेक्षा जास्त उगवण झाली. समाधानकारक सेवा."
  }
];

export const GALLERY_IMAGES = [
  {
    url: "/assets/hero_storefront.jpg",
    titleEn: "Sonali Fertilizers Storefront & Agro Center",
    titleMr: "सोनाली फर्टिलायझर्स दालन व कृषी सेवा केंद्र",
    category: "Store"
  },
  {
    url: "/assets/fertilizers.jpg",
    titleEn: "Certified IFFCO, GSFC DAP & Urea Stacks",
    titleMr: "इफको, जीएसएफसी डीएपी व सेंद्रिय खतांचा साठा",
    category: "Fertilizers"
  },
  {
    url: "/assets/crop_care.jpg",
    titleEn: "Bio-Stimulants & Plant Health Tonics",
    titleMr: "सूक्ष्म अन्नद्रव्ये व पीक संरक्षक औषधे",
    category: "Crop Care"
  },
  {
    url: "/assets/seeds.jpg",
    titleEn: "Certified Hybrid Seeds & Live Sprouts",
    titleMr: "प्रमाणित कांदा व भाजीपाला हायब्रिड बियाणे",
    category: "Seeds"
  },
  {
    url: "/assets/farm_consultation.jpg",
    titleEn: "Field Advisory in Sugarcane & Crop Farms",
    titleMr: "थेट शेतात जाऊन शेतकऱ्यांना पीक सल्ला",
    category: "Advisory"
  }
];

export const FAQ_DATA = [
  {
    qEn: "Are all fertilizers and seeds certified and genuine?",
    qMr: "सर्व खते व बियाणे शासकीय प्रमाणित आणि अस्सल आहेत का?",
    aEn: "Yes, 100%. Sonali Fertilizers is an authorized dealer for licensed companies like IFFCO, GSFC, RCF, Mahadhan, Mahyco, Bayer, Syngenta, and certified organic bio-fertilizer manufacturers. Every bag comes with authentic lot numbers and proper billing.",
    aMr: "होय, १००%! सोनाली फर्टिलायझर्स हे इफको, जीएसएफसी, आरसीएफ, महाधन, महिको, बायर इत्यादी परवानाधारक कंपन्यांचे अधिकृत विक्रेते आहेत. प्रत्येक गोणीवर मूळ लॉट नंबर आणि पक्के बिल मिळते."
  },
  {
    qEn: "Do you deliver fertilizers directly to our farm / field?",
    qMr: "खते थेट शेतात किंवा बांधावर पोहोच मिळतील का?",
    aEn: "Yes! For bulk orders of fertilizers, compost, and seeds across Sansar, Kurawali, Indapur, Baramati, and surrounding villages, we arrange prompt tractor or tempo delivery directly to your farmland.",
    aMr: "होय! संसार, कुरावली, इंदापूर, बारामती व परिसरातील गावांमध्ये मोठ्या प्रमाणातील खते, सेंद्रिय खत व बियाण्यांची थेट तुमच्या शेतात ट्रॅक्टर किंवा टेम्पोने पोहोच देण्याची व्यवस्था आहे."
  },
  {
    qEn: "How do I get free agronomist advice for crop disease or yellowing?",
    qMr: "पिकांवरील रोग किंवा पिवळेपणावर मोफत सल्ला कसा मिळवायचा?",
    aEn: "Simply take a clear photo of the affected leaf/plant and send it to our WhatsApp number (+91 94230 34155), or visit our store with a sample. Our experienced agronomists will suggest the exact spray dosage immediately.",
    aMr: "बाधित पाण्याचा किंवा रोगाचा स्पष्ट फोटो काढून आमच्या व्हॉट्सॲप नंबरवर (+91 94230 34155) पाठवा किंवा दुकानात नमुना घेऊन या. आमचे कृषी तज्ज्ञ लगेच योग्य फवारणी व उपाय सुचवतील."
  },
  {
    qEn: "What are the store timings?",
    qMr: "दुकानाची वेळ काय आहे?",
    aEn: "We are open 7 days a week (Monday to Sunday) from 8:00 AM in the morning to 7:00 PM in the evening to serve hardworking farmers.",
    aMr: "आम्ही आठवड्याचे सर्व ७ दिवस (सोमवार ते रविवार) सकाळी ८:०० ते संध्याकाळी ७:०० वाजेपर्यंत आपल्या सेवेत तत्पर असतो."
  }
];
