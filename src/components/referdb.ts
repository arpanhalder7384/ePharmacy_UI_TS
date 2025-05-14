const categoryData = [
  {
    name: "Pain Relief",
    description:
      "Medications for various types of pain including headaches, muscle pain, and joint pain.",
  },
  {
    name: "Cold & Flu",
    description:
      "Treatments for cold and flu symptoms including cough, congestion, and fever.",
  },
  {
    name: "Allergies",
    description:
      "Medications to treat allergic reactions and relieve allergy symptoms.",
  },
  {
    name: "Vitamins & Supplements",
    description:
      "Nutritional supplements to support overall health and wellness.",
  },
  {
    name: "First Aid",
    description:
      "Supplies and medications for treating minor injuries and wounds.",
  },
  {
    name: "Digestive Health",
    description:
      "Products for digestive problems, heartburn, and stomach discomfort.",
  },
];

const productData = [
  {
    name: "Advanced Pain Relief Tablets",
    description:
      "Fast-acting pain relief tablets for headaches, muscle pain, and minor arthritis. These tablets provide up to 8 hours of relief with a single dose.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=300&h=192",
    price: "12.99",
    categoryId: categoryMap["Pain Relief"],
    prescriptionRequired: "OTC",
    usage:
      "Take 1-2 tablets every 8 hours as needed for pain. Do not exceed 6 tablets in 24 hours.",
    dosage:
      "Adults and children 12 years and over: 1-2 tablets every 8 hours. Children under 12: consult a doctor.",
    sideEffects:
      "May cause drowsiness, upset stomach, or dizziness. Avoid alcohol while taking this medication.",
    featured: true,
    inStock: true,
  },
  {
    name: "Vitamin C 1000mg Tablets",
    description:
      "High-strength vitamin C tablets to support immune system health and general wellbeing. Each tablet provides 1000mg of vitamin C with added citrus bioflavonoids.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=300&h=192",
    price: "9.49",
    categoryId: categoryMap["Vitamins & Supplements"],
    prescriptionRequired: "OTC",
    usage:
      "Take one tablet daily with food to support immune system function and overall health.",
    dosage:
      "Adults: One tablet daily with a meal. Children under 12: consult a doctor first.",
    sideEffects:
      "May cause mild digestive discomfort in sensitive individuals.",
    featured: true,
    inStock: true,
  },
  {
    name: "Anti-Allergy Prescription",
    description:
      "Prescription-strength allergy relief medication that provides 24-hour relief from severe allergy symptoms including itching, sneezing, and congestion.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&h=192",
    price: "24.99",
    categoryId: categoryMap["Allergies"],
    prescriptionRequired: "RX",
    usage: "Take one tablet daily for continuous relief from allergy symptoms.",
    dosage:
      "Adults and children 12 years and over: one tablet daily. Not recommended for children under 12.",
    sideEffects:
      "May cause drowsiness, dry mouth, and headache. Avoid driving or operating machinery until you know how this medication affects you.",
    featured: true,
    inStock: true,
  },
  {
    name: "Night-Time Cold & Flu Relief",
    description:
      "Comprehensive cold and flu relief formula designed specifically for nighttime use. Helps relieve congestion, cough, and fever while promoting restful sleep.",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=300&h=192",
    price: "14.79",
    categoryId: categoryMap["Cold & Flu"],
    prescriptionRequired: "OTC",
    usage: "Take at bedtime to relieve cold and flu symptoms overnight.",
    dosage:
      "Adults and children 12 years and over: 30ml before bedtime. Children under 12: consult a doctor.",
    sideEffects:
      "May cause drowsiness. Do not drive, operate machinery, or consume alcohol after taking this medication.",
    featured: true,
    inStock: true,
  },
  {
    name: "Daytime Cold & Flu Capsules",
    description:
      "Non-drowsy formula that provides effective relief from cold and flu symptoms during the day. Relieves congestion, sore throat, and reduces fever.",
    image:
      "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?auto=format&fit=crop&w=300&h=192",
    price: "13.49",
    categoryId: categoryMap["Cold & Flu"],
    prescriptionRequired: "OTC",
    usage:
      "Take during the day to relieve cold and flu symptoms without causing drowsiness.",
    dosage:
      "Adults and children 16 years and over: 2 capsules every 4-6 hours. Do not exceed 8 capsules in 24 hours.",
    sideEffects:
      "Rarely causes mild stimulant effects including increased heart rate.",
    featured: false,
    inStock: true,
  },
  {
    name: "Extra Strength Migraine Relief",
    description:
      "Fast-acting formula specifically designed for migraine headaches. Provides relief from pain, sensitivity to light, and nausea associated with migraines.",
    image:
      "https://images.unsplash.com/photo-1626716903254-109b8ad52e2c?auto=format&fit=crop&w=300&h=192",
    price: "18.99",
    categoryId: categoryMap["Pain Relief"],
    prescriptionRequired: "OTC",
    usage: "Take at the first sign of migraine for best results.",
    dosage:
      "Adults 18 years and over: 2 tablets with water. May repeat after 4 hours if needed. Do not exceed 6 tablets in 24 hours.",
    sideEffects:
      "May cause dizziness or drowsiness. Take care when driving or operating machinery.",
    featured: false,
    inStock: true,
  },
  {
    name: "Children's Fever Reducer",
    description:
      "Gentle fever and pain reducer specially formulated for children. Cherry flavored liquid that's easy to administer.",
    image:
      "https://images.unsplash.com/photo-1550572017-a0491cd5a72f?auto=format&fit=crop&w=300&h=192",
    price: "8.99",
    categoryId: categoryMap["Pain Relief"],
    prescriptionRequired: "OTC",
    usage: "For reduction of fever and relief of minor aches and pains.",
    dosage:
      "Children 2-11 years: Dose by weight according to package directions. Use included measuring device.",
    sideEffects:
      "Generally well tolerated. Contact doctor if symptoms persist beyond 3 days.",
    featured: false,
    inStock: true,
  },
  {
    name: "Advanced Wound Care Kit",
    description:
      "Comprehensive first aid kit with advanced wound care supplies. Includes antiseptic wipes, bandages, gauze, medical tape, and antibiotic ointment.",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=300&h=192",
    price: "22.95",
    categoryId: categoryMap["First Aid"],
    prescriptionRequired: "OTC",
    usage:
      "For treating minor cuts, scrapes, burns, and wounds. Always clean wound thoroughly before applying dressings.",
    dosage: "Not applicable. Follow first aid instructions included in kit.",
    sideEffects:
      "None when used as directed. Seek medical attention for serious injuries.",
    featured: true,
    inStock: true,
  },
  {
    name: "Digestive Health Probiotic",
    description:
      "Daily probiotic supplement with 10 billion active cultures to support gut health and improve digestion. Helps maintain healthy intestinal flora.",
    image:
      "https://images.unsplash.com/photo-1577460551100-907fc6985074?auto=format&fit=crop&w=300&h=192",
    price: "19.95",
    categoryId: categoryMap["Digestive Health"],
    prescriptionRequired: "OTC",
    usage: "Take daily to support digestive health and immune function.",
    dosage:
      "Adults: One capsule daily with a meal. Children under 12: consult a doctor.",
    sideEffects:
      "Mild digestive discomfort may occur during first few days of use.",
    featured: false,
    inStock: true,
  },
  {
    name: "Prescription Allergy Nasal Spray",
    description:
      "Prescription-strength nasal spray for severe allergic rhinitis. Provides 24-hour relief from nasal congestion, sneezing, and runny nose.",
    image:
      "https://images.unsplash.com/photo-1549321495-305eb13f8aa9?auto=format&fit=crop&w=300&h=192",
    price: "29.99",
    categoryId: categoryMap["Allergies"],
    prescriptionRequired: "RX",
    usage:
      "Use daily during allergy season or year-round for perennial allergies.",
    dosage:
      "Adults and children 12 years and over: 2 sprays in each nostril once daily.",
    sideEffects:
      "May cause nasal irritation, headache, or nosebleeds. Contact doctor if symptoms worsen.",
    featured: false,
    inStock: true,
  },
  {
    name: "Multivitamin Complete",
    description:
      "Comprehensive multivitamin and mineral supplement with 23 essential nutrients. Supports overall health, immunity, and energy levels.",
    image:
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=300&h=192",
    price: "15.99",
    categoryId: categoryMap["Vitamins & Supplements"],
    prescriptionRequired: "OTC",
    usage: "Take daily as a dietary supplement to fill nutritional gaps.",
    dosage:
      "Adults: One tablet daily with food. Not intended for children under 12.",
    sideEffects:
      "Best absorbed with food. May cause mild stomach upset if taken on empty stomach.",
    featured: false,
    inStock: true,
  },
  {
    name: "Heartburn Relief Tablets",
    description:
      "Fast-acting tablets that neutralize stomach acid to provide quick relief from heartburn, acid indigestion, and upset stomach.",
    image:
      "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=300&h=192",
    price: "11.49",
    categoryId: categoryMap["Digestive Health"],
    prescriptionRequired: "OTC",
    usage:
      "Take as needed for relief of heartburn, acid indigestion, or sour stomach.",
    dosage:
      "Adults: Chew 2-4 tablets as symptoms occur. Do not exceed 10 tablets in 24 hours.",
    sideEffects: "May cause constipation or diarrhea in some individuals.",
    featured: false,
    inStock: true,
  },
];

const testimonialData = [
  {
    userName: "John Doe",
    userType: "Loyal Customer",
    rating: 5,
    comment:
      "The consultation service was incredibly helpful. The pharmacist answered all my questions about my medications and potential interactions. Highly recommend!",
  },
  {
    userName: "Jane Smith",
    userType: "Regular Customer",
    rating: 5,
    comment:
      "Fast delivery and great prices! I receive my monthly prescription medications right on time, every time. The app makes refills super easy.",
  },
  {
    userName: "Robert Johnson",
    userType: "New Customer",
    rating: 4,
    comment:
      "The detailed medication information helped me understand my treatment better. I appreciate how they include potential side effects and proper usage instructions.",
  },
];
console.log(categoryData, productData,testimonialData)