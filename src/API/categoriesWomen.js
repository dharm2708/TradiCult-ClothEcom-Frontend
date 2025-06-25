const categoriesWomen = [
  {
    id: 1,
    category: "T-Shirts",
    products: [
      {
        name: "Cotton Logo Tee",
        image:
          "https://img.freepik.com/premium-photo/brooch-form-lady-hat-white-blouse-brunette-girl-young-woman-posing-yellow-background-sunlight-shadow-studio_115318-6832.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Soft cotton blend with front logo graphic.",
        price: 749,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Oversized Graphic Tee",
        image:
          "https://img.freepik.com/premium-photo/t-shirt-mockup_1132451-344.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Relaxed fit with a bold statement print.",
        price: 899,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Striped Casual Tee",
        image:
          "https://img.freepik.com/premium-psd/woman-standing-posing-photoshoot_53876-27917.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Classic stripes for everyday comfort.",
        price: 699,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 2,
    category: "Dress",
    products: [
      {
        name: "Floral Midi Dress",
        image:
          "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-fashionable-clothes-walking-down-street_839833-3813.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Elegant floral dress perfect for day outs.",
        price: 1599,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Evening Gown",
        image:
          "https://img.freepik.com/free-photo/beautiful-girl-standing-long-black-dress-near-seaside-daytime_176474-2914.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Chic and graceful for special occasions.",
        price: 2999,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Casual Shirt Dress",
        image:
          "https://img.freepik.com/free-photo/beautiful-woman_1328-1290.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Laid-back look for casual settings.",
        price: 1199,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 3,
    category: "Jeans",
    products: [
      {
        name: "High-Rise Skinny Jeans",
        image:
          "https://img.freepik.com/free-photo/stylish-woman-road_23-2147732012.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Classic high-rise fit with stretch.",
        price: 1799,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Mom Fit Jeans",
        image:
          "https://img.freepik.com/free-photo/young-woman-with-skateboard_23-2148937871.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Comfortable fit with retro vibes.",
        price: 1999,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Ripped Boyfriend Jeans",
        image:
          "https://img.freepik.com/free-photo/stylish-young-woman-black-cap-standing-front-restaurant_23-2148148148.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Stylish with distressed details.",
        price: 1899,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 4,
    category: "Leggings",
    products: [
      {
        name: "High-Waist Black Leggings",
        image:
          "https://img.freepik.com/free-photo/woman-sportswear-exercising-outdoors_23-2148965007.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Stretchy and versatile for all-day wear.",
        price: 899,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Printed Activewear Leggings",
        image:
          "https://img.freepik.com/free-photo/pretty-fitness-girl-putting-effort-into-exercising-using-heavy-dumbbells-side-view-confident_7502-10539.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Breathable with bold patterns.",
        price: 1099,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Yoga Fit Leggings",
        image:
          "https://img.freepik.com/premium-photo/smile-woman-morning-routine-yoga-mat-warm-up-training-balance-floor-house-sportswear-athlete-ready-exercise-pilates-wellness-with-workout-person_590464-419586.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Perfect for gym and studio sessions.",
        price: 999,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 5,
    category: "Lehnga",
    products: [
      {
        name: "Traditional Red Lehenga",
        image:
          "https://img.freepik.com/premium-photo/woman-red-dress-with-gold-tassle-front_1298691-26843.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Graceful ethnic wear with golden embroidery.",
        price: 6999,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Pastel Floral Lehenga",
        image:
          "https://img.freepik.com/premium-photo/woman-pink-dress-with-palm-tree-background_1113980-2406.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Modern twist on classic design.",
        price: 7999,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Mirror Work Lehenga",
        image:
          "https://img.freepik.com/premium-photo/bridal-lehenga-coli-creative-shoot_1012351-11.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Bright and elegant for festive vibes.",
        price: 8499,
        sale: true,
        bestSeller: true,
      },
    ],
  },
  {
    id: 6,
    category: "Top",
    products: [
      {
        name: "Ruffle Sleeve Top",
        image:
          "https://img.freepik.com/premium-photo/beautiful-indian-woman-with-wavy-hair-against-white-wall_251136-54239.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Flowy and feminine top with ruffled sleeves.",
        price: 649,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Basic Cotton Crop Top",
        image:
          "https://img.freepik.com/free-photo/cute-blonde-girl-posing-front-ferris-wheel_23-2148648175.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Perfect for layering or summer wear.",
        price: 499,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Chiffon Printed Blouse",
        image:
          "https://img.freepik.com/free-photo/flamenca-holding-manila-shawl-looking-down_23-2148235346.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Lightweight with stylish patterns.",
        price: 899,
        sale: false,
        bestSeller: false,
      },
    ],
  },
  {
    id: 7,
    category: "Sleepware",
    products: [
      {
        name: "Cotton Night Suit",
        image:
          "https://img.freepik.com/free-photo/young-beautiful-woman-blue-pajamas-sitting-bed-resting-enjoying-weekend-happy-positive-smiling-cheerfully-bedroom-interior_141793-102491.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Soft and breathable cotton fabric.",
        price: 1199,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Satin Pajama Set",
        image:
          "https://img.freepik.com/premium-photo/woman-studio-stands-large-white-window-blue-negligee_1048944-27038644.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Silky-smooth feel for ultimate comfort.",
        price: 1499,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Printed Lounge Set",
        image:
          "https://img.freepik.com/free-photo/future-mother-drinking-cup-tea-sitting-bed_8353-5127.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Stylish and cozy for lazy days.",
        price: 999,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 8,
    category: "Skirts",
    products: [
      {
        name: "Pleated Midi Skirt",
        image:
          "https://img.freepik.com/free-photo/smiling-beautiful-elegant-woman-posing-camera_259150-58979.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Elegant and flowy for all seasons.",
        price: 999,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Denim Mini Skirt",
        image:
          "https://img.freepik.com/free-photo/park-walking-talking-fancy-flirty-success_1303-2994.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Classic blue wash with button closure.",
        price: 899,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Floral Wrap Skirt",
        image:
          "https://img.freepik.com/free-photo/caucasian-standing-front-modern-building-pink-dress-hairband_181624-58091.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Wrap style with vibrant print.",
        price: 799,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 9,
    category: "Shorts",
    products: [
      {
        name: "Denim High Waist Shorts",
        image:
          "https://img.freepik.com/free-photo/long-shot-woman-standing-basketball-field_23-2148286141.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Trendy and comfortable for summer.",
        price: 849,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Athleisure Running Shorts",
        image:
          "https://img.freepik.com/free-photo/summer-lifestyle-fashion-portrait-young-stylish-hipster-woman-walking-street_1153-6690.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Moisture-wicking with stretch waistband.",
        price: 599,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Cotton Lounge Shorts",
        image:
          "https://img.freepik.com/premium-photo/woman-wears-red-top-crop-with-white-shorts-trendy-girl-outfit_782515-2357.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Relaxed fit with side pockets.",
        price: 499,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 10,
    category: "Sports Bra",
    products: [
      {
        name: "High Impact Bra",
        image: "https://example.com/images/sportsbra1.jpg",
        description: "Perfect for running and intense workouts.",
        price: 1099,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Crossback Yoga Bra",
        image: "https://example.com/images/sportsbra2.jpg",
        description: "Stretchy with full support.",
        price: 999,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Lightweight Training Bra",
        image: "https://example.com/images/sportsbra3.jpg",
        description: "Soft feel and breathable mesh.",
        price: 899,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 11,
    category: "Saree",
    products: [
      {
        name: "Silk Zari Saree",
        image:
          "https://img.freepik.com/free-photo/portrait-young-woman-wearing-tradition-sari-garment_52683-90221.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Traditional silk with golden zari work.",
        price: 4999,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Georgette Printed Saree",
        image:
          "https://img.freepik.com/premium-photo/woman-sari-stands-front-wall-with-floral-print_1298309-40764.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Lightweight and perfect for casual wear.",
        price: 1599,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Chiffon Party Wear Saree",
        image:
          "https://img.freepik.com/premium-photo/beautiful-indian-girl-red-saree_872233-678.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Elegant with sequin details.",
        price: 2499,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 12,
    category: "Jump Suits",
    products: [
      {
        name: "Denim Utility Jumpsuit",
        image:
          "https://img.freepik.com/free-photo/full-height-attractive-beautiful-woman-wearing-overalls-with-sunglasses-smiling-with-happy-joyful-isolated_231208-5609.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "All-in-one casual comfort outfit.",
        price: 1999,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Printed Wide-Leg Jumpsuit",
        image:
          "https://img.freepik.com/premium-photo/stylish-women039s-clothing-looks-spectacular-girl-casual-clothes-street-fashion-fashion-acces_954205-559.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Floral print with relaxed silhouette.",
        price: 1699,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Satin Evening Jumpsuit",
        image:
          "https://img.freepik.com/free-photo/pretty-woman-wearing-black-suit-hair-bun-makeup-smiling-posing-standing-near-gates-outdoor-hand-waist-looking-down-stylish-fashion_343629-84.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Chic and elegant with back zip.",
        price: 2299,
        sale: false,
        bestSeller: true,
      },
    ],
  },
  {
    id: 13,
    category: "Innerwear",
    products: [
      {
        name: "Seamless Panties Pack",
        image: "https://example.com/images/innerwear1.jpg",
        description: "Smooth and invisible under clothes.",
        price: 599,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Cotton Bikini Briefs",
        image: "https://example.com/images/innerwear2.jpg",
        description: "Soft cotton for daily comfort.",
        price: 499,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Lace Trimmed Hipster",
        image: "https://example.com/images/innerwear3.jpg",
        description: "Stylish and breathable fit.",
        price: 699,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 14,
    category: "Ethnic Sets",
    products: [
      {
        name: "Kurta Palazzo Set",
        image:
          "https://img.freepik.com/premium-photo/woman-blue-dress-stands-front-building_919955-58837.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Cotton blend with embroidered detailing.",
        price: 1799,
        sale: true,
        bestSeller: false,
      },
      {
        name: "Anarkali Suit Set",
        image:
          "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502970.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Flared style with dupatta included.",
        price: 2299,
        sale: false,
        bestSeller: true,
      },
      {
        name: "Printed Straight Set",
        image:
          "https://img.freepik.com/free-photo/woman-dress_1303-3764.jpg?uid=R154341588&ga=GA1.1.1986206314.1749443184&semt=ais_hybrid&w=740",
        description: "Perfect blend of tradition and comfort.",
        price: 1499,
        sale: true,
        bestSeller: false,
      },
    ],
  },
  {
    id: 15,
    category: "Bra",
    products: [
      {
        name: "T-Shirt Bra",
        image: "https://example.com/images/bra1.jpg",
        description: "Invisible under tight clothing.",
        price: 899,
        sale: true,
        bestSeller: true,
      },
      {
        name: "Push-Up Bra",
        image: "https://example.com/images/bra2.jpg",
        description: "Enhanced lift and shape.",
        price: 1099,
        sale: false,
        bestSeller: false,
      },
      {
        name: "Non-Wired Bra",
        image: "https://example.com/images/bra3.jpg",
        description: "Comfort-first design for daily wear.",
        price: 799,
        sale: true,
        bestSeller: false,
      },
    ],
  },
];

export { categoriesWomen };
