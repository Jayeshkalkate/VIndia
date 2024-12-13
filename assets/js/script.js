const data = {

    vehicleTypes: {

        vehicletype: ["Commercial Vehicles", "Luxury and Premium Vehicles", "Passenger Vehicles", "Tractor and Farm Equipment", "Two Wheeler"],
    },

    vehicleBrands: {
        
        "Commercial Vehicles": ["Ashok Leyland", "Eicher Motors", "Commercial Tata Motors", "Force Motors" , "Mahindra & Mahindra" , "BharatBenz (Daimler India Commercial Vehicles)" , "SML Isuzu" , "Volvo Buses India" , "Asia Motor Works (AMW)" , "VE Commercial Vehicles" ],
        
        "Luxury and Premium Vehicles": ["Audi India", "BMW India", "Jaguar Land Rover India", "Mercedes-Benz India", "Volvo Auto India" , "Porsche" , "Lexus" , "Bentley" , "Rolls-Royce" ],
        
        "Passenger Vehicles": ["Fiat India Automobiles Pvt. Ltd", "Honda Cars India", "Hyundai Motor India Ltd", "Kia Motors India", "Maruti Suzuki India Ltd", "Nissan Motor India", "Skoda Auto India", "Toyota Motor", "Volkswagen India" , "MG Motor" , "Renault" , "Passenger Tata Motors" , "Mahindra & Mahindra" , "Nissan" ],
        
        "Tractor and Farm Equipment": ["TAFE (Tractors and Farm Equipment Limited)", "Sonalika Tractors", "New Holland Agriculture India", "Mahindra Tractors", "John Deere India" , "Swaraj Tractors" , "Escorts Limited" , "Kubota Tractors" , "Massey Ferguson" ],
        
        "Two Wheeler": ["Yamaha Motor India", "TVS Motor Company", "Suzuki Motorcycle India", "Royal Enfield", "Honda Motorcycle & Scooter", "Hero MotoCorp", "Bajaj Auto" , "Jawa Motorcycles" , "Ather Energy / Ola Electric" ]

    },

    vehicleModels: {

        // Two Wheeler
        
        "Suzuki Motorcycle India":["Gixxer 150", "Suzuki V-Strom 650", "Access 125", "V-Strom", "Hayabusa" ,"Suzuki Burgman Street 125", "Suzuki Intruder 150"],

        "Ather Energy":["Ather 450X", "Ather 450", "BIKEWALE", "Ola Electric", "Ola S1", "Ola S1 Pro"],

        "Jawa Motorcycles":["Java 42","Classic"],

        "TVS Motor Company": ["Apache RTR 160", "Apache RTR 180", "Apache RR 310", "Raider 125", "Ntorq", "Jupiter"],  

        "Royal Enfield": ['Classic 350', 'Bullet 350', 'Meteor 350', 'Interceptor 650', 'Continental GT 650', 'Enfield Classic 350', 'Royal Enfield Bullet 350', 'Royal Enfield Meteor 350', 'Royal Enfield Interceptor 650', 'Royal Enfield Continental GT 650'],
        
        "Honda Motorcycle & Scooter": ["Activa", "Shine", "CBR 250R", "CB Shine SP"],  
        
        "Hero MotoCorp": ["Splendor Plus", "Passion Pro", "Xtreme 160R", "Glamour", "Hero Splendor Plus", "Hero Xtreme 125R", "Hero Passion Plus", "Hero HF Deluxe", "Hero Glamour", "Hero Super Splendor", "Hero XPulse 200", "Hero Xtreme 160R", "Hero Xoom 110", "Hero Pleasure Plus", "Hero Destini 125", "Hero Karizma XMR"],  
        
        "Bajaj Auto": ["Bajaj Pulsar 150", "Bajaj Pulsar 200NS", "Bajaj Pulsar 220F", "Bajaj Dominar 250", "Bajaj Dominar 400", "Bajaj Avenger Street 160", "Bajaj Avenger Cruise 220", "CT 100", "V15", "TVS Apache RTR 160", "TVS Apache RTR 180", "TVS Apache RR 310", "TVS Ntorq 125", "TVS Jupiter", "TVS XL100", "TVS Radeon", "Honda Activa 6G", "Honda CB Hornet 160R", "Honda CBR 250R", "Honda CB Shine", "Honda SP 125", "Honda XBlade"],

        
        "Yamaha Motor India": ["FZ series", "MT-15", "R15", "FZ-X" , "R15 V4" ,"MY-15" ,"FZ-X"] ,
    

        // Tractor and Farm Equipment

        
        "Massey Ferguson":["Massey Ferguson 5118","Massey Ferguson 254 DI Dynatrak 4WD"],

        "Escorts Limited":["Escorts Farmtrac Smart 45", "Escorts Josh 335", "Escorts Powertrac Euro 60"],

        "Kubota Tractors":["Kubota Neostar A211N-NT", "Kubota MU 5502 4WD"],
        
        "Swaraj Tractors": ["Swaraj 744 FE", "Swaraj 735 FE", "Swaraj 855 FE", "Swaraj 963 FE", "Swaraj 725 XM", "Swaraj 824 XM"],
                
        "TAFE (Tractors and Farm Equipment Limited)": ["5036 D", "5042 D", "5050 D", "3028 EN", "5075 E", "PowerPro 5105", "PowerPro 5050", "PowerPro 5305", "555 DI", "605 DI MS", "605 DI PP", "605 DI i", "Tech+ 265 DI", "Tech+ 405 4WD", "Tech+ 415 4WD", "Tech+ 475", "Tech+ 575 4WD", "Tech+ 585", "SP Plus 265 DI", "SP Plus 275 DI", "SP Plus 415 DI", "SP Plus 475 DI", "SP Plus 575 DI", "SP Plus 585 DI", "XP Plus 265 Orchard", "XP Plus 415 DI", "XP Plus 475 DI MS", "XP Plus 585 DI", "225 DI", "245 DI Vineyard", "305 DI Vineyard", "365 DI", "3132", "3140", "2130", "2121", "2136", "655 DI PP", "755 DI PP 4WD", "35 RX", "47 RX", "50 RX", "60 RX", "Sikander DI 35", "Sikander DI 42", "Sikander DI 60", "Sikander DI 750"],  
        
        "Sonalika Tractors": ['Sonalika DI 734 DLX', 'Sonalika Tiger DI 75 CRDS', 'Sonalika DI 745 III', 'Sonalika 60Max Tiger', 'Sonalika DI 35 Sikander', 'Sonalika Worldtrac 90 4WD'],  
        
        "New Holland Agriculture India": ["New Holland Simba 20", "New Holland 5630 TX Plus 4WD", "New Holland T5", "New Holland 7030", "New Holland 6500"],  
        
        "Mahindra Tractors": ["5050 D", "575 DI SP Plus", "575 DI", "Mahindra Yuvraj 215 NXT", "Mahindra Novo 755 DI PP 4WD V1", "Mahindra Yuvo Tech Plus 585 DI", "Mahindra OJA Series", "Mahindra SP Plus Series"],  
        
        "John Deere India": ["John Deere 5050 D", "John Deere 5042 D", "John Deere 5050 D", "John Deere 3038 E", "John Deere 5050 E" ,"John Deere 5036D", "John Deere 5075 Gear Pro", "John Deere 5075 E", "John Deere 5045 D"],  
        

        // Luxury and Premium Vehicles

        
        "Audi India": ["A3", "A4", "A6", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "e-tron", "RS Q8", "S5", "S6" , "TT", "R8", "e-tron", "RS5", "RS7", "RS Q8"],  
       
        "Porsche":["Cayenne", "Macan", "Panamera", "911", "Taycan", "Cayman", "Boxster"],

        "Luxus":["ES", "RX", "NX", "LS", "GX", "LX", "UX", "LC"],

        "Bentley":["Continental GT", "Flying Spur", "Bentayga"],

        "Rolls-Royce":["Ghost", "Phantom", "Wraith", "Dawn", "Cullinan"],

        "BMW India": ["2 Series Gran Coupe", "3 Series", "3 Series Gran Limousine", "4 Series", "5 Series", "6 Series Gran Turismo", "7 Series", "8 Series", "X1", "X3", "X4", "X5", "X6", "X7", "i4", "iX", "iX1", "i7", "Z4", "M2", "M3", "M4", "M5", "M8", "XM"],  
       
        "Jaguar Land Rover India": ["F-Type", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace", "Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Sport", "Range Rover Velar", "XE", "Range Rover Evoque"],  
       
        "Mercedes-Benz India": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "EQB", "EQC", "EQS", "AMG A 35", "AMG C 63", "AMG E 63", "AMG G 63", "AMG GLE 53", "AMG GLE 63" , "CLA", "CLS", "EQE", "AMG GT"],  
       
        "Volvo Auto India": ["XC60", "XC90", "S60", "S90", "XC40", "V40", "V60", "V90", "EX90" , "Volvo 9400", "Volvo 9600", "Volvo 7900"],  


        // Commercial Vehicles
       
        "VE Commercial Vehicles":["Eicher Pro 3015", "Eicher Pro 5040", "Eicher Pro 6037", "Eicher Pro 5028"],

        "Asia Motor Works (AMW)":["AMW 3118", "AMW 2518", "AMW 4023"],

        "SML Iusz":["SML Isuzu Super", "SML Isuzu Citylife", "SML Isuzu S5", "SML Isuzu S7"],

        "BharatBenz (Daimler India Commercial Vehicles)":["BharatBenz 2523R", "BharatBenz 3123R", "BharatBenz 3723R", "BharatBenz 1617R", "BharatBenz 1014R"],
        
        "Mahindra & Mahindra":["Mahindra Bolero Pik-Up", "Jeep Avenger" , "Mahindra XEV 9e", "Mahindra Supro Mini Truck", "Mahindra Supro Maxi Truck", "Mahindra Blazo X", "Mahindra Furio", "Mahindra Jayo", "Mahindra Thar", "Mahindra Scorpio", "Mahindra XUV700", "Mahindra XUV300", "Mahindra Bolero", "Mahindra Marazzo", "Mahindra Alturas G4", "Mahindra Be 6", "Mahindra e2o Plus", "Mahindra KUV100", "Mahindra TUV300", "Mahindra Xylo", "Mahindra Verito"],

        "Commercial Tata Motors":["Tata 1512 LPT", "Tata Avinya", "Tata 1623 LPT", "Tata 407", "Tata LPT 1613", "Tata Ace", "Tata Super Ace", "Tata Ultra 1918", "Tata Yodha", "Tata Prima", "Tata 3718", "Tata 2518", "Tata Intra", "Tata T.12"],

        "Force Motors": ["Traveller", "Trax", "Gurkha", "Urbania", "Citiline", "Monobus", "Delivery Van", "Ambulance" , "Force Minidor", "Force Matador", "Force Shaktiman"],  
        
        "Ashok Leyland": ["Ashok Leyland BOSS", "Ashok Leyland Ecomet", "Partner", "Dost", "Stile", "U-Truck", "4923",  "Ashok Leyland Dost", "Ashok Leyland Dost Plus", "Ashok Leyland Ashok Leyland Partner",  "Ashok Leyland Ecomet 1615", "Ashok Leyland Ecomet 1214", "Ashok Leyland 3118",  "Ashok Leyland 4923", "Ashok Leyland Viking", "Ashok Leyland Captain"],  
       
        "Eicher Motors": ["Pro 2049", "Pro 2059", "Pro 2110", "Pro 3015", "Pro 4028T", "Pro 6041", "Ecomet Star", "1615 HE", "1915 HE", "4220 HG" , "Eicher 1110 Pro", "Eicher 1114 XP Pro", "Eicher 3015", "Eicher 1049", "Eicher Pro 6000", "Eicher Pro 8000"],  

        // Passenger Vehicles

        "Renault":["Renault Kwid", "Renault Triber", "Renault Duster", "Renault Captur", "Renault Lodgy"],

        "Nissan":["Nissan Magnite", "Nissan Kicks", "Nissan Sunny", "Nissan Terrano"],

        "MG Motor":["MG Hector", "MG Hector Plus", "MG ZS EV", "MG Astor", "MG Gloster"],

        "Fiat India Automobiles Pvt. Ltd": ["Linea", "Punto", "Avventura", "Tipo"],  
       
        "Honda Cars India": ["Honda Amaze", "Honda WR-V", "Honda Civic", "Honda Accord", "Honda Jazz", "Honda BR-V", "Honda City"],  
       
        "Hyundai Motor India Ltd": ["Hyundai Exter", "Hyundai Grand i10 Nios", "Hyundai i20", "Hyundai Aura", "Hyundai Verna", "Hyundai Creta", "Hyundai Alcazar", "Hyundai Venue", "Hyundai Tucson", "Hyundai Ioniq 5", "Hyundai Venue N Line", "Hyundai i20 N Line", "Hyundai Creta N Line"],  
       
        "Kia Motors India": ["Sonet", "Seltos", "Carens","Sonet", "Carnival", "EV6", "EV9"],  
        
        "Maruti Suzuki India Ltd": ["Alto 800", "Maruti Suzuki e Vitara", "Alto K10", "Wagon R", "Swift", "Swift Dzire", "Celerio", "Baleno", "Ignis", "S-Presso", "Vitara Brezza", "Ertiga", "XL6", "Ciaz", "Grand Vitara", "Jimny", "Fronx", "Invicto", "Eeco", "Super Carry", "Eeco Cargo", "Alto Tour", "Wagon R Tour", "Ertiga Tour"],  
       
        "Nissan Motor India": ["Magnite", "X-Trail", "GT-R"],  
       
        "Skoda Auto India": ["Kushaq", "Slavia", "Kodiaq", "Superb", "Octavia", "Enyaq iV", "Kylaq"],  

        "Passenger Tata Motors":["Nexon", "Harrier", "Safari", "Tiago", "Tigor", "Punch", "Altroz", "Curvv", "Gravitas", "Nano", "Nexon EV", "Tiago EV", "Tigor EV", "Punch EV", "Curvv EV", "Harrier EV", "Hexa", "Zest", "Bolt", "Indica"],
        
        "Toyota Motor": ["Innova Crysta", "Fortuner", "Urban Cruiser", "Glanza", "Yaris", "Camry", "Corolla Altis", "Vellfire", "Hilux", "Land Cruiser Prado", "Etios", "Prius"],  
        
        "Volkswagen India": ["Virtus", "Taigun", "Tiguan", "New Tiguan", "Virtus GT"],  

  
        
    }
};



// Vehicle data object
const vehicleData = {
    "Nexon": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "XUV300", 
        engineSpecifications: "1.2L Turbocharged Petrol, 1.5L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Manual/Automatic",
        seatingCapacity: "5",
        priceRange: "₹8,00,000 - ₹14,00,000",
        mileageRange: "17 - 21 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",
        colorOptions: "Flame Red, Calgary White, Foliage Green, Deep Red, and more",
        dimensions: "3993 mm (Length), 1811 mm (Width), 1606 mm (Height)",
        performanceFeatures: "Turbocharged Engine, Multi-Drive Modes, Sports Mode",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Digital Instrument Cluster",
        exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof, Fog Lamps",
        releaseDateYear: "2016",
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        imageUrl: "assets/images/vehicle_models_images/Tata_nexon.png"
    },

    "Eicher Pro 3015": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "Pro 3015",
    engineSpecifications: "3.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹15,00,000 - ₹18,00,000",
    mileageRange: "8 - 10 km/l",
    safetyFeatures: "ABS, EBD, Driver Airbag, Parking Brake Alarm",
    colorOptions: "White, Silver, Blue",
    dimensions: "6190 mm (Length), 2100 mm (Width), 2670 mm (Height)",
    performanceFeatures: "High Torque Engine, Power Steering, Payload Capacity",
    interiorFeatures: "Basic Cabin, Adjustable Seats, Digital Display",
    exteriorFeatures: "Front Grille with Chrome, Halogen Headlights",
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Eicher Pro 3015"
    
},

"Eicher Pro 5040": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "Pro 5040",
    engineSpecifications: "4.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹18,00,000 - ₹22,00,000",
    mileageRange: "7 - 9 km/l",
    safetyFeatures: "ABS, EBD, Driver Airbag, Parking Brake Alarm",
    colorOptions: "White, Yellow, Green",
    dimensions: "7200 mm (Length), 2400 mm (Width), 2950 mm (Height)",
    performanceFeatures: "Powerful Engine, High Payload Capacity, Stable Ride",
    interiorFeatures: "Basic Cabin, Adjustable Seats, Digital Instrument Cluster",
    exteriorFeatures: "Large Front Grille, LED Headlamps",
    warrantyAfterSalesService: "3-year/2,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Eicher Pro 5040.png"
},

"Eicher Pro 6037": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "Pro 6037",
    engineSpecifications: "6.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹22,00,000 - ₹26,00,000",
    mileageRange: "6 - 8 km/l",
    safetyFeatures: "ABS, EBD, Driver and Co-Driver Airbags, Parking Brake Alarm",
    colorOptions: "White, Red, Black",
    dimensions: "8200 mm (Length), 2500 mm (Width), 3250 mm (Height)",
    performanceFeatures: "High Payload Capacity, Heavy-Duty Engine, Air Brakes",
    interiorFeatures: "Comfortable Cabin, Adjustable Seats, Digital Dashboard",
    exteriorFeatures: "Large Front Grille, LED Fog Lamps, Dual-Tone Paint",
    warrantyAfterSalesService: "3-year/2,50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/Eicher Pro 6037.png"

},

"Eicher Pro 5028": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "Pro 5028",
    engineSpecifications: "5.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹20,00,000 - ₹24,00,000",
    mileageRange: "7 - 9 km/l",
    safetyFeatures: "ABS, EBD, Driver Airbag, Parking Brake Alarm",
    colorOptions: "White, Blue, Green",
    dimensions: "7500 mm (Length), 2300 mm (Width), 3100 mm (Height)",
    performanceFeatures: "High Torque Engine, High Ground Clearance, Payload Capacity",
    interiorFeatures: "Basic Cabin, Adjustable Seats, Digital Instrument Cluster",
    exteriorFeatures: "Front Grille, Halogen Headlamps, Reflector Taillights",
    warrantyAfterSalesService: "3-year/1,80,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Eicher Pro 5028.png"
},

"AMW 3118": {
    "type": "Commercial",
    "brand": "AMW",
    "modelNameNumber": "3118",
    "engineSpecifications": "7.8L, 6-Cylinder, Turbocharged Diesel",  // Engine Specifications (Example)
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity (Example)
    "priceRange": "₹30,00,000 - ₹35,00,000",  // Price Range (Example)
    "mileageRange": "6 - 8 km/l",  // Mileage/Range (Example)
    "safetyFeatures": "ABS, EBD, Hill Assist, Air Brakes",  // Safety Features
    "colorOptions": "White, Yellow, Red",  // Color Options (Example)
    "dimensions": "8995 mm (Length), 2500 mm (Width), 3200 mm (Height)",  // Dimensions (Example)
    "performanceFeatures": "High Torque Engine, Durable Suspension",  // Performance Features
    "interiorFeatures": "Driver Information System, Ergonomic Seats",  // Interior Features
    "exteriorFeatures": "Heavy-duty Front Bumper, LED Tail Lamps",  // Exterior Features
    "warrantyAfterSalesService": "3-year/3,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2018",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/AMW 3118.png"
},

"AMW 2518": {
    "type": "Commercial",
    "brand": "AMW",
    "modelNameNumber": "2518",
    "engineSpecifications": "6.7L, 4-Cylinder, Turbocharged Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹28,00,000 - ₹33,00,000",  // Price Range
    "mileageRange": "7 - 9 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, EBD, Air Brakes",  // Safety Features
    "colorOptions": "White, Yellow",  // Color Options
    "dimensions": "8200 mm (Length), 2450 mm (Width), 3100 mm (Height)",  // Dimensions
    "performanceFeatures": "Turbocharged Engine, High Towing Capacity",  // Performance Features
    "interiorFeatures": "Digital Instrument Cluster, Air Conditioning",  // Interior Features
    "exteriorFeatures": "Heavy-duty Bumper, LED Tail Lamps",  // Exterior Features
    "warrantyAfterSalesService": "2-year/2,50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2017",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/AMW 2518.png"
},

"AMW 4023": {
    "type": "Commercial",
    "brand": "AMW",
    "modelNameNumber": "4023",
    "engineSpecifications": "9.0L, 6-Cylinder, Turbocharged Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹35,00,000 - ₹40,00,000",  // Price Range
    "mileageRange": "5 - 7 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, EBD, Hill Assist, Air Brakes, Driver Assistance System",  // Safety Features
    "colorOptions": "White, Red, Blue",  // Color Options
    "dimensions": "9800 mm (Length), 2600 mm (Width), 3300 mm (Height)",  // Dimensions
    "performanceFeatures": "High Torque, Advanced Suspension System",  // Performance Features
    "interiorFeatures": "Driver Information System, Air Conditioning",  // Interior Features
    "exteriorFeatures": "Heavy-duty Bumper, LED DRLs",  // Exterior Features
    "warrantyAfterSalesService": "3-year/4,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2019",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/AMW 4023.png"
},

"SML Isuzu Super": {
    type: "Commercial",
    brand: "SML Isuzu",
    modelNameNumber: "Super",  // Model Name Number
    engineSpecifications: "3.0L Diesel",  // Engine Specifications (Placeholder)
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2-3",  // Seating Capacity (Placeholder)
    priceRange: "₹12,00,000 - ₹18,00,000",  // Price Range (Placeholder)
    mileageRange: "8 - 12 km/l",  // Mileage/Range (Placeholder)
    safetyFeatures: "ABS, Driver & Co-Driver Airbags, Rear Parking Sensors",  // Safety Features (Placeholder)
    colorOptions: "White, Yellow, Red, Blue, and more",  // Color Options (Placeholder)
    dimensions: "5500 mm (Length), 2200 mm (Width), 2900 mm (Height)",  // Dimensions (Placeholder)
    performanceFeatures: "Powerful Diesel Engine, Heavy Payload Capacity",  // Performance Features
    interiorFeatures: "Basic Dashboard, Comfortable Seating",  // Interior Features (Placeholder)
    exteriorFeatures: "Durable Body, Chrome Grille, Clear Lens Headlights",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2020",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/SML Isuzu Super.png"

},

"SML Isuzu Citylife": {
    type: "Commercial",
    brand: "SML Isuzu",
    modelNameNumber: "Citylife",  // Model Name Number
    engineSpecifications: "2.8L Diesel",  // Engine Specifications (Placeholder)
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "8-12",  // Seating Capacity (Placeholder)
    priceRange: "₹14,00,000 - ₹20,00,000",  // Price Range (Placeholder)
    mileageRange: "10 - 15 km/l",  // Mileage/Range (Placeholder)
    safetyFeatures: "ABS, Airbags, Parking Sensors, Rearview Camera",  // Safety Features (Placeholder)
    colorOptions: "White, Silver, Blue, Yellow",  // Color Options (Placeholder)
    dimensions: "6000 mm (Length), 2500 mm (Width), 2900 mm (Height)",  // Dimensions (Placeholder)
    performanceFeatures: "Optimized for City Travel, Comfortable Ride",  // Performance Features
    interiorFeatures: "Spacious Cabin, Premium Seats, Air Conditioning",  // Interior Features (Placeholder)
    exteriorFeatures: "Stylish Front Bumper, Alloy Wheels",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2021",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/SML Isuzu Citylife.png"

},

"SML Isuzu S5": {
    type: "Commercial",
    brand: "SML Isuzu",
    modelNameNumber: "S5",  // Model Name Number
    engineSpecifications: "3.0L Diesel",  // Engine Specifications (Placeholder)
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "6-8",  // Seating Capacity (Placeholder)
    priceRange: "₹10,00,000 - ₹15,00,000",  // Price Range (Placeholder)
    mileageRange: "9 - 14 km/l",  // Mileage/Range (Placeholder)
    safetyFeatures: "ABS, Front and Rear Airbags, Rear Parking Sensors",  // Safety Features (Placeholder)
    colorOptions: "White, Red, Silver, Yellow",  // Color Options (Placeholder)
    dimensions: "5800 mm (Length), 2200 mm (Width), 2800 mm (Height)",  // Dimensions (Placeholder)
    performanceFeatures: "Heavy Payload, Durable Chassis",  // Performance Features
    interiorFeatures: "Spacious Interiors, Basic Infotainment",  // Interior Features (Placeholder)
    exteriorFeatures: "Sturdy Bumper, Clear Headlamps",  // Exterior Features
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2019",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/SML Isuzu S5.png"

},

"SML Isuzu S7": {
    type: "Commercial",
    brand: "SML Isuzu",
    modelNameNumber: "S7",  // Model Name Number
    engineSpecifications: "3.5L Diesel",  // Engine Specifications (Placeholder)
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "8-12",  // Seating Capacity (Placeholder)
    priceRange: "₹16,00,000 - ₹22,00,000",  // Price Range (Placeholder)
    mileageRange: "8 - 12 km/l",  // Mileage/Range (Placeholder)
    safetyFeatures: "ABS, Airbags, Parking Sensors, Rearview Camera",  // Safety Features (Placeholder)
    colorOptions: "Silver, White, Black, Red",  // Color Options (Placeholder)
    dimensions: "6500 mm (Length), 2400 mm (Width), 3000 mm (Height)",  // Dimensions (Placeholder)
    performanceFeatures: "High Payload Capacity, Robust Engine",  // Performance Features
    interiorFeatures: "Luxurious Cabin, Premium Seating",  // Interior Features (Placeholder)
    exteriorFeatures: "Sleek Design, Chrome Accents",  // Exterior Features
    warrantyAfterSalesService: "4-year/1,50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2022",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/SML Isuzu S7.png"

},

"BharatBenz 2523R": {
    type: "Commercial",
    brand: "BharatBenz",
    modelNameNumber: "2523R",
    engineSpecifications: "6.3L Diesel, 230 HP",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹30,00,000 - ₹35,00,000",
    mileageRange: "6 - 8 km/l",
    safetyFeatures: "ABS, EBD, Hill Assist, Anti-roll Bar",
    colorOptions: "White, Red, Blue, Yellow",
    dimensions: "8190 mm (Length), 2490 mm (Width), 2880 mm (Height)",
    performanceFeatures: "Heavy Load Capacity, Strong Chassis, High Torque",
    interiorFeatures: "Basic Interior, Adjustable Seats",
    exteriorFeatures: "LED Tail Lamps, High Ground Clearance, Wide Front Grill",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2015",
    imageUrl: "assets/images/vehicle_models_images/BharatBenz 2523R.png"

},
"BharatBenz 3123R": {
    type: "Commercial",
    brand: "BharatBenz",
    modelNameNumber: "3123R",
    engineSpecifications: "6.3L Diesel, 230 HP",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹35,00,000 - ₹40,00,000",
    mileageRange: "6 - 8 km/l",
    safetyFeatures: "ABS, EBD, Hill Assist, Anti-roll Bar",
    colorOptions: "White, Red, Blue, Yellow",
    dimensions: "8500 mm (Length), 2500 mm (Width), 3000 mm (Height)",
    performanceFeatures: "Heavy Load Capacity, Strong Chassis, High Torque",
    interiorFeatures: "Basic Interior, Adjustable Seats",
    exteriorFeatures: "LED Tail Lamps, High Ground Clearance, Wide Front Grill",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2016",
    imageUrl: "assets/images/vehicle_models_images/BharatBenz 3123R.png"
},

"BharatBenz 3723R": {
    type: "Commercial",
    brand: "BharatBenz",
    modelNameNumber: "3723R",
    engineSpecifications: "7.2L Diesel, 240 HP",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹40,00,000 - ₹45,00,000",
    mileageRange: "6 - 8 km/l",
    safetyFeatures: "ABS, EBD, Hill Assist, Anti-roll Bar",
    colorOptions: "White, Red, Blue, Yellow",
    dimensions: "9000 mm (Length), 2600 mm (Width), 3100 mm (Height)",
    performanceFeatures: "Heavy Load Capacity, Strong Chassis, High Torque",
    interiorFeatures: "Basic Interior, Adjustable Seats",
    exteriorFeatures: "LED Tail Lamps, High Ground Clearance, Wide Front Grill",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/BharatBenz 3723R.png"

},

"BharatBenz 1617R": {
    type: "Commercial",
    brand: "BharatBenz",
    modelNameNumber: "1617R",
    engineSpecifications: "4.4L Diesel, 170 HP",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹20,00,000 - ₹25,00,000",
    mileageRange: "7 - 9 km/l",
    safetyFeatures: "ABS, EBD, Hill Assist, Anti-roll Bar",
    colorOptions: "White, Red, Blue, Yellow",
    dimensions: "6500 mm (Length), 2400 mm (Width), 2800 mm (Height)",
    performanceFeatures: "Heavy Load Capacity, Strong Chassis, High Torque",
    interiorFeatures: "Basic Interior, Adjustable Seats",
    exteriorFeatures: "LED Tail Lamps, High Ground Clearance, Wide Front Grill",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2014",
    imageUrl: "assets/images/vehicle_models_images/BharatBenz 1617R.png"
},

"BharatBenz 1014R": {
    type: "Commercial",
    brand: "BharatBenz",
    modelNameNumber: "1014R",
    engineSpecifications: "4.4L Diesel, 140 HP",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹15,00,000 - ₹20,00,000",
    mileageRange: "7 - 9 km/l",
    safetyFeatures: "ABS, EBD, Hill Assist, Anti-roll Bar",
    colorOptions: "White, Red, Blue, Yellow",
    dimensions: "6000 mm (Length), 2300 mm (Width), 2500 mm (Height)",
    performanceFeatures: "Heavy Load Capacity, Strong Chassis, High Torque",
    interiorFeatures: "Basic Interior, Adjustable Seats",
    exteriorFeatures: "LED Tail Lamps, High Ground Clearance, Wide Front Grill",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2013",
    imageUrl: "assets/images/vehicle_models_images/BharatBenz 1014R.png"
},

"Mahindra Bolero Pik-Up": {
    "type": "Commercial",
    "brand": "Mahindra",
    "modelNameNumber": "Bolero Pik-Up",  // Model Name Number
    "engineSpecifications": "2.5L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹7,00,000 - ₹8,50,000",  // Price Range
    "mileageRange": "10 - 14 km/l",  // Mileage/Range
    "safetyFeatures": "Driver Airbag, ABS with EBD, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "White, Silver, Blue, Red",  // Color Options
    "dimensions": "4880 mm (Length), 1700 mm (Width), 1860 mm (Height)",  // Dimensions
    "performanceFeatures": "Heavy Duty Suspension, Robust Load-Carrying Capacity",  // Performance Features
    "interiorFeatures": "Basic Digital Cluster, Adjustable Seats",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Fog Lamps, Steel Wheels",  // Exterior Features
    "warrantyAfterSalesService": "2-year/60,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2011",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Mahindra Bolero Pik-Up.png"

},

"Mahindra Supro Mini Truck": {
    "type": "Commercial",
    "brand": "Mahindra",
    "modelNameNumber": "Supro Mini Truck",  // Model Name Number
    "engineSpecifications": "0.8L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹5,50,000 - ₹6,50,000",  // Price Range
    "mileageRange": "15 - 19 km/l",  // Mileage/Range
    "safetyFeatures": "Driver Airbag, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "White, Silver, Blue",  // Color Options
    "dimensions": "3800 mm (Length), 1600 mm (Width), 1900 mm (Height)",  // Dimensions
    "performanceFeatures": "Small and Compact for Urban Transportation",  // Performance Features
    "interiorFeatures": "Basic Instrument Cluster, Adjustable Seats",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Steel Wheels",  // Exterior Features
    "warrantyAfterSalesService": "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2016",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Mahindra Supro Mini Truck.png"

},

"Mahindra Supro Maxi Truck": {
    "type": "Commercial",
    "brand": "Mahindra",
    "modelNameNumber": "Supro Maxi Truck",  // Model Name Number
    "engineSpecifications": "1.2L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹6,00,000 - ₹7,50,000",  // Price Range
    "mileageRange": "14 - 18 km/l",  // Mileage/Range
    "safetyFeatures": "Driver Airbag, ABS with EBD, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "White, Silver, Red",  // Color Options
    "dimensions": "4100 mm (Length), 1650 mm (Width), 1900 mm (Height)",  // Dimensions
    "performanceFeatures": "Sturdy Load Capacity, Easy Maneuvering",  // Performance Features
    "interiorFeatures": "Basic Digital Cluster, Adjustable Seats",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Steel Wheels",  // Exterior Features
    "warrantyAfterSalesService": "2-year/60,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2016",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Mahindra Supro Maxi Truck.png"

},

"Mahindra Blazo X": {
    "type": "Commercial",
    "brand": "Mahindra",
    "modelNameNumber": "Blazo X",  // Model Name Number
    "engineSpecifications": "7.2L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹15,00,000 - ₹25,00,000",  // Price Range
    "mileageRange": "6 - 8 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Air Brakes, Disc Brakes, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "White, Red, Blue",  // Color Options
    "dimensions": "10500 mm (Length), 2500 mm (Width), 3000 mm (Height)",  // Dimensions
    "performanceFeatures": "Heavy-duty Performance, Advanced Engine Technology",  // Performance Features
    "interiorFeatures": "Basic Instrument Cluster, Ergonomic Seats",  // Interior Features
    "exteriorFeatures": "LED Headlamps, Fog Lamps, Steel Wheels",  // Exterior Features
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2017",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Mahindra Blazo X.png"

},

"Mahindra Furio": {
    "type": "Commercial",
    "brand": "Mahindra",
    "modelNameNumber": "Furio",  // Model Name Number
    "engineSpecifications": "4.2L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹10,00,000 - ₹18,00,000",  // Price Range
    "mileageRange": "8 - 12 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Air Brakes, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "White, Silver, Red",  // Color Options
    "dimensions": "8000 mm (Length), 2500 mm (Width), 3500 mm (Height)",  // Dimensions
    "performanceFeatures": "Powerful Engine, Heavy-duty Performance",  // Performance Features
    "interiorFeatures": "Basic Instrument Cluster, Ergonomic Seats",  // Interior Features
    "exteriorFeatures": "LED Headlamps, Fog Lamps",  // Exterior Features
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2019" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Mahindra Furio.png"

},

"Mahindra Bolero": {
    "type": "Passenger",
    "brand": "Mahindra",
    "modelNameNumber": "Bolero",
    "engineSpecifications": "1.5L Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "7",
    "priceRange": "₹9,00,000 - ₹10,50,000",
    "mileageRange": "15 - 17 km/l",
    "safetyFeatures": "ABS with EBD, Dual Airbags, Reverse Parking Sensors",
    "colorOptions": "Diamond White, Bold Black, Mist Silver, Red Rage",
    "dimensions": "3995 mm (Length), 1745 mm (Width), 1880 mm (Height)",
    "performanceFeatures": "Body-on-Frame Construction, 4x4 Capabilities",
    "interiorFeatures": "Basic Infotainment, Fabric Upholstery, Power Windows",
    "exteriorFeatures": "Chrome Grille, LED Tail Lamps, Roof Rails",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2000",
    imageUrl: "assets/images/vehicle_models_images/Mahindra Bolero.png"

},

"Mahindra Marazzo": {
    "type": "Passenger",
    "brand": "Mahindra",
    "modelNameNumber": "Marazzo",
    "engineSpecifications": "1.5L Diesel, 1.5L Petrol",
    "fuelType": "Diesel/Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "7/8",
    "priceRange": "₹11,00,000 - ₹14,00,000",
    "mileageRange": "17 - 20 km/l",
    "safetyFeatures": "6 Airbags, ABS with EBD, Rear Parking Sensors, ESP",
    "colorOptions": "Shimmering Silver, Iceberg White, Blue, Red",
    "dimensions": "4585 mm (Length), 1866 mm (Width), 1774 mm (Height)",
    "performanceFeatures": "Premium MPV, Smooth Ride, Dynamic Handling",
    "interiorFeatures": "Android Auto, Apple CarPlay, Touchscreen Infotainment",
    "exteriorFeatures": "Projector Headlamps, LED DRLs, Roof Rails",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Mahindra Marazzo.png"

},

"Mahindra Alturas G4": {
    "type": "Passenger",
    "brand": "Mahindra",
    "modelNameNumber": "Alturas G4",
    "engineSpecifications": "2.2L Turbo Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Automatic",
    "seatingCapacity": "7",
    "priceRange": "₹30,00,000 - ₹35,00,000",
    "mileageRange": "12 - 14 km/l",
    "safetyFeatures": "9 Airbags, ABS with EBD, ESP, Hill Hold, Rear Camera",
    "colorOptions": "Pearl White, Napoli Black, Burgundy Red",
    "dimensions": "4850 mm (Length), 1960 mm (Width), 1845 mm (Height)",
    "performanceFeatures": "4x4 Drivetrain, Automatic Transmission, LED DRLs",
    "interiorFeatures": "Leather Upholstery, 8-inch Touchscreen Infotainment, Sunroof",
    "exteriorFeatures": "Chrome Garnish, LED Headlamps, Dual-tone Roof",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Mahindra Alturas G4.png"

},

"Mahindra e2o Plus": {
    "type": "Passenger",
    "brand": "Mahindra",
    "modelNameNumber": "e2o Plus",
    "engineSpecifications": "Electric Motor",
    "fuelType": "Electric",
    "transmissionType": "Automatic",
    "seatingCapacity": "4",
    "priceRange": "₹8,00,000 - ₹10,00,000",
    "mileageRange": "140 - 180 km per charge",
    "safetyFeatures": "ABS, Regenerative Braking, Reverse Parking Sensors",
    "colorOptions": "Red, White, Blue, Silver",
    "dimensions": "3590 mm (Length), 1665 mm (Width), 1540 mm (Height)",
    "performanceFeatures": "Electric Drivetrain, Smooth Acceleration, Zero Emissions",
    "interiorFeatures": "Touchscreen Infotainment, Digital Dashboard, Eco Mode",
    "exteriorFeatures": "LED DRLs, Smart Design, Compact Dimensions",
    "warrantyAfterSalesService": "3-year/1,25,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Mahindra e2o Plus.png"

},

"Mahindra KUV100": {
    "type": "Passenger",
    "brand": "Mahindra",
    "modelNameNumber": "KUV100",
    "engineSpecifications": "1.2L Petrol, 1.2L Diesel",
    "fuelType": "Petrol/Diesel",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹5,50,000 - ₹8,00,000",
    "mileageRange": "14 - 18 km/l",
    "safetyFeatures": "Dual Airbags, ABS, Rear Parking Sensors",
    "colorOptions": "Dazzling Silver, Flamboyant Red, Pearl White",
    "dimensions": "3700 mm (Length), 1735 mm (Width), 1655 mm (Height)",
    "performanceFeatures": "Compact SUV, SUV Styling, High Ground Clearance",
    "interiorFeatures": "Touchscreen Infotainment, Smart Storage Spaces",
    "exteriorFeatures": "Bold Front Grille, Alloy Wheels, Roof Rails",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Mahindra KUV100.png"

},

"TUV300": {
    type: "Passenger",
    brand: "Mahindra",
    modelNameNumber: "TUV300",
    engineSpecifications: "1.5L mHawk Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "7",
    priceRange: "₹8,00,000 - ₹11,00,000",
    mileageRange: "13 - 18 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors, Cornering Stability Control",
    colorOptions: "Dyno Blue, Bold Black, Molten Red, Premium Beige, and more",
    dimensions: "3985 mm (Length), 1835 mm (Width), 1880 mm (Height)",
    performanceFeatures: "Eco Mode, Power Steering, Hill Assist",
    interiorFeatures: "Touchscreen Infotainment, Premium Fabric Upholstery, Digital Instrument Cluster",
    exteriorFeatures: "LED Tail Lamps, Bold Front Grille, Silver Roof Rails",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2015",
    imageUrl: "assets/images/vehicle_models_images/TUV300.png"

},


"Tata Super Ace": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Super Ace",
    "engineSpecifications": "1.4L CR4 Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "2",
    "priceRange": "₹5,00,000 - ₹6,50,000",
    "mileageRange": "14 - 16 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD",
    "colorOptions": "White, Silver, Red, Yellow",
    "dimensions": "4300 mm (Length), 1700 mm (Width), 1900 mm (Height)",
    "performanceFeatures": "Power Steering, Dual Front Airbags, Tough Build",
    "interiorFeatures": "Comfortable Seating, AM/FM Radio",
    "exteriorFeatures": "Bigger Load Deck, Sturdy Build",
    "warrantyAfterSalesService": "2-year/75,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2009",
    imageUrl: "assets/images/vehicle_models_images/Tata Super Ace.png"
  },

  "Tata Ultra 1918": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Ultra 1918",
    "engineSpecifications": "5.6L, 4-Cylinder Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "2",
    "priceRange": "₹25,00,000 - ₹30,00,000",
    "mileageRange": "8 - 10 km/l",
    "safetyFeatures": "ABS, EBD, Reverse Camera",
    "colorOptions": "White, Red, Blue",
    "dimensions": "8200 mm (Length), 2500 mm (Width), 3200 mm (Height)",
    "performanceFeatures": "Heavy Payload Capacity, Turbocharged Engine",
    "interiorFeatures": "Basic Dashboard, Comfortable Seating",
    "exteriorFeatures": "Strong Body Frame, Large Cargo Space",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Tata Ultra 1918.png"
  },
  
  "Tata Yodha": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Yodha",
    "engineSpecifications": "2.2L 4-Cylinder Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "3",
    "priceRange": "₹8,00,000 - ₹9,50,000",
    "mileageRange": "12 - 14 km/l",
    "safetyFeatures": "Dual Airbags, ABS, Reverse Parking Sensors",
    "colorOptions": "White, Black, Blue, Silver",
    "dimensions": "5170 mm (Length), 1800 mm (Width), 1950 mm (Height)",
    "performanceFeatures": "Payload Capacity: 1.25 tons, Durable Build",
    "interiorFeatures": "Spacious Cabin, Ergonomic Seating",
    "exteriorFeatures": "Strong Bumper, Wide Cargo Space",
    "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Tata Ultra 1918.png"
  },

  "Tata Prima": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Prima",
    "engineSpecifications": "8.8L 6-Cylinder Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "2",
    "priceRange": "₹30,00,000 - ₹45,00,000",
    "mileageRange": "6 - 8 km/l",
    "safetyFeatures": "ABS, EBD, Advanced Brake Assist",
    "colorOptions": "White, Blue, Green",
    "dimensions": "7000 mm (Length), 2400 mm (Width), 3000 mm (Height)",
    "performanceFeatures": "Heavy-duty Engine, High Payload Capacity",
    "interiorFeatures": "Comfortable Seat, Air Conditioning",
    "exteriorFeatures": "Reinforced Chassis, Wide Cargo Bed",
    "warrantyAfterSalesService": "4-year/2,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2011",
    imageUrl: "assets/images/vehicle_models_images/Tata Prima.png"
  },
  
  "Tata 3718": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "3718",
    "engineSpecifications": "6.7L 4-Cylinder Turbocharged Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "2",
    "priceRange": "₹20,00,000 - ₹25,00,000",
    "mileageRange": "7 - 9 km/l",
    "safetyFeatures": "ABS, EBD, Reverse Parking Assist",
    "colorOptions": "White, Blue, Red",
    "dimensions": "8800 mm (Length), 2500 mm (Width), 3200 mm (Height)",
    "performanceFeatures": "High Torque Engine, Robust Chassis",
    "interiorFeatures": "Basic Interior, Comfortable Seats",
    "exteriorFeatures": "Sturdy Build, Spacious Cargo Area",
    "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2013",
    imageUrl: "assets/images/vehicle_models_images/Tata 3718.png"
  },


  "Tata 1512 LPT": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "1512 LPT",
    "engineSpecifications": "5.0L Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "Driver + 2",
    "priceRange": "₹12,00,000 - ₹15,00,000",
    "mileageRange": "6 - 8 km/l",
    "safetyFeatures": "ABS, Driver Airbag, Parking Sensors",
    "colorOptions": "White, Red, Yellow",
    "dimensions": "6190 mm (Length), 2380 mm (Width), 3050 mm (Height)",
    "performanceFeatures": "Heavy Duty Suspension, Robust Chassis",
    "interiorFeatures": "Basic Dashboard, Comfortable Driver Seat",
    "exteriorFeatures": "High Ground Clearance, Heavy-duty Bumper",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2017",
    imageUrl: "assets/images/vehicle_models_images/Tata 1512 LPT.png"
},

"Tata 1623 LPT": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "1623 LPT",
    "engineSpecifications": "5.6L Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "Driver + 2",
    "priceRange": "₹15,00,000 - ₹18,00,000",
    "mileageRange": "5 - 7 km/l",
    "safetyFeatures": "ABS, Driver Airbag, Parking Sensors",
    "colorOptions": "White, Red, Yellow",
    "dimensions": "6540 mm (Length), 2450 mm (Width), 3500 mm (Height)",
    "performanceFeatures": "Powerful Engine, Heavy-duty Suspension",
    "interiorFeatures": "Basic Dashboard, Adjustable Driver Seat",
    "exteriorFeatures": "Tough Bumper, High Ground Clearance",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Tata 1623 LPT.png"
},

"Tata 407": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "407",
    "engineSpecifications": "3.0L Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "Driver + 2",
    "priceRange": "₹7,00,000 - ₹9,00,000",
    "mileageRange": "8 - 10 km/l",
    "safetyFeatures": "ABS, Driver Airbag, Parking Sensors",
    "colorOptions": "White, Red, Yellow",
    "dimensions": "4720 mm (Length), 1790 mm (Width), 2100 mm (Height)",
    "performanceFeatures": "Lightweight Design, Strong Build",
    "interiorFeatures": "Basic Dashboard, Comfortable Driver Seat",
    "exteriorFeatures": "Heavy Duty Bumper, Large Cargo Area",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2015",
    imageUrl: "assets/images/vehicle_models_images/Tata 407.png"
},

"Tata LPT 1613": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "LPT 1613",
    "engineSpecifications": "5.6L Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "Driver + 2",
    "priceRange": "₹14,00,000 - ₹17,00,000",
    "mileageRange": "5 - 7 km/l",
    "safetyFeatures": "ABS, Driver Airbag, Parking Sensors",
    "colorOptions": "White, Red, Yellow",
    "dimensions": "6470 mm (Length), 2400 mm (Width), 3000 mm (Height)",
    "performanceFeatures": "Heavy Duty Suspension, Sturdy Build",
    "interiorFeatures": "Basic Dashboard, Adjustable Driver Seat",
    "exteriorFeatures": "Rugged Design, High Ground Clearance",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Tata LPT 1613.png"
},

"Tata Ace": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Ace",
    "engineSpecifications": "0.7L Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "Driver + 1",
    "priceRange": "₹4,00,000 - ₹5,00,000",
    "mileageRange": "15 - 18 km/l",
    "safetyFeatures": "ABS, Driver Airbag",
    "colorOptions": "White, Blue, Red",
    "dimensions": "3720 mm (Length), 1500 mm (Width), 1900 mm (Height)",
    "performanceFeatures": "Compact Design, Easy Maneuverability",
    "interiorFeatures": "Basic Dashboard, Comfortable Seat",
    "exteriorFeatures": "Heavy Duty Rear Bumper, Small Turning Radius",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2005",
    imageUrl: "assets/images/vehicle_models_images/Tata Ace.png"
},

"Traveller": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Traveller 407",  // Model Name Number
    engineSpecifications: "2.2L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "12-15",  // Seating Capacity
    priceRange: "₹10,00,000 - ₹14,50,000",  // Price Range
    mileageRange: "10 - 12 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Driver Airbag, Side Impact Beams",  // Safety Features
    colorOptions: "White, Yellow, Red, Blue",  // Color Options
    dimensions: "4800 mm (Length), 1850 mm (Width), 2080 mm (Height)",  // Dimensions
    performanceFeatures: "Powerful Engine, High Payload Capacity",  // Performance Features
    interiorFeatures: "Comfortable Seating, Air Conditioning",  // Interior Features
    exteriorFeatures: "Durable Bumpers, High Ground Clearance",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2010",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Traveller.png"
},

"Trax": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Trax Cruiser",  // Model Name Number
    engineSpecifications: "2.0L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "10-13",  // Seating Capacity
    priceRange: "₹8,00,000 - ₹12,00,000",  // Price Range
    mileageRange: "12 - 15 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Dual Airbags, EBD",  // Safety Features
    colorOptions: "White, Silver, Grey",  // Color Options
    dimensions: "4500 mm (Length), 1750 mm (Width), 1900 mm (Height)",  // Dimensions
    performanceFeatures: "Robust Engine, Versatile Driving",  // Performance Features
    interiorFeatures: "Spacious Cabin, Optional Roof Air-conditioning",  // Interior Features
    exteriorFeatures: "Simple, Functional Design",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2008",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Trax.png"
},

"Gurkha": {
    type: "Passenger",
    brand: "Force Motors",
    modelNameNumber: "Gurkha Xplorer",  // Model Name Number
    engineSpecifications: "2.6L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "4",  // Seating Capacity
    priceRange: "₹10,00,000 - ₹12,50,000",  // Price Range
    mileageRange: "9 - 12 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS, Rear Parking Sensors",  // Safety Features
    colorOptions: "Red, White, Silver",  // Color Options
    dimensions: "4040 mm (Length), 1810 mm (Width), 1900 mm (Height)",  // Dimensions
    performanceFeatures: "4WD, Off-road Capabilities",  // Performance Features
    interiorFeatures: "Leather Seats, Touchscreen Infotainment",  // Interior Features
    exteriorFeatures: "Steel Bumpers, High Ground Clearance",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2015" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Gurkha.png"
},

"Urbania": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Urbania 408",  // Model Name Number
    engineSpecifications: "2.2L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "10-12",  // Seating Capacity
    priceRange: "₹12,00,000 - ₹16,00,000",  // Price Range
    mileageRange: "8 - 11 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Driver Airbag, Side Impact Beams",  // Safety Features
    colorOptions: "White, Black, Yellow",  // Color Options
    dimensions: "5100 mm (Length), 1900 mm (Width), 2200 mm (Height)",  // Dimensions
    performanceFeatures: "Comfortable Ride, High Payload",  // Performance Features
    interiorFeatures: "Comfortable Seats, Air Conditioning",  // Interior Features
    exteriorFeatures: "Stylish Front Grille, High Ground Clearance",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2020",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Urbania.png"

},

"Citiline": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Citiline 501",  // Model Name Number
    engineSpecifications: "2.5L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "20-30",  // Seating Capacity
    priceRange: "₹15,00,000 - ₹20,00,000",  // Price Range
    mileageRange: "6 - 9 km/l",  // Mileage/Range
    safetyFeatures: "ABS, EBD, Driver and Co-driver Airbags",  // Safety Features
    colorOptions: "Yellow, Green, White",  // Color Options
    dimensions: "7000 mm (Length), 2500 mm (Width), 3000 mm (Height)",  // Dimensions
    performanceFeatures: "High Passenger Capacity, Durable Build",  // Performance Features
    interiorFeatures: "Spacious Cabin, Overhead Storage",  // Interior Features
    exteriorFeatures: "Durable Bodywork, Enhanced Safety",  // Exterior Features
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2019",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Citiline.png"
},


"Tata 2518": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "2518",
    "engineSpecifications": "5.9L 4-cylinder Diesel Engine",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "2",
    "priceRange": "₹18,00,000 - ₹22,00,000",
    "mileageRange": "8 - 10 km/l",
    "safetyFeatures": "ABS with EBD, Driver Airbag, Reverse Camera",
    "colorOptions": "White, Red, Yellow",
    "dimensions": "6935 mm (Length), 2500 mm (Width), 2900 mm (Height)",
    "performanceFeatures": "Heavy Load Capacity, High Torque, Power Steering",
    "interiorFeatures": "Basic Dashboard, Driver Comfort Seat",
    "exteriorFeatures": "High Ground Clearance, Large Cargo Area",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2020",
    imageUrl: "assets/images/vehicle_models_images/Tata 2518.png"
},

"Tata Intra": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Intra",
    "engineSpecifications": "1.4L Diesel Engine",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "2",
    "priceRange": "₹6,00,000 - ₹7,50,000",
    "mileageRange": "14 - 16 km/l",
    "safetyFeatures": "Driver Airbag, ABS with EBD, Reverse Parking Sensor",
    "colorOptions": "White, Silver, Red, Blue",
    "dimensions": "3610 mm (Length), 1740 mm (Width), 1790 mm (Height)",
    "performanceFeatures": "Strong Payload Capacity, Smooth Drive",
    "interiorFeatures": "Basic Dashboard, Comfortable Seats, Minimalistic Controls",
    "exteriorFeatures": "Compact Size, Sturdy Build, Functional Design",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Tata Intra.png"
},

"Tata T.12": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "T.12",
    "engineSpecifications": "3.0L 4-cylinder Diesel Engine",
    "fuelType": "Diesel",
    "transmissionType": "Manual",
    "seatingCapacity": "3",
    "priceRange": "₹12,00,000 - ₹16,00,000",
    "mileageRange": "10 - 12 km/l",
    "safetyFeatures": "Driver Airbag, ABS with EBD, Parking Brake System",
    "colorOptions": "White, Yellow, Grey",
    "dimensions": "5220 mm (Length), 2000 mm (Width), 2250 mm (Height)",
    "performanceFeatures": "Powerful Engine, Strong Load Handling",
    "interiorFeatures": "Comfortable Seats, Simple Dashboard Layout",
    "exteriorFeatures": "Functional Cargo Space, High Durability",
    "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2019",
    imageUrl: "assets/images/vehicle_models_images/Tata T.12.png"
},

"Monobus": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Monobus",  // Model Name Number
    engineSpecifications: "4.0L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "30",  // Seating Capacity
    priceRange: "₹15,00,000 - ₹20,00,000",  // Price Range
    mileageRange: "6 - 8 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Air Suspension, Crash Protection",  // Safety Features
    colorOptions: "White, Silver, Blue",  // Color Options
    dimensions: "8000 mm (Length), 2500 mm (Width), 3500 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy-duty Suspension, Air-conditioning, Spacious Interior",  // Performance Features
    interiorFeatures: "Spacious Seating, Overhead Storage, AC",  // Interior Features
    exteriorFeatures: "LED Lights, High-Visibility Markings, Large Windows",  // Exterior Features
    warrantyAfterSalesService: "3-year/100,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2019" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Monobus.png"

},

"Delivery Van": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Delivery Van",  // Model Name Number
    engineSpecifications: "1.5L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹6,00,000 - ₹8,00,000",  // Price Range
    mileageRange: "12 - 15 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Reverse Camera, Parking Sensors",  // Safety Features
    colorOptions: "White, Grey, Blue",  // Color Options
    dimensions: "4000 mm (Length), 1700 mm (Width), 2000 mm (Height)",  // Dimensions
    performanceFeatures: "Payload Capacity, Easy Access Door, High Mileage",  // Performance Features
    interiorFeatures: "Minimalist Dashboard, Durable Flooring, Spacious Cargo Area",  // Interior Features
    exteriorFeatures: "Side Sliding Doors, Reinforced Bumper, High Ground Clearance",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2021",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Delivery Van.png"
},

"Ambulance": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Ambulance",  // Model Name Number
    engineSpecifications: "2.0L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2 (Driver + Attendant)",  // Seating Capacity
    priceRange: "₹8,00,000 - ₹12,00,000",  // Price Range
    mileageRange: "10 - 12 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Reverse Parking Sensors, Emergency Lights",  // Safety Features
    colorOptions: "White, Red",  // Color Options
    dimensions: "5500 mm (Length), 2000 mm (Width), 2500 mm (Height)",  // Dimensions
    performanceFeatures: "Emergency Lights, Medical Equipment Storage, Oxygen Supply",  // Performance Features
    interiorFeatures: "Medical Equipment Holders, Spacious Cabin, AC",  // Interior Features
    exteriorFeatures: "Reflective Decals, LED Siren Lights, High Ground Clearance",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2018",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ambulance.png"

},

"Force Minidor": {
    type: "Commercial",
    brand: "Force",
    modelNameNumber: "Minidor",  // Model Name Number
    engineSpecifications: "2.5L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹5,00,000 - ₹6,00,000",  // Price Range
    mileageRange: "10 - 12 km/l",  // Mileage/Range
    safetyFeatures: "Driver Airbag, ABS",  // Safety Features
    colorOptions: "White, Blue",  // Color Options
    dimensions: "4000 mm (Length), 1700 mm (Width), 1900 mm (Height)",  // Dimensions
    performanceFeatures: "Payload Capacity, Fuel Efficiency, Compact Design",  // Performance Features
    interiorFeatures: "Spacious Cargo Area, Simple Dashboard",  // Interior Features
    exteriorFeatures: "Heavy Duty Bumper, Sliding Doors",  // Exterior Features
    warrantyAfterSalesService: "2-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2017" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Force Minidor.png"

},

"Force Matador": {
    type: "Commercial",
    brand: "Force",
    modelNameNumber: "Matador",  // Model Name Number
    engineSpecifications: "2.5L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "12",  // Seating Capacity
    priceRange: "₹7,00,000 - ₹9,00,000",  // Price Range
    mileageRange: "10 - 12 km/l",  // Mileage/Range
    safetyFeatures: "Driver Airbag, ABS, Fire Extinguisher",  // Safety Features
    colorOptions: "Yellow, Red, Blue",  // Color Options
    dimensions: "5500 mm (Length), 2000 mm (Width), 2200 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy-duty Suspension, Low Turning Radius",  // Performance Features
    interiorFeatures: "Seating for 12, Overhead Luggage Storage",  // Interior Features
    exteriorFeatures: "Rear Cargo Door, Side Windows",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2015",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Force Matador.png"
},

"Force Shaktiman": {
    type: "Commercial",
    brand: "Force",
    modelNameNumber: "Shaktiman",  // Model Name Number
    engineSpecifications: "3.0L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹8,00,000 - ₹11,00,000",  // Price Range
    mileageRange: "8 - 10 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Air Suspension, Stability Control",  // Safety Features
    colorOptions: "White, Red",  // Color Options
    dimensions: "6000 mm (Length), 2500 mm (Width), 3000 mm (Height)",  // Dimensions
    performanceFeatures: "High Towing Capacity, Heavy-duty Engine",  // Performance Features
    interiorFeatures: "Simple Dashboard, Spacious Cargo Area",  // Interior Features
    exteriorFeatures: "Heavy-duty Bumper, High Ground Clearance",  // Exterior Features
    warrantyAfterSalesService: "3-year/100,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2016",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Force Shaktiman.png"
},


"Ashok Leyland BOSS": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "BOSS",  
    "engineSpecifications": "3.0L Diesel",  
    "fuelType": "Diesel",  
    "transmissionType": "Manual",  
    "seatingCapacity": "3",  
    "priceRange": "₹6,00,000 - ₹8,00,000",  
    "mileageRange": "10 - 12 km/l",  
    "safetyFeatures": "Driver Airbag, ABS, Reverse Parking Sensors",  
    "colorOptions": "White, Red, Blue",  
    "dimensions": "4530 mm (Length), 1940 mm (Width), 1680 mm (Height)",  
    "performanceFeatures": "Heavy Payload, Good Mileage for Commercial Use",  
    "interiorFeatures": "Basic Instrument Cluster, Durable Seats",  
    "exteriorFeatures": "Front Bumper Guard, High Ground Clearance",  
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",  
    "releaseDateYear": "2019",
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland BOSS.png"

},
"Tata Ecomet": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Tata Ecomet",  
    "engineSpecifications": "2.2L Diesel",  
    "fuelType": "Diesel",  
    "transmissionType": "Manual",  
    "seatingCapacity": "2",  
    "priceRange": "₹7,50,000 - ₹9,50,000",  
    "mileageRange": "8 - 10 km/l",  
    "safetyFeatures": "Driver Airbag, ABS with EBD, Anti-Rollover Protection",  
    "colorOptions": "White, Yellow, Grey",  
    "dimensions": "5990 mm (Length), 2400 mm (Width), 2325 mm (Height)",  
    "performanceFeatures": "Enhanced Fuel Efficiency, Heavy Load Capacity",  
    "interiorFeatures": "Basic Dashboard, Vinyl Seats",  
    "exteriorFeatures": "LED Tail Lamps, Robust Bumper",  
    "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",  
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Tata Ecomet.png"

},
"Partner": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Partner",  
    "engineSpecifications": "1.4L Diesel",  
    "fuelType": "Diesel",  
    "transmissionType": "Manual",  
    "seatingCapacity": "2",  
    "priceRange": "₹5,00,000 - ₹7,00,000",  
    "mileageRange": "12 - 14 km/l",  
    "safetyFeatures": "Driver Airbag, ABS, Disc Brakes",  
    "colorOptions": "White, Blue, Red",  
    "dimensions": "4420 mm (Length), 1700 mm (Width), 1750 mm (Height)",  
    "performanceFeatures": "Compact, Efficient for City Deliveries",  
    "interiorFeatures": "Basic Instrument Panel, Hard-wearing Seats",  
    "exteriorFeatures": "Simple Grille Design, Rugged Rear",  
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    "releaseDateYear": "2015",
    imageUrl: "assets/images/vehicle_models_images/Partner.png"

},
"Dost": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Dost",  
    "engineSpecifications": "1.4L Diesel",  
    "fuelType": "Diesel",  
    "transmissionType": "Manual",  
    "seatingCapacity": "2",  
    "priceRange": "₹5,50,000 - ₹7,50,000",  
    "mileageRange": "12 - 14 km/l",  
    "safetyFeatures": "Driver Airbag, ABS, Reverse Parking Sensors",  
    "colorOptions": "White, Red, Yellow",  
    "dimensions": "4380 mm (Length), 1680 mm (Width), 1820 mm (Height)",  
    "performanceFeatures": "Small Footprint, Easy Maneuverability",  
    "interiorFeatures": "Basic Seating, Digital Dashboard",  
    "exteriorFeatures": "Strong Body, Simple Bumper",  
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",  
    "releaseDateYear": "2014",
    imageUrl: "assets/images/vehicle_models_images/Dost.png"

},
"Stile": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Stile",  
    "engineSpecifications": "1.4L Petrol/Diesel",  
    "fuelType": "Petrol/Diesel",  
    "transmissionType": "Manual",  
    "seatingCapacity": "5",  
    "priceRange": "₹5,50,000 - ₹7,50,000",  
    "mileageRange": "14 - 18 km/l",  
    "safetyFeatures": "Driver & Passenger Airbags, ABS, EBD",  
    "colorOptions": "White, Silver, Red",  
    "dimensions": "3745 mm (Length), 1640 mm (Width), 1615 mm (Height)",  
    "performanceFeatures": "Compact and Efficient, Good for Urban Driving",  
    "interiorFeatures": "Basic Dashboard, Comfortable Seats",  
    "exteriorFeatures": "Simple, Attractive Design, Roof Rails",  
    "warrantyAfterSalesService": "3-year/1,20,000 km Warranty, Roadside Assistance",  
    "releaseDateYear": "2010",
    imageUrl: "assets/images/vehicle_models_images/Stile.png"

},
"U-Truck": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "U-Truck",  
    "engineSpecifications": "4.2L Diesel",  
    "fuelType": "Diesel",  
    "transmissionType": "Manual",  
    "seatingCapacity": "2",  
    "priceRange": "₹10,00,000 - ₹15,00,000",  
    "mileageRange": "8 - 10 km/l",  
    "safetyFeatures": "Driver Airbag, ABS, Anti-Rollover Protection",  
    "colorOptions": "White, Red, Green",  
    "dimensions": "7530 mm (Length), 2500 mm (Width), 2850 mm (Height)",  
    "performanceFeatures": "High Load Carrying Capacity, Robust Engine",  
    "interiorFeatures": "Basic Cabin, Durable Seats",  
    "exteriorFeatures": "Heavy-duty Bumper, Large Tires",  
    "warrantyAfterSalesService": "5-year/2,00,000 km Warranty, 24/7 Roadside Assistance",  
    "releaseDateYear": "2017",
    imageUrl: "assets/images/vehicle_models_images/U-Truck.png"

},

"Ashok Leyland Dost": {
    "type": "Commercial",
    "brand": "Ashok Leyland",
    "modelNameNumber": "4923",  // Model Name Number
    "engineSpecifications": "1.5L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2-3",  // Seating Capacity
    "priceRange": "₹7,00,000 - ₹9,00,000",  // Price Range
    "mileageRange": "10 - 12 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Driver Airbag, Rear Parking Sensors",  // Safety Features
    "colorOptions": "White, Red, Blue, Yellow, and more",  // Color Options
    "dimensions": "4340 mm (Length), 1735 mm (Width), 1890 mm (Height)",  // Dimensions
    "performanceFeatures": "Heavy Load Capacity, Power Steering",  // Performance Features
    "interiorFeatures": "Basic Dashboard, Fabric Upholstery, AM/FM Radio",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Roof Rails, Cargo Box",  // Exterior Features
    "warrantyAfterSalesService": "2-year/80,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2013", // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Dost.png"
},

"Ashok Leyland Dost Plus": {
    "type": "Commercial",
    "brand": "Ashok Leyland",
    "modelNameNumber": "4923",  // Model Name Number
    "engineSpecifications": "1.5L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "3-4",  // Seating Capacity
    "priceRange": "₹8,00,000 - ₹10,50,000",  // Price Range
    "mileageRange": "11 - 14 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Dual Airbags, Parking Sensors",  // Safety Features
    "colorOptions": "White, Red, Yellow, Blue, and more",  // Color Options
    "dimensions": "4700 mm (Length), 1800 mm (Width), 1900 mm (Height)",  // Dimensions
    "performanceFeatures": "Heavy Duty, Good Load Distribution",  // Performance Features
    "interiorFeatures": "Comfortable Seats, Digital Instrument Cluster",  // Interior Features
    "exteriorFeatures": "Daytime Running Lamps, Steel Rims",  // Exterior Features
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2016",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Dost Plus.png"
},
"Ashok Leyland Partner": {
    "type": "Commercial",
    "brand": "Ashok Leyland",
    "modelNameNumber": "4923",  // Model Name Number
    "engineSpecifications": "3.0L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2-3",  // Seating Capacity
    "priceRange": "₹9,00,000 - ₹11,50,000",  // Price Range
    "mileageRange": "9 - 12 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Dual Airbags, EBD",  // Safety Features
    "colorOptions": "White, Yellow, Red",  // Color Options
    "dimensions": "5400 mm (Length), 1900 mm (Width), 2150 mm (Height)",  // Dimensions
    "performanceFeatures": "Payload Capacity of 2.5 tons, Power Steering",  // Performance Features
    "interiorFeatures": "Basic Console, Fabric Upholstery",  // Interior Features
    "exteriorFeatures": "Side Step, Chrome Grille",  // Exterior Features
    "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2014",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Partner.png"

},
"Ashok Leyland Ecomet 1615": {
    "type": "Commercial",
    "brand": "Ashok Leyland",
    "modelNameNumber": "4923",  // Model Name Number
    "engineSpecifications": "3.0L Turbocharged Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2-3",  // Seating Capacity
    "priceRange": "₹12,00,000 - ₹14,50,000",  // Price Range
    "mileageRange": "8 - 10 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Driver Airbag, Parking Sensors",  // Safety Features
    "colorOptions": "White, Red, Blue",  // Color Options
    "dimensions": "6400 mm (Length), 2100 mm (Width), 2500 mm (Height)",  // Dimensions
    "performanceFeatures": "Heavy Duty, Good Payload Capacity",  // Performance Features
    "interiorFeatures": "Basic Dashboard, Digital Cluster",  // Interior Features
    "exteriorFeatures": "Dual-tone Bumper, Side Step",  // Exterior Features
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2017" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Ecomet 1615.png"

},
"Ashok Leyland Ecomet 1214": {
    "type": "Commercial",
    "brand": "Ashok Leyland",
    "modelNameNumber": "4923",  // Model Name Number
    "engineSpecifications": "3.0L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2-3",  // Seating Capacity
    "priceRange": "₹10,00,000 - ₹12,50,000",  // Price Range
    "mileageRange": "10 - 12 km/l",  // Mileage/Range
    "safetyFeatures": "ABS, Airbags, Parking Sensors",  // Safety Features
    "colorOptions": "White, Red, Blue, Yellow",  // Color Options
    "dimensions": "5700 mm (Length), 1850 mm (Width), 2300 mm (Height)",  // Dimensions
    "performanceFeatures": "Load Capacity of 1.5 tons, Power Steering",  // Performance Features
    "interiorFeatures": "Digital Instrument Cluster, Basic Seats",  // Interior Features
    "exteriorFeatures": "Side Cladding, Steel Wheels",  // Exterior Features
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2015" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Ecomet 1214.png"

},

"Ashok Leyland 3118": {
    type: "Commercial",
    brand: "Ashok Leyland",
    modelNameNumber: "3118",
    engineSpecifications: "6.7L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹25,00,000 - ₹35,00,000",  // Approximate, adjust as needed
    mileageRange: "6 - 8 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Airbags, EBD, Anti-roll bar",
    colorOptions: "White, Yellow, Green",  // Adjust according to available colors
    dimensions: "10000 mm (Length), 2500 mm (Width), 3500 mm (Height)",  // Adjust as per the model specs
    performanceFeatures: "Heavy Duty, Long Haul, Robust Engine",
    interiorFeatures: "Basic Cabin, Driver Seat with Adjustable Suspension",
    exteriorFeatures: "Steel Body, Wide Tires, LED Taillights",
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, Nationwide Service Network",
    releaseDateYear: "2015",
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland 3118.png"

},

"Ashok Leyland 4923": {
    type: "Commercial",
    brand: "Ashok Leyland",
    modelNameNumber: "4923",
    engineSpecifications: "7.3L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹30,00,000 - ₹40,00,000",  // Approximate, adjust as needed
    mileageRange: "6 - 8 km/l",  // Mileage/Range
    safetyFeatures: "ABS, EBD, Airbags, Roll-Over Protection",
    colorOptions: "White, Blue, Black",  // Adjust according to available colors
    dimensions: "12000 mm (Length), 2500 mm (Width), 3800 mm (Height)",  // Adjust as per the model specs
    performanceFeatures: "Heavy Payload Capacity, Long Distance Hauling",
    interiorFeatures: "Spacious Cabin, Comfortable Seat, Adjustable Steering",
    exteriorFeatures: "Durable Body, LED Lamps, Wide Wheelbase",
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland 4923.png"

},

"Ashok Leyland Viking": {
    type: "Commercial",
    brand: "Ashok Leyland",
    modelNameNumber: "Viking",
    engineSpecifications: "4.0L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "3",
    priceRange: "₹15,00,000 - ₹25,00,000",  // Approximate, adjust as needed
    mileageRange: "8 - 10 km/l",  // Mileage/Range
    safetyFeatures: "ABS, EBD, Safety Cab, Roll-Over Protection",
    colorOptions: "White, Yellow, Green",  // Adjust according to available colors
    dimensions: "7500 mm (Length), 2500 mm (Width), 3200 mm (Height)",  // Adjust as per the model specs
    performanceFeatures: "Versatile, High Load Capacity",
    interiorFeatures: "Basic Cabin, Adjustable Driver Seat",
    exteriorFeatures: "Heavy Duty Bumper, Wide Front Grille",
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, Nationwide Service Network",
    releaseDateYear: "2016",
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Viking.png"

},

"Ashok Leyland Captain": {
    type: "Commercial",
    brand: "Ashok Leyland",
    modelNameNumber: "Captain",
    engineSpecifications: "5.3L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹20,00,000 - ₹30,00,000",  // Approximate, adjust as needed
    mileageRange: "7 - 9 km/l",  // Mileage/Range
    safetyFeatures: "ABS, EBD, Airbags, Safety Cabin",
    colorOptions: "White, Blue, Yellow",  // Adjust according to available colors
    dimensions: "9500 mm (Length), 2400 mm (Width), 3500 mm (Height)",  // Adjust as per the model specs
    performanceFeatures: "Powerful Engine, High Payload Capacity",
    interiorFeatures: "Comfortable Cabin, Adjustable Steering, Digital Instrument Cluster",
    exteriorFeatures: "LED Taillights, Heavy Duty Suspension",
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, Nationwide Service Network",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Captain.png"

},

"Pro 2049": {
    type: "Commercial",  // Vehicle Type
    brand: "Tata",  // Brand
    modelNameNumber: "Pro 2049",  // Model Name Number
    engineSpecifications: "4.5L 4-Cylinder Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity (Commercial vehicle typically has 2)
    priceRange: "₹10,00,000 - ₹12,00,000",  // Price Range
    mileageRange: "8 - 10 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Driver and Passenger Airbags, Reverse Parking Sensors",  // Safety Features
    colorOptions: "White, Silver, Red, Blue",  // Color Options
    dimensions: "6725 mm (Length), 2500 mm (Width), 2900 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy Load Capacity, Sturdy Suspension, 4WD",  // Performance Features
    interiorFeatures: "Basic Dashboard, Fabric Upholstery, Audio System",  // Interior Features
    exteriorFeatures: "Fog Lamps, High Ground Clearance, Side Cladding",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2021" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Pro 2049.png"

},

"Ashok Leyland Ecomet Star": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "Ecomet Star",  // Model Name Number
    engineSpecifications: "2.2L CR4 Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity (Typically commercial vehicles have 2 or 3 seats)
    priceRange: "₹10,00,000 - ₹12,50,000",  // Price Range
    mileageRange: "10 - 14 km/l",  // Mileage/Range
    safetyFeatures: "ABS with EBD, Airbags, Parking Sensors",  // Safety Features
    colorOptions: "White, Red, Silver",  // Color Options
    dimensions: "5240 mm (Length), 1835 mm (Width), 2195 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy Load Carrying Capacity, Enhanced Stability",  // Performance Features
    interiorFeatures: "Basic Cabin, Adjustable Driver Seat",  // Interior Features
    exteriorFeatures: "Durable Bumper, Alloy Wheels",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2020" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ashok Leyland Ecomet Star.png"

},
"1615 HE": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "1615 HE",  // Model Name Number
    engineSpecifications: "5.0L Turbocharged Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹16,00,000 - ₹18,50,000",  // Price Range
    mileageRange: "8 - 12 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Airbags, Reverse Parking Sensors",  // Safety Features
    colorOptions: "White, Yellow, Blue",  // Color Options
    dimensions: "7200 mm (Length), 2500 mm (Width), 3000 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy Duty Performance, Excellent Payload",  // Performance Features
    interiorFeatures: "Basic Dashboard, Adjustable Seats",  // Interior Features
    exteriorFeatures: "Durable Exterior, Front Bullbar",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Support",  // Warranty & After-Sales Service
    releaseDateYear: "2018" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/1615 HE.png"

},
"1915 HE": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "1915 HE",  // Model Name Number
    engineSpecifications: "5.0L Turbocharged Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹18,00,000 - ₹20,00,000",  // Price Range
    mileageRange: "8 - 12 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Airbags, Reverse Parking Sensors",  // Safety Features
    colorOptions: "White, Yellow, Blue",  // Color Options
    dimensions: "7600 mm (Length), 2550 mm (Width), 3100 mm (Height)",  // Dimensions
    performanceFeatures: "High Load Capacity, Powerful Engine",  // Performance Features
    interiorFeatures: "Comfortable Cabin, Basic Features",  // Interior Features
    exteriorFeatures: "Sturdy Build, High Clearance",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Support",  // Warranty & After-Sales Service
    releaseDateYear: "2019" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/1915 HE.png"

},
"4220 HG": {
    type: "Commercial",
    brand: "Tata",
    modelNameNumber: "4220 HG",  // Model Name Number
    engineSpecifications: "6.0L Turbocharged Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹22,00,000 - ₹24,00,000",  // Price Range
    mileageRange: "6 - 10 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Airbags, Advanced Parking Sensors",  // Safety Features
    colorOptions: "White, Black, Silver",  // Color Options
    dimensions: "8500 mm (Length), 2700 mm (Width), 3400 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy Load Bearing, High Power Engine",  // Performance Features
    interiorFeatures: "Premium Cabin, Air Conditioning",  // Interior Features
    exteriorFeatures: "Reinforced Body, Roof Rails",  // Exterior Features
    warrantyAfterSalesService: "4-year/2,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2021" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/4220 HG.png"

},
"Eicher 1110 Pro": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "1110 Pro",  // Model Name Number
    engineSpecifications: "4.4L Turbocharged Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹11,00,000 - ₹12,50,000",  // Price Range
    mileageRange: "9 - 13 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Airbags, Anti-rollover System",  // Safety Features
    colorOptions: "White, Yellow, Red",  // Color Options
    dimensions: "6400 mm (Length), 2300 mm (Width), 2500 mm (Height)",  // Dimensions
    performanceFeatures: "Strong Payload, Fuel Efficient",  // Performance Features
    interiorFeatures: "Basic Cabin, Adjustable Seats",  // Interior Features
    exteriorFeatures: "Reinforced Body, Easy Access Cab",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2017" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Eicher 1110 Pro.png"

},
"Eicher 1114 XP Pro": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "1114 XP Pro",  // Model Name Number
    engineSpecifications: "4.4L Turbocharged Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "2",  // Seating Capacity
    priceRange: "₹12,50,000 - ₹14,00,000",  // Price Range
    mileageRange: "8 - 12 km/l",  // Mileage/Range
    safetyFeatures: "ABS, Airbags, Parking Sensors",  // Safety Features
    colorOptions: "White, Yellow, Red",  // Color Options
    dimensions: "6600 mm (Length), 2350 mm (Width), 2700 mm (Height)",  // Dimensions
    performanceFeatures: "Heavy Duty Performance, High Payload",  // Performance Features
    interiorFeatures: "Comfortable Cabin, Adjustable Seats",  // Interior Features
    exteriorFeatures: "Durable Build, Front Bumper",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2018" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Eicher 1114 XP Pro.png"

},

"Eicher 3015": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "3015",
    engineSpecifications: "3.3L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹7,00,000 - ₹10,00,000",  // Example price range
    mileageRange: "8 - 10 km/l",  // Example mileage
    safetyFeatures: "Driver Airbag, ABS, Reverse Parking Sensors",
    colorOptions: "White, Red, Yellow",
    dimensions: "5300 mm (Length), 2000 mm (Width), 3000 mm (Height)",
    performanceFeatures: "Powerful Engine, High Load Carrying Capacity",
    interiorFeatures: "Basic Cabin, Digital Speedometer, AM/FM Radio",
    exteriorFeatures: "Strong Front Bumper, Halogen Headlamps, Wide Side Mirrors",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/Eicher 3015.png"

},
"Eicher 1049": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "1049",
    engineSpecifications: "3.0L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹6,00,000 - ₹8,50,000",  // Example price range
    mileageRange: "10 - 12 km/l",  // Example mileage
    safetyFeatures: "Driver Airbag, ABS, Reverse Parking Sensors",
    colorOptions: "White, Red, Blue",
    dimensions: "4200 mm (Length), 1900 mm (Width), 2400 mm (Height)",
    performanceFeatures: "Durable Engine, High Payload Capacity",
    interiorFeatures: "Basic Cabin, Speedometer, Cup Holders",
    exteriorFeatures: "Reflective Tape, Strong Grille, Bumper Guard",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2018",
    imageUrl: "assets/images/vehicle_models_images/Eicher 1049.png"

},
"Eicher Pro 6000": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "Pro 6000",
    engineSpecifications: "5.0L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹15,00,000 - ₹20,00,000",  // Example price range
    mileageRange: "7 - 9 km/l",  // Example mileage
    safetyFeatures: "Driver Airbag, ABS, Automatic Transmission, Hill Assist",
    colorOptions: "White, Yellow, Blue",
    dimensions: "6500 mm (Length), 2300 mm (Width), 3500 mm (Height)",
    performanceFeatures: "High Torque Engine, Load Sensing, Long Haul Durability",
    interiorFeatures: "Ergonomic Cabin, Digital Display, Bluetooth Connectivity",
    exteriorFeatures: "LED Lighting, Robust Bumper, Durable Body",
    warrantyAfterSalesService: "5-year/2,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Eicher Pro 6000.png"

},
"Eicher Pro 8000": {
    type: "Commercial",
    brand: "Eicher",
    modelNameNumber: "Pro 8000",
    engineSpecifications: "7.0L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual",
    seatingCapacity: "2",
    priceRange: "₹22,00,000 - ₹28,00,000",  // Example price range
    mileageRange: "6 - 8 km/l",  // Example mileage
    safetyFeatures: "Driver Airbag, ABS, EBD, Emergency Braking System",
    colorOptions: "White, Green, Blue",
    dimensions: "8000 mm (Length), 2500 mm (Width), 3800 mm (Height)",
    performanceFeatures: "Heavy Duty Engine, High Load Capacity, Excellent Torque",
    interiorFeatures: "Comfortable Driver's Cabin, Digital Instrument Cluster",
    exteriorFeatures: "Front Fog Lights, Extended Side Mirrors, Robust Design",
    warrantyAfterSalesService: "5-year/3,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/Eicher Pro 8000.png"

},

"Renault Kwid": {
    type: "Passenger",
    brand: "Renault",
    modelNameNumber: "Kwid",  // Model Name Number (Example, update as per your data)
    engineSpecifications: "1.0L Petrol",  // Engine Specifications
    fuelType: "Petrol",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹4,50,000 - ₹6,00,000",  // Price Range
    mileageRange: "20 - 23 km/l",  // Mileage/Range
    safetyFeatures: "Driver Airbag, ABS with EBD, Rear Parking Sensors",  // Safety Features
    colorOptions: "Planet Grey, Fiery Red, Moonlight Silver, Electric Blue, and more",  // Color Options
    dimensions: "3731 mm (Length), 1579 mm (Width), 1474 mm (Height)",  // Dimensions
    performanceFeatures: "Compact Size, Efficient Engine, Easy Maneuvering",  // Performance Features
    interiorFeatures: "Touchscreen Infotainment, Digital Instrument Cluster, Power Steering",  // Interior Features
    exteriorFeatures: "LED DRLs, Body-coloured Bumpers, Stylish Grill",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2015" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Renault Kwid.png"

},

"Renault Triber": {
    type: "Passenger",
    brand: "Renault",
    modelNameNumber: "Triber",  // Model Name Number (Example, update as per your data)
    engineSpecifications: "1.0L Petrol",  // Engine Specifications
    fuelType: "Petrol",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "7",  // Seating Capacity
    priceRange: "₹5,50,000 - ₹8,00,000",  // Price Range
    mileageRange: "18 - 20 km/l",  // Mileage/Range
    safetyFeatures: "Driver and Passenger Airbags, ABS with EBD, Rear Parking Sensors",  // Safety Features
    colorOptions: "Mystic Red, Ice Cool White, Moonlight Silver, and more",  // Color Options
    dimensions: "3990 mm (Length), 1739 mm (Width), 1643 mm (Height)",  // Dimensions
    performanceFeatures: "Flexible Seating, Efficient Engine, Compact Dimensions",  // Performance Features
    interiorFeatures: "Touchscreen Infotainment, Modular Seating, Digital Instrument Cluster",  // Interior Features
    exteriorFeatures: "LED DRLs, Roof Rails, Dual-tone Exteriors",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2019",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Renault Triber.png"

},

"Renault Duster": {
    type: "Passenger",
    brand: "Renault",
    modelNameNumber: "Duster",  // Model Name Number (Example, update as per your data)
    engineSpecifications: "1.5L Petrol, 1.5L Diesel",  // Engine Specifications
    fuelType: "Petrol/Diesel",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹9,00,000 - ₹14,00,000",  // Price Range
    mileageRange: "16 - 19 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS with EBD, ESC, Hill Start Assist",  // Safety Features
    colorOptions: "Cayenne Orange, Glacier White, Moonlight Silver, and more",  // Color Options
    dimensions: "4360 mm (Length), 1822 mm (Width), 1695 mm (Height)",  // Dimensions
    performanceFeatures: "Efficient Diesel Engine, All-terrain Capability, Powerful Performance",  // Performance Features
    interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Climate Control",  // Interior Features
    exteriorFeatures: "Roof Rails, Projector Headlamps, LED DRLs",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2012" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Renault Duster.png"

},

"Renault Captur": {
    type: "Passenger",
    brand: "Renault",
    modelNameNumber: "Captur",  // Model Name Number (Example, update as per your data)
    engineSpecifications: "1.5L Petrol, 1.5L Diesel",  // Engine Specifications
    fuelType: "Petrol/Diesel",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹10,00,000 - ₹16,00,000",  // Price Range
    mileageRange: "14 - 17 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS with EBD, ESC, Hill Start Assist",  // Safety Features
    colorOptions: "Mahogany Brown, Moonlight Silver, Caspian Blue, and more",  // Color Options
    dimensions: "4122 mm (Length), 1789 mm (Width), 1613 mm (Height)",  // Dimensions
    performanceFeatures: "Premium SUV Styling, Efficient Engine, Modern Features",  // Performance Features
    interiorFeatures: "Touchscreen Infotainment, Automatic Climate Control, Leather Upholstery",  // Interior Features
    exteriorFeatures: "LED Projector Headlamps, Dual-tone Exteriors, Roof Rails",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2017" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Renault Captur.png"

},

"Renault Lodgy": {
    type: "Passenger",
    brand: "Renault",
    modelNameNumber: "Lodgy",  // Model Name Number (Example, update as per your data)
    engineSpecifications: "1.5L Diesel",  // Engine Specifications
    fuelType: "Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "7",  // Seating Capacity
    priceRange: "₹9,00,000 - ₹12,00,000",  // Price Range
    mileageRange: "19 - 22 km/l",  // Mileage/Range
    safetyFeatures: "Driver and Passenger Airbags, ABS with EBD, Rear Parking Sensors",  // Safety Features
    colorOptions: "Glacier White, Moonlight Silver, and more",  // Color Options
    dimensions: "4498 mm (Length), 1751 mm (Width), 1690 mm (Height)",  // Dimensions
    performanceFeatures: "Spacious Cabin, Efficient Diesel Engine",  // Performance Features
    interiorFeatures: "Modular Seating, Touchscreen Infotainment, AC with Climate Control",  // Interior Features
    exteriorFeatures: "Roof Rails, Chrome Front Grill, LED DRLs",  // Exterior Features
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2015" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Renault Lodgy.png"

},

"Nissan Magnite": {
    type: "Passenger",
    brand: "Nissan",
    modelNameNumber: "Magnite",
    engineSpecifications: "1.0L Turbocharged Petrol, 1.0L Naturally Aspirated Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹5,00,000 - ₹9,00,000",  
    mileageRange: "18 - 20 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors, ESP",  
    colorOptions: "Vivid Blue, Onyx Black, Flare Red, Pearl White, and more",  
    dimensions: "3994 mm (Length), 1758 mm (Width), 1576 mm (Height)",  
    performanceFeatures: "Turbocharged Engine, Responsive Steering, High Ground Clearance",  
    interiorFeatures: "7-inch Touchscreen Infotainment, Steering Mounted Controls, Digital Instrument Cluster",  
    exteriorFeatures: "LED DRLs, LED Projector Headlamps, Roof Rails, Stylish Front Grille",  
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Nissan Magnite.png"

},

"Nissan Kicks": {
    type: "Passenger",
    brand: "Nissan",
    modelNameNumber: "Kicks",
    engineSpecifications: "1.5L Petrol, 1.3L Turbocharged Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹9,00,000 - ₹15,00,000",  
    mileageRange: "13 - 16 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Traction Control, Rear Parking Sensors",  
    colorOptions: "Pearl White, Blade Silver, Deep Blue, Radiant Red, and more",  
    dimensions: "4135 mm (Length), 1813 mm (Width), 1625 mm (Height)",  
    performanceFeatures: "Turbocharged Engine, Multi-Drive Modes, Hill Assist",  
    interiorFeatures: "Touchscreen Infotainment, Automatic Climate Control, Leather Upholstery",  
    exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof, Roof Rails",  
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/Nissan Kicks.png"
    
},

"Nissan Sunny": {
    type: "Passenger",
    brand: "Nissan",
    modelNameNumber: "Sunny",
    engineSpecifications: "1.5L Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹7,00,000 - ₹11,00,000",  
    mileageRange: "16 - 19 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",  
    colorOptions: "Sunset Orange, Onyx Black, Brilliant Silver, Pearl White",  
    dimensions: "4490 mm (Length), 1695 mm (Width), 1485 mm (Height)",  
    performanceFeatures: "Smooth Ride, Fuel-Efficient Engine",  
    interiorFeatures: "Touchscreen Infotainment, Automatic Climate Control, Premium Upholstery",  
    exteriorFeatures: "Chrome Grille, LED Taillights, Large Windows for Better Visibility",  
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2011",
    imageUrl: "assets/images/vehicle_models_images/Nissan Kicks.png"
},

"Nissan Terrano": {
    type: "SUV",
    brand: "Nissan",
    modelNameNumber: "Terrano",
    engineSpecifications: "1.5L Diesel, 1.6L Petrol",  
    fuelType: "Diesel/Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹9,50,000 - ₹14,00,000",  
    mileageRange: "15 - 20 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, ESC, Rear Parking Sensors, Hill Descent Control",  
    colorOptions: "Fire Red, Sterling Grey, Nightshade, and more",  
    dimensions: "4331 mm (Length), 1822 mm (Width), 1677 mm (Height)",  
    performanceFeatures: "Rugged SUV Build, Off-road Capability, Powerful Engine Options",  
    interiorFeatures: "Touchscreen Infotainment, Premium Leather Upholstery, Push Button Start",  
    exteriorFeatures: "Chrome Door Handles, Roof Rails, Projector Headlamps",  
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2013",
    imageUrl: "assets/images/vehicle_models_images/Nissan Terrano.png"
},

    

"MG Hector": {
    type: "Passenger",
    brand: "MG",
    modelNameNumber: "Hector",
    engineSpecifications: "1.5L Turbocharged Petrol, 2.0L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5-7",
    priceRange: "₹15,00,000 - ₹20,00,000",
    mileageRange: "13 - 17 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",
    colorOptions: "Starry Sky, Glaze Red, Candy White, Aurora Silver, and more",
    dimensions: "4655 mm (Length), 1835 mm (Width), 1760 mm (Height)",
    performanceFeatures: "Turbocharged Engine, 4x4 Option, Multi-Drive Modes",
    interiorFeatures: "10.4-inch Infotainment, Leather Upholstery, Panoramic Sunroof",
    exteriorFeatures: "LED DRLs, Dual-tone Roof, Chrome Accents, Fog Lamps",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/MG Hector.png"

},

"MG Hector Plus": {
    type: "Passenger",
    brand: "MG",
    modelNameNumber: "Hector Plus",
    engineSpecifications: "1.5L Turbocharged Petrol, 2.0L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "6-7",
    priceRange: "₹17,00,000 - ₹22,00,000",
    mileageRange: "12 - 16 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",
    colorOptions: "Starry Sky, Glaze Red, Candy White, Aurora Silver, and more",
    dimensions: "4720 mm (Length), 1835 mm (Width), 1774 mm (Height)",
    performanceFeatures: "Turbocharged Engine, 4x4 Option, Multi-Drive Modes",
    interiorFeatures: "10.4-inch Infotainment, Leather Upholstery, Panoramic Sunroof",
    exteriorFeatures: "LED DRLs, Dual-tone Roof, Chrome Accents, Fog Lamps",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/MG Hector Plus.png"

},

"MG ZS EV": {
    type: "Electric",
    brand: "MG",
    modelNameNumber: "ZS EV",
    engineSpecifications: "44.5 kWh Lithium-ion Battery",
    fuelType: "Electric",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹22,00,000 - ₹25,00,000",
    mileageRange: "340 km (WLTP Range)",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",
    colorOptions: "Glaze Red, Aurora Silver, and more",
    dimensions: "4323 mm (Length), 1809 mm (Width), 1644 mm (Height)",
    performanceFeatures: "Electric Motor, Fast Charging, Regenerative Braking",
    interiorFeatures: "10.1-inch Infotainment, Leather Upholstery, Panoramic Sunroof",
    exteriorFeatures: "LED DRLs, Dual-tone Roof, Fog Lamps",
    warrantyAfterSalesService: "8-year/1,50,000 km Battery Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/MG ZS EV.png"

},

"MG Astor": {
    type: "Passenger",
    brand: "MG",
    modelNameNumber: "Astor",
    engineSpecifications: "1.3L Turbocharged Petrol, 1.5L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹10,00,000 - ₹15,00,000",
    mileageRange: "14 - 18 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",
    colorOptions: "Candy White, Glaze Red, Aurora Silver, and more",
    dimensions: "4323 mm (Length), 1809 mm (Width), 1644 mm (Height)",
    performanceFeatures: "Turbocharged Engine, Multi-Drive Modes",
    interiorFeatures: "10.1-inch Infotainment, Leather Upholstery, Digital Instrument Cluster",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Fog Lamps",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/MG Astor.png"

},

"MG Gloster": {
    type: "SUV",
    brand: "MG",
    modelNameNumber: "Gloster",
    engineSpecifications: "2.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Automatic",
    seatingCapacity: "6-7",
    priceRange: "₹30,00,000 - ₹40,00,000",
    mileageRange: "12 - 14 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, 360-degree Camera, Adaptive Cruise Control",
    colorOptions: "Candy White, Aurora Silver, and more",
    dimensions: "4985 mm (Length), 1925 mm (Width), 1875 mm (Height)",
    performanceFeatures: "4x4 Option, Advanced Terrain Management System, Multiple Driving Modes",
    interiorFeatures: "12.3-inch Infotainment, Leather Upholstery, Panoramic Sunroof, 12-speaker Audio",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Chrome Accents, Fog Lamps",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/MG Gloster.png"

},

"Linea": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Linea",  // Model Name Number
    engineSpecifications: "1.3L Multijet Diesel, 1.4L Petrol",  // Engine Specifications
    fuelType: "Petrol/Diesel",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹7,50,000 - ₹10,00,000",  // Price Range
    mileageRange: "14 - 18 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS with EBD, Reverse Parking Sensors",  // Safety Features
    colorOptions: "Bossa Nova White, Exotica Red, Hip Hop Black",  // Color Options
    dimensions: "4360 mm (Length), 1792 mm (Width), 1487 mm (Height)",  // Dimensions
    performanceFeatures: "Powerful Petrol and Diesel Engines, Smooth Ride",  // Performance Features
    interiorFeatures: "Infotainment System, Premium Upholstery, Spacious Cabin",  // Interior Features
    exteriorFeatures: "Projector Headlamps, Chrome Accents, Body-colored Mirrors",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2007" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Linea.png"

},

"Punto": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Punto",  // Model Name Number
    engineSpecifications: "1.2L Petrol, 1.3L Multijet Diesel",  // Engine Specifications
    fuelType: "Petrol/Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹5,00,000 - ₹7,50,000",  // Price Range
    mileageRange: "15 - 20 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",  // Safety Features
    colorOptions: "Pearl White, Sunburnt Orange, Matte Black",  // Color Options
    dimensions: "3987 mm (Length), 1687 mm (Width), 1487 mm (Height)",  // Dimensions
    performanceFeatures: "Good Handling, Responsive Steering, Excellent Fuel Economy",  // Performance Features
    interiorFeatures: "Touchscreen System, Comfortable Seats, Spacious Boot",  // Interior Features
    exteriorFeatures: "Fog Lamps, Chrome Grille, Body-colored Door Handles",  // Exterior Features
    warrantyAfterSalesService: "2-year/1,20,000 km Warranty, Free Service for First Year",  // Warranty & After-Sales Service
    releaseDateYear: "2009" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Punto.png"

},

"Avventura": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Avventura",  // Model Name Number
    engineSpecifications: "1.3L Multijet Diesel, 1.4L Petrol",  // Engine Specifications
    fuelType: "Petrol/Diesel",  // Fuel Type
    transmissionType: "Manual",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹7,50,000 - ₹10,00,000",  // Price Range
    mileageRange: "16 - 19 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS with EBD, Cornering Stability Control",  // Safety Features
    colorOptions: "Bronze, White, Red, Black",  // Color Options
    dimensions: "3995 mm (Length), 1706 mm (Width), 1530 mm (Height)",  // Dimensions
    performanceFeatures: "Elevated Ground Clearance, Robust Build, Strong Off-road Capability",  // Performance Features
    interiorFeatures: "Touchscreen, Leather Upholstery, Spacious Boot Space",  // Interior Features
    exteriorFeatures: "Roof Rails, Body Cladding, Daytime Running Lights",  // Exterior Features
    warrantyAfterSalesService: "3-year/1,50,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2014",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Avventura.png"

},

"Tipo": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Tipo",  // Model Name Number
    engineSpecifications: "1.4L Petrol, 1.3L Multijet Diesel",  // Engine Specifications
    fuelType: "Petrol/Diesel",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹6,00,000 - ₹8,00,000",  // Price Range
    mileageRange: "14 - 18 km/l",  // Mileage/Range
    safetyFeatures: "Dual Airbags, ABS, Hill Hold Control",  // Safety Features
    colorOptions: "Pristine White, Red, Grey",  // Color Options
    dimensions: "4370 mm (Length), 1792 mm (Width), 1485 mm (Height)",  // Dimensions
    performanceFeatures: "Compact Size, Efficient Engine, Smooth Driving Experience",  // Performance Features
    interiorFeatures: "Infotainment System, Premium Audio, Spacious Cabin",  // Interior Features
    exteriorFeatures: "Body-colored Bumpers, Chrome Grille, Alloy Wheels",  // Exterior Features
    warrantyAfterSalesService: "2-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2016" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Tipo.png"

},

"Honda Amaze": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "Amaze",  
    engineSpecifications: "1.2L Petrol, 1.5L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹7,00,000 - ₹10,00,000",  
    mileageRange: "18 - 24 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",  
    colorOptions: "Radiant Red, Modern Steel, White Orchid, Golden Brown",  
    dimensions: "3995 mm (Length), 1695 mm (Width), 1501 mm (Height)",  
    performanceFeatures: "Comfortable Ride, Smooth Handling",  
    interiorFeatures: "Touchscreen Infotainment, Keyless Entry, Digital AC Control",  
    exteriorFeatures: "LED DRLs, Chrome Grille, Fog Lamps",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  
    releaseDateYear: "2018"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda Amaze.png"

},

"Honda WR-V": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "WR-V",  
    engineSpecifications: "1.2L Petrol, 1.5L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹8,00,000 - ₹12,00,000",  
    mileageRange: "17 - 23 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Reverse Parking Sensors",  
    colorOptions: "Lunar Silver, White Orchid, Golden Brown",  
    dimensions: "3999 mm (Length), 1734 mm (Width), 1601 mm (Height)",  
    performanceFeatures: "Higher Ground Clearance, Smooth Driving Experience",  
    interiorFeatures: "Touchscreen Infotainment, Leather Seats, Smart Key",  
    exteriorFeatures: "LED DRLs, Alloy Wheels, Roof Rails",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2017"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda WR-V.png"

},

"Honda Civic": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "Civic",  
    engineSpecifications: "1.8L Petrol, 1.6L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹17,00,000 - ₹22,00,000",  
    mileageRange: "16 - 26 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, Lane Watch Camera, Hill Assist",  
    colorOptions: "Platinum White, Rallye Red, Lunar Silver",  
    dimensions: "4630 mm (Length), 1799 mm (Width), 1416 mm (Height)",  
    performanceFeatures: "Sporty Performance, Agile Handling",  
    interiorFeatures: "Touchscreen Infotainment, Apple CarPlay, Leather Upholstery",  
    exteriorFeatures: "LED Projector Headlamps, Alloy Wheels, Sunroof",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  
    releaseDateYear: "2019"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda Civic.png"

},

"Honda Accord": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "Accord",  
    engineSpecifications: "2.4L Petrol, 1.5L Turbo Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹23,00,000 - ₹28,00,000",  
    mileageRange: "12 - 15 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, Lane Keep Assist, Collision Mitigation",  
    colorOptions: "Crystal Black, Modern Steel, Platinum White",  
    dimensions: "4933 mm (Length), 1850 mm (Width), 1460 mm (Height)",  
    performanceFeatures: "Turbocharged Engine, Smooth Handling",  
    interiorFeatures: "Premium Sound System, Leather Upholstery, Dual-zone Climate Control",  
    exteriorFeatures: "LED Headlamps, Alloy Wheels, Sunroof",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  
    releaseDateYear: "2020"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda Accord.png"

},

"Honda Jazz": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "Jazz",  
    engineSpecifications: "1.2L Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹7,50,000 - ₹9,50,000",  
    mileageRange: "16 - 18 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Reverse Parking Sensors",  
    colorOptions: "Sunset Orange, Radiant Red, White Orchid, Modern Steel",  
    dimensions: "3995 mm (Length), 1694 mm (Width), 1544 mm (Height)",  
    performanceFeatures: "Responsive Handling, Spacious Cabin",  
    interiorFeatures: "Touchscreen Infotainment, Keyless Entry, Magic Seats",  
    exteriorFeatures: "LED DRLs, Alloy Wheels, Roof Rails",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2015"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda Jazz.png"

},

"Honda BR-V": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "BR-V",  
    engineSpecifications: "1.5L Petrol, 1.5L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "7",  
    priceRange: "₹9,50,000 - ₹12,00,000",  
    mileageRange: "15 - 21 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",  
    colorOptions: "Taffeta White, Golden Brown, Modern Steel",  
    dimensions: "4456 mm (Length), 1735 mm (Width), 1666 mm (Height)",  
    performanceFeatures: "Comfortable Ride, High Ground Clearance",  
    interiorFeatures: "Touchscreen Infotainment, Leather Seats, Smart Key",  
    exteriorFeatures: "Roof Rails, LED DRLs, Alloy Wheels",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  
    releaseDateYear: "2016"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda BR-V.png"

},

"Honda City": {
    type: "Passenger",
    brand: "Honda",
    modelNameNumber: "City",  
    engineSpecifications: "1.5L Petrol, 1.5L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹11,00,000 - ₹16,00,000",  
    mileageRange: "17 - 25 km/l",  
    safetyFeatures: "Dual Airbags, ABS with EBD, Reverse Parking Sensors",  
    colorOptions: "Radiant Red, Modern Steel, White Orchid, Golden Brown",  
    dimensions: "4549 mm (Length), 1748 mm (Width), 1487 mm (Height)",  
    performanceFeatures: "Smooth Handling, Comfortable Ride",  
    interiorFeatures: "Touchscreen Infotainment, Apple CarPlay, Leather Upholstery",  
    exteriorFeatures: "LED DRLs, Alloy Wheels, Sunroof",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",  
    releaseDateYear: "2020"  ,
    imageUrl: "assets/images/vehicle_models_images/Honda City.png"

},


"Seltos": {
    "type": "Passenger",
    "brand": "Kia",
    "modelNameNumber": "Seltos",  // Model Name Number
    "engineSpecifications": "1.5L Petrol, 1.5L Diesel, 1.4L Turbocharged Petrol",  // Engine Specifications
    "fuelType": "Petrol/Diesel",  // Fuel Type
    "transmissionType": "Manual/Automatic",  // Transmission Type
    "seatingCapacity": "5",  // Seating Capacity
    "priceRange": "₹10,00,000 - ₹18,00,000",  // Price Range
    "mileageRange": "16 - 21 km/l",  // Mileage/Range
    "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Hill Assist, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "Intense Red, Gravity Grey, Clear White, Aurora Black Pearl",  // Color Options
    "dimensions": "4315 mm (Length), 1800 mm (Width), 1645 mm (Height)",  // Dimensions
    "performanceFeatures": "Turbocharged Engine, Smart Key, Drive Modes",  // Performance Features
    "interiorFeatures": "Touchscreen Infotainment, Leather Upholstery, Premium Sound System",  // Interior Features
    "exteriorFeatures": "LED DRLs, Projector Headlamps, Sunroof, Chrome Accents",  // Exterior Features
    "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2019",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Seltos.png"

},
"Carens": {
    "type": "Passenger",
    "brand": "Kia",
    "modelNameNumber": "Carens",  // Model Name Number
    "engineSpecifications": "1.5L Petrol, 1.5L Diesel",  // Engine Specifications
    "fuelType": "Petrol/Diesel",  // Fuel Type
    "transmissionType": "Manual/Automatic",  // Transmission Type
    "seatingCapacity": "7",  // Seating Capacity
    "priceRange": "₹15,00,000 - ₹20,00,000",  // Price Range
    "mileageRange": "16 - 20 km/l",  // Mileage/Range
    "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Parking Sensors",  // Safety Features
    "colorOptions": "Sparkling Silver, Intense Red, Deep Blue",  // Color Options
    "dimensions": "4565 mm (Length), 1800 mm (Width), 1700 mm (Height)",  // Dimensions
    "performanceFeatures": "Smart Driving Modes, Advanced Infotainment",  // Performance Features
    "interiorFeatures": "Touchscreen Infotainment, Leather Upholstery, 7-seater Configuration",  // Interior Features
    "exteriorFeatures": "LED DRLs, Chrome Grille, Projector Headlamps",  // Exterior Features
    "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2022",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Carens.png"

},
"Carnival": {
    "type": "Passenger",
    "brand": "Kia",
    "modelNameNumber": "Carnival",  // Model Name Number
    "engineSpecifications": "2.2L Diesel, 3.5L Petrol",  // Engine Specifications
    "fuelType": "Petrol/Diesel",  // Fuel Type
    "transmissionType": "Automatic",  // Transmission Type
    "seatingCapacity": "7/8",  // Seating Capacity
    "priceRange": "₹30,00,000 - ₹35,00,000",  // Price Range
    "mileageRange": "14 - 18 km/l",  // Mileage/Range
    "safetyFeatures": "7 Airbags, ABS with EBD, ESC, 360-degree Camera",  // Safety Features
    "colorOptions": "Aurora Black, Snow White Pearl, Steel Silver",  // Color Options
    "dimensions": "5115 mm (Length), 1985 mm (Width), 1795 mm (Height)",  // Dimensions
    "performanceFeatures": "Smart Power Tailgate, Dual-Sunroof",  // Performance Features
    "interiorFeatures": "Premium Leather Seats, Dual Infotainment Screens",  // Interior Features
    "exteriorFeatures": "LED DRLs, Front and Rear Fog Lamps",  // Exterior Features
    "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2020" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Carnival.png"

},
"EV6": {
    "type": "Electric",
    "brand": "Kia",
    "modelNameNumber": "EV6",  // Model Name Number
    "engineSpecifications": "77.4 kWh Electric Motor",  // Engine Specifications
    "fuelType": "Electric",  // Fuel Type
    "transmissionType": "Automatic",  // Transmission Type
    "seatingCapacity": "5",  // Seating Capacity
    "priceRange": "₹60,00,000 - ₹70,00,000",  // Price Range
    "mileageRange": "425 km on a full charge",  // Mileage/Range
    "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Autonomous Emergency Braking",  // Safety Features
    "colorOptions": "Runway Red, Snow White Pearl, Cyber Grey",  // Color Options
    "dimensions": "4695 mm (Length), 1890 mm (Width), 1550 mm (Height)",  // Dimensions
    "performanceFeatures": "Dual Motor AWD, 800V Charging System",  // Performance Features
    "interiorFeatures": "Premium Audio System, Digital Cockpit, Panoramic Sunroof",  // Interior Features
    "exteriorFeatures": "LED Headlights, Aerodynamic Design, Flush Door Handles",  // Exterior Features
    "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2022",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/EV6.png"

},
"EV9": {
    "type": "Electric",
    "brand": "Kia",
    "modelNameNumber": "EV9",  // Model Name Number
    "engineSpecifications": "77.4 kWh Electric Motor",  // Engine Specifications
    "fuelType": "Electric",  // Fuel Type
    "transmissionType": "Automatic",  // Transmission Type
    "seatingCapacity": "7",  // Seating Capacity
    "priceRange": "₹70,00,000 - ₹80,00,000",  // Price Range
    "mileageRange": "500 km on a full charge",  // Mileage/Range
    "safetyFeatures": "8 Airbags, ABS with EBD, ESC, Lane Assist",  // Safety Features
    "colorOptions": "Midnight Black, Snow White Pearl, Ocean Blue",  // Color Options
    "dimensions": "5100 mm (Length), 2000 mm (Width), 1800 mm (Height)",  // Dimensions
    "performanceFeatures": "Dual Motor AWD, Fast Charging, Autonomous Driving Features",  // Performance Features
    "interiorFeatures": "Triple Display Screens, Heated/Cooled Seats, 360-degree Audio System",  // Interior Features
    "exteriorFeatures": "Matrix LED Lights, Aerodynamic Styling",  // Exterior Features
    "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2024" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/EV9.png"

},

"Hyundai Exter": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Exter",
    engineSpecifications: "1.2L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹6,00,000 - ₹8,00,000",
    mileageRange: "18 - 22 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors",
    colorOptions: "Phantom Black, Polar White, Titan Grey, Typhoon Silver, and more",
    dimensions: "3855 mm (Length), 1710 mm (Width), 1635 mm (Height)",
    performanceFeatures: "Smart EV Option, Reverse Parking Camera, LED DRLs",
    interiorFeatures: "Touchscreen Infotainment, Wireless Charging, Digital Speedometer",
    exteriorFeatures: "LED Headlamps, Diamond Cut Alloys, Roof Rails",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2023",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Exter.png"

},
"Hyundai Grand i10 Nios": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Grand i10 Nios",
    engineSpecifications: "1.2L Petrol, 1.2L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹5,50,000 - ₹7,50,000",
    mileageRange: "19 - 25 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",
    colorOptions: "Polar White, Aqua Teal, Fiery Red, Titan Grey, and more",
    dimensions: "3795 mm (Length), 1680 mm (Width), 1520 mm (Height)",
    performanceFeatures: "Smart Key, Reverse Parking Camera, Electric ORVMs",
    interiorFeatures: "7-inch Touchscreen, Automatic Climate Control, Leather-wrapped Steering Wheel",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Diamond Cut Alloy Wheels",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Grand i10 Nios.png"

},
"Hyundai i20": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "i20",
    engineSpecifications: "1.2L Petrol, 1.5L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹7,50,000 - ₹11,00,000",
    mileageRange: "18 - 22 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",
    colorOptions: "Polar White, Thunder Grey, Fiery Red, Lava Orange, and more",
    dimensions: "4040 mm (Length), 1775 mm (Width), 1505 mm (Height)",
    performanceFeatures: "Turbocharged Engine (Sportz variant), Multi-Drive Modes",
    interiorFeatures: "10.25-inch Touchscreen, Wireless Charging, Ambient Lighting",
    exteriorFeatures: "LED DRLs, Projector Headlamps, 16-inch Alloy Wheels",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Hyundai i20.png"

},
"Hyundai Aura": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Aura",
    engineSpecifications: "1.2L Petrol, 1.2L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹6,00,000 - ₹8,00,000",
    mileageRange: "20 - 25 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",
    colorOptions: "Fiery Red, Polar White, Aqua Teal, Titan Grey, and more",
    dimensions: "3825 mm (Length), 1680 mm (Width), 1520 mm (Height)",
    performanceFeatures: "Smart Key, Reverse Parking Camera, Smart Infotainment",
    interiorFeatures: "7-inch Touchscreen, Automatic Climate Control, Digital Instrument Cluster",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Roof Rails",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Aura.png"

},
"Hyundai Verna": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Verna",
    engineSpecifications: "1.5L Petrol, 1.5L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹10,00,000 - ₹15,00,000",
    mileageRange: "17 - 21 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",
    colorOptions: "Polar White, Fiery Red, Typhoon Silver, Starry Night, and more",
    dimensions: "4440 mm (Length), 1729 mm (Width), 1475 mm (Height)",
    performanceFeatures: "Turbocharged Engine (Sporty variants), Multi-Drive Modes",
    interiorFeatures: "10.25-inch Touchscreen, Wireless Charging, Leather Upholstery",
    exteriorFeatures: "LED Headlamps, Chrome Grille, Dual-tone Roof",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2023",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Verna.png"

},
"Hyundai Creta": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Creta",
    engineSpecifications: "1.5L Petrol, 1.5L Diesel, 1.4L Turbo Petrol",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹10,00,000 - ₹18,00,000",
    mileageRange: "16 - 21 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",
    colorOptions: "Phantom Black, Polar White, Titan Grey, Lava Orange, and more",
    dimensions: "4300 mm (Length), 1790 mm (Width), 1635 mm (Height)",
    performanceFeatures: "Turbocharged Engine (Sportz variant), Drive Modes, Panoramic Sunroof",
    interiorFeatures: "8-inch Touchscreen, Automatic Climate Control, Wireless Charging",
    exteriorFeatures: "LED DRLs, Projector Headlamps, 17-inch Alloy Wheels",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2015",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Creta.png"

},

"Hyundai Alcazar": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Alcazar",
    engineSpecifications: "2.0L Petrol, 1.5L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "6-7",  
    priceRange: "₹16,00,000 - ₹20,00,000",  
    mileageRange: "14 - 18 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",  
    colorOptions: "Typhoon Silver, Phantom Black, Polar White, Taiga Brown",  
    dimensions: "4500 mm (Length), 1790 mm (Width), 1675 mm (Height)",  
    performanceFeatures: "Multi-Drive Modes, Electronic Stability Control",  
    interiorFeatures: "Leather Upholstery, Touchscreen Infotainment, Wireless Charging",  
    exteriorFeatures: "LED Headlamps, Roof Rails, Chrome Door Handles, Fog Lamps",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Alcazar.png"

},
"Hyundai Venue": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Venue",
    engineSpecifications: "1.2L Petrol, 1.0L Turbo Petrol, 1.5L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹7,00,000 - ₹12,00,000",  
    mileageRange: "17 - 23 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors",  
    colorOptions: "Polar White, Typhoon Silver, Deep Forest, Denim Blue",  
    dimensions: "3995 mm (Length), 1770 mm (Width), 1605 mm (Height)",  
    performanceFeatures: "Turbocharged Engine, Smart Key, Wireless Charging",  
    interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Climate Control",  
    exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof, Roof Rails",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Venue.png"

},
"Hyundai Tucson": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Tucson",
    engineSpecifications: "2.0L Petrol, 2.0L Diesel",  
    fuelType: "Petrol/Diesel",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹22,00,000 - ₹28,00,000",  
    mileageRange: "15 - 20 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",  
    colorOptions: "Phantom Black, Polar White, Red, Blue",  
    dimensions: "4630 mm (Length), 1865 mm (Width), 1660 mm (Height)",  
    performanceFeatures: "All-Wheel Drive, Multi-Drive Modes, Panoramic Sunroof",  
    interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Wireless Charging",  
    exteriorFeatures: "LED Headlamps, Roof Rails, Alloy Wheels, Fog Lamps",  
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Tucson.png"

},
"Hyundai Ioniq 5": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Ioniq 5",
    engineSpecifications: "77.4 kWh Electric",  
    fuelType: "Electric",  
    transmissionType: "Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹45,00,000 - ₹50,00,000",  
    mileageRange: "500 - 600 km (Range per Charge)",  
    safetyFeatures: "Multiple Airbags, ABS, ESC, Lane Keep Assist, Autonomous Emergency Braking",  
    colorOptions: "Lucid Blue, Phantom Black, Biophilic Blue, White",  
    dimensions: "4635 mm (Length), 1890 mm (Width), 1605 mm (Height)",  
    performanceFeatures: "Fast Charging, Dual Motor AWD, Regenerative Braking",  
    interiorFeatures: "Dual Touchscreen Infotainment, Digital Instrument Cluster, Sustainable Materials",  
    exteriorFeatures: "Pixelated LED Headlights, V2L (Vehicle-to-Load), Aerodynamic Design",  
    warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Ioniq 5.png"

},
"Hyundai Venue N Line": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Venue N Line",
    engineSpecifications: "1.0L Turbo Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹9,00,000 - ₹12,00,000",  
    mileageRange: "16 - 19 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors",  
    colorOptions: "N Line Red, Polar White, Typhoon Silver",  
    dimensions: "3995 mm (Length), 1770 mm (Width), 1605 mm (Height)",  
    performanceFeatures: "Sporty Suspension, Multi-Drive Modes, Rear Disc Brakes",  
    interiorFeatures: "Sporty Black Interior, Touchscreen Infotainment, Wireless Charging",  
    exteriorFeatures: "Sporty Red Accents, LED DRLs, Dual-tone Roof, Roof Rails",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Venue N Line.png"

},
"Hyundai i20 N Line": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "i20 N Line",
    engineSpecifications: "1.0L Turbo Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹10,00,000 - ₹13,00,000",  
    mileageRange: "17 - 20 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors",  
    colorOptions: "N Line Red, Polar White, Typhoon Silver",  
    dimensions: "4045 mm (Length), 1775 mm (Width), 1505 mm (Height)",  
    performanceFeatures: "Sporty Suspension, Multi-Drive Modes, Enhanced Handling",  
    interiorFeatures: "Sporty Black Interior, Touchscreen Infotainment, Digital Instrument Cluster",  
    exteriorFeatures: "Sporty Red Accents, LED DRLs, Alloy Wheels, Fog Lamps",  
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Hyundai i20 N Line.png"

},
"Hyundai Creta N Line": {
    type: "Passenger",
    brand: "Hyundai",
    modelNameNumber: "Creta N Line",
    engineSpecifications: "1.4L Turbo Petrol",  
    fuelType: "Petrol",  
    transmissionType: "Manual/Automatic",  
    seatingCapacity: "5",  
    priceRange: "₹16,00,000 - ₹20,00,000",  
    mileageRange: "14 - 18 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors",  
    colorOptions: "N Line Red, Phantom Black, Polar White",  
    dimensions: "4300 mm (Length), 1790 mm (Width), 1635 mm (Height)",  
    performanceFeatures: "Sporty Suspension, Multi-Drive Modes, Turbocharged Engine",  
    interiorFeatures: "Sporty Interior, Touchscreen Infotainment, Wireless Charging",  
    exteriorFeatures: "Sporty Red Accents, LED DRLs, Dual-tone Roof, Roof Rails",  
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Hyundai Creta N Line.png"

},

"Magnite": {
    type: "Passenger",
    brand: "Nissan",
    modelNameNumber: "Magnite",
    engineSpecifications: "1.0L Turbocharged Petrol, 1.0L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹5,00,000 - ₹8,00,000",
    mileageRange: "18 - 20 km/l",
    safetyFeatures: "4 Airbags, ABS with EBD, Rear Parking Sensors, Rearview Camera",
    colorOptions: "Vivid Blue, Onyx Black, Pearl White, Storm White, and more",
    dimensions: "3994 mm (Length), 1758 mm (Width), 1573 mm (Height)",
    performanceFeatures: "Turbocharged Engine, Smart Driving Mode, 16-inch Wheels",
    interiorFeatures: "Touchscreen Infotainment, Wireless Apple CarPlay, Wireless Charging, Adjustable Seats",
    exteriorFeatures: "LED DRLs, Split-Type LED Tail Lamps, Bold Front Grille",
    warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Magnite.png"

},

"X-Trail": {
    type: "Passenger",
    brand: "Nissan",
    modelNameNumber: "X-Trail",
    engineSpecifications: "2.0L Petrol, 1.6L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹25,00,000 - ₹35,00,000",
    mileageRange: "13 - 15 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, Intelligent Emergency Braking, Lane Departure Warning",
    colorOptions: "Brilliant Silver, Magnetic Red, Gun Metallic, Pearl White, and more",
    dimensions: "4640 mm (Length), 1820 mm (Width), 1740 mm (Height)",
    performanceFeatures: "4WD, Intelligent Mobility, All-Terrain Capabilities",
    interiorFeatures: "Panoramic Sunroof, Leather Upholstery, 8-inch Touchscreen Infotainment",
    exteriorFeatures: "LED Headlights, Roof Rails, Smart Auto Lights",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/X-Trail.png"

},

"GT-R": {
    type: "Passenger",
    brand: "Nissan",
    modelNameNumber: "GT-R",
    engineSpecifications: "3.8L V6 Twin-Turbo Petrol",
    fuelType: "Petrol",
    transmissionType: "Automatic",
    seatingCapacity: "2",
    priceRange: "₹2,20,00,000 - ₹2,50,00,000",
    mileageRange: "8 - 10 km/l",
    safetyFeatures: "Advanced Airbag System, ABS with EBD, Traction Control, Active LSD",
    colorOptions: "Super Silver, Pearl White, Jet Black, Blaze Metallic, and more",
    dimensions: "4710 mm (Length), 1895 mm (Width), 1370 mm (Height)",
    performanceFeatures: "565 hp, 0-100 km/h in 3.0 seconds, All-Wheel Drive",
    interiorFeatures: "Recaro Seats, Multi-Function Display, Bose Audio System",
    exteriorFeatures: "Aerodynamic Design, Signature LED Tail Lamps, Carbon Fiber Accents",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",
    releaseDateYear: "2007",
    imageUrl: "assets/images/vehicle_models_images/GT-R.png"

},

"Kushaq": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Kushaq",
    engineSpecifications: "1.0L Turbocharged Petrol, 1.5L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹10,00,000 - ₹17,00,000",
    mileageRange: "16 - 18 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Hold Control",
    colorOptions: "Candy White, Brilliant Silver, Tornado Red, Carbon Steel, and more",
    dimensions: "4225 mm (Length), 1760 mm (Width), 1610 mm (Height)",
    performanceFeatures: "Turbocharged Engine, Multi-Drive Modes, Electric Power Steering",
    interiorFeatures: "Touchscreen Infotainment, Virtual Cockpit, Wireless Charging",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Roof Rails, Fog Lamps",
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Kushaq.png"

},

"Slavia": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Slavia",
    engineSpecifications: "1.0L Turbocharged Petrol, 1.5L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹10,00,000 - ₹18,00,000",
    mileageRange: "17 - 20 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors",
    colorOptions: "Candy White, Brilliant Silver, Crystal Blue, and more",
    dimensions: "4541 mm (Length), 1752 mm (Width), 1487 mm (Height)",
    performanceFeatures: "Turbocharged Engine, Regenerative Braking, Electric Power Steering",
    interiorFeatures: "8-inch Touchscreen, Ambient Lighting, Wireless Charging",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Chrome Grille, Alloy Wheels",
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/Slavia.png"

},

"Kodiaq": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Kodiaq",
    engineSpecifications: "2.0L Turbocharged Petrol, 2.0L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Automatic",
    seatingCapacity: "7",
    priceRange: "₹35,00,000 - ₹45,00,000",
    mileageRange: "14 - 17 km/l",
    safetyFeatures: "9 Airbags, ABS with EBD, ESC, Lane Assist, Adaptive Cruise Control",
    colorOptions: "Moon White, Lava Blue, Brilliant Silver, and more",
    dimensions: "4697 mm (Length), 1882 mm (Width), 1676 mm (Height)",
    performanceFeatures: "4WD, Adaptive Suspension, Off-Road Mode",
    interiorFeatures: "Panoramic Sunroof, Virtual Cockpit, Leather Upholstery",
    exteriorFeatures: "LED Headlamps, Roof Rails, 18-inch Alloy Wheels, Fog Lamps",
    warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/Kodiaq.png"

},

"Superb": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Superb",
    engineSpecifications: "1.8L Petrol, 2.0L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹28,00,000 - ₹35,00,000",
    mileageRange: "15 - 18 km/l",
    safetyFeatures: "8 Airbags, ABS with EBD, ESC, Blind Spot Detection, Adaptive Cruise Control",
    colorOptions: "Magnetite Brown, Candy White, Brilliant Silver, and more",
    dimensions: "4869 mm (Length), 1864 mm (Width), 1467 mm (Height)",
    performanceFeatures: "Adaptive Suspension, Dynamic Chassis Control, Turbocharged Engine",
    interiorFeatures: "Touchscreen Infotainment, Ambient Lighting, Virtual Cockpit",
    exteriorFeatures: "LED Headlamps, Chrome Trims, Alloy Wheels",
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2001",
    imageUrl: "assets/images/vehicle_models_images/Superb.png"

},

"Octavia": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Octavia",
    engineSpecifications: "1.4L Turbocharged Petrol, 2.0L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹20,00,000 - ₹30,00,000",
    mileageRange: "16 - 18 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Rear Parking Sensors, Lane Assist",
    colorOptions: "Magnetite Brown, Quartz Grey, Brilliant Silver, and more",
    dimensions: "4689 mm (Length), 1829 mm (Width), 1465 mm (Height)",
    performanceFeatures: "Turbocharged Engine, Regenerative Braking, Adaptive Cruise Control",
    interiorFeatures: "8-inch Touchscreen, Leather Upholstery, Virtual Cockpit",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Alloy Wheels",
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "1996",
    imageUrl: "assets/images/vehicle_models_images/Octavia.png"

},

"Enyaq iV": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Enyaq iV",
    engineSpecifications: "77 kWh Battery Electric",
    fuelType: "Electric",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹55,00,000 - ₹65,00,000",
    mileageRange: "500 km (Range)",
    safetyFeatures: "8 Airbags, ABS with EBD, ESC, Lane Assist, Adaptive Cruise Control",
    colorOptions: "Black Magic, Mamba Green, Steel Grey, and more",
    dimensions: "4649 mm (Length), 1877 mm (Width), 1610 mm (Height)",
    performanceFeatures: "Electric Motor, Regenerative Braking, Fast Charging",
    interiorFeatures: "Panoramic Sunroof, Touchscreen Infotainment, Leather Upholstery",
    exteriorFeatures: "LED Headlamps, Roof Rails, Alloy Wheels",
    warrantyAfterSalesService: "8-year Battery Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Enyaq iV.png"

},

"Kylaq": {
    type: "Passenger",
    brand: "Skoda",
    modelNameNumber: "Kylaq",
    engineSpecifications: "1.5L Petrol, 2.0L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Automatic",
    seatingCapacity: "7",
    priceRange: "₹25,00,000 - ₹40,00,000",
    mileageRange: "15 - 18 km/l",
    safetyFeatures: "7 Airbags, ABS with EBD, ESC, Blind Spot Detection, Adaptive Cruise Control",
    colorOptions: "Moon White, Platinum Grey, Velvet Red, and more",
    dimensions: "4700 mm (Length), 1880 mm (Width), 1680 mm (Height)",
    performanceFeatures: "Turbocharged Engine, 4WD, Adaptive Suspension",
    interiorFeatures: "Virtual Cockpit, Leather Upholstery, Premium Sound System",
    exteriorFeatures: "LED Headlamps, Roof Rails, Alloy Wheels",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2024",
    imageUrl: "assets/images/vehicle_models_images/Kylaq.png"

},


"Alto 800": {
    "type": "Passenger",
    "brand": "Maruti Suzuki",
    "modelNameNumber": "Alto 800",
    "engineSpecifications": "0.8L Petrol",
    "fuelType": "Petrol",
    "transmissionType": "Manual",
    "seatingCapacity": "4",
    "priceRange": "₹3,50,000 - ₹5,00,000",
    "mileageRange": "22 - 24 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD",
    "colorOptions": "Silky Silver, Solid White, Cerulean Blue, Mojito Green",
    "dimensions": "3445 mm (Length), 1475 mm (Width), 1470 mm (Height)",
    "performanceFeatures": "Lightweight Engine, Smart Play Audio System",
    "interiorFeatures": "Premium Upholstery, 2-DIN Audio System",
    "exteriorFeatures": "Halogen Headlamps, Body-Colored Bumpers",
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2012",
    imageUrl: "assets/images/vehicle_models_images/Alto 800.png"

},
"Alto K10": {
    "type": "Passenger",
    "brand": "Maruti Suzuki",
    "modelNameNumber": "Alto K10",
    "engineSpecifications": "1.0L Petrol",
    "fuelType": "Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹4,00,000 - ₹5,50,000",
    "mileageRange": "22 - 24 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD",
    "colorOptions": "Silky Silver, Pearl Arctic White, Granite Grey, Blazing Red",
    "dimensions": "3445 mm (Length), 1475 mm (Width), 1470 mm (Height)",
    "performanceFeatures": "Peppy Engine, Fuel Efficient, Smooth Gearbox",
    "interiorFeatures": "Integrated Audio System, Digital Instrument Cluster",
    "exteriorFeatures": "Body-Colored ORVMs, Fog Lamps, Chrome Front Grille",
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2014",
    imageUrl: "assets/images/vehicle_models_images/Alto K10.png"

},
"Wagon R": {
    "type": "Passenger",
    "brand": "Maruti Suzuki",
    "modelNameNumber": "Wagon R",
    "engineSpecifications": "1.0L Petrol, 1.2L Petrol",
    "fuelType": "Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹5,00,000 - ₹6,50,000",
    "mileageRange": "20 - 22 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD",
    "colorOptions": "Magnetic Brown, Silky Silver, Nutmeg Brown, Poolside Blue",
    "dimensions": "3655 mm (Length), 1620 mm (Width), 1675 mm (Height)",
    "performanceFeatures": "Peppy Engine, High Fuel Efficiency, Dual-tone Interiors",
    "interiorFeatures": "Touchscreen Infotainment, Digital Speedometer",
    "exteriorFeatures": "New Grille Design, Fog Lamps, LED DRLs",
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "1999",
    imageUrl: "assets/images/vehicle_models_images/Wagon R.png"

},
"Swift": {
    "type": "Passenger",
    "brand": "Maruti Suzuki",
    "modelNameNumber": "Swift",
    "engineSpecifications": "1.2L Petrol, 1.3L Diesel",
    "fuelType": "Petrol/Diesel",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹5,80,000 - ₹8,00,000",
    "mileageRange": "19 - 22 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD, ESP, Hill Hold Assist",
    "colorOptions": "Pearl Arctic White, Silky Silver, Prime Mystic Red",
    "dimensions": "3840 mm (Length), 1735 mm (Width), 1530 mm (Height)",
    "performanceFeatures": "Powerful Engine, Swift Handling, Sporty Feel",
    "interiorFeatures": "Touchscreen Infotainment, Leather Upholstery, Smart Instrument Cluster",
    "exteriorFeatures": "LED DRLs, Projector Headlamps, Chrome Accents",
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2005",
    imageUrl: "assets/images/vehicle_models_images/Swift.png"

},
"Swift Dzire": {
    "type": "Passenger",
    "brand": "Maruti Suzuki",
    "modelNameNumber": "Swift Dzire",
    "engineSpecifications": "1.2L Petrol, 1.3L Diesel",
    "fuelType": "Petrol/Diesel",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹6,00,000 - ₹8,50,000",
    "mileageRange": "19 - 23 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
    "colorOptions": "Pearl White, Silky Silver, Magma Grey, Oxford Blue",
    "dimensions": "3995 mm (Length), 1690 mm (Width), 1515 mm (Height)",
    "performanceFeatures": "Efficient Engine, Smooth Ride Quality, Low Maintenance",
    "interiorFeatures": "Touchscreen Infotainment, Leather Seats, Smart Instrument Cluster",
    "exteriorFeatures": "LED DRLs, Alloy Wheels, Chrome Accents",
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2008",
    imageUrl: "assets/images/vehicle_models_images/Swift Dzire.png"

},
"Celerio": {
    "type": "Passenger",
    "brand": "Maruti Suzuki",
    "modelNameNumber": "Celerio",
    "engineSpecifications": "1.0L Petrol, 1.0L CNG",
    "fuelType": "Petrol/CNG",
    "transmissionType": "Manual/AMT",
    "seatingCapacity": "5",
    "priceRange": "₹4,50,000 - ₹6,00,000",
    "mileageRange": "23 - 27 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD, Rear Parking Sensors",
    "colorOptions": "Silky Silver, Blazing Red, Glistening Grey, Caffeine Brown",
    "dimensions": "3695 mm (Length), 1600 mm (Width), 1555 mm (Height)",
    "performanceFeatures": "AMT Transmission, Fuel Efficiency, Easy Maneuverability",
    "interiorFeatures": "Touchscreen Infotainment, Smart Digital Display",
    "exteriorFeatures": "LED DRLs, Body-Colored ORVMs, Fog Lamps",
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, Roadside Assistance",
    "releaseDateYear": "2008",
    imageUrl: "assets/images/vehicle_models_images/Celerio.png"

},

"Eeco Cargo": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Eeco Cargo",  // Model Name Number
    "engineSpecifications": "1.2L Petrol",  // Engine Specifications
    "fuelType": "Petrol",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹5,00,000 - ₹6,50,000",  // Price Range
    "mileageRange": "15 - 17 km/l",  // Mileage/Range
    "safetyFeatures": "Driver Airbag, ABS with EBD",  // Safety Features
    "colorOptions": "White, Silver, Red, Blue",  // Color Options
    "dimensions": "3679 mm (Length), 1475 mm (Width), 1875 mm (Height)",  // Dimensions
    "performanceFeatures": "Stable Ride, High Payload Capacity",  // Performance Features
    "interiorFeatures": "Basic Instrument Cluster, Spacious Cargo Area",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Body-Colored Bumpers",  // Exterior Features
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2010",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Eeco Cargo.png"

},

"Alto Tour": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Alto Tour",  // Model Name Number
    "engineSpecifications": "1.0L Petrol",  // Engine Specifications
    "fuelType": "Petrol",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹3,50,000 - ₹5,00,000",  // Price Range
    "mileageRange": "18 - 20 km/l",  // Mileage/Range
    "safetyFeatures": "Driver Airbag, ABS with EBD",  // Safety Features
    "colorOptions": "White, Silver, Red",  // Color Options
    "dimensions": "3445 mm (Length), 1490 mm (Width), 1475 mm (Height)",  // Dimensions
    "performanceFeatures": "Fuel Efficient, Compact Design",  // Performance Features
    "interiorFeatures": "Basic Instrument Cluster, Spacious Cabin",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Rear Defogger",  // Exterior Features
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2014",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Alto Tour.png"

},

"Wagon R Tour": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Wagon R Tour",  // Model Name Number
    "engineSpecifications": "1.0L Petrol",  // Engine Specifications
    "fuelType": "Petrol",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "2",  // Seating Capacity
    "priceRange": "₹5,50,000 - ₹7,00,000",  // Price Range
    "mileageRange": "18 - 22 km/l",  // Mileage/Range
    "safetyFeatures": "Driver Airbag, ABS with EBD",  // Safety Features
    "colorOptions": "White, Silver, Blue",  // Color Options
    "dimensions": "3655 mm (Length), 1620 mm (Width), 1700 mm (Height)",  // Dimensions
    "performanceFeatures": "Efficient Engine, Spacious Interior",  // Performance Features
    "interiorFeatures": "Basic Instrument Cluster, Ample Boot Space",  // Interior Features
    "exteriorFeatures": "Halogen Headlamps, Fog Lamps",  // Exterior Features
    "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2015",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Wagon R Tour.png"

},

"Ertiga Tour": {
    "type": "Commercial",
    "brand": "Tata",
    "modelNameNumber": "Ertiga Tour",  // Model Name Number
    "engineSpecifications": "1.5L Diesel",  // Engine Specifications
    "fuelType": "Diesel",  // Fuel Type
    "transmissionType": "Manual",  // Transmission Type
    "seatingCapacity": "7",  // Seating Capacity
    "priceRange": "₹9,50,000 - ₹11,00,000",  // Price Range
    "mileageRange": "20 - 24 km/l",  // Mileage/Range
    "safetyFeatures": "ABS with EBD, Dual Airbags, Reverse Parking Sensors",  // Safety Features
    "colorOptions": "White, Silver, Blue, Black",  // Color Options
    "dimensions": "4300 mm (Length), 1695 mm (Width), 1685 mm (Height)",  // Dimensions
    "performanceFeatures": "Fuel Efficient, Spacious, and Comfortable Ride",  // Performance Features
    "interiorFeatures": "Touchscreen Infotainment, Ample Legroom",  // Interior Features
    "exteriorFeatures": "Chrome Accents, Dual-tone Roof",  // Exterior Features
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    "releaseDateYear": "2017" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Ertiga Tour.png"

},

"Harrier": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Harrier",
    engineSpecifications: "2.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹15,00,000 - ₹23,00,000",
    mileageRange: "16 - 20 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Traction Control",
    colorOptions: "Calypso Red, Pearl White, Daytona Grey, Orion Silver",
    dimensions: "4598 mm (Length), 1894 mm (Width), 1706 mm (Height)",
    performanceFeatures: "Turbocharged Engine, Multiple Driving Modes, Hill Hold Control",
    interiorFeatures: "Panoramic Sunroof, Touchscreen Infotainment, Leather Upholstery",
    exteriorFeatures: "LED DRLs, Projector Headlamps, 18-inch Alloy Wheels",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/Harrier.png"

},
"Safari": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Safari",
    engineSpecifications: "2.0L Turbocharged Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "7",
    priceRange: "₹16,00,000 - ₹24,00,000",
    mileageRange: "14 - 18 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Traction Control",
    colorOptions: "Pearl White, Royale Blue, Oyster Brown",
    dimensions: "4661 mm (Length), 1894 mm (Width), 1786 mm (Height)",
    performanceFeatures: "Advanced ESP, Terrain Response Modes",
    interiorFeatures: "Premium Leather Upholstery, 9-inch Touchscreen Infotainment, Panoramic Sunroof",
    exteriorFeatures: "LED DRLs, Dual-tone Roof, Projector Headlamps",
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Safari.png"

},
"Tiago": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Tiago",
    engineSpecifications: "1.2L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹5,00,000 - ₹7,50,000",
    mileageRange: "19 - 23 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Corner Stability Control",
    colorOptions: "Berry Red, Pure Silver, Ocean Blue",
    dimensions: "3765 mm (Length), 1647 mm (Width), 1537 mm (Height)",
    performanceFeatures: "3 Driving Modes, Responsive Power Steering",
    interiorFeatures: "7-inch Touchscreen Infotainment, Premium Fabric Upholstery",
    exteriorFeatures: "LED DRLs, Projector Headlamps",
    warrantyAfterSalesService: "3-year/1,25,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2016",
    imageUrl: "assets/images/vehicle_models_images/Tiago.png"

},
"Tigor": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Tigor",
    engineSpecifications: "1.2L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹6,00,000 - ₹8,50,000",
    mileageRange: "18 - 22 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Corner Stability Control",
    colorOptions: "Berry Red, Pure Silver, Arizona Blue",
    dimensions: "3993 mm (Length), 1677 mm (Width), 1537 mm (Height)",
    performanceFeatures: "Smooth Handling, Responsive Steering",
    interiorFeatures: "7-inch Touchscreen Infotainment, Fabric Upholstery",
    exteriorFeatures: "LED DRLs, Projector Headlamps",
    warrantyAfterSalesService: "3-year/1,25,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/Tigor.png"

},
"Punch": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Punch",
    engineSpecifications: "1.2L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹6,00,000 - ₹8,50,000",
    mileageRange: "18 - 20 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Corner Stability Control",
    colorOptions: "Royal Blue, Tropical Mist, Orcus White, Daytona Grey",
    dimensions: "3827 mm (Length), 1742 mm (Width), 1622 mm (Height)",
    performanceFeatures: "Rugged Build, High Ground Clearance",
    interiorFeatures: "7-inch Touchscreen Infotainment, Fabric Upholstery",
    exteriorFeatures: "LED DRLs, Projector Headlamps",
    warrantyAfterSalesService: "3-year/1,25,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Punch.png"

},


"Altroz": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Altroz",
    engineSpecifications: "1.2L Petrol, 1.5L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹5,50,000 - ₹9,50,000",
    mileageRange: "18 - 23 km/l",
    safetyFeatures: "5 Star NCAP Rating, 6 Airbags, ABS with EBD, ESC, Hill Assist",
    colorOptions: "High Street Gold, Harbour Blue, Downtown Red, Polar White, and more",
    dimensions: "3990 mm (Length), 1755 mm (Width), 1505 mm (Height)",
    performanceFeatures: "Harman Infotainment, Multi-Drive Modes, Premium Cabin",
    interiorFeatures: "Touchscreen Infotainment, Premium Upholstery, Apple CarPlay/Android Auto",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Fog Lamps",
    warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Altroz.png"

},
"Curvv": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Curvv",
    engineSpecifications: "1.2L Turbo Petrol, 1.5L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹12,00,000 - ₹18,00,000",
    mileageRange: "14 - 18 km/l",
    safetyFeatures: "Advanced Driver Assistance System (ADAS), 6 Airbags, ABS with EBD",
    colorOptions: "Metalic Blue, Shadow Silver, White, Grey, and more",
    dimensions: "4360 mm (Length), 1895 mm (Width), 1600 mm (Height)",
    performanceFeatures: "Electric Sunroof, Adaptive Cruise Control, Advanced Infotainment System",
    interiorFeatures: "Connected Car Tech, 10.25-inch Touchscreen, Wireless Charging",
    exteriorFeatures: "LED Headlights, Bold Grille, SUV Coupe Design",
    warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2024",
    imageUrl: "assets/images/vehicle_models_images/Curvv.png"

},
"Gravitas": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Gravitas",
    engineSpecifications: "2.0L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "7",
    priceRange: "₹15,00,000 - ₹22,00,000",
    mileageRange: "14 - 17 km/l",
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Hold Assist",
    colorOptions: "Orcus White, Telesto Grey, Royale Blue, and more",
    dimensions: "4661 mm (Length), 1894 mm (Width), 1786 mm (Height)",
    performanceFeatures: "Panoramic Sunroof, Adaptive Cruise Control, Terrain Response Modes",
    interiorFeatures: "Premium Leather Upholstery, 8.8-inch Infotainment System, 9 Speaker System",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof",
    warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Gravitas.png"

},
"Nano": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Nano",
    engineSpecifications: "0.8L Petrol",
    fuelType: "Petrol",
    transmissionType: "Manual",
    seatingCapacity: "4",
    priceRange: "₹2,00,000 - ₹3,00,000",
    mileageRange: "20 - 25 km/l",
    safetyFeatures: "ABS with EBD, Dual Airbags",
    colorOptions: "Papaya Orange, Serene White, Meteor Silver, and more",
    dimensions: "3164 mm (Length), 1652 mm (Width), 1652 mm (Height)",
    performanceFeatures: "Compact and Fuel Efficient, Low Running Cost",
    interiorFeatures: "Basic Infotainment, Minimalist Dashboard, Comfortable Seating",
    exteriorFeatures: "Compact Design, Stylish Look, Fog Lamps",
    warrantyAfterSalesService: "2-year/40,000 km Warranty",
    releaseDateYear: "2008",
    imageUrl: "assets/images/vehicle_models_images/Nano.png"

},
"Nexon EV": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Nexon EV",
    engineSpecifications: "Electric Motor (127 bhp)",
    fuelType: "Electric",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹15,00,000 - ₹20,00,000",
    mileageRange: "312 km (ARAI Certified)",
    safetyFeatures: "5 Star Global NCAP, 6 Airbags, ABS with EBD, ESC",
    colorOptions: "Glacier White, Moonlit Silver, Pure Blue, and more",
    dimensions: "3993 mm (Length), 1811 mm (Width), 1606 mm (Height)",
    performanceFeatures: "Instant Torque, Multi-Drive Modes, Fast Charging",
    interiorFeatures: "7-inch Touchscreen, Apple CarPlay, Wireless Charging",
    exteriorFeatures: "LED DRLs, Projector Headlamps, Fog Lamps, Stylish Alloy Wheels",
    warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty",
    releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Nexon EV.png"

},
"Tiago EV": {
    type: "Passenger",
    brand: "Tata",
    modelNameNumber: "Tiago EV",
    engineSpecifications: "Electric Motor (74 bhp)",
    fuelType: "Electric",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹8,00,000 - ₹11,00,000",
    mileageRange: "250 km (ARAI Certified)",
    safetyFeatures: "Dual Airbags, ABS with EBD, Rear Parking Sensors",
    colorOptions: "Teal Blue, Deep Red, Pure Silver, and more",
    dimensions: "3763 mm (Length), 1677 mm (Width), 1537 mm (Height)",
    performanceFeatures: "Regenerative Braking, Quick Charging",
    interiorFeatures: "7-inch Touchscreen, Apple CarPlay, Digital Instrument Cluster",
    exteriorFeatures: "LED DRLs, Bold Grille, Rear Spoiler",
    warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty",
    releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/Tiago EV.png"

},


"Tigor EV": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Tigor EV",
    "engineSpecifications": "72 V Lithium-ion Battery",
    "fuelType": "Electric",
    "transmissionType": "Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹12,00,000 - ₹15,00,000",
    "mileageRange": "213 km (ARAI)",
    "safetyFeatures": "Dual Airbags, ABS with EBD, Corner Stability Control",
    "colorOptions": "Pristine White, Deep Red, Teal Blue, Daytona Grey",
    "dimensions": "3990 mm (Length), 1677 mm (Width), 1532 mm (Height)",
    "performanceFeatures": "Regenerative Braking, Electric Power Steering",
    "interiorFeatures": "7-inch Touchscreen, Android Auto, Apple CarPlay, Digital Instrument Cluster",
    "exteriorFeatures": "LED DRLs, Projector Headlamps, Alloy Wheels",
    "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2021",
    imageUrl: "assets/images/vehicle_models_images/Tigor EV.png"

},
"Punch EV": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Punch EV",
    "engineSpecifications": "26 kWh Lithium-ion Battery",
    "fuelType": "Electric",
    "transmissionType": "Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹9,50,000 - ₹12,00,000",
    "mileageRange": "300 km (ARAI)",
    "safetyFeatures": "Dual Airbags, ABS with EBD, ESP, Hill Assist",
    "colorOptions": "Calypso Red, Tropical Mist, Orcus White, Meteor Bronze",
    "dimensions": "3827 mm (Length), 1742 mm (Width), 1652 mm (Height)",
    "performanceFeatures": "EV Powertrain, Multi-Drive Modes, Regenerative Braking",
    "interiorFeatures": "Touchscreen Infotainment, Digital Instrument Cluster, Smart Storage",
    "exteriorFeatures": "LED DRLs, Projector Headlamps, 16-inch Alloy Wheels",
    "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2023",
    imageUrl: "assets/images/vehicle_models_images/Punch EV.png"

},
"Curvv EV": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Curvv EV",
    "engineSpecifications": "40 kWh Lithium-ion Battery",
    "fuelType": "Electric",
    "transmissionType": "Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹16,00,000 - ₹22,00,000",
    "mileageRange": "500 km (ARAI)",
    "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Advanced Driver Assistance System",
    "colorOptions": "Starry Black, Moonlit Silver, Coral Red",
    "dimensions": "4300 mm (Length), 1875 mm (Width), 1600 mm (Height)",
    "performanceFeatures": "Electric Powertrain, Regenerative Braking, Cruise Control",
    "interiorFeatures": "7-inch Touchscreen Infotainment, Premium Upholstery, Voice Assist",
    "exteriorFeatures": "LED DRLs, Projector Headlamps, 18-inch Alloy Wheels",
    "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2024",
    imageUrl: "assets/images/vehicle_models_images/Curvv EV.png"

},
"Harrier EV": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Harrier EV",
    "engineSpecifications": "40 kWh Lithium-ion Battery",
    "fuelType": "Electric",
    "transmissionType": "Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹22,00,000 - ₹28,00,000",
    "mileageRange": "450 km (ARAI)",
    "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Advanced Driver Assistance System",
    "colorOptions": "Calypso Red, Pearlescent White, Royale Blue",
    "dimensions": "4598 mm (Length), 1894 mm (Width), 1700 mm (Height)",
    "performanceFeatures": "Electric Powertrain, Regenerative Braking, Terrain Response Modes",
    "interiorFeatures": "Touchscreen Infotainment, Leather Upholstery, Digital Instrument Cluster",
    "exteriorFeatures": "LED DRLs, Projector Headlamps, 17-inch Alloy Wheels",
    "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2024",
    imageUrl: "assets/images/vehicle_models_images/Harrier EV.png"

},
"Hexa": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Hexa",
    "engineSpecifications": "2.2L VARICOR Diesel",
    "fuelType": "Diesel",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "7",
    "priceRange": "₹13,00,000 - ₹20,00,000",
    "mileageRange": "14 - 17 km/l",
    "safetyFeatures": "6 Airbags, ABS with EBD, Cornering Stability Control",
    "colorOptions": "Arctic Silver, Graphite, Pearl White",
    "dimensions": "4760 mm (Length), 1900 mm (Width), 1785 mm (Height)",
    "performanceFeatures": "4WD, Drive Modes, 6-Speed Automatic Transmission",
    "interiorFeatures": "7-inch Touchscreen, Premium Leather Upholstery, Automatic Climate Control",
    "exteriorFeatures": "LED DRLs, Projector Headlamps, Roof Rails, Fog Lamps",
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
    "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Hexa.png"

},
"Zest": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Zest",
    "engineSpecifications": "1.3L Quadrajet Diesel, 1.2L Revotron Petrol",
    "fuelType": "Diesel/Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹6,00,000 - ₹8,00,000",
    "mileageRange": "17 - 23 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD, Corner Stability Control",
    "colorOptions": "Platinum Silver, Venetian Red, Sky Grey",
    "dimensions": "3995 mm (Length), 1706 mm (Width), 1570 mm (Height)",
    "performanceFeatures": "Turbocharged Engine, Drive Modes",
    "interiorFeatures": "Touchscreen Infotainment, Automatic Climate Control, Keyless Entry",
    "exteriorFeatures": "Projector Headlamps, Alloy Wheels, LED DRLs",
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
    "releaseDateYear": "2014",
    imageUrl: "assets/images/vehicle_models_images/Zest.png"

},
"Bolt": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Bolt",
    "engineSpecifications": "1.2L Revotron Petrol, 1.3L Quadrajet Diesel",
    "fuelType": "Diesel/Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹5,50,000 - ₹7,50,000",
    "mileageRange": "15 - 22 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD, Corner Stability Control",
    "colorOptions": "Pristine White, Sunburst Orange, Platinum Silver",
    "dimensions": "3825 mm (Length), 1695 mm (Width), 1550 mm (Height)",
    "performanceFeatures": "Turbocharged Engine, Drive Modes",
    "interiorFeatures": "Touchscreen Infotainment, Digital Instrument Cluster, Automatic Climate Control",
    "exteriorFeatures": "Projector Headlamps, LED DRLs, Alloy Wheels",
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
    "releaseDateYear": "2015",
    imageUrl: "assets/images/vehicle_models_images/Bolt.png"

},
"Indica": {
    "type": "Passenger",
    "brand": "Tata",
    "modelNameNumber": "Indica",
    "engineSpecifications": "1.4L TDI Diesel, 1.2L Petrol",
    "fuelType": "Diesel/Petrol",
    "transmissionType": "Manual",
    "seatingCapacity": "5",
    "priceRange": "₹4,50,000 - ₹6,00,000",
    "mileageRange": "15 - 20 km/l",
    "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
    "colorOptions": "Ocean Blue, Mist Silver, Spice Red",
    "dimensions": "3795 mm (Length), 1665 mm (Width), 1490 mm (Height)",
    "performanceFeatures": "Peppy Engine, Excellent Fuel Efficiency",
    "interiorFeatures": "Basic Infotainment, Fabric Upholstery, Manual Air Conditioning",
    "exteriorFeatures": "Halogen Headlamps, Body-colored Bumpers",
    "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
    "releaseDateYear": "1998",
    imageUrl: "assets/images/vehicle_models_images/Indica.png"

},

"Corolla Altis": {
    type: "Passenger",
    brand: "Toyota",
    modelNameNumber: "Corolla Altis",
    engineSpecifications: "1.8L Petrol, 1.4L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹16,00,000 - ₹20,00,000",
    mileageRange: "15 - 18 km/l",
    safetyFeatures: "7 Airbags, ABS with EBD, Vehicle Stability Control, Hill Assist",
    colorOptions: "Pearl White, Silver Metallic, Attitude Black, Grey Metallic, and more",
    dimensions: "4620 mm (Length), 1775 mm (Width), 1460 mm (Height)",
    performanceFeatures: "Cruise Control, Enhanced Driving Modes, Electronic Power Steering",
    interiorFeatures: "Leather Upholstery, Touchscreen Infotainment, Automatic Climate Control",
    exteriorFeatures: "LED Headlamps, Fog Lamps, Alloy Wheels, Chrome Accents",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2008",
    imageUrl: "assets/images/vehicle_models_images/Corolla Altis.png"

},

"Vellfire": {
    type: "Passenger",
    brand: "Toyota",
    modelNameNumber: "Vellfire",
    engineSpecifications: "2.5L Petrol, Hybrid",
    fuelType: "Petrol/Hybird",
    transmissionType: "Automatic",
    seatingCapacity: "7",
    priceRange: "₹80,00,000 - ₹90,00,000",
    mileageRange: "10 - 14 km/l",
    safetyFeatures: "10 Airbags, ABS with EBD, Vehicle Stability Control, Hill Start Assist",
    colorOptions: "White Pearl Crystal Shine, Black, Silver, and more",
    dimensions: "4935 mm (Length), 1850 mm (Width), 1895 mm (Height)",
    performanceFeatures: "Adaptive Cruise Control, All-Wheel Drive, Power Tailgate",
    interiorFeatures: "Luxury Leather Seats, 17-inch Touchscreen, Sunroof",
    exteriorFeatures: "LED Projector Headlamps, Alloy Wheels, Power Sliding Doors",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/Vellfire.png"

},

"Hilux": {
    type: "Commercial",
    brand: "Toyota",
    modelNameNumber: "Hilux",
    engineSpecifications: "2.4L Diesel, 2.8L Diesel",
    fuelType: "Diesel",
    transmissionType: "Manual/Automatic",
    seatingCapacity: "5",
    priceRange: "₹35,00,000 - ₹45,00,000",
    mileageRange: "12 - 16 km/l",
    safetyFeatures: "7 Airbags, ABS with EBD, Traction Control, Hill Assist",
    colorOptions: "White, Silver, Black, Red, and more",
    dimensions: "5325 mm (Length), 1855 mm (Width), 1815 mm (Height)",
    performanceFeatures: "4WD, Locking Differential, Tow Package",
    interiorFeatures: "Premium Upholstery, Touchscreen Infotainment, Climate Control",
    exteriorFeatures: "LED Daytime Running Lights, Alloy Wheels, Tow Hooks",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/Hilux.png"

},

"Land Cruiser Prado": {
    type: "Passenger",
    brand: "Toyota",
    modelNameNumber: "Land Cruiser Prado",
    engineSpecifications: "2.8L Diesel, 4.0L Petrol",
    fuelType: "Petrol/Diesel",
    transmissionType: "Automatic",
    seatingCapacity: "7",
    priceRange: "₹95,00,000 - ₹1,05,00,000",
    mileageRange: "8 - 12 km/l",
    safetyFeatures: "10 Airbags, ABS with EBD, Vehicle Stability Control, Multi-Terrain Select",
    colorOptions: "White, Black, Silver, Grey, and more",
    dimensions: "4820 mm (Length), 1885 mm (Width), 1845 mm (Height)",
    performanceFeatures: "4WD, Active Traction Control, Multi-Terrain Monitoring",
    interiorFeatures: "Leather Upholstery, Touchscreen Infotainment, Rear Entertainment",
    exteriorFeatures: "LED Headlamps, Alloy Wheels, Roof Rails",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2009",
    imageUrl: "assets/images/vehicle_models_images/Land Cruiser Prado.png"

},

"Etios": {
    type: "Passenger",
    brand: "Toyota",
    modelNameNumber: "Etios",
    engineSpecifications: "1.5L Petrol, 1.4L Diesel",
    fuelType: "Petrol/Diesel",
    transmissionType: "Manual",
    seatingCapacity: "5",
    priceRange: "₹7,00,000 - ₹9,00,000",
    mileageRange: "15 - 18 km/l",
    safetyFeatures: "Dual Airbags, ABS with EBD, Brake Assist",
    colorOptions: "White, Silver, Red, Grey, and more",
    dimensions: "4265 mm (Length), 1695 mm (Width), 1510 mm (Height)",
    performanceFeatures: "Power Steering, Remote Central Locking, Dual Tone Dashboard",
    interiorFeatures: "Touchscreen Infotainment, Digital Instrument Cluster, Air Conditioning",
    exteriorFeatures: "LED DRLs, Fog Lamps, Body Colored Bumpers",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2010",
    imageUrl: "assets/images/vehicle_models_images/Etios.png"

},

"Prius": {
    type: "Passenger",
    brand: "Toyota",
    modelNameNumber: "Prius",
    engineSpecifications: "1.8L Petrol Hybrid",
    fuelType: "Hybrid",
    transmissionType: "Automatic",
    seatingCapacity: "5",
    priceRange: "₹35,00,000 - ₹40,00,000",
    mileageRange: "18 - 25 km/l",
    safetyFeatures: "7 Airbags, ABS with EBD, Traction Control, Pre-Collision System",
    colorOptions: "Silver, White, Black, Red, and more",
    dimensions: "4540 mm (Length), 1760 mm (Width), 1490 mm (Height)",
    performanceFeatures: "Eco Mode, Regenerative Braking, Power Mode",
    interiorFeatures: "Premium Upholstery, Touchscreen Infotainment, Climate Control",
    exteriorFeatures: "LED Headlamps, Alloy Wheels, Aerodynamic Design",
    warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    releaseDateYear: "2010",
    imageUrl: "assets/images/vehicle_models_images/Prius.png"

},


"Innova Crysta": {
    "type": "Passenger",
    "brand": "Toyota",
    "modelNameNumber": "Innova Crysta",
    "engineSpecifications": "2.7L Petrol, 2.4L Diesel",
    "fuelType": "Petrol/Diesel",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "7-8",
    "priceRange": "₹17,00,000 - ₹24,00,000",
    "mileageRange": "10 - 15 km/l",
    "safetyFeatures": "7 Airbags, ABS, EBD, TCS, Vehicle Stability Control",
    "colorOptions": "Silver, White, Grey, Pearl White, Bronze",
    "dimensions": "4735 mm (Length), 1830 mm (Width), 1795 mm (Height)",
    "performanceFeatures": "Powerful Engine, Auto Climate Control, Multi-Function Steering Wheel",
    "interiorFeatures": "Premium Upholstery, 8-inch Touchscreen, 7-inch MID",
    "exteriorFeatures": "LED Headlamps, Chrome Grille, Roof Rails",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Innova Crysta.png"

  },
  "Fortuner": {
    "type": "Passenger",
    "brand": "Toyota",
    "modelNameNumber": "Fortuner",
    "engineSpecifications": "2.7L Petrol, 2.8L Diesel",
    "fuelType": "Petrol/Diesel",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "7",
    "priceRange": "₹33,00,000 - ₹50,00,000",
    "mileageRange": "10 - 14 km/l",
    "safetyFeatures": "7 Airbags, ABS, EBD, Vehicle Stability Control, Hill Assist",
    "colorOptions": "White, Silver, Black, Grey, Pearl White",
    "dimensions": "4795 mm (Length), 1855 mm (Width), 1835 mm (Height)",
    "performanceFeatures": "4x4, Sports Mode, Automatic Climate Control",
    "interiorFeatures": "Leather Upholstery, Touchscreen Infotainment, Smart Key Entry",
    "exteriorFeatures": "LED Projector Headlamps, Chrome Accents, Roof Rails",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2009",
    imageUrl: "assets/images/vehicle_models_images/Fortuner.png"

  },
  "Urban Cruiser": {
    "type": "Passenger",
    "brand": "Toyota",
    "modelNameNumber": "Urban Cruiser",
    "engineSpecifications": "1.5L Petrol",
    "fuelType": "Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹8,00,000 - ₹11,00,000",
    "mileageRange": "16 - 18 km/l",
    "safetyFeatures": "6 Airbags, ABS, EBD, Hill Assist, Parking Sensors",
    "colorOptions": "White, Silver, Black, Red, Orange",
    "dimensions": "3995 mm (Length), 1795 mm (Width), 1640 mm (Height)",
    "performanceFeatures": "Smart Hybrid Technology, Automatic Climate Control",
    "interiorFeatures": "7-inch Touchscreen, Smart Connectivity, Leather Steering",
    "exteriorFeatures": "LED Projector Headlamps, Diamond Cut Alloy Wheels, Roof Rails",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2020",
    imageUrl: "assets/images/vehicle_models_images/Urban Cruiser.png"

  },
  "Glanza": {
    "type": "Passenger",
    "brand": "Toyota",
    "modelNameNumber": "Glanza",
    "engineSpecifications": "1.2L Petrol",
    "fuelType": "Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹7,00,000 - ₹9,00,000",
    "mileageRange": "19 - 23 km/l",
    "safetyFeatures": "Dual Airbags, ABS, EBD, Rear Parking Sensors",
    "colorOptions": "White, Silver, Red, Blue, Black",
    "dimensions": "4045 mm (Length), 1730 mm (Width), 1475 mm (Height)",
    "performanceFeatures": "Smart Hybrid, LED Projector Headlamps",
    "interiorFeatures": "7-inch Infotainment System, Steering-mounted Controls",
    "exteriorFeatures": "LED DRLs, Dual-tone Roof",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2019",
    imageUrl: "assets/images/vehicle_models_images/Glanza.png"

  },
  "Yaris": {
    "type": "Passenger",
    "brand": "Toyota",
    "modelNameNumber": "Yaris",
    "engineSpecifications": "1.5L Petrol",
    "fuelType": "Petrol",
    "transmissionType": "Manual/Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹10,00,000 - ₹15,00,000",
    "mileageRange": "17 - 20 km/l",
    "safetyFeatures": "7 Airbags, ABS, EBD, Parking Sensors",
    "colorOptions": "White, Silver, Black, Red, Blue",
    "dimensions": "4425 mm (Length), 1730 mm (Width), 1495 mm (Height)",
    "performanceFeatures": "Super CVT-i, Multi-drive Mode",
    "interiorFeatures": "Touchscreen, Leather Upholstery, Smart Key Entry",
    "exteriorFeatures": "LED Projector Headlamps, Alloy Wheels, Shark-fin Antenna",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/Yaris.png"

  },
  "Camry": {
    "type": "Passenger",
    "brand": "Toyota",
    "modelNameNumber": "Camry",
    "engineSpecifications": "2.5L Petrol, 2.5L Hybrid",
    "fuelType": "Petrol/Hybrid",
    "transmissionType": "Automatic",
    "seatingCapacity": "5",
    "priceRange": "₹40,00,000 - ₹50,00,000",
    "mileageRange": "14 - 19 km/l",
    "safetyFeatures": "9 Airbags, ABS, EBD, Vehicle Stability Control, Hill Assist",
    "colorOptions": "White, Silver, Black, Blue, Red",
    "dimensions": "4855 mm (Length), 1840 mm (Width), 1445 mm (Height)",
    "performanceFeatures": "Hybrid Technology, Drive Modes, Adaptive Cruise Control",
    "interiorFeatures": "Premium Leather Upholstery, Touchscreen, 9-inch MID",
    "exteriorFeatures": "LED Headlamps, Alloy Wheels, Aerodynamic Design",
    "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
    "releaseDateYear": "2021",
    imageUrl: "assets/images/vehicle_models_images/Camry.png"

  },

  "Virtus": {
    type: "Passenger",
    brand: "Volkswagen",
    modelNameNumber: "Virtus",  // Model Name Number
    engineSpecifications: "1.0L TSI Petrol, 1.5L TSI Petrol",  // Engine Specifications
    fuelType: "Petrol",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹11,00,000 - ₹17,00,000",  // Price Range
    mileageRange: "16 - 18 km/l",  // Mileage/Range
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",  // Safety Features
    colorOptions: "Curcuma Yellow, Reflex Silver, Carbon Steel, Candy White, and more",  // Color Options
    dimensions: "4561 mm (Length), 1759 mm (Width), 1506 mm (Height)",  // Dimensions
    performanceFeatures: "Turbocharged Engine, Sports Mode, Adaptive Cruise Control",  // Performance Features
    interiorFeatures: "Touchscreen Infotainment, Digital Cockpit, Leather Upholstery",  // Interior Features
    exteriorFeatures: "LED Headlamps, Fog Lamps, Alloy Wheels, Sunroof",  // Exterior Features
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2022" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Virtus.png"

},

"Taigun": {
    type: "Passenger",
    brand: "Volkswagen",
    modelNameNumber: "Taigun",  // Model Name Number
    engineSpecifications: "1.0L TSI Petrol, 1.5L TSI Petrol",  // Engine Specifications
    fuelType: "Petrol",  // Fuel Type
    transmissionType: "Manual/Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹10,00,000 - ₹17,50,000",  // Price Range
    mileageRange: "16 - 18 km/l",  // Mileage/Range
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",  // Safety Features
    colorOptions: "Pure White, Reflex Silver, Carbon Steel, Lapiz Blue, and more",  // Color Options
    dimensions: "4221 mm (Length), 1760 mm (Width), 1612 mm (Height)",  // Dimensions
    performanceFeatures: "Turbocharged Engine, Sports Mode, Cruise Control",  // Performance Features
    interiorFeatures: "Touchscreen Infotainment, Wireless Charging, Leather Upholstery",  // Interior Features
    exteriorFeatures: "LED DRLs, Alloy Wheels, Roof Rails, Fog Lamps",  // Exterior Features
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2021",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Taigun.png"

},

"Tiguan": {
    type: "Passenger",
    brand: "Volkswagen",
    modelNameNumber: "Tiguan",  // Model Name Number
    engineSpecifications: "2.0L TDI Diesel, 1.5L TSI Petrol",  // Engine Specifications
    fuelType: "Diesel/Petrol",  // Fuel Type
    transmissionType: "Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹30,00,000 - ₹36,00,000",  // Price Range
    mileageRange: "12 - 16 km/l",  // Mileage/Range
    safetyFeatures: "8 Airbags, ABS with EBD, ESC, Hill Assist, Lane Assist",  // Safety Features
    colorOptions: "Pure White, Oryx White, Deep Black Pearl, and more",  // Color Options
    dimensions: "4486 mm (Length), 1839 mm (Width), 1672 mm (Height)",  // Dimensions
    performanceFeatures: "4MOTION All-Wheel Drive, Adaptive Cruise Control, Drive Mode Selection",  // Performance Features
    interiorFeatures: "Digital Cockpit, 8-inch Infotainment, Leather Upholstery",  // Interior Features
    exteriorFeatures: "LED Headlamps, Alloy Wheels, Roof Rails, Panoramic Sunroof",  // Exterior Features
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2021",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Tiguan.png"

},

"New Tiguan": {
    type: "Passenger",
    brand: "Volkswagen",
    modelNameNumber: "New Tiguan",  // Model Name Number
    engineSpecifications: "2.0L TDI Diesel, 1.5L TSI Petrol",  // Engine Specifications
    fuelType: "Diesel/Petrol",  // Fuel Type
    transmissionType: "Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹36,00,000 - ₹42,00,000",  // Price Range
    mileageRange: "12 - 16 km/l",  // Mileage/Range
    safetyFeatures: "8 Airbags, ABS with EBD, ESC, Hill Assist, Adaptive Cruise Control",  // Safety Features
    colorOptions: "Oryx White, Deep Black Pearl, Lapiz Blue, and more",  // Color Options
    dimensions: "4486 mm (Length), 1839 mm (Width), 1672 mm (Height)",  // Dimensions
    performanceFeatures: "4MOTION AWD, Dynamic Chassis Control, Drive Mode Selector",  // Performance Features
    interiorFeatures: "Virtual Cockpit, 9.2-inch Infotainment, Leather Upholstery",  // Interior Features
    exteriorFeatures: "LED Matrix Headlamps, Alloy Wheels, Panoramic Sunroof",  // Exterior Features
    warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2023",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/New Tiguan.png"

},

"Virtus GT": {
    type: "Passenger",
    brand: "Volkswagen",
    modelNameNumber: "Virtus GT",  // Model Name Number
    engineSpecifications: "1.5L TSI Petrol",  // Engine Specifications
    fuelType: "Petrol",  // Fuel Type
    transmissionType: "Automatic",  // Transmission Type
    seatingCapacity: "5",  // Seating Capacity
    priceRange: "₹16,00,000 - ₹20,00,000",  // Price Range
    mileageRange: "14 - 16 km/l",  // Mileage/Range
    safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist, Rear Parking Sensors",  // Safety Features
    colorOptions: "Flash Red, Curcuma Yellow, Carbon Steel, and more",  // Color Options
    dimensions: "4561 mm (Length), 1759 mm (Width), 1506 mm (Height)",  // Dimensions
    performanceFeatures: "Turbocharged Engine, Sporty Exhaust Note, Sports Mode",  // Performance Features
    interiorFeatures: "GT-inspired Seats, Touchscreen Infotainment, Leather Upholstery",  // Interior Features
    exteriorFeatures: "GT Badging, LED DRLs, Fog Lamps, Alloy Wheels",  // Exterior Features
    warrantyAfterSalesService: "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
    releaseDateYear: "2022" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Virtus GT.png"

},

    "Grand Vitara": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "Grand Vitara",
        "engineSpecifications": "1.5L Petrol, 1.5L Hybrid",
        "fuelType": "Petrol/Hybrid",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹9,00,000 - ₹15,00,000",
        "mileageRange": "18 - 22 km/l",
        "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Hill Hold Assist, Reverse Parking Sensors",
        "colorOptions": "Pearl White, Silky Silver, Grandeur Grey, and more",
        "dimensions": "4645 mm (Length), 1855 mm (Width), 1695 mm (Height)",
        "performanceFeatures": "All-Wheel Drive, Drive Modes, E-Call Feature",
        "interiorFeatures": "10.1-inch Touchscreen, Premium Upholstery, Wireless Charging",
        "exteriorFeatures": "LED Headlights, Front Skid Plate, Dual-tone Roof",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2022" ,
    imageUrl: "assets/images/vehicle_models_images/Grand Vitara.png"

    },
    "Jimny": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "Jimny",
        "engineSpecifications": "1.5L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "4",
        "priceRange": "₹10,00,000 - ₹14,00,000",
        "mileageRange": "15 - 18 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, 4x4 Drive",
        "colorOptions": "Kinetic Yellow, Silky Silver, Granite Grey",
        "dimensions": "3645 mm (Length), 1645 mm (Width), 1725 mm (Height)",
        "performanceFeatures": "4x4 Drive, Rigid Axle, Off-Road Capability",
        "interiorFeatures": "7-inch Touchscreen, Fabric Upholstery, Roof Rails",
        "exteriorFeatures": "LED Headlamps, Rear Spoiler, Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2023",
    imageUrl: "assets/images/vehicle_models_images/Jimny.png"

    },
    "Fronx": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "Fronx",
        "engineSpecifications": "1.2L Petrol, 1.0L Turbocharged Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹7,50,000 - ₹11,50,000",
        "mileageRange": "18 - 20 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, ESC, Hill Hold Assist",
        "colorOptions": "Caffé Latte, Arctic White, Bronzo, and more",
        "dimensions": "3995 mm (Length), 1765 mm (Width), 1550 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, Multi-Drive Modes",
        "interiorFeatures": "7-inch Touchscreen, Wireless Apple CarPlay, Push Start",
        "exteriorFeatures": "LED DRLs, Alloy Wheels, Roof Rails",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2023",
    imageUrl: "assets/images/vehicle_models_images/Fronx.png"

    },
    "Invicto": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "Invicto",
        "engineSpecifications": "2.0L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "7",
        "priceRange": "₹16,00,000 - ₹22,00,000",
        "mileageRange": "14 - 18 km/l",
        "safetyFeatures": "6 Airbags, ABS with EBD, ESC, 360-degree Camera",
        "colorOptions": "Moonlit Silver, Shadow Black, Ivory White",
        "dimensions": "5055 mm (Length), 1855 mm (Width), 1775 mm (Height)",
        "performanceFeatures": "Turbocharged Diesel Engine, Cruise Control, Electric Parking Brake",
        "interiorFeatures": "12-inch Touchscreen, Leather Upholstery, Digital Instrument Cluster",
        "exteriorFeatures": "LED Headlamps, Dual-tone Roof, Power Tailgate",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2023",
    imageUrl: "assets/images/vehicle_models_images/Invicto.png"

    },
    "Eeco": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Eeco",
        "engineSpecifications": "1.2L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual",
        "seatingCapacity": "5-7",
        "priceRange": "₹4,50,000 - ₹5,50,000",
        "mileageRange": "16 - 18 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Superior White, Metallic Silver",
        "dimensions": "3675 mm (Length), 1475 mm (Width), 1800 mm (Height)",
        "performanceFeatures": "Good Load Capacity, Efficient Fuel Consumption",
        "interiorFeatures": "Basic Infotainment System, Fabric Upholstery",
        "exteriorFeatures": "Halogen Headlights, Wheel Covers",
        "warrantyAfterSalesService": "3-year/1,00,000 km Warranty",
        "releaseDateYear": "2010",
    imageUrl: "assets/images/vehicle_models_images/Eeco.png"

    },
    "Super Carry": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Super Carry",
        "engineSpecifications": "1.4L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹5,00,000 - ₹6,50,000",
        "mileageRange": "18 - 20 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD",
        "colorOptions": "White, Silver, Blue",
        "dimensions": "3800 mm (Length), 1500 mm (Width), 1850 mm (Height)",
        "performanceFeatures": "Heavy Payload Capacity, Strong Engine Torque",
        "interiorFeatures": "Basic Cabin, Comfortable Seats",
        "exteriorFeatures": "Robust Body, Halogen Headlamps",
        "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
        "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Super Carry.png"

    },

    "Baleno": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "Baleno",
        "engineSpecifications": "1.2L Petrol, 1.3L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹6,00,000 - ₹9,50,000",
        "mileageRange": "18 - 23 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Pearl Arctic White, Premium Silver, NEXA Blue, and more",
        "dimensions": "3995 mm (Length), 1745 mm (Width), 1500 mm (Height)",
        "performanceFeatures": "Smooth Driving, Efficient Engine, Multi-Drive Modes",
        "interiorFeatures": "Touchscreen Infotainment, SmartPlay Studio, Auto AC",
        "exteriorFeatures": "LED DRLs, Projector Headlamps, Diamond Cut Alloy Wheels",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2015",
    imageUrl: "assets/images/vehicle_models_images/Baleno.png"

    },
    "Ignis": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "Ignis",
        "engineSpecifications": "1.2L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹5,00,000 - ₹7,50,000",
        "mileageRange": "20 - 22 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Uptown Red, Silky Silver, Pearl Arctic White, and more",
        "dimensions": "3700 mm (Length), 1690 mm (Width), 1590 mm (Height)",
        "performanceFeatures": "Compact Design, Fuel Efficient Engine",
        "interiorFeatures": "Touchscreen Infotainment, Premium Upholstery, Smart Instrument Cluster",
        "exteriorFeatures": "Dual-tone Roof, LED DRLs, Projector Headlamps",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2017",
    imageUrl: "assets/images/vehicle_models_images/Ignis.png"

    },
    "S-Presso": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "S-Presso",
        "engineSpecifications": "1.0L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹4,50,000 - ₹6,00,000",
        "mileageRange": "21 - 23 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Metallic Orange, Silky Silver, Starry Blue, and more",
        "dimensions": "3565 mm (Length), 1520 mm (Width), 1549 mm (Height)",
        "performanceFeatures": "Lightweight Design, Efficient Engine",
        "interiorFeatures": "Smart Infotainment, Adjustable Seats, LED Cluster",
        "exteriorFeatures": "SUV-like Stance, LED DRLs, Bold Grille",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2019",
    imageUrl: "assets/images/vehicle_models_images/S-Presso.png"

    },
    "Vitara Brezza": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "Vitara Brezza",
        "engineSpecifications": "1.5L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹8,00,000 - ₹11,00,000",
        "mileageRange": "17 - 19 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Camera",
        "colorOptions": "Autumn Orange, Sizzling Red, Pearl Arctic White, and more",
        "dimensions": "3995 mm (Length), 1790 mm (Width), 1640 mm (Height)",
        "performanceFeatures": "Smart Hybrid System, Efficient Engine",
        "interiorFeatures": "Touchscreen Infotainment, Smart Instrument Cluster, Rear AC Vents",
        "exteriorFeatures": "LED DRLs, 16-inch Alloy Wheels, Roof Rails",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2016",
    imageUrl: "assets/images/vehicle_models_images/Vitara Brezza.png"

    },
    "Ertiga": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "Ertiga",
        "engineSpecifications": "1.5L Petrol, 1.3L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "7",
        "priceRange": "₹8,50,000 - ₹12,00,000",
        "mileageRange": "16 - 19 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Magma Grey, Pearl Arctic White, Auburn Red, and more",
        "dimensions": "4395 mm (Length), 1735 mm (Width), 1690 mm (Height)",
        "performanceFeatures": "Fuel Efficient, Smooth Handling",
        "interiorFeatures": "Touchscreen Infotainment, Rear AC Vents, 3rd Row Seating",
        "exteriorFeatures": "Roof Rails, LED DRLs, Projector Headlamps",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2012",
    imageUrl: "assets/images/vehicle_models_images/Ertiga.png"

    },
    "XL6": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "XL6",
        "engineSpecifications": "1.5L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "6",
        "priceRange": "₹10,00,000 - ₹12,50,000",
        "mileageRange": "16 - 18 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Brave Khaki, Premium Silver, Nexa Blue, and more",
        "dimensions": "4450 mm (Length), 1775 mm (Width), 1700 mm (Height)",
        "performanceFeatures": "Stylish, Efficient Engine, Smooth Drive",
        "interiorFeatures": "Smart Infotainment, Premium Leather Upholstery, 2nd-row Captain Seats",
        "exteriorFeatures": "LED DRLs, 16-inch Alloy Wheels, Roof Rails",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2019",
    imageUrl: "assets/images/vehicle_models_images/XL6.png"

    },
    "Ciaz": {
        "type": "Passenger",
        "brand": "Maruti Suzuki",
        "modelNameNumber": "Ciaz",
        "engineSpecifications": "1.5L Petrol, 1.3L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹8,00,000 - ₹11,00,000",
        "mileageRange": "20 - 25 km/l",
        "safetyFeatures": "Dual Airbags, ABS with EBD, Reverse Parking Sensors",
        "colorOptions": "Pearl Midnight Black, Burgundy Red, and more",
        "dimensions": "4490 mm (Length), 1730 mm (Width), 1485 mm (Height)",
        "performanceFeatures": "Smooth Drive, Fuel Efficient",
        "interiorFeatures": "Touchscreen Infotainment, Smart Instrument Cluster",
        "exteriorFeatures": "LED DRLs, Projector Headlamps",
        "warrantyAfterSalesService": "2-year/40,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2014",
    imageUrl: "assets/images/vehicle_models_images/Ciaz.png"

    },
    
    "Splendor Plus": {
        "type": "Passenger",
        "brand": "Hero",
        "modelNameNumber": "Splendor Plus",
        "engineSpecifications": "97.2cc Air-Cooled, Single Cylinder",
        "fuelType": "Petrol",
        "transmissionType": "4-Speed Manual",
        "seatingCapacity": "2",
        "priceRange": "₹75,000 - ₹85,000",
        "mileageRange": "65 - 81 km/l",
        "safetyFeatures": "Integrated Braking System (IBS), Side Stand Engine Cut-off",
        "colorOptions": "Black with Purple, Black with Silver, Heavy Grey, and more",
        "dimensions": "2000 mm (Length), 720 mm (Width), 1052 mm (Height)",
        "performanceFeatures": "Advanced Pro-Spring Suspension, Reliable Engine Performance",
        "interiorFeatures": "N/A (Motorcycle)",
        "exteriorFeatures": "Stylish Body Graphics, Halogen Headlamp",
        "warrantyAfterSalesService": "5-year/70,000 km Warranty",
        "releaseDateYear": "1994",
    imageUrl: "assets/images/vehicle_models_images/Splendor Plus.png"

        },
    
        "Passion Pro": {
        "type": "Passenger",
        "brand": "Hero",
        "modelNameNumber": "Passion Pro",
        "engineSpecifications": "113cc Air-Cooled, Single Cylinder",
        "fuelType": "Petrol",
        "transmissionType": "4-Speed Manual",
        "seatingCapacity": "2",
        "priceRange": "₹75,000 - ₹80,000",
        "mileageRange": "68 - 70 km/l",
        "safetyFeatures": "Integrated Braking System (IBS), Side Stand Engine Cut-off",
        "colorOptions": "Techno Blue, Sports Red, Black, and more",
        "dimensions": "2036 mm (Length), 715 mm (Width), 1113 mm (Height)",
        "performanceFeatures": "XSens Technology, i3S Fuel Saving System",
        "interiorFeatures": "N/A (Motorcycle)",
        "exteriorFeatures": "Bold Graphics, LED Tail Lamp",
        "warrantyAfterSalesService": "5-year/70,000 km Warranty",
        "releaseDateYear": "2001",
    imageUrl: "assets/images/vehicle_models_images/Passion Pro.png"

        },
    
        "Bajaj Pulsar 150": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Pulsar 150",  // Model Name Number
        engineSpecifications: "149.5cc, Single-Cylinder, Air-Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,00,000 - ₹1,20,000",  // Price Range
        mileageRange: "40 - 45 km/l",  // Mileage/Range
        safetyFeatures: "Anti-lock Braking System (ABS), Digital Console",  // Safety Features
        colorOptions: "Red, Black, Blue, White",  // Color Options
        dimensions: "2055 mm (Length), 755 mm (Width), 1060 mm (Height)",  // Dimensions
        performanceFeatures: "Front and Rear Disc Brakes, Nitrox Suspension",  // Performance Features
        interiorFeatures: "Digital Speedometer, Backlit Switches",  // Interior Features
        exteriorFeatures: "LED Tail Light, Aggressive Styling",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2001" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/Bajaj Pulsar 150.png"

        },
    
        "Kubota Neostar A211N-NT": {
        type: "Commercial",
        brand: "Kubota",
        modelNameNumber: "A211N-NT",
        engineSpecifications: "21 HP, 3-cylinder Diesel Engine",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹5,50,000 - ₹6,00,000",
        mileageRange: "12 - 15 km/l",
        safetyFeatures: "Roll-Over Protection, Hydraulic Brakes",
        colorOptions: "Kubota Orange, Black",
        dimensions: "2990 mm (Length), 1200 mm (Width), 1460 mm (Height)",
        performanceFeatures: "4WD, High Ground Clearance, Adjustable PTO",
        interiorFeatures: "Basic Dashboard, Ergonomic Seating",
        exteriorFeatures: "Heavy-duty Front Bumper, Rigid Rear Axle",
        warrantyAfterSalesService: "2-year/1000-hour Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Kubota Neostar A211N-NT.png"

       },
    
       "XP Plus 265 Orchard": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "XP Plus 265 Orchard",  // Model Name Number
        engineSpecifications: "2.5L Diesel",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹9,00,000 - ₹11,00,000",  // Price Range
        mileageRange: "8 - 12 km/l",  // Mileage/Range
        safetyFeatures: "ABS, Power Steering, Disc Brakes",  // Safety Features
        colorOptions: "Orchard Red, White, Black, Silver",  // Color Options
        dimensions: "4990 mm (Length), 1850 mm (Width), 2130 mm (Height)",  // Dimensions
        performanceFeatures: "Heavy Duty Suspension, High Torque Engine",  // Performance Features
        interiorFeatures: "Basic Dashboard, Vinyl Seats, No Infotainment",  // Interior Features
        exteriorFeatures: "Halogen Headlamps, Side Mirrors, Steel Rims",  // Exterior Features
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/XP Plus 265 Orchard.png"

    },
    
    "XP Plus 415 DI": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "XP Plus 415 DI",  // Model Name Number
        engineSpecifications: "3.0L Diesel",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "3",  // Seating Capacity
        priceRange: "₹10,50,000 - ₹12,50,000",  // Price Range
        mileageRange: "7 - 10 km/l",  // Mileage/Range
        safetyFeatures: "Power Brakes, Dual Airbags, ABS",  // Safety Features
        colorOptions: "Red, White, Blue",  // Color Options
        dimensions: "4700 mm (Length), 1800 mm (Width), 2000 mm (Height)",  // Dimensions
        performanceFeatures: "Heavy Payload Capacity, Robust Build",  // Performance Features
        interiorFeatures: "Basic Dashboard, Manual Windows, Fabric Seats",  // Interior Features
        exteriorFeatures: "Halogen Headlamps, Side Skirts",  // Exterior Features
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2018",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/XP Plus 415 DI.png"

    },
    
    "XP Plus 475 DI MS": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "XP Plus 475 DI MS",  // Model Name Number
        engineSpecifications: "3.2L Diesel",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "3",  // Seating Capacity
        priceRange: "₹11,50,000 - ₹13,50,000",  // Price Range
        mileageRange: "6 - 9 km/l",  // Mileage/Range
        safetyFeatures: "ABS, Power Steering, Enhanced Braking System",  // Safety Features
        colorOptions: "White, Black, Silver, Red",  // Color Options
        dimensions: "4800 mm (Length), 1850 mm (Width), 2150 mm (Height)",  // Dimensions
        performanceFeatures: "Enhanced Payload Capacity, Strong Chassis",  // Performance Features
        interiorFeatures: "Basic Interior, No Infotainment, Vinyl Seats",  // Interior Features
        exteriorFeatures: "LED Tail Lamps, Heavy-duty Bumpers",  // Exterior Features
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2019",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/XP Plus 475 DI MS.png"

    },
    
    "XP Plus 585 DI": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "XP Plus 585 DI",  // Model Name Number
        engineSpecifications: "4.0L Diesel",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "4",  // Seating Capacity
        priceRange: "₹12,00,000 - ₹14,00,000",  // Price Range
        mileageRange: "6 - 8 km/l",  // Mileage/Range
        safetyFeatures: "ABS, Dual Airbags, Traction Control",  // Safety Features
        colorOptions: "Red, White, Yellow",  // Color Options
        dimensions: "5100 mm (Length), 1900 mm (Width), 2300 mm (Height)",  // Dimensions
        performanceFeatures: "Heavy Payload Capacity, Turbocharged Engine",  // Performance Features
        interiorFeatures: "No Infotainment, Fabric Seats, Basic Dashboard",  // Interior Features
        exteriorFeatures: "Halogen Headlamps, Side Skirts, Fog Lamps",  // Exterior Features
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2021" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/XP Plus 585 DI.png"

    },
    
    "225 DI": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "225 DI",
        engineSpecifications: "2.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹6,00,000 - ₹8,00,000",
        mileageRange: "8 - 12 km/l",
        safetyFeatures: "ABS, Power Steering, High Strength Steel Body",
        colorOptions: "White, Red, Yellow, Blue, and more",
        dimensions: "4500 mm (Length), 1900 mm (Width), 2000 mm (Height)",
        performanceFeatures: "Heavy Duty Engine, Payload Capacity of 2.5 tons",
        interiorFeatures: "Basic Dashboard, Fabric Seat Upholstery",
        exteriorFeatures: "Halogen Headlamps, Steel Rims, Basic Grille",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2018",
    imageUrl: "assets/images/vehicle_models_images/225 DI.png"

    },
    "245 DI Vineyard": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "245 DI Vineyard",
        engineSpecifications: "2.4L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹7,00,000 - ₹9,00,000",
        mileageRange: "9 - 13 km/l",
        safetyFeatures: "ABS, Power Steering, High Strength Steel Body",
        colorOptions: "Yellow, White, Green, Red",
        dimensions: "4600 mm (Length), 2000 mm (Width), 2100 mm (Height)",
        performanceFeatures: "Vineyard Specific, Payload Capacity of 3 tons",
        interiorFeatures: "Basic Dashboard, Fabric Seat Upholstery",
        exteriorFeatures: "Halogen Headlamps, Steel Rims, Basic Grille",
        warrantyAfterSalesService: "3-year/1,20,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2019",
    imageUrl: "assets/images/vehicle_models_images/245 DI Vineyard.png"

    },
    "305 DI Vineyard": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "305 DI Vineyard",
        engineSpecifications: "3.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹8,00,000 - ₹10,00,000",
        mileageRange: "8 - 12 km/l",
        safetyFeatures: "ABS, Power Steering, High Strength Steel Body",
        colorOptions: "White, Yellow, Green",
        dimensions: "4900 mm (Length), 2100 mm (Width), 2200 mm (Height)",
        performanceFeatures: "Heavy Duty Engine, Payload Capacity of 3.5 tons",
        interiorFeatures: "Basic Dashboard, Fabric Seat Upholstery",
        exteriorFeatures: "Halogen Headlamps, Steel Rims, Basic Grille",
        warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/305 DI Vineyard.png"

    },
    "365 DI": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "365 DI",
        engineSpecifications: "3.6L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹9,00,000 - ₹11,00,000",
        mileageRange: "8 - 11 km/l",
        safetyFeatures: "ABS, Power Steering, High Strength Steel Body",
        colorOptions: "White, Yellow, Red",
        dimensions: "5000 mm (Length), 2200 mm (Width), 2300 mm (Height)",
        performanceFeatures: "Heavy Duty Engine, Payload Capacity of 4 tons",
        interiorFeatures: "Basic Dashboard, Fabric Seat Upholstery",
        exteriorFeatures: "Halogen Headlamps, Steel Rims, Basic Grille",
        warrantyAfterSalesService: "3-year/2,00,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/365 DI.png"

    },
    "3132": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "3132",
        engineSpecifications: "5.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "3",
        priceRange: "₹12,00,000 - ₹15,00,000",
        mileageRange: "7 - 10 km/l",
        safetyFeatures: "ABS, Power Steering, High Strength Steel Body, Driver Airbag",
        colorOptions: "White, Red, Blue, Yellow",
        dimensions: "5200 mm (Length), 2400 mm (Width), 2400 mm (Height)",
        performanceFeatures: "High Torque Engine, Payload Capacity of 5 tons",
        interiorFeatures: "Basic Dashboard, Fabric Seat Upholstery",
        exteriorFeatures: "Halogen Headlamps, Steel Rims, Basic Grille",
        warrantyAfterSalesService: "3-year/2,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/3132.png"

    },
    
    "3140": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "3140",
        engineSpecifications: "5.9L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹16,00,000 - ₹20,00,000",
        mileageRange: "6 - 8 km/l",
        safetyFeatures: "ABS, EBD, Driver Airbag",
        colorOptions: "White, Blue, Red",
        dimensions: "6670 mm (Length), 2470 mm (Width), 3050 mm (Height)",
        performanceFeatures: "Heavy-duty performance, Power Steering",
        interiorFeatures: "Basic Driver Cabin, Air Conditioning",
        exteriorFeatures: "Durable Chassis, Wide Wheelbase",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Support",
        releaseDateYear: "2012",
    imageUrl: "assets/images/vehicle_models_images/3140.png"

    },
    
    "2130": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "2130",
        engineSpecifications: "3.0L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹10,00,000 - ₹14,00,000",
        mileageRange: "7 - 9 km/l",
        safetyFeatures: "ABS, EBD, Driver Airbag",
        colorOptions: "White, Yellow, Green",
        dimensions: "5800 mm (Length), 2200 mm (Width), 2700 mm (Height)",
        performanceFeatures: "Powerful Engine, Low Turning Radius",
        interiorFeatures: "Basic Cabin, Driver Comfort",
        exteriorFeatures: "Heavy-duty Build, Functional Rear Cargo Area",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Support",
        releaseDateYear: "2015",
    imageUrl: "assets/images/vehicle_models_images/2130.png"

    },
    
    "2121": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "2121",
        engineSpecifications: "3.0L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹9,00,000 - ₹12,00,000",
        mileageRange: "8 - 10 km/l",
        safetyFeatures: "ABS, Driver Airbag",
        colorOptions: "White, Yellow",
        dimensions: "5700 mm (Length), 2150 mm (Width), 2700 mm (Height)",
        performanceFeatures: "Low Maintenance, Easy Handling",
        interiorFeatures: "Driver-focused Cabin, Air Conditioning",
        exteriorFeatures: "Heavy-duty Suspension, Reinforced Body",
        warrantyAfterSalesService: "2-year/1,00,000 km Warranty, Roadside Assistance",
        releaseDateYear: "2013",
    imageUrl: "assets/images/vehicle_models_images/2121.png"

    },
    
    "2136": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "2136",
        engineSpecifications: "5.9L 6-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹18,00,000 - ₹22,00,000",
        mileageRange: "6 - 8 km/l",
        safetyFeatures: "ABS, EBD, Driver & Co-driver Airbags",
        colorOptions: "White, Green",
        dimensions: "6800 mm (Length), 2500 mm (Width), 3100 mm (Height)",
        performanceFeatures: "Heavy-duty Performance, High Torque",
        interiorFeatures: "Comfortable Cabin, Basic Features",
        exteriorFeatures: "Reinforced Chassis, Large Cargo Bed",
        warrantyAfterSalesService: "4-year/1,50,000 km Warranty, 24/7 Support",
        releaseDateYear: "2016",
    imageUrl: "assets/images/vehicle_models_images/2136.png"

    },
    
    "655 DI PP": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "655 DI PP",
        engineSpecifications: "3.3L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹8,00,000 - ₹11,00,000",
        mileageRange: "7 - 9 km/l",
        safetyFeatures: "ABS, EBD",
        colorOptions: "White, Yellow",
        dimensions: "5800 mm (Length), 2200 mm (Width), 2500 mm (Height)",
        performanceFeatures: "Smooth Power Delivery, Sturdy Build",
        interiorFeatures: "Basic Driver's Cabin",
        exteriorFeatures: "Durable Cargo Area, Wide Wheelbase",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, Roadside Assistance",
        releaseDateYear: "2014",
    imageUrl: "assets/images/vehicle_models_images/655 DI PP.png"

    },
    
    "755 DI PP 4WD": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "755 DI PP 4WD",
        engineSpecifications: "4.0L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹12,00,000 - ₹16,00,000",
        mileageRange: "6 - 8 km/l",
        safetyFeatures: "ABS, EBD, Dual Airbags",
        colorOptions: "White, Green",
        dimensions: "6500 mm (Length), 2350 mm (Width), 2800 mm (Height)",
        performanceFeatures: "4WD, Strong Towing Capacity",
        interiorFeatures: "Air Conditioning, Basic Cabin Comfort",
        exteriorFeatures: "Heavy-duty Chassis, Functional Cargo Area",
        warrantyAfterSalesService: "4-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/755 DI PP 4WD.png"
        
    },
    
    "35 RX": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "35 RX",
        engineSpecifications: "3.5L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹11,00,000 - ₹14,00,000",
        mileageRange: "7 - 9 km/l",
        safetyFeatures: "ABS, Driver Airbag",
        colorOptions: "White, Yellow, Green",
        dimensions: "6000 mm (Length), 2200 mm (Width), 2700 mm (Height)",
        performanceFeatures: "Heavy-duty Performance, Low Maintenance",
        interiorFeatures: "Air Conditioning, Basic Driver's Cabin",
        exteriorFeatures: "Strong Chassis, Cargo Space",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Support",
        releaseDateYear: "2015",
    imageUrl: "assets/images/vehicle_models_images/35 RX.png"

    },
    
    "47 RX": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "47 RX",
        "engineSpecifications": "3.5L Diesel",  // Example engine spec, modify as per actual details
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",  // Example seating, modify as per actual details
        "priceRange": "₹6,00,000 - ₹8,00,000",
        "mileageRange": "10 - 12 km/l",  // Example mileage, modify as per actual details
        "safetyFeatures": "ABS, Driver Airbag, Anti-Roll Bars",
        "colorOptions": "White, Blue, Black",
        "dimensions": "4500 mm (Length), 1900 mm (Width), 2200 mm (Height)",
        "performanceFeatures": "Heavy-duty suspension, Power Steering",
        "interiorFeatures": "Basic cabin, Fabric seats",
        "exteriorFeatures": "Fog Lamps, Steel Rims",
        "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
        "releaseDateYear": "2021",
    imageUrl: "assets/images/vehicle_models_images/47 RX.png"

    },
    "50 RX": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "50 RX",
        "engineSpecifications": "4.0L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹7,00,000 - ₹9,00,000",
        "mileageRange": "9 - 11 km/l",
        "safetyFeatures": "ABS, Dual Airbags, Traction Control",
        "colorOptions": "White, Red, Grey",
        "dimensions": "4700 mm (Length), 2000 mm (Width), 2300 mm (Height)",
        "performanceFeatures": "Enhanced torque, Strong payload capacity",
        "interiorFeatures": "Basic dashboard, Vinyl seating",
        "exteriorFeatures": "Chrome bumpers, High-clearance tires",
        "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
        "releaseDateYear": "2022",
    imageUrl: "assets/images/vehicle_models_images/50 RX.png"

    },
    "60 RX": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "60 RX",
        "engineSpecifications": "4.5L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "3",
        "priceRange": "₹8,00,000 - ₹10,00,000",
        "mileageRange": "8 - 10 km/l",
        "safetyFeatures": "ABS, Airbags, Parking Sensors",
        "colorOptions": "Silver, Black, White",
        "dimensions": "4800 mm (Length), 2100 mm (Width), 2400 mm (Height)",
        "performanceFeatures": "Powerful engine, Heavy-duty suspension",
        "interiorFeatures": "Premium vinyl upholstery, Basic infotainment",
        "exteriorFeatures": "Alloy wheels, Roof rails",
        "warrantyAfterSalesService": "3-year/1,20,000 km Warranty",
        "releaseDateYear": "2023",
    imageUrl: "assets/images/vehicle_models_images/60 RX.png"

    },
    "Sikander DI 35": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Sikander DI 35",
        "engineSpecifications": "3.5L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹5,00,000 - ₹7,00,000",
        "mileageRange": "10 - 12 km/l",
        "safetyFeatures": "Driver Airbag, ABS",
        "colorOptions": "Yellow, White, Green",
        "dimensions": "4500 mm (Length), 1800 mm (Width), 2200 mm (Height)",
        "performanceFeatures": "High torque engine, Off-road capabilities",
        "interiorFeatures": "Basic cabin, Comfortable seating",
        "exteriorFeatures": "Steel wheels, Front grille guard",
        "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
        "releaseDateYear": "2020",
    imageUrl: "assets/images/vehicle_models_images/Sikander DI 35.png"

    },
    "Sikander DI 42": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Sikander DI 42",
        "engineSpecifications": "4.2L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹6,00,000 - ₹8,00,000",
        "mileageRange": "9 - 11 km/l",
        "safetyFeatures": "ABS, Dual Airbags",
        "colorOptions": "White, Yellow, Black",
        "dimensions": "4600 mm (Length), 1900 mm (Width), 2300 mm (Height)",
        "performanceFeatures": "High-torque engine, Power steering",
        "interiorFeatures": "Basic interior, Durable seats",
        "exteriorFeatures": "Fog lamps, Steel rims",
        "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
        "releaseDateYear": "2021",
    imageUrl: "assets/images/vehicle_models_images/Sikander DI 42.png"

    },
    "Sikander DI 60": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Sikander DI 60",
        "engineSpecifications": "6.0L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "3",
        "priceRange": "₹8,00,000 - ₹10,00,000",
        "mileageRange": "8 - 10 km/l",
        "safetyFeatures": "ABS, Airbags, Parking sensors",
        "colorOptions": "Red, Blue, White",
        "dimensions": "5000 mm (Length), 2100 mm (Width), 2400 mm (Height)",
        "performanceFeatures": "Heavy-duty performance, Off-road capabilities",
        "interiorFeatures": "Basic interior, Comfort seats",
        "exteriorFeatures": "Alloy wheels, High-clearance tires",
        "warrantyAfterSalesService": "3-year/1,20,000 km Warranty",
        "releaseDateYear": "2023",
    imageUrl: "assets/images/vehicle_models_images/Sikander DI 60.png"

    },
    "Sikander DI 750": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Sikander DI 750",
        "engineSpecifications": "7.5L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "3",
        "priceRange": "₹10,00,000 - ₹12,00,000",
        "mileageRange": "7 - 9 km/l",
        "safetyFeatures": "ABS, Dual Airbags, Traction control",
        "colorOptions": "Black, White, Red",
        "dimensions": "5500 mm (Length), 2200 mm (Width), 2500 mm (Height)",
        "performanceFeatures": "Extreme torque, Heavy-load capacity",
        "interiorFeatures": "Premium cabin, Comfortable seats",
        "exteriorFeatures": "Fog lamps, Alloy wheels",
        "warrantyAfterSalesService": "3-year/1,50,000 km Warranty",
        "releaseDateYear": "2024",
    imageUrl: "assets/images/vehicle_models_images/Sikander DI 750.png"

    },
    
    "5050 D": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "5050 D",
        engineSpecifications: "2.2L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "Driver + 1 Passenger",
        priceRange: "₹10,00,000 - ₹12,00,000",
        mileageRange: "7 - 10 km/l",
        safetyFeatures: "ABS, Driver Airbag, Seat Belts",
        colorOptions: "White, Red, Yellow",
        dimensions: "4990 mm (Length), 1800 mm (Width), 2000 mm (Height)",
        performanceFeatures: "Heavy Load Capacity, High Ground Clearance",
        interiorFeatures: "Basic Driver Seat, Standard Dashboard",
        exteriorFeatures: "Steel Wheels, Heavy Duty Suspension",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty",
        releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/5050 D.png"

    },
    
    "575 DI SP Plus": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "575 DI SP Plus",
        engineSpecifications: "3.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "Driver + 1 Passenger",
        priceRange: "₹7,50,000 - ₹9,50,000",
        mileageRange: "8 - 11 km/l",
        safetyFeatures: "ABS, Driver Airbag, Reverse Parking Sensors",
        colorOptions: "White, Green, Blue",
        dimensions: "5320 mm (Length), 2100 mm (Width), 2200 mm (Height)",
        performanceFeatures: "Powerful Engine, High Load Capacity",
        interiorFeatures: "Basic Driver Seat, Minimalist Dashboard",
        exteriorFeatures: "Heavy Duty Tyres, Front Grille Protection",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty",
        releaseDateYear: "2018",
    imageUrl: "assets/images/vehicle_models_images/575 DI SP Plus.png"

    },
    
    "575 DI": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "575 DI",
        engineSpecifications: "3.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "Driver + 1 Passenger",
        priceRange: "₹7,00,000 - ₹8,50,000",
        mileageRange: "7 - 10 km/l",
        safetyFeatures: "ABS, Driver Airbag, Reverse Parking Sensors",
        colorOptions: "White, Yellow, Green",
        dimensions: "5200 mm (Length), 2000 mm (Width), 2100 mm (Height)",
        performanceFeatures: "High Power Torque, Heavy Load Handling",
        interiorFeatures: "Standard Driver Seat, Basic Dashboard",
        exteriorFeatures: "Durable Bumper, Robust Suspension",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty",
        releaseDateYear: "2017",
    imageUrl: "assets/images/vehicle_models_images/575 DI.png"

    },
    
    "Mahindra Yuvraj 215 NXT": {
        type: "Commercial",
        brand: "Mahindra",
        modelNameNumber: "Yuvraj 215 NXT",
        engineSpecifications: "15 HP Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "Driver + 1 Passenger",
        priceRange: "₹3,50,000 - ₹4,00,000",
        mileageRange: "12 - 15 km/l",
        safetyFeatures: "Driver Airbag, Seat Belts, Anti-roll bar",
        colorOptions: "Red, Green, Blue",
        dimensions: "2970 mm (Length), 1350 mm (Width), 1800 mm (Height)",
        performanceFeatures: "Compact Design, Strong Towing Capacity",
        interiorFeatures: "Basic Dashboard, Adjustable Driver Seat",
        exteriorFeatures: "All-terrain Tyres, Heavy Duty Suspension",
        warrantyAfterSalesService: "2-year/50,000 km Warranty",
        releaseDateYear: "2021",
    imageUrl: "assets/images/vehicle_models_images/Mahindra Yuvraj 215 NXT.png"

    },
    
    "Mahindra Novo 755 DI PP 4WD V1": {
        type: "Commercial",
        brand: "Mahindra",
        modelNameNumber: "Novo 755 DI PP 4WD V1",
        engineSpecifications: "75 HP Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "Driver + 1 Passenger",
        priceRange: "₹12,00,000 - ₹14,00,000",
        mileageRange: "10 - 12 km/l",
        safetyFeatures: "ABS, Reverse Parking Sensors, Seat Belts",
        colorOptions: "Black, Red, White",
        dimensions: "5500 mm (Length), 2100 mm (Width), 2500 mm (Height)",
        performanceFeatures: "4WD Drive, Heavy Load Handling, High Ground Clearance",
        interiorFeatures: "Standard Dashboard, Adjustable Seat",
        exteriorFeatures: "Steel Wheels, Protective Skid Plates",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty",
        releaseDateYear: "2022",
    imageUrl: "assets/images/vehicle_models_images/Mahindra Novo 755 DI PP 4WD V1.png"

    },
    
    "Mahindra Yuvo Tech Plus 585 DI": {
        type: "Commercial",
        brand: "Mahindra",
        modelNameNumber: "Yuvo Tech Plus 585 DI",
        engineSpecifications: "4-Cylinder, 2.5L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹6,50,000 - ₹8,00,000",
        mileageRange: "10 - 12 km/l",
        safetyFeatures: "Roll Over Protection, Dual-Tone Steering, Hydraulic Brakes",
        colorOptions: "Red, Blue, Green, White, and more",
        dimensions: "3900 mm (Length), 1800 mm (Width), 1600 mm (Height)",
        performanceFeatures: "Power Steering, 4WD Option, High Ground Clearance",
        interiorFeatures: "Spacious Cabin, Adjustable Seat, Radio",
        exteriorFeatures: "Rugged Design, Strong Bumper, Heavy Duty Suspension",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Service",
        releaseDateYear: "2020",
    imageUrl: "assets/images/vehicle_models_images/Mahindra Yuvo Tech Plus 585 DI.png"

    },
    
    "Mahindra OJA Series": {
        type: "Commercial",
        brand: "Mahindra",
        modelNameNumber: "OJA Series",
        engineSpecifications: "3-Cylinder, 1.2L Diesel/Petrol",
        fuelType: "Diesel/Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹4,50,000 - ₹6,00,000",
        mileageRange: "15 - 18 km/l",
        safetyFeatures: "ABS, Dual Front Airbags, Seatbelts with Pre-tensioners",
        colorOptions: "Yellow, White, Green, Red",
        dimensions: "2500 mm (Length), 1200 mm (Width), 2200 mm (Height)",
        performanceFeatures: "Efficient Powertrain, Excellent Handling, Low Turning Radius",
        interiorFeatures: "Comfortable Seat, Digital Instrument Cluster",
        exteriorFeatures: "Compact Design, Sturdy Wheels, Rearview Mirror",
        warrantyAfterSalesService: "3-year/75,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2023",
    imageUrl: "assets/images/vehicle_models_images/Mahindra OJA Series.png"

    },
    
    "John Deere 5036D": {
        "type": "Commercial",
        "brand": "John Deere",
        "modelNameNumber": "5036D",
        "engineSpecifications": "36 HP, 3-Cylinder, Water Cooled Engine",  
        "fuelType": "Diesel",  
        "transmissionType": "Manual",  
        "seatingCapacity": "2",  
        "priceRange": "₹6,00,000 - ₹7,00,000",  
        "mileageRange": "10 - 12 km/l",  
        "safetyFeatures": "Roll Over Protection System (ROPS), Parking Brake",  
        "colorOptions": "Green, Yellow",  
        "dimensions": "3370 mm (Length), 1790 mm (Width), 2110 mm (Height)",  
        "performanceFeatures": "Powerful 36 HP Engine, Hydraulic Lifting Capacity",  
        "interiorFeatures": "Simple Controls, Comfortable Seat",  
        "exteriorFeatures": "Heavy-duty Tires, Front Bumper",  
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Customer Support",  
        "releaseDateYear": "2017",
    imageUrl: "assets/images/vehicle_models_images/John Deere 5036D.png"

    },
    "John Deere 5075 Gear Pro": {
        "type": "Commercial",
        "brand": "John Deere",
        "modelNameNumber": "5075 Gear Pro",
        "engineSpecifications": "75 HP, 4-Cylinder, Water Cooled Engine",  
        "fuelType": "Diesel",  
        "transmissionType": "Manual (9 Forward + 3 Reverse Gears)",  
        "seatingCapacity": "2",  
        "priceRange": "₹7,50,000 - ₹8,50,000",  
        "mileageRange": "8 - 10 km/l",  
        "safetyFeatures": "ROPS, Hydraulic Brakes, Parking Brake",  
        "colorOptions": "Green, Yellow",  
        "dimensions": "3770 mm (Length), 1870 mm (Width), 2270 mm (Height)",  
        "performanceFeatures": "75 HP Engine, High Ground Clearance, Heavy Lifting Capacity",  
        "interiorFeatures": "Power Steering, Adjustable Seat",  
        "exteriorFeatures": "Large Tyres, Robust Body",  
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Support",  
        "releaseDateYear": "2020",
    imageUrl: "assets/images/vehicle_models_images/John Deere 5075 Gear Pro.png"

    },
    "John Deere 5075 E": {
        "type": "Commercial",
        "brand": "John Deere",
        "modelNameNumber": "5075 E",
        "engineSpecifications": "75 HP, 4-Cylinder, Turbocharged Diesel Engine",  
        "fuelType": "Diesel",  
        "transmissionType": "Manual",  
        "seatingCapacity": "2",  
        "priceRange": "₹7,00,000 - ₹8,00,000",  
        "mileageRange": "9 - 11 km/l",  
        "safetyFeatures": "ROPS, Parking Brake, Hydraulic Brakes",  
        "colorOptions": "Green, Yellow",  
        "dimensions": "3750 mm (Length), 1870 mm (Width), 2250 mm (Height)",  
        "performanceFeatures": "Turbocharged Engine, Efficient Fuel Consumption",  
        "interiorFeatures": "Simple Dashboard, Adjustable Seat",  
        "exteriorFeatures": "Heavy-duty Tires, Durable Frame",  
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Assistance",  
        "releaseDateYear": "2018",
    imageUrl: "assets/images/vehicle_models_images/John Deere 5075 E.png"

    },
    "John Deere 5045 D": {
        "type": "Commercial",
        "brand": "John Deere",
        "modelNameNumber": "5045 D",
        "engineSpecifications": "45 HP, 3-Cylinder, Diesel Engine",  
        "fuelType": "Diesel",  
        "transmissionType": "Manual",  
        "seatingCapacity": "2",  
        "priceRange": "₹5,50,000 - ₹6,50,000",  
        "mileageRange": "10 - 12 km/l",  
        "safetyFeatures": "ROPS, Parking Brake",  
        "colorOptions": "Green, Yellow",  
        "dimensions": "3480 mm (Length), 1820 mm (Width), 2110 mm (Height)",  
        "performanceFeatures": "Fuel-efficient, High Lifting Capacity",  
        "interiorFeatures": "Comfortable Seat, Simple Control Panel",  
        "exteriorFeatures": "Durable Tires, Front Bumper",  
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Customer Service",  
        "releaseDateYear": "2019",
    imageUrl: "assets/images/vehicle_models_images/John Deere 5045 D.png"

    },
    
    "e-tron": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "e-tron",  // Model Name Number
        engineSpecifications: "Dual Electric Motors, 95 kWh Lithium-Ion Battery",  // Engine Specifications
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,00,00,000 - ₹1,30,00,000",  // Price Range
        mileageRange: "400 - 450 km (WLTP)",  // Mileage/Range
        safetyFeatures: "8 Airbags, ABS, Electronic Stability Control, Lane Assist",  // Safety Features
        colorOptions: "Glacier White, Navarra Blue, Mythos Black",  // Color Options
        dimensions: "4901 mm (Length), 1935 mm (Width), 1616 mm (Height)",  // Dimensions
        performanceFeatures: "Electric Quattro AWD, Regenerative Braking, Adaptive Air Suspension",  // Performance Features
        interiorFeatures: "Virtual Cockpit, Leather Upholstery, MMI Touch",  // Interior Features
        exteriorFeatures: "LED Headlights, Aerodynamic Design, Aluminum Roof Rails",  // Exterior Features
        warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/e-tron.png"
        
    },
    
    "RS Q8": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "RS Q8",  // Model Name Number
        engineSpecifications: "4.0L V8 Bi-Turbo Petrol, 48V Mild Hybrid",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,80,00,000 - ₹2,10,00,000",  // Price Range
        mileageRange: "7 - 9 km/l",  // Mileage/Range
        safetyFeatures: "Driver Assistance Package, 8 Airbags, Lane Assist, Adaptive Cruise Control",  // Safety Features
        colorOptions: "Tango Red, Mythos Black, Glacier White",  // Color Options
        dimensions: "4985 mm (Length), 1995 mm (Width), 1700 mm (Height)",  // Dimensions
        performanceFeatures: "612 HP, 0-100 km/h in 3.8 sec, Dynamic Drive Mode",  // Performance Features
        interiorFeatures: "RS Sport Seats, MMI Touch, Carbon Fiber Inlays",  // Interior Features
        exteriorFeatures: "Matrix LED Headlights, RS-specific Front Bumper, Quad Exhaust",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/RS Q8.png"

    },
    
    "S5": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "S5",  // Model Name Number
        engineSpecifications: "3.0L V6 Turbocharged Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "4",  // Seating Capacity
        priceRange: "₹80,00,000 - ₹90,00,000",  // Price Range
        mileageRange: "10 - 12 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS, EBD, Lane Keep Assist, Blind Spot Monitoring",  // Safety Features
        colorOptions: "Quantum Grey, Navarra Blue, Glacier White",  // Color Options
        dimensions: "4697 mm (Length), 1852 mm (Width), 1371 mm (Height)",  // Dimensions
        performanceFeatures: "354 HP, Quattro AWD, Sports Suspension",  // Performance Features
        interiorFeatures: "MMI Navigation Plus, Leather Upholstery, Digital Cockpit",  // Interior Features
        exteriorFeatures: "LED Headlights, Sports Rear Diffuser, RS Style Grille",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2017",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/S5.png"

    },
    
    "S6": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "S6",  // Model Name Number
        engineSpecifications: "2.9L V6 Turbocharged Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,00,00,000 - ₹1,20,00,000",  // Price Range
        mileageRange: "8 - 10 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, Adaptive Cruise Control, Collision Avoidance",  // Safety Features
        colorOptions: "Mythos Black, Phantom Black, Turbo Blue",  // Color Options
        dimensions: "4939 mm (Length), 1899 mm (Width), 1427 mm (Height)",  // Dimensions
        performanceFeatures: "450 HP, 0-100 km/h in 4.4 sec, Quattro AWD",  // Performance Features
        interiorFeatures: "MMI Touch Response, Alcantara Upholstery, Digital Cockpit",  // Interior Features
        exteriorFeatures: "HD Matrix LED Headlights, Gloss Black Exterior Package",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/S6.png"

    },
    
    "TT": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "TT",  // Model Name Number
        engineSpecifications: "2.0L TFSI Turbocharged Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹55,00,000 - ₹65,00,000",  // Price Range
        mileageRange: "12 - 14 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS, EBD, Parking Sensors",  // Safety Features
        colorOptions: "Turbo Blue, Mythos Black, Nardo Grey",  // Color Options
        dimensions: "4191 mm (Length), 1832 mm (Width), 1353 mm (Height)",  // Dimensions
        performanceFeatures: "230 HP, Quattro AWD, Drive Select Mode",  // Performance Features
        interiorFeatures: "MMI Navigation, Leather Upholstery, Sport Seats",  // Interior Features
        exteriorFeatures: "LED Headlights, Aerodynamic Body, Sporty Design",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2014",  // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/TT.png"

    },
    
    "R8": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "R8",  // Model Name Number
        engineSpecifications: "5.2L V10 FSI, 5.2L V10 RWD",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹2,00,00,000 - ₹2,50,00,000",  // Price Range
        mileageRange: "6 - 8 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS, EBD, Traction Control",  // Safety Features
        colorOptions: "Ibis White, Mythos Black, Catalunya Red",  // Color Options
        dimensions: "4429 mm (Length), 1904 mm (Width), 1240 mm (Height)",  // Dimensions
        performanceFeatures: "610 HP, 0-100 km/h in 3.2 sec, Quattro AWD",  // Performance Features
        interiorFeatures: "MMI Navigation, Alcantara Upholstery, Carbon Fiber Inlays",  // Interior Features
        exteriorFeatures: "Matrix LED Headlights, Dynamic Rear Spoiler",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2006" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/R8.png"

    },
    
    "RS5": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "RS5",  // Model Name Number
        engineSpecifications: "2.9L V6 Biturbo Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "4",  // Seating Capacity
        priceRange: "₹1,20,00,000 - ₹1,40,00,000",  // Price Range
        mileageRange: "10 - 12 km/l",  // Mileage/Range
        safetyFeatures: "Driver Assistance System, 6 Airbags, ABS, Lane Assist",  // Safety Features
        colorOptions: "Matador Red, Nardo Grey, Glacier White",  // Color Options
        dimensions: "4770 mm (Length), 1890 mm (Width), 1371 mm (Height)",  // Dimensions
        performanceFeatures: "450 HP, 0-100 km/h in 3.9 sec, Quattro AWD",  // Performance Features
        interiorFeatures: "MMI Navigation, RS Sport Seats, Virtual Cockpit",  // Interior Features
        exteriorFeatures: "LED Headlights, RS-specific Design",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2018" , // Release Date/Year
    imageUrl: "assets/images/vehicle_models_images/RS5.png"

    },
    
    "RS7": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "RS7",  // Model Name Number
        engineSpecifications: "4.0L V8 Biturbo Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,70,00,000 - ₹2,00,00,000",  // Price Range
        mileageRange: "7 - 9 km/l",  // Mileage/Range
        safetyFeatures: "8 Airbags, Adaptive Cruise Control, Driver Assistance Package",  // Safety Features
        colorOptions: "Phantom Black, Daytona Grey, Tango Red",  // Color Options
        dimensions: "5009 mm (Length), 1911 mm (Width), 1413 mm (Height)",  // Dimensions
        performanceFeatures: "591 HP, 0-100 km/h in 3.5 sec, Quattro AWD",  // Performance Features
        interiorFeatures: "MMI Navigation, Carbon Fiber Inlays, Sports Seats",  // Interior Features
        exteriorFeatures: "Matrix LED Headlights, RS-specific Grille",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/RS7.png"

    },
    
    "RS Q8": {
        type: "Passenger",
        brand: "Audi",
        modelNameNumber: "RS Q8",  // Model Name Number
        engineSpecifications: "4.0L V8 Biturbo Petrol, 48V Mild Hybrid",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,80,00,000 - ₹2,10,00,000",  // Price Range
        mileageRange: "7 - 9 km/l",  // Mileage/Range
        safetyFeatures: "Driver Assistance Package, 8 Airbags, Lane Assist, Adaptive Cruise Control",  // Safety Features
        colorOptions: "Tango Red, Mythos Black, Glacier White",  // Color Options
        dimensions: "4985 mm (Length), 1995 mm (Width), 1700 mm (Height)",  // Dimensions
        performanceFeatures: "612 HP, 0-100 km/h in 3.8 sec, Dynamic Drive Mode",  // Performance Features
        interiorFeatures: "RS Sport Seats, MMI Touch, Carbon Fiber Inlays",  // Interior Features
        exteriorFeatures: "Matrix LED Headlights, RS-specific Front Bumper, Quad Exhaust",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/RS Q8.png"

    },
    
    "Continental GT": {
        type: "Passenger",
        brand: "Bentley",
        modelNameNumber: "Continental GT",
        engineSpecifications: "4.0L V8, 6.0L W12, 6.0L W12 Hybrid",
        fuelType: "Petrol",
        transmissionType: "Dual-clutch Automatic",
        seatingCapacity: "4",
        priceRange: "₹3,00,00,000 - ₹3,50,00,000",
        mileageRange: "8 - 10 km/l",
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Rear-View Camera, Parking Sensors",
        colorOptions: "Beluga, Thunder, Onyx, Glacier White, and more",
        dimensions: "4788 mm (Length), 1944 mm (Width), 1400 mm (Height)",
        performanceFeatures: "Twin-Turbocharged Engine, Active All-Wheel Drive, Sports Mode, Dynamic Ride",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Customizable Interiors, Massaging Seats",
        exteriorFeatures: "LED Matrix Headlamps, Active Aerodynamics, Chrome Details",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2003",
        imageUrl: "assets/images/vehicle_models_images/Continental GT.png"

    },
    
    "Flying Spur": {
        type: "Passenger",
        brand: "Bentley",
        modelNameNumber: "Flying Spur",
        engineSpecifications: "4.0L V8, 6.0L W12, 6.0L W12 Hybrid",
        fuelType: "Petrol",
        transmissionType: "Dual-clutch Automatic",
        seatingCapacity: "4",
        priceRange: "₹3,50,00,000 - ₹4,00,00,000",
        mileageRange: "8 - 12 km/l",
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Adaptive Cruise Control, Lane Assist",
        colorOptions: "Beluga, Onyx, Glacier White, Black, and more",
        dimensions: "5301 mm (Length), 1978 mm (Width), 1484 mm (Height)",
        performanceFeatures: "Active Air Suspension, Rear-Seat Entertainment, Active All-Wheel Drive",
        interiorFeatures: "Premium Leather Upholstery, Touchscreen Infotainment, 4-Zone Climate Control",
        exteriorFeatures: "LED Headlamps, Adaptive Cruise Control, 22-inch Alloy Wheels",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2005",
        imageUrl: "assets/images/vehicle_models_images/Flying Spur.png"

    },
    
    "Bentayga": {
        type: "Passenger",
        brand: "Bentley",
        modelNameNumber: "Bentayga",
        engineSpecifications: "4.0L V8, 6.0L W12, 3.0L V6 Hybrid",
        fuelType: "Petrol, Hybrid",
        transmissionType: "8-Speed Automatic",
        seatingCapacity: "5",
        priceRange: "₹3,50,00,000 - ₹5,00,00,000",
        mileageRange: "8 - 11 km/l",
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Rear-View Camera, Collision Warning",
        colorOptions: "Mulliner Blue, Beluga, Onyx, White Sand, and more",
        dimensions: "5140 mm (Length), 1998 mm (Width), 1742 mm (Height)",
        performanceFeatures: "Adaptive Air Suspension, All-Wheel Drive, Dynamic Ride System",
        interiorFeatures: "Touchscreen Infotainment, Luxury Leather Seats, Panoramic Sunroof",
        exteriorFeatures: "Matrix LED Headlights, 22-inch Alloy Wheels, Adaptive Suspension",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2015",
        imageUrl: "assets/images/vehicle_models_images/Bentayga.png"

    },
    
    
    "Ghost": {
        "type": "Passenger",
        "brand": "Rolls-Royce",
        "modelNameNumber": "Ghost",
        "engineSpecifications": "6.75L V12 Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹7,00,00,000 - ₹12,00,00,000",
        "mileageRange": "6 - 10 km/l",
        "safetyFeatures": "Multiple Airbags, Advanced Driver Assistance Systems, Night Vision",
        "colorOptions": "Black, Silver, White, Blue, Burgundy, and more",
        "dimensions": "5638 mm (Length), 1998 mm (Width), 1550 mm (Height)",
        "performanceFeatures": "V12 Engine, Adaptive Suspension, Rear-Wheel Drive",
        "interiorFeatures": "Bespoke Leather Upholstery, Premium Audio System, Leather-lined Cabin",
        "exteriorFeatures": "Spirit of Ecstasy, LED Headlights, Chrome Detailing",
        "warrantyAfterSalesService": "4-year/Unlimited Warranty, 24/7 Concierge Service",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/Ghost.png"

    },
    "Phantom": {
        "type": "Passenger",
        "brand": "Rolls-Royce",
        "modelNameNumber": "Phantom",
        "engineSpecifications": "6.75L V12 Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "4",
        "priceRange": "₹12,00,00,000 - ₹20,00,00,000",
        "mileageRange": "6 - 10 km/l",
        "safetyFeatures": "Multiple Airbags, Advanced Driver Assistance Systems, Night Vision",
        "colorOptions": "Black, Silver, White, Blue, Burgundy, and more",
        "dimensions": "5982 mm (Length), 1998 mm (Width), 1598 mm (Height)",
        "performanceFeatures": "V12 Engine, Adaptive Suspension, Rear-Wheel Drive",
        "interiorFeatures": "Premium Leather Upholstery, Bespoke Audio System, Leather-lined Cabin",
        "exteriorFeatures": "Classic Rolls-Royce Spirit of Ecstasy, LED Headlights, Chrome Detailing",
        "warrantyAfterSalesService": "4-year/Unlimited Warranty, 24/7 Concierge Service",
        "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/Phantom.png"

    },
    "Wraith": {
        "type": "Passenger",
        "brand": "Rolls-Royce",
        "modelNameNumber": "Wraith",
        "engineSpecifications": "6.6L V12 Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "4",
        "priceRange": "₹5,50,00,000 - ₹8,00,00,000",
        "mileageRange": "8 - 12 km/l",
        "safetyFeatures": "Multiple Airbags, Advanced Driver Assistance Systems, Stability Control",
        "colorOptions": "Black, White, Silver, and more",
        "dimensions": "2079 mm (Width), 5226 mm (Length), 1500 mm (Height)",
        "performanceFeatures": "V12 Engine, Adaptive Suspension, Dual-tone Exterior",
        "interiorFeatures": "Bespoke Leather Upholstery, Suede Headlining, Premium Audio System",
        "exteriorFeatures": "Signature Rolls-Royce Grille, LED Headlights, Spirit of Ecstasy",
        "warrantyAfterSalesService": "4-year/Unlimited Warranty, 24/7 Concierge Service",
        "releaseDateYear": "2015",
        imageUrl: "assets/images/vehicle_models_images/Wraith.png"

    },
    "Dawn": {
        "type": "Passenger",
        "brand": "Rolls-Royce",
        "modelNameNumber": "Dawn",
        "engineSpecifications": "6.6L V12 Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "4",
        "priceRange": "₹7,50,00,000 - ₹10,00,00,000",
        "mileageRange": "8 - 12 km/l",
        "safetyFeatures": "Multiple Airbags, Advanced Driver Assistance Systems, Hill Descent Control",
        "colorOptions": "Silver, Black, White, Blue, Burgundy, and more",
        "dimensions": "5285 mm (Length), 1978 mm (Width), 1500 mm (Height)",
        "performanceFeatures": "V12 Engine, Adaptive Suspension, Rear-Wheel Drive",
        "interiorFeatures": "Leather Upholstery, Suede Headlining, Digital Instrument Cluster",
        "exteriorFeatures": "Convertible Roof, Signature Spirit of Ecstasy, LED Headlamps",
        "warrantyAfterSalesService": "4-year/Unlimited Warranty, 24/7 Concierge Service",
        "releaseDateYear": "2016",
        imageUrl: "assets/images/vehicle_models_images/Dawn.png"

    },
    "Cullinan": {
        "type": "Passenger",
        "brand": "Rolls-Royce",
        "modelNameNumber": "Cullinan",
        "engineSpecifications": "6.75L V12 Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹10,00,00,000 - ₹15,00,00,000",
        "mileageRange": "6 - 9 km/l",
        "safetyFeatures": "Multiple Airbags, Advanced Driver Assistance Systems, Night Vision",
        "colorOptions": "Black, Silver, White, Blue, Burgundy, and more",
        "dimensions": "5341 mm (Length), 2168 mm (Width), 1835 mm (Height)",
        "performanceFeatures": "V12 Engine, Adaptive Suspension, All-Wheel Drive",
        "interiorFeatures": "Bespoke Leather Upholstery, Premium Audio System, Wooden Accents",
        "exteriorFeatures": "Spirit of Ecstasy, LED Headlamps, Panoramic Sunroof",
        "warrantyAfterSalesService": "4-year/Unlimited Warranty, 24/7 Concierge Service",
        "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/Cullinan.png"

    },
    
    "Continental GT": {
        type: "Passenger",
        brand: "Bentley",
        modelNameNumber: "Continental GT",
        engineSpecifications: "4.0L V8, 6.0L W12, 6.0L W12 Hybrid",
        fuelType: "Petrol",
        transmissionType: "Dual-clutch Automatic",
        seatingCapacity: "4",
        priceRange: "₹3,00,00,000 - ₹3,50,00,000",
        mileageRange: "8 - 10 km/l",
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Rear-View Camera, Parking Sensors",
        colorOptions: "Beluga, Thunder, Onyx, Glacier White, and more",
        dimensions: "4788 mm (Length), 1944 mm (Width), 1400 mm (Height)",
        performanceFeatures: "Twin-Turbocharged Engine, Active All-Wheel Drive, Sports Mode, Dynamic Ride",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Customizable Interiors, Massaging Seats",
        exteriorFeatures: "LED Matrix Headlamps, Active Aerodynamics, Chrome Details",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2003",
        imageUrl: "assets/images/vehicle_models_images/Continental GT.png"

    },
    
    "Flying Spur": {
        type: "Passenger",
        brand: "Bentley",
        modelNameNumber: "Flying Spur",
        engineSpecifications: "4.0L V8, 6.0L W12, 6.0L W12 Hybrid",
        fuelType: "Petrol",
        transmissionType: "Dual-clutch Automatic",
        seatingCapacity: "4",
        priceRange: "₹3,50,00,000 - ₹4,00,00,000",
        mileageRange: "8 - 12 km/l",
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Adaptive Cruise Control, Lane Assist",
        colorOptions: "Beluga, Onyx, Glacier White, Black, and more",
        dimensions: "5301 mm (Length), 1978 mm (Width), 1484 mm (Height)",
        performanceFeatures: "Active Air Suspension, Rear-Seat Entertainment, Active All-Wheel Drive",
        interiorFeatures: "Premium Leather Upholstery, Touchscreen Infotainment, 4-Zone Climate Control",
        exteriorFeatures: "LED Headlamps, Adaptive Cruise Control, 22-inch Alloy Wheels",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2005",
        imageUrl: "assets/images/vehicle_models_images/Flying Spur.png"

    },
    
    "Bentayga": {
        type: "Passenger",
        brand: "Bentley",
        modelNameNumber: "Bentayga",
        engineSpecifications: "4.0L V8, 6.0L W12, 3.0L V6 Hybrid",
        fuelType: "Petrol, Hybrid",
        transmissionType: "8-Speed Automatic",
        seatingCapacity: "5",
        priceRange: "₹3,50,00,000 - ₹5,00,00,000",
        mileageRange: "8 - 11 km/l",
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Rear-View Camera, Collision Warning",
        colorOptions: "Mulliner Blue, Beluga, Onyx, White Sand, and more",
        dimensions: "5140 mm (Length), 1998 mm (Width), 1742 mm (Height)",
        performanceFeatures: "Adaptive Air Suspension, All-Wheel Drive, Dynamic Ride System",
        interiorFeatures: "Touchscreen Infotainment, Luxury Leather Seats, Panoramic Sunroof",
        exteriorFeatures: "Matrix LED Headlights, 22-inch Alloy Wheels, Adaptive Suspension",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2015",
        imageUrl: "assets/images/vehicle_models_images/Bentayga.png"

    },
    
    
    "2 Series Gran Coupe": {
        "type": "Passenger",
        "brand": "BMW",
        "modelNameNumber": "2 Series Gran Coupe",
        "engineSpecifications": "2.0L Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹40,00,000 - ₹45,00,000",
        "mileageRange": "12 - 16 km/l",
        "safetyFeatures": "6 Airbags, ABS, Traction Control, Parking Sensors",
        "colorOptions": "Black Sapphire, Alpine White, Melbourne Red",
        "dimensions": "4500 mm (Length), 1800 mm (Width), 1400 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, M Sport Package, Driving Assistance",
        "interiorFeatures": "Premium Upholstery, Digital Display, Gesture Control",
        "exteriorFeatures": "LED Headlights, M Sport Body Kit, Sunroof",
        "warrantyAfterSalesService": "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/2 Series Gran Coupe.png"

    },
    "3 Series": {
        "type": "Passenger",
        "brand": "BMW",
        "modelNameNumber": "3 Series",
        "engineSpecifications": "2.0L Petrol, 2.0L Diesel, 3.0L Petrol",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Manual/Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹50,00,000 - ₹70,00,000",
        "mileageRange": "14 - 20 km/l",
        "safetyFeatures": "ABS, Electronic Stability Control, Lane Assist, 8 Airbags",
        "colorOptions": "Phantom Black, White, Blue",
        "dimensions": "4700 mm (Length), 1800 mm (Width), 1440 mm (Height)",
        "performanceFeatures": "Sporty Handling, M Performance Package, Driving Assistance Plus",
        "interiorFeatures": "Luxury Upholstery, Digital Cockpit, Ambient Lighting",
        "exteriorFeatures": "Adaptive LED Lights, M Sport Wheels, Sunroof",
        "warrantyAfterSalesService": "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/3 Series.png"

    },
    "3 Series Gran Limousine": {
        "type": "Passenger",
        "brand": "BMW",
        "modelNameNumber": "3 Series Gran Limousine",
        "engineSpecifications": "2.0L Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹60,00,000 - ₹80,00,000",
        "mileageRange": "12 - 16 km/l",
        "safetyFeatures": "8 Airbags, ABS, Traction Control, Parking Sensors",
        "colorOptions": "Black Sapphire, White, Carbon Black",
        "dimensions": "4800 mm (Length), 1900 mm (Width), 1450 mm (Height)",
        "performanceFeatures": "Adaptive Driving Modes, Premium Comfort",
        "interiorFeatures": "Premium Leather Upholstery, Rear Seat Entertainment, Digital Cockpit",
        "exteriorFeatures": "LED Headlights, Sports Body Kit, Sunroof",
        "warrantyAfterSalesService": "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/3 Series Gran Limousine.png"

    },
    "4 Series": {
        "type": "Passenger",
        "brand": "BMW",
        "modelNameNumber": "4 Series",
        "engineSpecifications": "2.0L Petrol, 3.0L Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "4",
        "priceRange": "₹60,00,000 - ₹90,00,000",
        "mileageRange": "10 - 15 km/l",
        "safetyFeatures": "6 Airbags, Anti-lock Braking System, Traction Control",
        "colorOptions": "M Carbon Black, Alpine White, Sunset Orange",
        "dimensions": "4700 mm (Length), 1850 mm (Width), 1380 mm (Height)",
        "performanceFeatures": "Sporty Performance, M Sport Package",
        "interiorFeatures": "Luxurious Cabin, Digital Display, Gesture Control",
        "exteriorFeatures": "LED Headlights, M Sport Package, Sunroof",
        "warrantyAfterSalesService": "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/4 Series.png"

    },
    
    "5 Series": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "5 Series",
        engineSpecifications: "2.0L Diesel, 2.0L Petrol, 3.0L Petrol",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹60,00,000 - ₹80,00,000",
        mileageRange: "12 - 16 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, Parking Sensors, Hill Descent Control",
        colorOptions: "Alpine White, Black Sapphire, Mediterranean Blue, and more",
        dimensions: "5071 mm (Length), 1868 mm (Width), 1466 mm (Height)",
        performanceFeatures: "Adaptive Suspension, M Sport Package, Dynamic Stability Control",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Gesture Controls",
        exteriorFeatures: "LED Headlamps, Sunroof, Alloy Wheels, Parking Assistance",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2023",
        imageUrl: "assets/images/vehicle_models_images/5 Series.png"

    },
    "6 Series Gran Turismo": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "6 Series Gran Turismo",
        engineSpecifications: "2.0L Petrol, 3.0L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹75,00,000 - ₹95,00,000",
        mileageRange: "14 - 17 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, Collision Warning, Adaptive Cruise Control",
        colorOptions: "Mineral White, Black Sapphire, Imperial Blue, and more",
        dimensions: "5091 mm (Length), 1902 mm (Width), 1538 mm (Height)",
        performanceFeatures: "8-Speed Automatic Transmission, Driving Experience Control, Adaptive Drive",
        interiorFeatures: "Panoramic Sunroof, Touchscreen Infotainment, Premium Sound System",
        exteriorFeatures: "LED Headlights, Aerodynamic Design, Alloy Wheels",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2022",
        imageUrl: "assets/images/vehicle_models_images/6 Series Gran Turismo.png"

    },
    "7 Series": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "7 Series",
        engineSpecifications: "3.0L Petrol, 3.0L Diesel, 4.4L Petrol (V8)",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹1,20,00,000 - ₹1,50,00,000",
        mileageRange: "8 - 12 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, Autonomous Driving Assist, Parking Sensors",
        colorOptions: "Alpine White, Black Sapphire, Manhattan Green, and more",
        dimensions: "5120 mm (Length), 1902 mm (Width), 1466 mm (Height)",
        performanceFeatures: "Active Driving Assistant, Air Suspension, M Sport Package",
        interiorFeatures: "Touchscreen Infotainment, Executive Lounge Seating, Massaging Seats",
        exteriorFeatures: "Laser Light Technology, Sunroof, Alloy Wheels",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2023",
        imageUrl: "assets/images/vehicle_models_images/7 Series.png"

    },
    "8 Series": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "8 Series",
        engineSpecifications: "3.0L Petrol, 4.4L V8 Petrol",
        fuelType: "Petrol",
        transmissionType: "Automatic",
        seatingCapacity: "4",
        priceRange: "₹1,25,00,000 - ₹1,80,00,000",
        mileageRange: "8 - 12 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, Blind Spot Detection, Parking Sensors",
        colorOptions: "Sapphire Black, Donington Grey, Frozen Orange, and more",
        dimensions: "4851 mm (Length), 1900 mm (Width), 1340 mm (Height)",
        performanceFeatures: "M Sport Package, Active Roll Stabilization, Adaptive Cruise Control",
        interiorFeatures: "Leather Upholstery, Bowers & Wilkins Audio, Gesture Controls",
        exteriorFeatures: "Adaptive LED Headlights, Sunroof, Aerodynamic Design",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2022",
        imageUrl: "assets/images/vehicle_models_images/8 Series.png"

    },
    "X1": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "X1",
        engineSpecifications: "2.0L Petrol, 2.0L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹40,00,000 - ₹50,00,000",
        mileageRange: "15 - 18 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, Parking Sensors, Stability Control",
        colorOptions: "Mineral White, Black Sapphire, Glacier Silver, and more",
        dimensions: "4439 mm (Length), 1821 mm (Width), 1620 mm (Height)",
        performanceFeatures: "All-Wheel Drive, Adaptive Suspension, Dynamic Stability Control",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Digital Instrument Cluster",
        exteriorFeatures: "LED DRLs, Alloy Wheels, Fog Lamps",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2023",
        imageUrl: "assets/images/vehicle_models_images/X1.png"

    },
    "X3": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "X3",
        engineSpecifications: "2.0L Petrol, 2.0L Diesel, 3.0L Petrol",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹55,00,000 - ₹70,00,000",
        mileageRange: "13 - 17 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, Blind Spot Detection, Parking Assistance",
        colorOptions: "Alpine White, Black Sapphire, Phytonic Blue, and more",
        dimensions: "4717 mm (Length), 1891 mm (Width), 1676 mm (Height)",
        performanceFeatures: "All-Wheel Drive, Dynamic Stability Control, Adaptive Suspension",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Apple CarPlay",
        exteriorFeatures: "LED Headlamps, Alloy Wheels, Roof Rails",
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2023",
        imageUrl: "assets/images/vehicle_models_images/X3.png"

    },
    
    
    "iX1": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "iX1",  
        engineSpecifications: "Electric Motor",
        fuelType: "Electric",  
        transmissionType: "Automatic",  
        seatingCapacity: "5",  
        priceRange: "₹45,00,000 - ₹55,00,000",  
        mileageRange: "400 - 500 km (Full Charge)",  
        safetyFeatures: "6 Airbags, ABS with EBD, ESC, Lane Keep Assist",  
        colorOptions: "Mineral White, Phytonic Blue, Black Sapphire",  
        dimensions: "4560 mm (Length), 1860 mm (Width), 1600 mm (Height)",  
        performanceFeatures: "Electric All-Wheel Drive, Regenerative Braking",  
        interiorFeatures: "Panoramic Sunroof, Digital Dashboard, Gesture Controls",  
        exteriorFeatures: "Adaptive LED Headlights, Roof Rails, Sporty Bumper",  
        warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",  
        releaseDateYear: "2023"  ,
        imageUrl: "assets/images/vehicle_models_images/iX1.png"

    },
    "i7": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "i7",  
        engineSpecifications: "Electric Motor",
        fuelType: "Electric",  
        transmissionType: "Automatic",  
        seatingCapacity: "5",  
        priceRange: "₹1,50,00,000 - ₹1,80,00,000",  
        mileageRange: "550 - 600 km (Full Charge)",  
        safetyFeatures: "8 Airbags, ABS with EBD, ESC, Active Cruise Control, Lane Keep Assist",  
        colorOptions: "Arctic Grey, Cashmere Silver, Black Sapphire",  
        dimensions: "5391 mm (Length), 1950 mm (Width), 1500 mm (Height)",  
        performanceFeatures: "Electric Powertrain, 0-100 km/h in 4.5 seconds",  
        interiorFeatures: "Luxury Lounge Seating, Panoramic Roof, 12.3-inch Digital Display",  
        exteriorFeatures: "Dynamic LED Lights, Air Curtains, Elegant Grille",  
        warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",  
        releaseDateYear: "2022"  ,
        imageUrl: "assets/images/vehicle_models_images/i7.png"

    },
    "Z4": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "Z4",  
        engineSpecifications: "2.0L 4-Cylinder Turbocharged Petrol, 3.0L Inline-6 Turbocharged Petrol",
        fuelType: "Petrol",  
        transmissionType: "Manual/Automatic",  
        seatingCapacity: "2",  
        priceRange: "₹80,00,000 - ₹1,00,00,000",  
        mileageRange: "12 - 14 km/l",  
        safetyFeatures: "6 Airbags, ABS with EBD, Stability Control",  
        colorOptions: "Alpine White, Sunset Orange, Black Sapphire",  
        dimensions: "4324 mm (Length), 1852 mm (Width), 1304 mm (Height)",  
        performanceFeatures: "M Sport Suspension, Adaptive Driving Modes",  
        interiorFeatures: "Sporty Interior, 10.25-inch Infotainment System, Leather Upholstery",  
        exteriorFeatures: "Adaptive LED Headlights, Aerodynamic Design",  
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  
        releaseDateYear: "2019"  ,
        imageUrl: "assets/images/vehicle_models_images/Z4.png"

    },
    "M2": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "M2",  
        engineSpecifications: "3.0L Inline-6 Twin-Turbo Petrol",
        fuelType: "Petrol",  
        transmissionType: "Manual/Automatic",  
        seatingCapacity: "4",  
        priceRange: "₹80,00,000 - ₹90,00,000",  
        mileageRange: "10 - 12 km/l",  
        safetyFeatures: "6 Airbags, ABS, Traction Control, Stability Control",  
        colorOptions: "Long Beach Blue, Alpine White, Black Sapphire",  
        dimensions: "4460 mm (Length), 1890 mm (Width), 1410 mm (Height)",  
        performanceFeatures: "0-100 km/h in 4.1 seconds, M Sport Suspension",  
        interiorFeatures: "Sporty Seats, 12.3-inch Digital Instrument Cluster",  
        exteriorFeatures: "M Sport Body Kit, Adaptive LED Headlights",  
        warrantyAfterSalesService: "2-year/50,000 km Warranty, 24/7 Roadside Assistance",  
        releaseDateYear: "2023"  ,
        imageUrl: "assets/images/vehicle_models_images/M2.png"

    },
    "M3": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "M3",  
        engineSpecifications: "3.0L Inline-6 Twin-Turbo Petrol",
        fuelType: "Petrol",  
        transmissionType: "Automatic",  
        seatingCapacity: "5",  
        priceRange: "₹1,00,00,000 - ₹1,20,00,000",  
        mileageRange: "8 - 10 km/l",  
        safetyFeatures: "6 Airbags, ABS, Active Cruise Control, Lane Assist",  
        colorOptions: "Frosty White, Dravit Grey, Black Sapphire",  
        dimensions: "4962 mm (Length), 1903 mm (Width), 1444 mm (Height)",  
        performanceFeatures: "0-100 km/h in 3.9 seconds, Adaptive M Suspension",  
        interiorFeatures: "M Carbon Bucket Seats, Gesture Controls, 12.3-inch Digital Cluster",  
        exteriorFeatures: "M Aerodynamics Package, Laser Light Technology",  
        warrantyAfterSalesService: "3-year/60,000 km Warranty, 24/7 Roadside Assistance",  
        releaseDateYear: "2021"  ,
        imageUrl: "assets/images/vehicle_models_images/M3.png"

    },
    "M4": {
        type: "Passenger",
        brand: "BMW",
        modelNameNumber: "M4",  
        engineSpecifications: "3.0L Inline-6 Twin-Turbo Petrol",
        fuelType: "Petrol",  
        transmissionType: "Automatic",  
        seatingCapacity: "4",  
        priceRange: "₹1,10,00,000 - ₹1,30,00,000",  
        mileageRange: "8 - 10 km/l",  
        safetyFeatures: "6 Airbags, ABS, Traction Control, Stability Control",  
        colorOptions: "Interlagos Blue, Alpine White, Black Sapphire",  
        dimensions: "4781 mm (Length), 1880 mm (Width), 1383 mm (Height)",  
        performanceFeatures: "M Dynamic Mode, Carbon Fiber Roof",  
        interiorFeatures: "M Carbon Seats, M Performance Steering Wheel",  
        exteriorFeatures: "M Sport Body Kit, LED Headlights, Carbon Fiber Trim",  
        warrantyAfterSalesService: "3-year/60,000 km Warranty, 24/7 Roadside Assistance",  
        releaseDateYear: "2021"  ,
        imageUrl: "assets/images/vehicle_models_images/M4.png"

    },
    
    
    "X4": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "X4",
        "engineSpecifications": "TBD",
        "fuelType": "TBD",
        "transmissionType": "TBD",
        "seatingCapacity": "TBD",
        "priceRange": "TBD",
        "mileageRange": "TBD",
        "safetyFeatures": "TBD",
        "colorOptions": "TBD",
        "dimensions": "TBD",
        "performanceFeatures": "TBD",
        "interiorFeatures": "TBD",
        "exteriorFeatures": "TBD",
        "warrantyAfterSalesService": "TBD",
        "releaseDateYear": "TBD"
      },
      "X5": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "X5",
        "engineSpecifications": "TBD",
        "fuelType": "TBD",
        "transmissionType": "TBD",
        "seatingCapacity": "TBD",
        "priceRange": "TBD",
        "mileageRange": "TBD",
        "safetyFeatures": "TBD",
        "colorOptions": "TBD",
        "dimensions": "TBD",
        "performanceFeatures": "TBD",
        "interiorFeatures": "TBD",
        "exteriorFeatures": "TBD",
        "warrantyAfterSalesService": "TBD",
        "releaseDateYear": "TBD"
      },
      "X6": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "X6",
        "engineSpecifications": "TBD",
        "fuelType": "TBD",
        "transmissionType": "TBD",
        "seatingCapacity": "TBD",
        "priceRange": "TBD",
        "mileageRange": "TBD",
        "safetyFeatures": "TBD",
        "colorOptions": "TBD",
        "dimensions": "TBD",
        "performanceFeatures": "TBD",
        "interiorFeatures": "TBD",
        "exteriorFeatures": "TBD",
        "warrantyAfterSalesService": "TBD",
        "releaseDateYear": "TBD"
      },
      "X7": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "X7",
        "engineSpecifications": "TBD",
        "fuelType": "TBD",
        "transmissionType": "TBD",
        "seatingCapacity": "TBD",
        "priceRange": "TBD",
        "mileageRange": "TBD",
        "safetyFeatures": "TBD",
        "colorOptions": "TBD",
        "dimensions": "TBD",
        "performanceFeatures": "TBD",
        "interiorFeatures": "TBD",
        "exteriorFeatures": "TBD",
        "warrantyAfterSalesService": "TBD",
        "releaseDateYear": "TBD"
      },
      "i4": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "i4",
        "engineSpecifications": "TBD",
        "fuelType": "TBD",
        "transmissionType": "TBD",
        "seatingCapacity": "TBD",
        "priceRange": "TBD",
        "mileageRange": "TBD",
        "safetyFeatures": "TBD",
        "colorOptions": "TBD",
        "dimensions": "TBD",
        "performanceFeatures": "TBD",
        "interiorFeatures": "TBD",
        "exteriorFeatures": "TBD",
        "warrantyAfterSalesService": "TBD",
        "releaseDateYear": "TBD"
      },
      "iX": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "iX",
        "engineSpecifications": "TBD",
        "fuelType": "TBD",
        "transmissionType": "TBD",
        "seatingCapacity": "TBD",
        "priceRange": "TBD",
        "mileageRange": "TBD",
        "safetyFeatures": "TBD",
        "colorOptions": "TBD",
        "dimensions": "TBD",
        "performanceFeatures": "TBD",
        "interiorFeatures": "TBD",
        "exteriorFeatures": "TBD",
        "warrantyAfterSalesService": "TBD",
        "releaseDateYear": "TBD"
      },
    
    
      "M5": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "M5",
        engineSpecifications: "1.2L Turbocharged Petrol, 1.5L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Manual/Automatic",
        seatingCapacity: "5",
        priceRange: "₹8,00,000 - ₹12,00,000",
        mileageRange: "17 - 19 km/l",
        safetyFeatures: "4 Airbags, ABS with EBD, ESC",
        colorOptions: "Flame Red, Calgary White, Foliage Green",
        dimensions: "3993 mm (Length), 1811 mm (Width), 1606 mm (Height)",
        performanceFeatures: "Turbocharged Engine, Multi-Drive Modes",
        interiorFeatures: "Touchscreen Infotainment, Digital Instrument Cluster",
        exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof",
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2016",
        imageUrl: "assets/images/vehicle_models_images/M5.png"

    },
    "M8": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "M8",
        engineSpecifications: "1.5L Turbocharged Petrol, 1.5L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Manual/Automatic",
        seatingCapacity: "5",
        priceRange: "₹10,00,000 - ₹14,00,000",
        mileageRange: "18 - 21 km/l",
        safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",
        colorOptions: "Flame Red, Calgary White, Foliage Green, Deep Red",
        dimensions: "3993 mm (Length), 1811 mm (Width), 1606 mm (Height)",
        performanceFeatures: "Turbocharged Engine, Multi-Drive Modes, Sports Mode",
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Digital Instrument Cluster",
        exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof, Fog Lamps",
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2016",
        imageUrl: "assets/images/vehicle_models_images/M8.png"

    },
    "XM": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "XM",
        engineSpecifications: "1.2L Turbocharged Petrol, 1.5L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Manual/Automatic",
        seatingCapacity: "5",
        priceRange: "₹7,50,000 - ₹10,00,000",
        mileageRange: "16 - 19 km/l",
        safetyFeatures: "4 Airbags, ABS with EBD, ESC",
        colorOptions: "Flame Red, Calgary White, Foliage Green, Deep Red, and more",
        dimensions: "3993 mm (Length), 1811 mm (Width), 1606 mm (Height)",
        performanceFeatures: "Turbocharged Engine, Multi-Drive Modes",
        interiorFeatures: "Touchscreen Infotainment, Digital Instrument Cluster",
        exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof",
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2016",
        imageUrl: "assets/images/vehicle_models_images/XM.png"

    },
    
    "E-Pace": {
        type: "Passenger",
        brand: "Jaguar",
        modelNameNumber: "E-Pace",
        engineSpecifications: "2.0L 4-Cylinder Turbocharged",  // Engine Specifications
        fuelType: "Diesel/Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹40,00,000 - ₹60,00,000",  // Price Range
        mileageRange: "14 - 18 km/l",  // Mileage/Range
        safetyFeatures: "Lane Departure Warning, Emergency Braking, Pedestrian Detection",  // Safety Features
        colorOptions: "Caldera Red, Fuji White, Narvik Black",  // Color Options
        dimensions: "4395 mm (Length), 1984 mm (Width), 1649 mm (Height)",  // Dimensions
        performanceFeatures: "Torque Vectoring, Active Driveline, Sports Mode",  // Performance Features
        interiorFeatures: "Touchscreen Infotainment, Leather Seats, Digital Instrument Cluster",  // Interior Features
        exteriorFeatures: "LED Headlights, Panoramic Sunroof, 18” Alloy Wheels",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2017",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/E-Pace.png"

    },
    
    "F-Pace": {
        type: "Passenger",
        brand: "Jaguar",
        modelNameNumber: "F-Pace",
        engineSpecifications: "2.0L 4-Cylinder Turbocharged, 3.0L V6 Supercharged",  // Engine Specifications
        fuelType: "Diesel/Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹70,00,000 - ₹1,00,00,000",  // Price Range
        mileageRange: "12 - 15 km/l",  // Mileage/Range
        safetyFeatures: "Adaptive Cruise Control, Lane Keep Assist, 8 Airbags",  // Safety Features
        colorOptions: "Yulong White, Santorini Black, Eiger Grey",  // Color Options
        dimensions: "4731 mm (Length), 1936 mm (Width), 1653 mm (Height)",  // Dimensions
        performanceFeatures: "All-Wheel Drive, Terrain Response, Adaptive Dynamics",  // Performance Features
        interiorFeatures: "Touch Pro Duo System, Leather Upholstery, 14-Speaker Meridian Sound",  // Interior Features
        exteriorFeatures: "LED DRLs, Alloy Wheels, Roof Rails",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2016" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/F-Pace.png"

    },
    
    "XJ": {
        type: "Passenger",
        brand: "Jaguar",
        modelNameNumber: "XJ",
        engineSpecifications: "3.0L V6 Supercharged, 5.0L V8 Supercharged",  // Engine Specifications
        fuelType: "Diesel/Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹90,00,000 - ₹1,50,00,000",  // Price Range
        mileageRange: "12 - 16 km/l",  // Mileage/Range
        safetyFeatures: "Autonomous Emergency Braking, Blind Spot Monitoring, 360-degree Camera",  // Safety Features
        colorOptions: "Caviar, French Racing Blue, Glacier White",  // Color Options
        dimensions: "5252 mm (Length), 1899 mm (Width), 1456 mm (Height)",  // Dimensions
        performanceFeatures: "Dynamic Mode, Adaptive Damping, Launch Control",  // Performance Features
        interiorFeatures: "Premium Leather Seats, Rear-Seat Entertainment, Power Sunroof",  // Interior Features
        exteriorFeatures: "Active Grille Shutters, LED Tail Lamps, Panoramic Roof",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2010" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/XJ.png"

    },
    
    "XF": {
        type: "Passenger",
        brand: "Jaguar",
        modelNameNumber: "XF",
        engineSpecifications: "2.0L 4-Cylinder Turbocharged, 3.0L V6 Diesel",  // Engine Specifications
        fuelType: "Diesel/Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹60,00,000 - ₹80,00,000",  // Price Range
        mileageRange: "15 - 18 km/l",  // Mileage/Range
        safetyFeatures: "Driver Assistance Package, ABS, Emergency Braking, Lane Departure Warning",  // Safety Features
        colorOptions: "Narvik Black, Loire Blue, Italian Racing Red",  // Color Options
        dimensions: "4961 mm (Length), 1897 mm (Width), 1457 mm (Height)",  // Dimensions
        performanceFeatures: "InControl Touch Pro, Adaptive Cruise Control, All-Wheel Drive",  // Performance Features
        interiorFeatures: "Wood and Leather Interior, Advanced Sound System, Digital Display",  // Interior Features
        exteriorFeatures: "LED Headlights, Dual Exhaust, 18” Alloy Wheels",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2008" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/XF.png"

    },
    
    "F-Type": {
        type: "Passenger",
        brand: "Jaguar",
        modelNameNumber: "F-Type",
        engineSpecifications: "2.0L 4-Cylinder Turbocharged, 5.0L V8 Supercharged",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,00,00,000 - ₹1,80,00,000",  // Price Range
        mileageRange: "8 - 12 km/l",  // Mileage/Range
        safetyFeatures: "Airbags, ABS, EBD, Electronic Stability Program, Parking Sensors",  // Safety Features
        colorOptions: "Fuji White, Santorini Black, Indus Silver, Red",  // Color Options
        dimensions: "4470 mm (Length), 1923 mm (Width), 1306 mm (Height)",  // Dimensions
        performanceFeatures: "Adaptive Dynamics, Torque Vectoring, Dynamic Mode",  // Performance Features
        interiorFeatures: "Premium Leather Upholstery, Touchscreen Infotainment, Navigation",  // Interior Features
        exteriorFeatures: "LED Headlights, Alloy Wheels, Sports Exhaust",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2013"  ,// Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/F-Type.png"

    },
    
    "Range Rover Sport": {
        type: "Passenger",
        brand: "Land Rover",
        modelNameNumber: "Range Rover Sport",  // Model Name Number
        engineSpecifications: "3.0L V6 Supercharged Petrol, 2.0L 4-cylinder Diesel",  // Engine Specifications
        fuelType: "Petrol/Diesel",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹90,00,000 - ₹1,30,00,000",  // Price Range
        mileageRange: "10 - 15 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS with EBD, Hill Descent Control, 360° Parking Aid",  // Safety Features
        colorOptions: "Fuji White, Santorini Black, Carpathian Grey, Yulong White, and more",  // Color Options
        dimensions: "4879 mm (Length), 2073 mm (Width), 1803 mm (Height)",  // Dimensions
        performanceFeatures: "Dynamic Mode, Adaptive Cruise Control, Terrain Response System",  // Performance Features
        interiorFeatures: "Leather Upholstery, Touchscreen Infotainment, Panoramic Sunroof",  // Interior Features
        exteriorFeatures: "Matrix LED Headlamps, Signature Daytime Running Lights, Power Tailgate",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2005",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Range Rover Sport.png"

    },
    "Range Rover Velar": {
        type: "Passenger",
        brand: "Land Rover",
        modelNameNumber: "Range Rover Velar",  // Model Name Number
        engineSpecifications: "2.0L 4-cylinder Turbocharged Petrol, 3.0L V6 Supercharged Petrol, 2.0L Diesel",  // Engine Specifications
        fuelType: "Petrol/Diesel",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹80,00,000 - ₹1,20,00,000",  // Price Range
        mileageRange: "12 - 16 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, Blind Spot Monitoring, Emergency Braking, Parking Sensors",  // Safety Features
        colorOptions: "Narvik Black, Byron Blue, Silicon Silver, Firenze Red, and more",  // Color Options
        dimensions: "4781 mm (Length), 1930 mm (Width), 1683 mm (Height)",  // Dimensions
        performanceFeatures: "Adaptive Dynamics, All-Wheel Drive, InControl Touch Pro",  // Performance Features
        interiorFeatures: "Heated Seats, Meridian Sound System, Touch Pro Duo Dual-Screen",  // Interior Features
        exteriorFeatures: "LED Headlamps, Gloss Black Roof Rails, Power Foldable Mirrors",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2017" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Range Rover Velar.png"

    },
    "XE": {
        type: "Passenger",
        brand: "Jaguar",
        modelNameNumber: "XE",  // Model Name Number
        engineSpecifications: "2.0L 4-cylinder Petrol, 2.0L Diesel",  // Engine Specifications
        fuelType: "Petrol/Diesel",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹45,00,000 - ₹55,00,000",  // Price Range
        mileageRange: "12 - 15 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS with EBD, Stability Control, Rear Parking Camera",  // Safety Features
        colorOptions: "Narvik Black, Firenze Red, Yulong White, Caesium Blue",  // Color Options
        dimensions: "4751 mm (Length), 2075 mm (Width), 1416 mm (Height)",  // Dimensions
        performanceFeatures: "Dynamic Mode, InControl Touch Pro, JaguarDrive Control",  // Performance Features
        interiorFeatures: "Leather Upholstery, 8-inch Touchscreen, Meridian Sound System",  // Interior Features
        exteriorFeatures: "LED Headlights, Dynamic Grill, Gloss Black Side Vents",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2015",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/XE.png"

    },
    "Range Rover Evoque": {
        type: "Passenger",
        brand: "Land Rover",
        modelNameNumber: "Range Rover Evoque",  // Model Name Number
        engineSpecifications: "2.0L 4-cylinder Turbocharged Petrol, 2.0L Diesel",  // Engine Specifications
        fuelType: "Petrol/Diesel",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹60,00,000 - ₹75,00,000",  // Price Range
        mileageRange: "12 - 17 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, Lane Keep Assist, Traffic Sign Recognition, Rear Traffic Monitor",  // Safety Features
        colorOptions: "Eiger Grey, Yulong White, Firenze Red, Santorini Black, and more",  // Color Options
        dimensions: "4371 mm (Length), 1900 mm (Width), 1649 mm (Height)",  // Dimensions
        performanceFeatures: "Terrain Response 2, All-Wheel Drive, Adaptive Dynamics",  // Performance Features
        interiorFeatures: "InControl Touch Pro, Meridian Sound System, Panoramic Roof",  // Interior Features
        exteriorFeatures: "Matrix LED Headlights, Signature Daytime Running Lights, Black Roof",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2011" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Range Rover Evoque.png"

    },
    
    
    "I-Pace": {
        "type": "Passenger",
        "brand": "Tata",
        "modelNameNumber": "I-Pace",
        "engineSpecifications": "90 kWh Lithium-ion Battery",
        "fuelType": "Electric",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹1,05,00,000 - ₹1,20,00,000",
        "mileageRange": "470 km (Range on a single charge)",
        "safetyFeatures": "6 Airbags, ABS with EBD, ESC, Hill Assist, Autonomous Emergency Braking",
        "colorOptions": "Caldera Red, Fuji White, Narvik Black, and more",
        "dimensions": "4681 mm (Length), 1984 mm (Width), 1560 mm (Height)",
        "performanceFeatures": "400 PS Power, 0-100 km/h in 4.8 seconds, All-Wheel Drive",
        "interiorFeatures": "12.3-inch TFT Instrument Cluster, Premium Sound System, Leather Upholstery",
        "exteriorFeatures": "LED Headlamps, Aerodynamic Design, Split Rear Spoiler",
        "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/I-Pace.png"

    },
    "Defender": {
        "type": "Passenger",
        "brand": "Land Rover",
        "modelNameNumber": "Defender 90/110",
        "engineSpecifications": "2.0L 4-Cylinder Turbocharged Petrol, 3.0L Inline-6 Turbocharged Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5-7",
        "priceRange": "₹85,00,000 - ₹1,10,00,000",
        "mileageRange": "12 - 15 km/l",
        "safetyFeatures": "6 Airbags, ABS, EBD, Hill Descent Control, Dynamic Stability Control",
        "colorOptions": "Yulong White, Santorini Black, Pangea Green, and more",
        "dimensions": "4583 mm (Length), 1996 mm (Width), 1967 mm (Height)",
        "performanceFeatures": "Terrain Response 2, 4WD, Towing Capacity of 3,500 kg",
        "interiorFeatures": "InControl Touch Pro, Meridian Sound System, Leather Upholstery",
        "exteriorFeatures": "LED Headlamps, Panoramic Sunroof, Raised Ground Clearance",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/Defender.png"

    },
    "Discovery": {
        "type": "Passenger",
        "brand": "Land Rover",
        "modelNameNumber": "Discovery 5",
        "engineSpecifications": "2.0L 4-Cylinder Turbocharged Petrol, 3.0L V6 Supercharged Petrol",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "7",
        "priceRange": "₹90,00,000 - ₹1,20,00,000",
        "mileageRange": "12 - 16 km/l",
        "safetyFeatures": "6 Airbags, ABS with EBD, Lane Keep Assist, Hill Hold Assist",
        "colorOptions": "Aruba, Corris Grey, Loire Blue, and more",
        "dimensions": "4956 mm (Length), 2194 mm (Width), 1888 mm (Height)",
        "performanceFeatures": "All-Wheel Drive, Air Suspension, Terrain Response 2",
        "interiorFeatures": "Touch Pro Duo, Luxurious Leather Seats, Premium Sound System",
        "exteriorFeatures": "LED Signature Headlamps, Power Tailgate, Roof Rails",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2017",
        imageUrl: "assets/images/vehicle_models_images/Discovery.png"

    },
    "Discovery Sport": {
        "type": "Passenger",
        "brand": "Land Rover",
        "modelNameNumber": "Discovery Sport",
        "engineSpecifications": "2.0L Ingenium Petrol, 2.0L Ingenium Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹50,00,000 - ₹70,00,000",
        "mileageRange": "12 - 16 km/l",
        "safetyFeatures": "6 Airbags, ABS with EBD, Blind Spot Assist, Adaptive Cruise Control",
        "colorOptions": "Fuji White, Santorini Black, Firenze Red, and more",
        "dimensions": "4599 mm (Length), 1894 mm (Width), 1724 mm (Height)",
        "performanceFeatures": "Terrain Response System, 4WD, Towing Capacity of 2,500 kg",
        "interiorFeatures": "10-inch Touchscreen, Leather Upholstery, Meridian Sound System",
        "exteriorFeatures": "LED Headlamps, Panoramic Roof, Roof Rails",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2014",
        imageUrl: "assets/images/vehicle_models_images/Discovery Sport.png"

    },
    "Range Rover": {
        "type": "Passenger",
        "brand": "Land Rover",
        "modelNameNumber": "Range Rover Vogue",
        "engineSpecifications": "3.0L V6 Supercharged Petrol, 4.4L V8 Turbocharged Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹2,00,00,000 - ₹3,50,00,000",
        "mileageRange": "10 - 12 km/l",
        "safetyFeatures": "8 Airbags, ABS, Dynamic Stability Control, Adaptive Cruise Control",
        "colorOptions": "Indus Silver, Carpathian Grey, Santorini Black, and more",
        "dimensions": "4999 mm (Length), 2073 mm (Width), 1869 mm (Height)",
        "performanceFeatures": "Active Locking Rear Differential, Terrain Response 2, All-Wheel Drive",
        "interiorFeatures": "Touch Pro Duo, 29-speaker Meridian Sound System, Executive Class Seating",
        "exteriorFeatures": "Signature LED Headlamps, Deployable Side Steps, Panoramic Glass Roof",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2012",
        imageUrl: "assets/images/vehicle_models_images/Range Rover.png"

    },
    
    
    "A-Class": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "A-Class",
        "engineSpecifications": "2.0L 4-cylinder Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹30,00,000 - ₹35,00,000",
        "mileageRange": "15 - 18 km/l",
        "safetyFeatures": "7 Airbags, ABS, EBD, Electronic Stability Program, Attention Assist",
        "colorOptions": "Iridium Silver, Cosmos Black, Polar White, Mountain Grey, and more",
        "dimensions": "4419 mm (Length), 1796 mm (Width), 1433 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, Paddle Shifters, Sports Mode",
        "interiorFeatures": "MBUX Infotainment System, Dual Zone Climate Control, LED Ambient Lighting",
        "exteriorFeatures": "LED Headlights, Panoramic Sunroof, 17-inch Alloy Wheels",
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/A-Class.png"

      },
      "B-Class": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "B-Class",
        "engineSpecifications": "1.6L 4-cylinder Petrol, 2.2L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹28,00,000 - ₹33,00,000",
        "mileageRange": "16 - 20 km/l",
        "safetyFeatures": "7 Airbags, ABS, Brake Assist, Attention Assist, Collision Prevention Assist",
        "colorOptions": "Mountain Grey, Iridium Silver, Polar White, Cosmos Black",
        "dimensions": "4399 mm (Length), 1796 mm (Width), 1557 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, Dynamic Select, Eco Mode",
        "interiorFeatures": "MBUX Infotainment, High-Resolution Display, Reversing Camera",
        "exteriorFeatures": "LED High-Performance Headlights, Roof Rails, Rear Spoiler",
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/B-Class.png"

      },
      "C-Class": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "C-Class",
        "engineSpecifications": "1.5L Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹45,00,000 - ₹60,00,000",
        "mileageRange": "14 - 17 km/l",
        "safetyFeatures": "9 Airbags, ABS, EBD, Electronic Stability Control, Collision Prevention",
        "colorOptions": "Selenite Grey, Obsidian Black, Iridium Silver, Polar White",
        "dimensions": "4686 mm (Length), 1810 mm (Width), 1442 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, AMG Sports Package, Adaptive Suspension",
        "interiorFeatures": "COMAND Infotainment System, Heated Seats, Electric Adjustments",
        "exteriorFeatures": "LED Intelligent Light System, 18-inch Alloy Wheels, Panoramic Sunroof",
        "warrantyAfterSalesService": "2-year Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/C-Class.png"

      },
      "E-Class": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "E-Class",
        "engineSpecifications": "2.0L 4-cylinder Petrol, 2.0L 4-cylinder Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹70,00,000 - ₹80,00,000",
        "mileageRange": "13 - 16 km/l",
        "safetyFeatures": "10 Airbags, Active Parking Assist, Attention Assist, Collision Prevention",
        "colorOptions": "Iridium Silver, Obsidian Black, Mojave Silver, Polar White",
        "dimensions": "4940 mm (Length), 1852 mm (Width), 1468 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, Dynamic Select, 4MATIC AWD, Air Body Control Suspension",
        "interiorFeatures": "MBUX with Voice Control, Ambient Lighting, Electric Front Seats",
        "exteriorFeatures": "LED High Performance Headlights, 19-inch Alloy Wheels, Panoramic Sunroof",
        "warrantyAfterSalesService": "3-year Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/E-Class.png"

      },
      "S-Class": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "S-Class",
        "engineSpecifications": "3.0L V6 Petrol, 4.0L V8 Diesel, 6.0L V12",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹1,50,00,000 - ₹2,00,00,000",
        "mileageRange": "9 - 13 km/l",
        "safetyFeatures": "12 Airbags, Active Brake Assist, Distronic Plus, Attention Assist",
        "colorOptions": "Selenite Grey, Obsidian Black, Polar White, Iridium Silver",
        "dimensions": "5289 mm (Length), 1915 mm (Width), 1503 mm (Height)",
        "performanceFeatures": "4MATIC AWD, AIRmatic Suspension, AMG Line, Dynamic Drive Modes",
        "interiorFeatures": "MBUX with Gesture Control, 3D Sound System, Massaging Seats",
        "exteriorFeatures": "Multibeam LED Headlights, 20-inch Alloy Wheels, Panorama Sunroof",
        "warrantyAfterSalesService": "3-year Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2023",
        imageUrl: "assets/images/vehicle_models_images/S-Class.png"

      },
    
    
    // Vehicle Model: GLA
    "GLA": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "GLA",
        engineSpecifications: "2.0L Turbocharged Petrol, 2.0L Diesel",  
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹42,00,000 - ₹53,00,000",
        mileageRange: "12 - 17 km/l",
        safetyFeatures: "7 Airbags, ABS, EBD, Brake Assist, Hill Start Assist",
        colorOptions: "Iridium Silver, Mountain Grey, Cosmos Black, Polar White",
        dimensions: "4417 mm (Length), 1804 mm (Width), 1494 mm (Height)",
        performanceFeatures: "AMG Performance Mode, 4MATIC All-Wheel Drive",
        interiorFeatures: "MBUX Infotainment System, Leather Upholstery, Ambient Lighting",
        exteriorFeatures: "LED High Performance Headlamps, Panoramic Sunroof, AMG Styling",
        warrantyAfterSalesService: "3-year Warranty, Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/GLA.png"

    },
    
    // Vehicle Model: GLB
    "GLB": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "GLB",
        engineSpecifications: "2.0L Turbocharged Petrol, 2.0L Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "7",
        priceRange: "₹55,00,000 - ₹65,00,000",
        mileageRange: "13 - 16 km/l",
        safetyFeatures: "9 Airbags, Active Brake Assist, Lane Keeping Assist, Blind Spot Monitoring",
        colorOptions: "Iridium Silver, Denim Blue, Night Black, MANUFAKTUR Patagonia Red",
        dimensions: "4634 mm (Length), 1834 mm (Width), 1708 mm (Height)",
        performanceFeatures: "4MATIC All-Wheel Drive, AMG Night Package",
        interiorFeatures: "MBUX, 10.25-inch Display, Thermotronic Climate Control",
        exteriorFeatures: "LED Tail Lights, Roof Rails, Power Tailgate",
        warrantyAfterSalesService: "3-year Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/GLB.png"

    },
    
    // Vehicle Model: GLC
    "GLC": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "GLC",
        engineSpecifications: "2.0L Turbocharged Petrol, 3.0L Diesel, 4.0L V8",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹60,00,000 - ₹90,00,000",
        mileageRange: "10 - 14 km/l",
        safetyFeatures: "9 Airbags, Active Parking Assist, Collision Prevention, Pre-Safe System",
        colorOptions: "Polar White, Iridium Silver, Obsidian Black, Selenite Grey",
        dimensions: "4693 mm (Length), 1890 mm (Width), 1644 mm (Height)",
        performanceFeatures: "4MATIC AWD, AIRMATIC Air Suspension",
        interiorFeatures: "MBUX, Burmester Surround Sound, Panoramic Sunroof",
        exteriorFeatures: "LED High-Performance Lights, AMG Sport Package",
        warrantyAfterSalesService: "4-year Warranty, Roadside Assistance",
        releaseDateYear: "2016",
        imageUrl: "assets/images/vehicle_models_images/GLC.png"

    },
    
    // Vehicle Model: GLE
    "GLE": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "GLE",
        engineSpecifications: "3.0L Turbocharged Petrol, 3.0L Diesel, 4.0L V8",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹80,00,000 - ₹1,20,00,000",
        mileageRange: "9 - 12 km/l",
        safetyFeatures: "9 Airbags, Distronic Plus, Active Brake Assist, Blind Spot Monitoring",
        colorOptions: "Iridium Silver, Polar White, Obsidian Black, MANUFAKTUR Patagonia Red",
        dimensions: "4930 mm (Length), 2010 mm (Width), 1780 mm (Height)",
        performanceFeatures: "4MATIC All-Wheel Drive, AIRMATIC Air Suspension",
        interiorFeatures: "MBUX, Advanced Climate Control, Leather Upholstery",
        exteriorFeatures: "AMG Line, LED Tail Lights, Panoramic Sunroof",
        warrantyAfterSalesService: "4-year Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/GLE.png"

    },
    
    // Vehicle Model: GLS
    "GLS": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "GLS",
        engineSpecifications: "3.0L Turbocharged Petrol, 4.0L V8",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "7",
        priceRange: "₹1,10,00,000 - ₹1,50,00,000",
        mileageRange: "7 - 10 km/l",
        safetyFeatures: "9 Airbags, Pre-Safe, Active Brake Assist, 360-degree Camera",
        colorOptions: "Obsidian Black, Iridium Silver, MANUFAKTUR Patagonia Red",
        dimensions: "5207 mm (Length), 1959 mm (Width), 1850 mm (Height)",
        performanceFeatures: "4MATIC All-Wheel Drive, AIRMATIC Suspension",
        interiorFeatures: "MBUX, Premium Sound System, 12.3-inch Digital Displays",
        exteriorFeatures: "Panoramic Sunroof, AMG Styling, LED High-Performance Lights",
        warrantyAfterSalesService: "4-year Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/GLS.png"

    },
    
    // Vehicle Model: G-Class
    "G-Class": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "G-Class",
        engineSpecifications: "4.0L V8 Twin-Turbo Petrol, 4.0L V8 Diesel",
        fuelType: "Petrol/Diesel",
        transmissionType: "Automatic",
        seatingCapacity: "5",
        priceRange: "₹2,00,00,000 - ₹3,00,00,000",
        mileageRange: "6 - 8 km/l",
        safetyFeatures: "9 Airbags, Active Lane Keeping Assist, Collision Prevention, 360-degree Camera",
        colorOptions: "Obsidian Black, G-Manufaktur, Iridium Silver, MANUFAKTUR",
        dimensions: "4570 mm (Length), 1931 mm (Width), 1984 mm (Height)",
        performanceFeatures: "4MATIC AWD, Off-Road Capabilities, AMG Performance",
        interiorFeatures: "Burmester Sound System, Nappa Leather, 12.3-inch MBUX Display",
        exteriorFeatures: "LED Headlights, AMG Body Styling, Side Steps",
        warrantyAfterSalesService: "5-year Warranty, Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/G-Class.png"

    },
    
    "EQB": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "EQB 300 4MATIC",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "Unknown",  // Engine Specifications (to be updated)
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "7",  // Seating Capacity
        priceRange: "₹78,00,000 - ₹85,00,000",  // Price Range (approximate)
        mileageRange: "400 km (Range)",  // Mileage/Range (Electric)
        safetyFeatures: "7 Airbags, ABS, ESC, Autonomous Driving Assist",  // Safety Features
        colorOptions: "Iridium Silver, MANUFAKTUR Patagonia Red, Night Black, and more",  // Color Options
        dimensions: "4684 mm (Length), 1834 mm (Width), 1667 mm (Height)",  // Dimensions
        performanceFeatures: "Electric Drive, AWD, Regenerative Braking",  // Performance Features
        interiorFeatures: "MBUX System, Panoramic Sunroof, Luxury Seats",  // Interior Features
        exteriorFeatures: "LED Headlamps, AMG Styling Package, 20-inch Wheels",  // Exterior Features
        warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2021",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/EQB.png"

    },
    
    "EQC": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "EQC 400 4MATIC",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "Unknown",  // Engine Specifications (to be updated)
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,00,00,000 - ₹1,10,00,000",  // Price Range (approximate)
        mileageRange: "350 km (Range)",  // Mileage/Range (Electric)
        safetyFeatures: "7 Airbags, ABS, ESC, Autonomous Driving Assist",  // Safety Features
        colorOptions: "Iridium Silver, Obsidian Black, MANUFAKTUR Patagonia Red",  // Color Options
        dimensions: "4761 mm (Length), 1890 mm (Width), 1624 mm (Height)",  // Dimensions
        performanceFeatures: "Electric Drive, AWD, 408 hp Power Output",  // Performance Features
        interiorFeatures: "MBUX System, Premium Audio, Full Digital Cockpit",  // Interior Features
        exteriorFeatures: "LED Headlamps, AMG Styling Package, 20-inch Wheels",  // Exterior Features
        warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/EQC.png"

    },
    
    "EQS": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "EQS 580 4MATIC",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "Unknown",  // Engine Specifications (to be updated)
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,70,00,000 - ₹2,00,00,000",  // Price Range (approximate)
        mileageRange: "770 km (Range)",  // Mileage/Range (Electric)
        safetyFeatures: "9 Airbags, ABS, ESC, Autonomous Driving Assist",  // Safety Features
        colorOptions: "Obsidian Black, Iridium Silver, MANUFAKTUR Patagonia Red",  // Color Options
        dimensions: "5216 mm (Length), 1920 mm (Width), 1519 mm (Height)",  // Dimensions
        performanceFeatures: "Electric Drive, AWD, 516 hp Power Output",  // Performance Features
        interiorFeatures: "MBUX Hyperscreen, Ambient Lighting, Premium Leather",  // Interior Features
        exteriorFeatures: "LED Headlamps, AMG Styling Package, 21-inch Wheels",  // Exterior Features
        warrantyAfterSalesService: "8-year/1,60,000 km Battery Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2021",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/EQS.png"

    },
    
    "AMG A 35": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "AMG A 35 4MATIC",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "2.0L Turbocharged Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹60,00,000 - ₹70,00,000",  // Price Range (approximate)
        mileageRange: "12 - 15 km/l",  // Mileage/Range
        safetyFeatures: "7 Airbags, ABS, ESC, Autonomous Driving Assist",  // Safety Features
        colorOptions: "Iridium Silver, MANUFAKTUR Patagonia Red, Night Black",  // Color Options
        dimensions: "4419 mm (Length), 1999 mm (Width), 1411 mm (Height)",  // Dimensions
        performanceFeatures: "Turbocharged Engine, 4MATIC AWD, 306 hp Power Output",  // Performance Features
        interiorFeatures: "AMG Sport Seats, MBUX System, Digital Cockpit",  // Interior Features
        exteriorFeatures: "LED Headlamps, AMG Body Styling, 19-inch Wheels",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2020" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/AMG A 35.png"

    },
    
    "AMG C 63": {
        type: "Passenger",
        brand: "Mercedes-Benz",
        modelNameNumber: "AMG C 63 S",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "4.0L V8 Twin-Turbocharged Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,20,00,000 - ₹1,40,00,000",  // Price Range (approximate)
        mileageRange: "8 - 10 km/l",  // Mileage/Range
        safetyFeatures: "7 Airbags, ABS, ESC, Autonomous Driving Assist",  // Safety Features
        colorOptions: "Iridium Silver, Obsidian Black, MANUFAKTUR Patagonia Red",  // Color Options
        dimensions: "4751 mm (Length), 1899 mm (Width), 1409 mm (Height)",  // Dimensions
        performanceFeatures: "V8 Engine, 4MATIC AWD, 503 hp Power Output",  // Performance Features
        interiorFeatures: "AMG Sport Seats, Premium Audio, Digital Cockpit",  // Interior Features
        exteriorFeatures: "LED Headlamps, AMG Body Styling, 19-inch Wheels",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,00,000 km Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "2021",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/AMG C 63.png"

    },
    
    "AMG E 63": {
        type: "Passenger",  // Vehicle Type
        brand: "Mercedes-Benz",  // Brand
        modelNameNumber: "AMG E 63",  // Model Name Number
        engineSpecifications: "4.0L V8 Biturbo",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹1,80,00,000 - ₹2,50,00,000",  // Price Range
        mileageRange: "8 - 10 km/l",  // Mileage/Range
        safetyFeatures: "9 Airbags, ABS, ESC, Lane Assist, Active Brake Assist",  // Safety Features
        colorOptions: "Iridium Silver, Obsidian Black, MANUFAKTUR Patagonia Red, and more",  // Color Options
        dimensions: "5079 mm (Length), 1899 mm (Width), 1461 mm (Height)",  // Dimensions
        performanceFeatures: "AMG Performance 4MATIC+, AMG Ride Control Sport Suspension",  // Performance Features
        interiorFeatures: "MBUX Infotainment, Nappa Leather Upholstery, AMG Sport Seats",  // Interior Features
        exteriorFeatures: "AMG Night Package, LED Headlights, AMG Performance Exhaust",  // Exterior Features
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2017",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/AMG E 63.png"

    },
    
    
    "CLS": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "CLS",
        "engineSpecifications": "3.0L V6 Turbocharged Petrol, 2.9L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹90,00,000 - ₹1,50,00,000",
        "mileageRange": "10 - 12 km/l",
        "safetyFeatures": "9 Airbags, ABS with EBD, Active Brake Assist, Lane Assist",
        "colorOptions": "Iridium Silver, Obsidian Black, Selenite Grey, Polar White, and more",
        "dimensions": "5088 mm (Length), 1899 mm (Width), 1414 mm (Height)",
        "performanceFeatures": "Air Suspension, Dynamic Select, AMG Performance Package",
        "interiorFeatures": "MBUX Infotainment System, Premium Leather Upholstery, 3-zone Climate Control",
        "exteriorFeatures": "LED Multibeam Headlamps, Panoramic Sunroof, AMG Styling",
        "warrantyAfterSalesService": "3-year/Unlimited km Warranty, Roadside Assistance",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/CLS.png"

    },
    "EQE": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "EQE",
        "engineSpecifications": "Electric Motor (Approx. 350 hp)",
        "fuelType": "Electric",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹1,50,00,000 - ₹2,00,00,000",
        "mileageRange": "400 - 550 km (WLTP Range)",
        "safetyFeatures": "Active Brake Assist, Blind Spot Assist, 360° Camera",
        "colorOptions": "Iridium Silver, MANUFAKTUR Patagonia Red, Obsidian Black, and more",
        "dimensions": "4946 mm (Length), 1961 mm (Width), 1500 mm (Height)",
        "performanceFeatures": "AMG Line Styling, Adaptive Air Suspension, Regenerative Braking",
        "interiorFeatures": "MBUX Hyperscreen, Premium Sound System, Vegan Leather Upholstery",
        "exteriorFeatures": "LED Headlights, Flush Door Handles, Aerodynamic Design",
        "warrantyAfterSalesService": "8-year/160,000 km Battery Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/EQE.png"

    },
    "AMG GT": {
        "type": "Passenger",
        "brand": "Mercedes-Benz",
        "modelNameNumber": "AMG GT",
        "engineSpecifications": "4.0L V8 Bi-Turbo Petrol",
        "fuelType": "Petrol",
        "transmissionType": "Automatic",
        "seatingCapacity": "2",
        "priceRange": "₹2,00,00,000 - ₹3,00,00,000",
        "mileageRange": "8 - 10 km/l",
        "safetyFeatures": "Active Brake Assist, ESP, Attention Assist, Rearview Camera",
        "colorOptions": "Iridium Silver, Designo Patagonia Red, Obsidian Black, and more",
        "dimensions": "4546 mm (Length), 1900 mm (Width), 1273 mm (Height)",
        "performanceFeatures": "AMG Dynamic Select, Active Aerodynamics, Launch Control",
        "interiorFeatures": "MB-Tex Upholstery, AMG Performance Steering Wheel, Burmester Sound System",
        "exteriorFeatures": "AMG Performance Exhaust, LED High-Performance Headlamps, Panoramic Roof",
        "warrantyAfterSalesService": "3-year/Unlimited km Warranty, 24/7 Roadside Assistance",
        "releaseDateYear": "2015",
        imageUrl: "assets/images/vehicle_models_images/AMG GT.png"

    },
    
    
    "XC60": {
        "type": "Passenger",
        "brand": "Volvo",
        "modelNameNumber": "XC60",
        "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹60,00,000 - ₹70,00,000",
        "mileageRange": "12 - 16 km/l",
        "safetyFeatures": "Pilot Assist, 6 Airbags, ABS, ESC, Adaptive Cruise Control",
        "colorOptions": "Onyx Black, Crystal White, Denim Blue, Pine Grey",
        "dimensions": "4688 mm (Length), 1902 mm (Width), 1658 mm (Height)",
        "performanceFeatures": "All-Wheel Drive, Adaptive Suspension, Dynamic Steering",
        "interiorFeatures": "12.3-inch Digital Driver Display, Leather Upholstery, Bowers & Wilkins Sound System",
        "exteriorFeatures": "LED Headlights, Panoramic Sunroof, 19-inch Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, Roadside Assistance",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/XC60.png"

    },
    "XC90": {
        "type": "Passenger",
        "brand": "Volvo",
        "modelNameNumber": "XC90",
        "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Hybrid",
        "fuelType": "Petrol/Hybird",
        "transmissionType": "Automatic",
        "seatingCapacity": "7",
        "priceRange": "₹90,00,000 - ₹1,10,00,000",
        "mileageRange": "10 - 14 km/l",
        "safetyFeatures": "Pilot Assist, 6 Airbags, ESC, Adaptive Cruise Control, Blind Spot Monitoring",
        "colorOptions": "Onyx Black, Crystal White, Osmium Grey",
        "dimensions": "4950 mm (Length), 2140 mm (Width), 1776 mm (Height)",
        "performanceFeatures": "All-Wheel Drive, Air Suspension, Adaptive Dampers",
        "interiorFeatures": "Bowers & Wilkins Sound System, Leather Upholstery, 9-inch Infotainment Display",
        "exteriorFeatures": "LED Headlights, Panoramic Sunroof, 20-inch Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, Roadside Assistance",
        "releaseDateYear": "2015",
        imageUrl: "assets/images/vehicle_models_images/XC90.png"

    },
    "S60": {
        "type": "Passenger",
        "brand": "Volvo",
        "modelNameNumber": "S60",
        "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹45,00,000 - ₹55,00,000",
        "mileageRange": "14 - 18 km/l",
        "safetyFeatures": "6 Airbags, ESC, ABS, Blind Spot Monitoring",
        "colorOptions": "Onyx Black, Crystal White, Denim Blue",
        "dimensions": "4635 mm (Length), 1899 mm (Width), 1431 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, Adaptive Suspension",
        "interiorFeatures": "12.3-inch Digital Driver Display, Leather Upholstery, Harman Kardon Sound System",
        "exteriorFeatures": "LED DRLs, Adaptive Headlights, 18-inch Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, Roadside Assistance",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/S60.png"

    },
    "S90": {
        "type": "Passenger",
        "brand": "Volvo",
        "modelNameNumber": "S90",
        "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Hybrid",
        "fuelType": "Petrol/Hybrid",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹65,00,000 - ₹75,00,000",
        "mileageRange": "13 - 17 km/l",
        "safetyFeatures": "Pilot Assist, 6 Airbags, ESC, Blind Spot Monitoring",
        "colorOptions": "Onyx Black, Crystal White, Maple Brown",
        "dimensions": "4960 mm (Length), 1899 mm (Width), 1443 mm (Height)",
        "performanceFeatures": "Adaptive Dampers, Air Suspension, Dynamic Drive Modes",
        "interiorFeatures": "Leather Upholstery, 9-inch Infotainment, Harman Kardon Sound System",
        "exteriorFeatures": "LED Headlights, Panoramic Sunroof, 19-inch Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, Roadside Assistance",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/S90.png"

    },
    "XC40": {
        "type": "Passenger",
        "brand": "Volvo",
        "modelNameNumber": "XC40",
        "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹45,00,000 - ₹55,00,000",
        "mileageRange": "13 - 17 km/l",
        "safetyFeatures": "Pilot Assist, 6 Airbags, ESC, Adaptive Cruise Control",
        "colorOptions": "Onyx Black, Crystal White, Thunder Grey",
        "dimensions": "4425 mm (Length), 1804 mm (Width), 1658 mm (Height)",
        "performanceFeatures": "All-Wheel Drive, Adaptive Suspension",
        "interiorFeatures": "Leather Upholstery, 9-inch Infotainment, Wireless Charging",
        "exteriorFeatures": "LED DRLs, Panoramic Sunroof, 18-inch Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, Roadside Assistance",
        "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/XC40.png"

    },
    "V40": {
        "type": "Passenger",
        "brand": "Volvo",
        "modelNameNumber": "V40",
        "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Diesel",
        "fuelType": "Petrol/Diesel",
        "transmissionType": "Automatic",
        "seatingCapacity": "5",
        "priceRange": "₹35,00,000 - ₹45,00,000",
        "mileageRange": "12 - 16 km/l",
        "safetyFeatures": "6 Airbags, ESC, ABS, Pedestrian Detection",
        "colorOptions": "Onyx Black, Crystal White, Mussel Blue",
        "dimensions": "4369 mm (Length), 1804 mm (Width), 1457 mm (Height)",
        "performanceFeatures": "Turbocharged Engine, Dynamic Drive Modes",
        "interiorFeatures": "Leather Upholstery, 8-inch Infotainment, Premium Sound System",
        "exteriorFeatures": "LED DRLs, Roof Rails, 17-inch Alloy Wheels",
        "warrantyAfterSalesService": "5-year/1,00,000 km Warranty, Roadside Assistance",
        "releaseDateYear": "2017",
        imageUrl: "assets/images/vehicle_models_images/V40.png"

    },
    
        "V60": {
            "type": "Passenger",
            "brand": "Volvo",
            "modelNameNumber": "V60",
            "engineSpecifications": "2.0L Petrol, 2.0L Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹45,00,000 - ₹60,00,000",
            "mileageRange": "12 - 16 km/l",
            "safetyFeatures": "9 Airbags, ABS, ESC, City Safety, Pilot Assist",
            "colorOptions": "Onyx Black, Silver Dawn, Crystal White, Denim Blue",
            "dimensions": "4761 mm (Length), 1859 mm (Width), 1437 mm (Height)",
            "performanceFeatures": "Turbocharged Engine, Adaptive Cruise Control, All-Wheel Drive",
            "interiorFeatures": "Sensus Connect, Leather Upholstery, Panoramic Sunroof",
            "exteriorFeatures": "LED Headlights, Roof Rails, Dual Exhaust",
            "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Volvo On Call",
            "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/V60.png"

        },
        "V90": {
            "type": "Passenger",
            "brand": "Volvo",
            "modelNameNumber": "V90",
            "engineSpecifications": "2.0L Turbocharged Petrol, 2.0L Turbo Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹60,00,000 - ₹75,00,000",
            "mileageRange": "14 - 18 km/l",
            "safetyFeatures": "Pilot Assist, Lane Keeping Aid, Collision Mitigation, 9 Airbags",
            "colorOptions": "Birch Light, Silver, Onyx Black, Crystal White",
            "dimensions": "4936 mm (Length), 1879 mm (Width), 1494 mm (Height)",
            "performanceFeatures": "AWD, Adaptive Suspension, Air Suspension",
            "interiorFeatures": "Bowers & Wilkins Sound System, Nappa Leather Upholstery",
            "exteriorFeatures": "Active Bending Lights, Power Tailgate, Roof Rails",
            "warrantyAfterSalesService": "4-year/1,00,000 km Warranty, Volvo Assistance",
            "releaseDateYear": "2016",
            imageUrl: "assets/images/vehicle_models_images/V90.png"

        },
        "EX90": {
            "type": "Passenger",
            "brand": "Volvo",
            "modelNameNumber": "EX90",
            "engineSpecifications": "Electric Motor (400+ km range)",
            "fuelType": "Electric",
            "transmissionType": "Automatic",
            "seatingCapacity": "7",
            "priceRange": "₹90,00,000 - ₹1,20,00,000",
            "mileageRange": "400+ km per charge",
            "safetyFeatures": "Advanced Driver Assistance System, 360-degree Camera, Autonomous Driving",
            "colorOptions": "Silver, Black, Blue, White",
            "dimensions": "5075 mm (Length), 2000 mm (Width), 1780 mm (Height)",
            "performanceFeatures": "Dual Motor All-Wheel Drive, Regenerative Braking",
            "interiorFeatures": "Large Touchscreen, Heated Seats, Premium Sound System",
            "exteriorFeatures": "Panoramic Roof, Adaptive Headlights, Roof Rails",
            "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, Volvo Assistance",
            "releaseDateYear": "2023",
            imageUrl: "assets/images/vehicle_models_images/EX90.png"

        },
        "Volvo 9400": {
            "type": "Commercial",
            "brand": "Volvo",
            "modelNameNumber": "9400",
            "engineSpecifications": "8.8L I6 Turbo Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "53",
            "priceRange": "₹1,00,00,000 - ₹1,20,00,000",
            "mileageRange": "6 - 8 km/l",
            "safetyFeatures": "ABS, EBS, Adaptive Cruise Control, Collision Mitigation",
            "colorOptions": "Customizable",
            "dimensions": "12500 mm (Length), 2550 mm (Width), 3800 mm (Height)",
            "performanceFeatures": "High Torque, Air Suspension, Efficient Cooling",
            "interiorFeatures": "Comfortable Seating, AC, Onboard Wi-Fi",
            "exteriorFeatures": "LED Lights, Air Conditioning System, Roof Ventilation",
            "warrantyAfterSalesService": "2-year/2,00,000 km Warranty, Roadside Assistance",
            "releaseDateYear": "2016",
            imageUrl: "assets/images/vehicle_models_images/Volvo 9400.png"

        },
        "Volvo 9600": {
            "type": "Commercial",
            "brand": "Volvo",
            "modelNameNumber": "9600",
            "engineSpecifications": "8.5L I6 Turbo Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "50",
            "priceRange": "₹1,20,00,000 - ₹1,50,00,000",
            "mileageRange": "5 - 7 km/l",
            "safetyFeatures": "Collision Warning, Lane Departure Warning, Advanced Braking",
            "colorOptions": "Customizable",
            "dimensions": "12550 mm (Length), 2550 mm (Width), 3800 mm (Height)",
            "performanceFeatures": "Turbocharged Engine, Efficient Air Brakes, Enhanced Stability",
            "interiorFeatures": "Comfort Seats, Entertainment System, Onboard Refrigerator",
            "exteriorFeatures": "LED Fog Lights, Automatic Wipers, Roof Vents",
            "warrantyAfterSalesService": "3-year/2,50,000 km Warranty, Roadside Assistance",
            "releaseDateYear": "2017",
            imageUrl: "assets/images/vehicle_models_images/Volvo 9600.png"

        },
        "Volvo 7900": {
            "type": "Commercial",
            "brand": "Volvo",
            "modelNameNumber": "7900",
            "engineSpecifications": "5.2L I4 Turbo Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "35",
            "priceRange": "₹70,00,000 - ₹90,00,000",
            "mileageRange": "7 - 9 km/l",
            "safetyFeatures": "ABS, EBS, Electronic Stability Control, Emergency Brake Assistance",
            "colorOptions": "Customizable",
            "dimensions": "11500 mm (Length), 2500 mm (Width), 3500 mm (Height)",
            "performanceFeatures": "Enhanced Cooling System, Low Emission, High Torque Engine",
            "interiorFeatures": "Comfortable Seating, AC, Wi-Fi",
            "exteriorFeatures": "LED Tail Lights, Roof Vents, Adaptive Wipers",
            "warrantyAfterSalesService": "2-year/2,00,000 km Warranty, Roadside Assistance",
            "releaseDateYear": "2015",
            imageUrl: "assets/images/vehicle_models_images/Volvo 7900.png"

        },
    
        "RX": {
            "type": "Passenger",
            "brand": "Tata",
            "modelNameNumber": "RX",
            "engineSpecifications": "1.5L Turbocharged Petrol, 2.0L Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹10,00,000 - ₹18,00,000",
            "mileageRange": "15 - 18 km/l",
            "safetyFeatures": "7 Airbags, ABS with EBD, ESC, Blind Spot Monitoring",
            "colorOptions": "White, Silver, Black, Red, and more",
            "dimensions": "4600 mm (Length), 1900 mm (Width), 1700 mm (Height)",
            "performanceFeatures": "Turbocharged Engine, Adaptive Cruise Control, Sports Mode",
            "interiorFeatures": "Leather Upholstery, 12-inch Touchscreen Infotainment, Digital Cluster",
            "exteriorFeatures": "LED Headlamps, Dual-tone Roof, Alloy Wheels",
            "warrantyAfterSalesService": "5-year/2,00,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2022",
            imageUrl: "assets/images/vehicle_models_images/RX.png"

        },
        "NX": {
            "type": "Passenger",
            "brand": "Tata",
            "modelNameNumber": "NX",
            "engineSpecifications": "1.5L Petrol, 2.2L Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹9,00,000 - ₹16,00,000",
            "mileageRange": "18 - 22 km/l",
            "safetyFeatures": "6 Airbags, ABS with EBD, Traction Control, Hill Assist",
            "colorOptions": "Royal Blue, Black, White, Red",
            "dimensions": "4200 mm (Length), 1800 mm (Width), 1650 mm (Height)",
            "performanceFeatures": "Powerful Engine, Sporty Handling, Multiple Drive Modes",
            "interiorFeatures": "Leatherette Seats, Touchscreen Infotainment, Auto Climate Control",
            "exteriorFeatures": "LED DRLs, Alloy Wheels, Fog Lamps",
            "warrantyAfterSalesService": "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2021",
            imageUrl: "assets/images/vehicle_models_images/MX.png"

        },
        "LS": {
            "type": "Passenger",
            "brand": "Tata",
            "modelNameNumber": "LS",
            "engineSpecifications": "1.5L Petrol, 1.5L Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹7,00,000 - ₹13,00,000",
            "mileageRange": "16 - 20 km/l",
            "safetyFeatures": "ABS with EBD, Dual Airbags, Rear Parking Sensors",
            "colorOptions": "White, Blue, Red, Black",
            "dimensions": "4000 mm (Length), 1750 mm (Width), 1600 mm (Height)",
            "performanceFeatures": "Eco Mode, Smooth Ride, Responsive Steering",
            "interiorFeatures": "Touchscreen, Bluetooth Connectivity, Steering Mounted Controls",
            "exteriorFeatures": "Chrome Grille, Roof Rails, Body Cladding",
            "warrantyAfterSalesService": "4-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2020",
            imageUrl: "assets/images/vehicle_models_images/LS.png"

        },
        "GX": {
            "type": "Passenger",
            "brand": "Tata",
            "modelNameNumber": "GX",
            "engineSpecifications": "2.0L Petrol, 2.4L Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "7",
            "priceRange": "₹12,00,000 - ₹20,00,000",
            "mileageRange": "12 - 17 km/l",
            "safetyFeatures": "ABS, 6 Airbags, Parking Sensors, Rear View Camera",
            "colorOptions": "Silver, Grey, White, Red",
            "dimensions": "4800 mm (Length), 1900 mm (Width), 1700 mm (Height)",
            "performanceFeatures": "Powerful Engine, Off-Road Capabilities",
            "interiorFeatures": "Leather Seats, Premium Audio System, Automatic Climate Control",
            "exteriorFeatures": "LED Tail Lights, Roof Rails, Alloy Wheels",
            "warrantyAfterSalesService": "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2023",
            imageUrl: "assets/images/vehicle_models_images/GX.png"

        },
        "LX": {
            "type": "Passenger",
            "brand": "Tata",
            "modelNameNumber": "LX",
            "engineSpecifications": "1.5L Turbocharged Petrol, 2.0L Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹9,50,000 - ₹17,00,000",
            "mileageRange": "16 - 19 km/l",
            "safetyFeatures": "7 Airbags, ABS with EBD, ESP, Cornering Stability Control",
            "colorOptions": "Deep Blue, Pearl White, Black, Silver",
            "dimensions": "4500 mm (Length), 1850 mm (Width), 1650 mm (Height)",
            "performanceFeatures": "Powerful Turbo Engine, Advanced Suspension",
            "interiorFeatures": "Luxury Upholstery, 8-inch Infotainment, Voice Recognition",
            "exteriorFeatures": "LED Projector Headlamps, Roof Rails, Stylish Alloy Wheels",
            "warrantyAfterSalesService": "5-year/2,00,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2022",
            imageUrl: "assets/images/vehicle_models_images/LX.png"

        },
        "UX": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "UX",
            "engineSpecifications": "2.5L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "2",
            "priceRange": "₹11,00,000 - ₹18,00,000",
            "mileageRange": "8 - 12 km/l",
            "safetyFeatures": "ABS, Parking Sensors",
            "colorOptions": "White, Red, Blue",
            "dimensions": "5500 mm (Length), 2200 mm (Width), 2500 mm (Height)",
            "performanceFeatures": "Heavy Duty Performance, Powerful Engine",
            "interiorFeatures": "Basic Console, Durable Seating",
            "exteriorFeatures": "Steel Wheels, Minimalistic Design",
            "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2020",
            imageUrl: "assets/images/vehicle_models_images/UX.png"

        },
        "LC": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "LC",
            "engineSpecifications": "3.0L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "3",
            "priceRange": "₹14,00,000 - ₹25,00,000",
            "mileageRange": "7 - 9 km/l",
            "safetyFeatures": "ABS, Side Impact Beams, Parking Sensors",
            "colorOptions": "White, Black, Red",
            "dimensions": "6000 mm (Length), 2300 mm (Width), 3000 mm (Height)",
            "performanceFeatures": "Off-Road Ready, High Torque Engine",
            "interiorFeatures": "Durable Dashboard, Minimalistic Interior",
            "exteriorFeatures": "Reinforced Body, Heavy-duty Tyres",
            "warrantyAfterSalesService": "4-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2021",
            imageUrl: "assets/images/vehicle_models_images/LC.png"

        },
    
        "Cayenne": {
            "type": "SUV",
            "brand": "Porsche",
            "modelNameNumber": "Cayenne",
            "engineSpecifications": "3.0L V6 Turbocharged, 4.0L V8 Turbo, Hybrid options",
            "fuelType": "Petrol/Hybrid",
            "transmissionType": "Automatic",
            "seatingCapacity": "5-7",
            "priceRange": "₹1,00,00,000 - ₹2,50,00,000",
            "mileageRange": "8 - 14 km/l",
            "safetyFeatures": "Multiple airbags, ABS, Adaptive Cruise Control, Lane Keep Assist",
            "colorOptions": "Jet Black Metallic, Carrara White, Mahogany Metallic, and more",
            "dimensions": "4926 mm (Length), 1983 mm (Width), 1696 mm (Height)",
            "performanceFeatures": "Turbocharged V6/V8 Engine, Adaptive Air Suspension, Off-road capabilities",
            "interiorFeatures": "Panoramic Roof, 12.3-inch Infotainment Screen, Leather Upholstery",
            "exteriorFeatures": "LED Matrix Headlights, Panoramic Sunroof, Active Rear Spoiler",
            "warrantyAfterSalesService": "4-year/50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2002",
            imageUrl: "assets/images/vehicle_models_images/Cayenne.png"

        },
        "Macan": {
            "type": "SUV",
            "brand": "Porsche",
            "modelNameNumber": "Macan",
            "engineSpecifications": "2.0L Turbocharged Inline-4, 3.0L V6 Turbo",
            "fuelType": "Petrol",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹70,00,000 - ₹1,00,00,000",
            "mileageRange": "12 - 16 km/l",
            "safetyFeatures": "Multiple airbags, ABS, Adaptive Cruise Control, Lane Assist",
            "colorOptions": "Palladium Metallic, Jet Black Metallic, Rhodium Silver, and more",
            "dimensions": "4696 mm (Length), 1923 mm (Width), 1624 mm (Height)",
            "performanceFeatures": "Turbocharged Engines, All-Wheel Drive, Dynamic Chassis Control",
            "interiorFeatures": "Leather Seats, 10.9-inch Infotainment, Dual-zone Climate Control",
            "exteriorFeatures": "LED Headlights, Rear Spoiler, 21-inch Wheels",
            "warrantyAfterSalesService": "4-year/50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2014",
            imageUrl: "assets/images/vehicle_models_images/Macan.png"

        },
        "Panamera": {
            "type": "Luxury Sedan",
            "brand": "Porsche",
            "modelNameNumber": "Panamera",
            "engineSpecifications": "2.9L V6 Twin-Turbo, 4.0L V8 Turbo, Hybrid options",
            "fuelType": "Petrol/Hybrid",
            "transmissionType": "Automatic",
            "seatingCapacity": "4",
            "priceRange": "₹1,50,00,000 - ₹2,50,00,000",
            "mileageRange": "10 - 14 km/l",
            "safetyFeatures": "Multiple airbags, ABS, Lane Assist, Adaptive Cruise Control",
            "colorOptions": "GT Silver Metallic, Black, Crayon, and more",
            "dimensions": "5050 mm (Length), 1937 mm (Width), 1420 mm (Height)",
            "performanceFeatures": "Dynamic Chassis Control, Porsche Active Suspension Management, Adaptive Air Suspension",
            "interiorFeatures": "14-way Power Seats, Touchscreen Infotainment, Leather Upholstery",
            "exteriorFeatures": "LED Headlights, Panoramic Roof, Active Rear Spoiler",
            "warrantyAfterSalesService": "4-year/50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2009",
            imageUrl: "assets/images/vehicle_models_images/Panamera.png"

        },
        "911": {
            "type": "Sports Car",
            "brand": "Porsche",
            "modelNameNumber": "911",
            "engineSpecifications": "3.0L Turbocharged Flat-6, 4.0L Flat-6 (GT3)",
            "fuelType": "Petrol",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "2-4",
            "priceRange": "₹1,00,00,000 - ₹2,50,00,000",
            "mileageRange": "8 - 12 km/l",
            "safetyFeatures": "Multiple airbags, ABS, Porsche Stability Management, Adaptive Cruise Control",
            "colorOptions": "Guards Red, Shark Blue, Black, and more",
            "dimensions": "4527 mm (Length), 1852 mm (Width), 1296 mm (Height)",
            "performanceFeatures": "Rear-Wheel/All-Wheel Drive, PDK Transmission, Active Suspension Management",
            "interiorFeatures": "Sports Seats, PCM Infotainment, Premium Audio System",
            "exteriorFeatures": "LED Headlights, Active Aero, Dynamic Chassis Control",
            "warrantyAfterSalesService": "4-year/50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "1964",
            imageUrl: "assets/images/vehicle_models_images/911.png"

        },
        "Taycan": {
            "type": "Electric Sedan",
            "brand": "Porsche",
            "modelNameNumber": "Taycan",
            "engineSpecifications": "Electric motors, Dual-motor AWD, Turbo and Turbo S variants",
            "fuelType": "Electric",
            "transmissionType": "Automatic",
            "seatingCapacity": "4",
            "priceRange": "₹1,50,00,000 - ₹2,50,00,000",
            "mileageRange": "400 - 560 km (range per charge)",
            "safetyFeatures": "Multiple airbags, ABS, Lane Assist, Adaptive Cruise Control",
            "colorOptions": "Frozen Blue, White, Jet Black, and more",
            "dimensions": "4963 mm (Length), 1966 mm (Width), 1371 mm (Height)",
            "performanceFeatures": "Electric Powertrain, Porsche Active Suspension Management, Launch Control",
            "interiorFeatures": "Infotainment System, Digital Instrument Cluster, Leather Upholstery",
            "exteriorFeatures": "LED Matrix Headlights, Active Aero, Dynamic Chassis Control",
            "warrantyAfterSalesService": "8-year/1,60,000 km Battery Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2019",
            imageUrl: "assets/images/vehicle_models_images/Taycan.png"

        },
        "Cayman": {
            "type": "Sports Car",
            "brand": "Porsche",
            "modelNameNumber": "Cayman",
            "engineSpecifications": "2.0L Turbocharged Flat-4, 4.0L Flat-6 (GT4)",
            "fuelType": "Petrol",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "2",
            "priceRange": "₹70,00,000 - ₹1,50,00,000",
            "mileageRange": "10 - 15 km/l",
            "safetyFeatures": "Multiple airbags, ABS, Adaptive Cruise Control",
            "colorOptions": "Racing Yellow, Guards Red, Black, and more",
            "dimensions": "4379 mm (Length), 1801 mm (Width), 1295 mm (Height)",
            "performanceFeatures": "Rear-Wheel Drive, Adaptive Suspension, Dynamic Chassis Control",
            "interiorFeatures": "Sport Seats, 7-inch Infotainment, Premium Audio",
            "exteriorFeatures": "LED Headlights, Rear Spoiler, Sport Exhaust System",
            "warrantyAfterSalesService": "4-year/50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "2005",
            imageUrl: "assets/images/vehicle_models_images/Cayman.png"

        },
        "Boxster": {
            "type": "Sports Car",
            "brand": "Porsche",
            "modelNameNumber": "Boxster",
            "engineSpecifications": "2.0L Turbocharged Flat-4, 2.5L Flat-4 Turbo",
            "fuelType": "Petrol",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "2",
            "priceRange": "₹60,00,000 - ₹90,00,000",
            "mileageRange": "11 - 14 km/l",
            "safetyFeatures": "Multiple airbags, ABS, Porsche Stability Management",
            "colorOptions": "Lizard Green, Black, White, and more",
            "dimensions": "4370 mm (Length), 1801 mm (Width), 1282 mm (Height)",
            "performanceFeatures": "Rear-Wheel Drive, Adaptive Suspension, Sport Chrono Package",
            "interiorFeatures": "Infotainment System, Leather Seats, Premium Audio",
            "exteriorFeatures": "LED Headlights, Rear Spoiler, Dynamic Chassis Control",
            "warrantyAfterSalesService": "4-year/50,000 km Warranty, 24/7 Roadside Assistance",
            "releaseDateYear": "1996",
            imageUrl: "assets/images/vehicle_models_images/Boxster.png"

        },
    
        "A3": {
            "type": "Passenger",
            "brand": "Audi",
            "modelNameNumber": "A3",
            "engineSpecifications": "1.0L TFSI Petrol, 2.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹35,00,000 - ₹45,00,000",
            "mileageRange": "16 - 20 km/l",
            "safetyFeatures": "6 Airbags, ABS, ESC, Parking Sensors",
            "colorOptions": "Ibis White, Brilliant Black, Monsoon Grey, Tango Red",
            "dimensions": "4313 mm (Length), 1777 mm (Width), 1425 mm (Height)",
            "performanceFeatures": "Audi Drive Select, LED Headlamps, Adaptive Suspension",
            "interiorFeatures": "Virtual Cockpit, MMI Touch, Leather Upholstery",
            "exteriorFeatures": "LED DRLs, S-Line Body Styling, Alloy Wheels",
            "warrantyAfterSalesService": "2-year Warranty, Roadside Assistance",
            "releaseDateYear": "2019",
            imageUrl: "assets/images/vehicle_models_images/A3.png"

        },
        "A4": {
            "type": "Passenger",
            "brand": "Audi",
            "modelNameNumber": "A4",
            "engineSpecifications": "2.0L TFSI Petrol, 2.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Manual/Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹45,00,000 - ₹55,00,000",
            "mileageRange": "14 - 18 km/l",
            "safetyFeatures": "6 Airbags, ABS, ESC, Parking Assist, Lane Assist",
            "colorOptions": "Brilliant Black, Ibis White, Moonlight Blue, Navarra Blue",
            "dimensions": "4723 mm (Length), 1842 mm (Width), 1432 mm (Height)",
            "performanceFeatures": "Quattro AWD, S-Tronic, Adaptive Cruise Control",
            "interiorFeatures": "MMI Navigation, Virtual Cockpit, Leather Upholstery",
            "exteriorFeatures": "Matrix LED Headlamps, S-Line Package, Alloy Wheels",
            "warrantyAfterSalesService": "3-year Warranty, Roadside Assistance",
            "releaseDateYear": "2020",
            imageUrl: "assets/images/vehicle_models_images/A4.png"

        },
        "A6": {
            "type": "Passenger",
            "brand": "Audi",
            "modelNameNumber": "A6",
            "engineSpecifications": "2.0L TFSI Petrol, 2.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹60,00,000 - ₹75,00,000",
            "mileageRange": "13 - 17 km/l",
            "safetyFeatures": "8 Airbags, ABS, ESC, Parking Assist, 360-degree Camera",
            "colorOptions": "Mythos Black, Ibis White, Floret Silver, Panther Grey",
            "dimensions": "4933 mm (Length), 1886 mm (Width), 1455 mm (Height)",
            "performanceFeatures": "Quattro AWD, Adaptive Air Suspension, Drive Select",
            "interiorFeatures": "MMI Touch, Audi Virtual Cockpit, Leather Upholstery",
            "exteriorFeatures": "HD Matrix LED Headlamps, Panoramic Sunroof",
            "warrantyAfterSalesService": "3-year Warranty, Roadside Assistance",
            "releaseDateYear": "2021",
            imageUrl: "assets/images/vehicle_models_images/A6.png"

        },
        "A8": {
            "type": "Passenger",
            "brand": "Audi",
            "modelNameNumber": "A8",
            "engineSpecifications": "3.0L TFSI Petrol, 3.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹1,10,00,000 - ₹1,60,00,000",
            "mileageRange": "10 - 14 km/l",
            "safetyFeatures": "8 Airbags, ABS, ESC, Parking Assist, 360-degree Camera, Night Vision",
            "colorOptions": "Platinum Grey, Ibis White, Mamba Black, Moonlight Blue",
            "dimensions": "5145 mm (Length), 1945 mm (Width), 1480 mm (Height)",
            "performanceFeatures": "Quattro AWD, Audi Drive Select, Adaptive Air Suspension",
            "interiorFeatures": "Bang & Olufsen Sound System, Executive Rear Seats, Virtual Cockpit",
            "exteriorFeatures": "HD Matrix LED Headlamps, Adaptive Cruise Control, 21-inch Alloy Wheels",
            "warrantyAfterSalesService": "5-year Warranty, Roadside Assistance",
            "releaseDateYear": "2022",
            imageUrl: "assets/images/vehicle_models_images/A8.png"

        },
        "Q2": {
            "type": "SUV",
            "brand": "Audi",
            "modelNameNumber": "Q2",
            "engineSpecifications": "2.0L TFSI Petrol",
            "fuelType": "Petrol",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹35,00,000 - ₹40,00,000",
            "mileageRange": "12 - 15 km/l",
            "safetyFeatures": "6 Airbags, ABS, ESC, Parking Sensors, Lane Assist",
            "colorOptions": "Quantum Grey, Ibis White, Mythos Black, Vegas Yellow",
            "dimensions": "4191 mm (Length), 1794 mm (Width), 1508 mm (Height)",
            "performanceFeatures": "Quattro AWD, S-Tronic, Audi Drive Select",
            "interiorFeatures": "MMI Touch, Virtual Cockpit, Leather Upholstery",
            "exteriorFeatures": "LED Headlamps, Roof Rails, 18-inch Alloy Wheels",
            "warrantyAfterSalesService": "2-year Warranty, Roadside Assistance",
            "releaseDateYear": "2020",
            imageUrl: "assets/images/vehicle_models_images/Q2.png"

        },
        "Q3": {
            "type": "SUV",
            "brand": "Audi",
            "modelNameNumber": "Q3",
            "engineSpecifications": "2.0L TFSI Petrol",
            "fuelType": "Petrol",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹45,00,000 - ₹55,00,000",
            "mileageRange": "12 - 16 km/l",
            "safetyFeatures": "6 Airbags, ABS, ESC, Parking Assist, Lane Assist",
            "colorOptions": "Ibis White, Mythos Black, Navarra Blue, Arrow Grey",
            "dimensions": "4485 mm (Length), 1849 mm (Width), 1628 mm (Height)",
            "performanceFeatures": "Quattro AWD, Adaptive Cruise Control, Audi Drive Select",
            "interiorFeatures": "MMI Navigation, Virtual Cockpit, Leather Upholstery",
            "exteriorFeatures": "LED Headlamps, S-Line Package, Alloy Wheels",
            "warrantyAfterSalesService": "3-year Warranty, Roadside Assistance",
            "releaseDateYear": "2021",
            imageUrl: "assets/images/vehicle_models_images/Q3.png"

        },
        "Q5": {
            "type": "SUV",
            "brand": "Audi",
            "modelNameNumber": "Q5",
            "engineSpecifications": "2.0L TFSI Petrol, 2.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹60,00,000 - ₹75,00,000",
            "mileageRange": "12 - 15 km/l",
            "safetyFeatures": "8 Airbags, ABS, ESC, 360-degree Camera, Parking Assist",
            "colorOptions": "Ibis White, Mythos Black, Floret Silver, Mamba Black",
            "dimensions": "4663 mm (Length), 1898 mm (Width), 1659 mm (Height)",
            "performanceFeatures": "Quattro AWD, Adaptive Air Suspension, Audi Drive Select",
            "interiorFeatures": "MMI Touch, Virtual Cockpit, Leather Upholstery",
            "exteriorFeatures": "HD Matrix LED Headlamps, Adaptive Cruise Control, 20-inch Alloy Wheels",
            "warrantyAfterSalesService": "3-year Warranty, Roadside Assistance",
            "releaseDateYear": "2022",
            imageUrl: "assets/images/vehicle_models_images/Q5.png"

        },
        "Q7": {
            "type": "SUV",
            "brand": "Audi",
            "modelNameNumber": "Q7",
            "engineSpecifications": "3.0L TFSI Petrol, 3.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "7",
            "priceRange": "₹85,00,000 - ₹1,20,00,000",
            "mileageRange": "10 - 14 km/l",
            "safetyFeatures": "8 Airbags, ABS, ESC, 360-degree Camera, Adaptive Cruise Control",
            "colorOptions": "Ibis White, Orca Black, Moonlight Blue, Navarra Blue",
            "dimensions": "5052 mm (Length), 1970 mm (Width), 1740 mm (Height)",
            "performanceFeatures": "Quattro AWD, Adaptive Air Suspension, Audi Drive Select",
            "interiorFeatures": "Virtual Cockpit, Executive Rear Seats, Leather Upholstery",
            "exteriorFeatures": "HD Matrix LED Headlamps, 21-inch Alloy Wheels, Adaptive Cruise Control",
            "warrantyAfterSalesService": "5-year Warranty, Roadside Assistance",
            "releaseDateYear": "2021",
            imageUrl: "assets/images/vehicle_models_images/Q7.png"

        },
        "Q8": {
            "type": "SUV",
            "brand": "Audi",
            "modelNameNumber": "Q8",
            "engineSpecifications": "3.0L TFSI Petrol, 3.0L TDI Diesel",
            "fuelType": "Petrol/Diesel",
            "transmissionType": "Automatic",
            "seatingCapacity": "5",
            "priceRange": "₹1,00,00,000 - ₹1,40,00,000",
            "mileageRange": "9 - 13 km/l",
            "safetyFeatures": "8 Airbags, ABS, ESC, 360-degree Camera, Lane Assist",
            "colorOptions": "Brilliant Black, Ibis White, Daytona Grey, Tango Red",
            "dimensions": "4986 mm (Length), 1995 mm (Width), 1709 mm (Height)",
            "performanceFeatures": "Quattro AWD, Adaptive Air Suspension, Audi Drive Select",
            "interiorFeatures": "Bang & Olufsen Sound System, Executive Rear Seats, Virtual Cockpit",
            "exteriorFeatures": "HD Matrix LED Headlamps, Panoramic Sunroof, 22-inch Alloy Wheels",
            "warrantyAfterSalesService": "5-year Warranty, Roadside Assistance",
            "releaseDateYear": "2022",
            imageUrl: "assets/images/vehicle_models_images/Q8.png"

        },
    
        "John Deere 5050 D": {
            "type": "Tractor",
            "brand": "John Deere",
            "modelNameNumber": "5050 D",
            "engineSpecifications": "50 HP, 4-Cylinder Diesel Engine",
            "fuelType": "Diesel",
            "transmissionType": "Synchro Shuttle Transmission",
            "seatingCapacity": "1 + 1",
            "priceRange": "₹7,00,000 - ₹8,00,000",
            "mileageRange": "30 - 35 km/l",
            "safetyFeatures": "Roll-Over Protective Structure (ROPS), Dual Clutch",
            "colorOptions": "Green, Yellow",
            "dimensions": "3480 mm (Length), 1790 mm (Width), 2200 mm (Height)",
            "performanceFeatures": "Power Steering, Hydrostatic Drive",
            "interiorFeatures": "Ergonomic Driver Seat, Easy-to-Use Controls",
            "exteriorFeatures": "Front Weights, Heavy-Duty Tires",
            "warrantyAfterSalesService": "5-year/5000 hours Warranty, 24/7 Support",
            "releaseDateYear": "2020",
            imageUrl: "assets/images/vehicle_models_images/John Deere 5050 D.png"

        },
        "John Deere 5042 D": {
            "type": "Tractor",
            "brand": "John Deere",
            "modelNameNumber": "5042 D",
            "engineSpecifications": "42 HP, 3-Cylinder Diesel Engine",
            "fuelType": "Diesel",
            "transmissionType": "SyncShuttle Transmission",
            "seatingCapacity": "1 + 1",
            "priceRange": "₹6,00,000 - ₹7,00,000",
            "mileageRange": "30 - 33 km/l",
            "safetyFeatures": "ROPS, Dual Clutch",
            "colorOptions": "Green, Yellow",
            "dimensions": "3300 mm (Length), 1750 mm (Width), 2100 mm (Height)",
            "performanceFeatures": "Power Steering, Adjustable Seat",
            "interiorFeatures": "Comfortable Driver Seat, Simple Controls",
            "exteriorFeatures": "Front Weights, Strong Axles",
            "warrantyAfterSalesService": "5-year/5000 hours Warranty, 24/7 Support",
            "releaseDateYear": "2019",
            imageUrl: "assets/images/vehicle_models_images/John Deere 5042 D.png"

        },
        "John Deere 3038 E": {
            "type": "Tractor",
            "brand": "John Deere",
            "modelNameNumber": "3038 E",
            "engineSpecifications": "38 HP, 3-Cylinder Diesel Engine",
            "fuelType": "Diesel",
            "transmissionType": "Synchro Shuttle Transmission",
            "seatingCapacity": "1 + 1",
            "priceRange": "₹5,50,000 - ₹6,50,000",
            "mileageRange": "28 - 32 km/l",
            "safetyFeatures": "ROPS, Dual Clutch",
            "colorOptions": "Green, Yellow",
            "dimensions": "2900 mm (Length), 1600 mm (Width), 2000 mm (Height)",
            "performanceFeatures": "Hydrostatic Drive, Adjustable Wheelbase",
            "interiorFeatures": "Comfortable Seat, Simple Controls",
            "exteriorFeatures": "Heavy-Duty Tires, Adjustable Linkage",
            "warrantyAfterSalesService": "5-year/5000 hours Warranty, 24/7 Support",
            "releaseDateYear": "2018",
            imageUrl: "assets/images/vehicle_models_images/John Deere 3038 E.png"

        },
        "John Deere 5050 E": {
            "type": "Tractor",
            "brand": "John Deere",
            "modelNameNumber": "5050 E",
            "engineSpecifications": "50 HP, 3-Cylinder Diesel Engine",
            "fuelType": "Diesel",
            "transmissionType": "Synchro Shuttle Transmission",
            "seatingCapacity": "1 + 1",
            "priceRange": "₹7,50,000 - ₹8,50,000",
            "mileageRange": "32 - 37 km/l",
            "safetyFeatures": "ROPS, Dual Clutch",
            "colorOptions": "Green, Yellow",
            "dimensions": "3480 mm (Length), 1790 mm (Width), 2200 mm (Height)",
            "performanceFeatures": "Power Steering, Hydrostatic Drive",
            "interiorFeatures": "Ergonomic Driver Seat, Easy-to-Use Controls",
            "exteriorFeatures": "Front Weights, Heavy-Duty Tires",
            "warrantyAfterSalesService": "5-year/5000 hours Warranty, 24/7 Support",
            "releaseDateYear": "2021",
            imageUrl: "assets/images/vehicle_models_images/John Deere 5050 E.png"

        },
    
    "Mahindra SP Plus Series": {
        type: "Commercial",
        brand: "Mahindra",
        modelNameNumber: "SP Plus Series",
        engineSpecifications: "4-Cylinder, 2.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹5,00,000 - ₹7,00,000",
        mileageRange: "12 - 14 km/l",
        safetyFeatures: "ABS, Power Steering, Hill Assist",
        colorOptions: "Silver, Blue, Green, Black",
        dimensions: "4200 mm (Length), 1850 mm (Width), 1950 mm (Height)",
        performanceFeatures: "High Torque, Off-road Capability, Advanced Suspension",
        interiorFeatures: "Ergonomic Seat, Digital Console",
        exteriorFeatures: "Heavy Duty Bumper, Roof Rails, Fog Lamps",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2021",
        imageUrl: "assets/images/vehicle_models_images/Mahindra SP Plus Series.png"

    },
    
       "605 DI i": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "605 DI i",
        "engineSpecifications": "3.0L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹5,00,000 - ₹7,00,000",
        "mileageRange": "12 - 14 km/l",
        "safetyFeatures": "ABS, Driver Airbag, Parking Sensors",
        "colorOptions": "White, Silver, Blue",
        "dimensions": "5650 mm (Length), 2100 mm (Width), 2300 mm (Height)",
        "performanceFeatures": "Heavy Load Capacity, Robust Engine",
        "interiorFeatures": "Basic Cabin with Adjustable Seating",
        "exteriorFeatures": "Fog Lamps, Side Cladding, Roof Rail",
        "warrantyAfterSalesService": "3-year/1,00,000 km Warranty",
        "releaseDateYear": "2019",
        imageUrl: "assets/images/vehicle_models_images/605 DI i.png"

      },
      
      "Tech+ 265 DI": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Tech+ 265 DI",
        "engineSpecifications": "2.5L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹6,00,000 - ₹8,00,000",
        "mileageRange": "13 - 15 km/l",
        "safetyFeatures": "Driver Airbag, ABS, Power Steering",
        "colorOptions": "White, Red, Yellow",
        "dimensions": "5000 mm (Length), 1800 mm (Width), 2300 mm (Height)",
        "performanceFeatures": "Powerful Engine for Heavy Loads",
        "interiorFeatures": "Basic Interior with Adjustable Seating",
        "exteriorFeatures": "Side Cladding, Roof Rail, Chrome Grille",
        "warrantyAfterSalesService": "3-year/1,20,000 km Warranty",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/Tech+ 265 DI.png"

      },
      
      "Tech+ 405 4WD": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Tech+ 405 4WD",
        "engineSpecifications": "4.0L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "3",
        "priceRange": "₹9,00,000 - ₹11,00,000",
        "mileageRange": "10 - 12 km/l",
        "safetyFeatures": "ABS, Dual Front Airbags, Parking Sensors",
        "colorOptions": "White, Grey, Black",
        "dimensions": "6000 mm (Length), 2200 mm (Width), 2500 mm (Height)",
        "performanceFeatures": "4WD, Heavy Load Carrying",
        "interiorFeatures": "Premium Interior with Adjustable Seats",
        "exteriorFeatures": "Heavy Duty Bumpers, Roof Rails, Fog Lamps",
        "warrantyAfterSalesService": "3-year/1,50,000 km Warranty",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/Tech+ 405 4WD.png"

      },
      
      "Tech+ 415 4WD": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Tech+ 415 4WD",
        "engineSpecifications": "4.2L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "3",
        "priceRange": "₹10,00,000 - ₹12,00,000",
        "mileageRange": "9 - 11 km/l",
        "safetyFeatures": "Dual Airbags, ABS, Parking Sensors",
        "colorOptions": "White, Black, Silver",
        "dimensions": "6150 mm (Length), 2250 mm (Width), 2600 mm (Height)",
        "performanceFeatures": "4WD, High Ground Clearance, Heavy Load Capacity",
        "interiorFeatures": "Standard Interior with Adjustable Seats",
        "exteriorFeatures": "Heavy Duty Roof Rails, Side Steps, Bumper",
        "warrantyAfterSalesService": "3-year/1,50,000 km Warranty",
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/Tech+ 415 4WD.png"

      },
    
      "Tech+ 475": {
        "type": "Commercial",
        "brand": "Tata",
        "modelNameNumber": "Tech+ 475",
        "engineSpecifications": "4.5L Diesel",
        "fuelType": "Diesel",
        "transmissionType": "Manual",
        "seatingCapacity": "2",
        "priceRange": "₹7,00,000 - ₹9,00,000",
        "mileageRange": "10 - 12 km/l",
        "safetyFeatures": "ABS, Driver Airbag, Rear Parking Sensors",
        "colorOptions": "White, Red, Yellow",
        "dimensions": "5500 mm (Length), 2000 mm (Width), 2400 mm (Height)",
        "performanceFeatures": "Heavy Load Capacity, High Performance",
        "interiorFeatures": "Basic Interior with Adjustable Seats",
        "exteriorFeatures": "Roof Rail, Side Cladding",
        "warrantyAfterSalesService": "3-year/1,20,000 km Warranty",
        "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/Tech+ 475.png"

      },
    
        "Tech+ 575 4WD": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "Tech+ 575 4WD",
            "engineSpecifications": "2.2L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "2-3",
            "priceRange": "₹12,00,000 - ₹14,50,000",
            "mileageRange": "8 - 12 km/l",
            "safetyFeatures": "ABS, EBD, Airbags, Roll-over Protection",
            "colorOptions": "White, Silver, Blue, Red",
            "dimensions": "5000 mm (Length), 1900 mm (Width), 2000 mm (Height)",
            "performanceFeatures": "Heavy Duty Suspension, 4WD, Off-road Capability",
            "interiorFeatures": "Basic Upholstery, Radio, A/C",
            "exteriorFeatures": "LED Tail Lamps, Fog Lamps, Steel Wheels",
            "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",
            "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/Tech+ 575 4WD.png"

        },
        
        "Tech+ 585": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "Tech+ 585",
            "engineSpecifications": "2.5L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "3",
            "priceRange": "₹10,50,000 - ₹13,00,000",
            "mileageRange": "10 - 14 km/l",
            "safetyFeatures": "ABS, EBD, Airbags, Hill Assist",
            "colorOptions": "White, Grey, Black",
            "dimensions": "5200 mm (Length), 2000 mm (Width), 2100 mm (Height)",
            "performanceFeatures": "Heavy Duty Engine, High Ground Clearance",
            "interiorFeatures": "Basic Upholstery, Air Conditioning, Music System",
            "exteriorFeatures": "Chrome Grille, Fog Lights, Steel Rims",
            "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, Roadside Assistance",
            "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/Tech+ 585.png"

        },
        
        "SP Plus 265 DI": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "SP Plus 265 DI",
            "engineSpecifications": "2.0L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "2-3",
            "priceRange": "₹8,00,000 - ₹9,50,000",
            "mileageRange": "10 - 15 km/l",
            "safetyFeatures": "ABS, Roll-over Protection, Airbags",
            "colorOptions": "White, Red, Blue",
            "dimensions": "4900 mm (Length), 1800 mm (Width), 2000 mm (Height)",
            "performanceFeatures": "Fuel-efficient, Heavy Duty Suspension",
            "interiorFeatures": "Basic Features, Radio, AC",
            "exteriorFeatures": "Steel Wheels, LED Tail Lamps",
            "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
            "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/SP Plus 265 DI.png"

        },
        
        "SP Plus 275 DI": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "SP Plus 275 DI",
            "engineSpecifications": "2.2L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "2-3",
            "priceRange": "₹8,50,000 - ₹10,00,000",
            "mileageRange": "9 - 13 km/l",
            "safetyFeatures": "ABS, Roll-over Protection, Airbags",
            "colorOptions": "White, Grey, Blue",
            "dimensions": "4950 mm (Length), 1850 mm (Width), 2050 mm (Height)",
            "performanceFeatures": "Heavy Duty Engine, Enhanced Load Capacity",
            "interiorFeatures": "Basic Upholstery, AC, Music System",
            "exteriorFeatures": "LED Tail Lights, Chrome Grille",
            "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
            "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/SP Plus 275 DI.png"

        },
        
        "SP Plus 415 DI": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "SP Plus 415 DI",
            "engineSpecifications": "2.5L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "2-3",
            "priceRange": "₹10,00,000 - ₹12,00,000",
            "mileageRange": "8 - 11 km/l",
            "safetyFeatures": "ABS, Roll-over Protection, Airbags",
            "colorOptions": "White, Red, Yellow",
            "dimensions": "5100 mm (Length), 1900 mm (Width), 2100 mm (Height)",
            "performanceFeatures": "Enhanced Ground Clearance, Superior Load Handling",
            "interiorFeatures": "Basic Upholstery, A/C, Radio",
            "exteriorFeatures": "Fog Lamps, LED Tail Lights",
            "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
            "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/SP Plus 415 DI.png"

        },
        
        "SP Plus 475 DI": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "SP Plus 475 DI",
            "engineSpecifications": "2.8L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "3-4",
            "priceRange": "₹11,50,000 - ₹13,50,000",
            "mileageRange": "7 - 10 km/l",
            "safetyFeatures": "ABS, Roll-over Protection, Airbags",
            "colorOptions": "White, Blue, Red",
            "dimensions": "5250 mm (Length), 2000 mm (Width), 2200 mm (Height)",
            "performanceFeatures": "High Load Capacity, Enhanced Suspension",
            "interiorFeatures": "Basic Upholstery, A/C, Music System",
            "exteriorFeatures": "Steel Rims, Chrome Grille",
            "warrantyAfterSalesService": "2-year/1,00,000 km Warranty",
            "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/SP Plus 475 DI.png"

        },
        
        "SP Plus 575 DI": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "SP Plus 575 DI",
            "engineSpecifications": "3.0L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "3-4",
            "priceRange": "₹13,00,000 - ₹15,00,000",
            "mileageRange": "6 - 9 km/l",
            "safetyFeatures": "ABS, Roll-over Protection, Airbags",
            "colorOptions": "White, Red, Black",
            "dimensions": "5400 mm (Length), 2050 mm (Width), 2300 mm (Height)",
            "performanceFeatures": "Heavy Duty, Advanced Suspension",
            "interiorFeatures": "Premium Upholstery, A/C, Touchscreen",
            "exteriorFeatures": "Steel Rims, LED Lights",
            "warrantyAfterSalesService": "3-year/1,50,000 km Warranty",
            "releaseDateYear": "2023",
        imageUrl: "assets/images/vehicle_models_images/SP Plus 575 DI.png"

        },
        
        "SP Plus 585 DI": {
            "type": "Commercial",
            "brand": "Tata",
            "modelNameNumber": "SP Plus 585 DI",
            "engineSpecifications": "3.2L Diesel",
            "fuelType": "Diesel",
            "transmissionType": "Manual",
            "seatingCapacity": "3-4",
            "priceRange": "₹14,00,000 - ₹16,00,000",
            "mileageRange": "6 - 8 km/l",
            "safetyFeatures": "ABS, Roll-over Protection, Airbags",
            "colorOptions": "White, Yellow, Red",
            "dimensions": "5500 mm (Length), 2100 mm (Width), 2400 mm (Height)",
            "performanceFeatures": "High Load Capacity, Advanced Engine",
            "interiorFeatures": "Premium Upholstery, A/C, Music System",
            "exteriorFeatures": "Steel Rims, Chrome Grille, LED Lights",
            "warrantyAfterSalesService": "3-year/1,50,000 km Warranty",
            "releaseDateYear": "2023",
        imageUrl: "assets/images/vehicle_models_images/SP Plus 585 DI.png"

        },
    
    
        "5036 D": {
          "type": "Commercial",
          "brand": "Tata",
          "modelNameNumber": "5036 D",
          "engineSpecifications": "6.7L Turbocharged Diesel",
          "fuelType": "Diesel",
          "transmissionType": "Manual",
          "seatingCapacity": "Driver + 2",
          "priceRange": "₹18,00,000 - ₹22,00,000",
          "mileageRange": "6 - 8 km/l",
          "safetyFeatures": "ABS, EBD, Driver & Co-driver Airbags, Reverse Parking Sensors",
          "colorOptions": "White, Silver, Blue, Red",
          "dimensions": "6930 mm (Length), 2480 mm (Width), 3360 mm (Height)",
          "performanceFeatures": "Heavy-duty Chassis, High Load Carrying Capacity",
          "interiorFeatures": "Air Conditioning, Ergonomic Driver's Seat, Digital Dashboard",
          "exteriorFeatures": "Wide Front Grille, Robust Body Structure, Fog Lamps",
          "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
          "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/5036 D.png"

        },
        
        "5042 D": {
          "type": "Commercial",
          "brand": "Tata",
          "modelNameNumber": "5042 D",
          "engineSpecifications": "5.9L Turbocharged Diesel",
          "fuelType": "Diesel",
          "transmissionType": "Manual",
          "seatingCapacity": "Driver + 2",
          "priceRange": "₹20,00,000 - ₹24,00,000",
          "mileageRange": "7 - 9 km/l",
          "safetyFeatures": "ABS, EBD, Driver & Co-driver Airbags, Parking Assistance",
          "colorOptions": "White, Black, Silver, Yellow",
          "dimensions": "7500 mm (Length), 2550 mm (Width), 3280 mm (Height)",
          "performanceFeatures": "High Torque, Enhanced Payload Capacity",
          "interiorFeatures": "Comfortable Seats, Advanced Dashboard Display, Air Conditioning",
          "exteriorFeatures": "Chrome Grille, LED Fog Lamps, Wide Tires",
          "warrantyAfterSalesService": "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
          "releaseDateYear": "2019",
        imageUrl: "assets/images/vehicle_models_images/5042 D.png"

        },
        
        "5050 D": {
          "type": "Commercial",
          "brand": "Tata",
          "modelNameNumber": "5050 D",
          "engineSpecifications": "5.9L Diesel",
          "fuelType": "Diesel",
          "transmissionType": "Manual",
          "seatingCapacity": "Driver + 2",
          "priceRange": "₹22,00,000 - ₹26,00,000",
          "mileageRange": "6 - 8 km/l",
          "safetyFeatures": "ABS, EBD, Driver & Co-driver Airbags, Reverse Sensors",
          "colorOptions": "White, Red, Blue",
          "dimensions": "7800 mm (Length), 2600 mm (Width), 3200 mm (Height)",
          "performanceFeatures": "Heavy Payload, High Torque",
          "interiorFeatures": "Comfortable Seats, Adjustable Steering, Digital Dashboard",
          "exteriorFeatures": "Wide Grille, LED Headlamps, Reinforced Body",
          "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
          "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/5050 D.png"

        },
        
        "3028 EN": {
          "type": "Commercial",
          "brand": "Tata",
          "modelNameNumber": "3028 EN",
          "engineSpecifications": "3.8L Turbocharged Diesel",
          "fuelType": "Diesel",
          "transmissionType": "Manual",
          "seatingCapacity": "Driver + 1",
          "priceRange": "₹15,00,000 - ₹18,00,000",
          "mileageRange": "8 - 10 km/l",
          "safetyFeatures": "ABS, EBD, Driver & Co-driver Airbags, Hill Assist",
          "colorOptions": "White, Yellow, Blue",
          "dimensions": "5800 mm (Length), 2300 mm (Width), 2800 mm (Height)",
          "performanceFeatures": "Strong Chassis, Superior Handling",
          "interiorFeatures": "Driver's Comfort Seat, Digital Dashboard",
          "exteriorFeatures": "Sleek Design, Enhanced Visibility",
          "warrantyAfterSalesService": "2-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
          "releaseDateYear": "2017",
        imageUrl: "assets/images/vehicle_models_images/3028 EN.png"

        },
        
        "5075 E": {
          "type": "Commercial",
          "brand": "Tata",
          "modelNameNumber": "5075 E",
          "engineSpecifications": "7.0L Turbocharged Diesel",
          "fuelType": "Diesel",
          "transmissionType": "Manual",
          "seatingCapacity": "Driver + 2",
          "priceRange": "₹24,00,000 - ₹28,00,000",
          "mileageRange": "5 - 7 km/l",
          "safetyFeatures": "ABS, EBD, Driver & Co-driver Airbags, Parking Sensors",
          "colorOptions": "White, Silver, Red, Yellow",
          "dimensions": "8200 mm (Length), 2650 mm (Width), 3500 mm (Height)",
          "performanceFeatures": "High Load Carrying Capacity, Strong Build",
          "interiorFeatures": "Air Conditioning, Digital Dashboard, Comfortable Seating",
          "exteriorFeatures": "Durable Body, High Visibility Lights",
          "warrantyAfterSalesService": "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
          "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/5075 E.png"

        },
        
        "PowerPro 5105": {
          "type": "Commercial",
          "brand": "Tata",
          "modelNameNumber": "PowerPro 5105",
          "engineSpecifications": "5.0L Turbocharged Diesel",
          "fuelType": "Diesel",
          "transmissionType": "Manual",
          "seatingCapacity": "Driver + 2",
          "priceRange": "₹20,00,000 - ₹23,00,000",
          "mileageRange": "7 - 9 km/l",
          "safetyFeatures": "ABS, EBD, Driver & Co-driver Airbags, Parking Assist",
          "colorOptions": "White, Yellow, Black",
          "dimensions": "7500 mm (Length), 2500 mm (Width), 3100 mm (Height)",
          "performanceFeatures": "Heavy Duty, High Performance Engine",
          "interiorFeatures": "Air Conditioning, Ergonomic Driver's Seat",
          "exteriorFeatures": "Powerful Grille, LED Lights",
          "warrantyAfterSalesService": "2-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
          "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/PowerPro 5105.png"

        },
    
       "PowerPro 5050": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "PowerPro 5050",
        engineSpecifications: "2.2L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹8,50,000 - ₹9,00,000",
        mileageRange: "10 - 12 km/l",
        safetyFeatures: "Driver Airbag, ABS with EBD, Collapsible Steering Column",
        colorOptions: "White, Silver, Blue, Black",
        dimensions: "4990 mm (Length), 1720 mm (Width), 1900 mm (Height)",
        performanceFeatures: "Strong Payload Capacity, High Stability, Good Load Handling",
        interiorFeatures: "Basic Dashboard, Vinyl Seat Upholstery, Power Steering",
        exteriorFeatures: "Halogen Headlamps, Steel Wheels, Side Step",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/PowerPro 5050.png"

        },
    
        "PowerPro 5305": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "PowerPro 5305",
        engineSpecifications: "3.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹9,50,000 - ₹10,00,000",
        mileageRange: "9 - 11 km/l",
        safetyFeatures: "Driver Airbag, ABS with EBD, Parking Sensors",
        colorOptions: "White, Black, Red, Blue",
        dimensions: "5040 mm (Length), 1850 mm (Width), 1950 mm (Height)",
        performanceFeatures: "Improved Payload, Higher Torque, Long-lasting Durability",
        interiorFeatures: "Basic Dashboard, Vinyl Seat Upholstery, Power Windows",
        exteriorFeatures: "Fog Lamps, Steel Wheels, Side Skirts",
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/PowerPro 5305.png"

        },
    
       "555 DI": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "555 DI",
        engineSpecifications: "3.3L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹10,00,000 - ₹11,00,000",
        mileageRange: "8 - 10 km/l",
        safetyFeatures: "Driver Airbag, ABS with EBD",
        colorOptions: "White, Red, Blue, Yellow",
        dimensions: "5500 mm (Length), 2000 mm (Width), 2300 mm (Height)",
        performanceFeatures: "High Payload, Robust Build, Strong Torque",
        interiorFeatures: "Basic Dashboard, Vinyl Seat Upholstery, Power Steering",
        exteriorFeatures: "Projector Headlamps, Side Skirts, Wide Tyres",
        warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2017",
        imageUrl: "assets/images/vehicle_models_images/555 DI.png"

        },
    
        "605 DI MS": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "605 DI MS",
        engineSpecifications: "3.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹12,00,000 - ₹13,00,000",
        mileageRange: "8 - 10 km/l",
        safetyFeatures: "Driver Airbag, ABS with EBD, Reverse Parking Sensors",
        colorOptions: "White, Grey, Blue, Red",
        dimensions: "6050 mm (Length), 2100 mm (Width), 2400 mm (Height)",
        performanceFeatures: "High Load Capacity, Low Maintenance Costs",
        interiorFeatures: "Basic Dashboard, Power Windows, Vinyl Upholstery",
        exteriorFeatures: "Heavy-duty Bumper, LED Tail Lights, Side Step",
        warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/605 DI MS.png"

        },
    
        "605 DI PP": {
        type: "Commercial",
        brand: "Tata",
        modelNameNumber: "605 DI PP",
        engineSpecifications: "3.0L Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹11,50,000 - ₹12,50,000",
        mileageRange: "9 - 11 km/l",
        safetyFeatures: "Driver Airbag, ABS with EBD",
        colorOptions: "White, Black, Red, Blue",
        dimensions: "6050 mm (Length), 2100 mm (Width), 2400 mm (Height)",
        performanceFeatures: "Strong Load Handling, Smooth Drive Quality",
        interiorFeatures: "Basic Dashboard, Power Steering, Vinyl Upholstery",
        exteriorFeatures: "Fog Lamps, Steel Wheels, Side Skirts",
        warrantyAfterSalesService: "3-year/1,50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2021",
        imageUrl: "assets/images/vehicle_models_images/605 DI PP.png"

        },
    
       "New Holland Simba 20": {
        type: "Commercial",
        brand: "New Holland",
        modelNameNumber: "Simba 20",  // Model Name Number
        engineSpecifications: "20 HP, 3 Cylinder",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹4,50,000 - ₹5,50,000",  // Price Range
        mileageRange: "NA",  // Mileage/Range (specific mileage data can vary)
        safetyFeatures: "Roll-Over Protection System (ROPS), Anti-vibration system",  // Safety Features
        colorOptions: "Red, Blue, Yellow",  // Color Options
        dimensions: "3600 mm (Length), 1850 mm (Width), 2400 mm (Height)",  // Dimensions
        performanceFeatures: "Powerful Engine, Fuel Efficiency",  // Performance Features
        interiorFeatures: "Basic Operator Cabin, Adjustable Seat",  // Interior Features
        exteriorFeatures: "High Ground Clearance, Durable Tires",  // Exterior Features
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/New Holland Simba 20.png"

        },
    
       "New Holland 5630 TX Plus 4WD": {
        type: "Commercial",
        brand: "New Holland",
        modelNameNumber: "5630 TX Plus 4WD",  // Model Name Number
        engineSpecifications: "65 HP, 4 Cylinder",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹8,50,000 - ₹10,00,000",  // Price Range
        mileageRange: "NA",  // Mileage/Range
        safetyFeatures: "ROPS, 4WD, Power Steering",  // Safety Features
        colorOptions: "Red, Blue, Yellow",  // Color Options
        dimensions: "3850 mm (Length), 1950 mm (Width), 2400 mm (Height)",  // Dimensions
        performanceFeatures: "4WD, Hydraulic Lifting, Power Steering",  // Performance Features
        interiorFeatures: "Comfortable Cabin, Adjustable Steering",  // Interior Features
        exteriorFeatures: "Durable Tires, Front Weights",  // Exterior Features
        warrantyAfterSalesService: "3-year Warranty, 24/7 Support",  // Warranty & After-Sales Service
        releaseDateYear: "2022" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/New Holland 5630 TX Plus 4WD.png"

        },
    
        "New Holland T5": {
        type: "Commercial",
        brand: "New Holland",
        modelNameNumber: "T5",  // Model Name Number
        engineSpecifications: "110 HP, 4 Cylinder",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual/PowerShift",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹12,00,000 - ₹14,50,000",  // Price Range
        mileageRange: "NA",  // Mileage/Range
        safetyFeatures: "ROPS, Air Suspension Seat, 4WD",  // Safety Features
        colorOptions: "Blue, Yellow",  // Color Options
        dimensions: "4000 mm (Length), 2100 mm (Width), 2450 mm (Height)",  // Dimensions
        performanceFeatures: "PowerShift Transmission, 4WD, High Traction",  // Performance Features
        interiorFeatures: "Digital Dashboard, Premium Cabin",  // Interior Features
        exteriorFeatures: "Heavy-duty Tires, Front Weights",  // Exterior Features
        warrantyAfterSalesService: "3-year Warranty, 24/7 Support",  // Warranty & After-Sales Service
        releaseDateYear: "2021",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/New Holland T5.png"

        },
    
       "New Holland 7030": {
        type: "Commercial",
        brand: "New Holland",
        modelNameNumber: "7030",  // Model Name Number
        engineSpecifications: "70 HP, 4 Cylinder",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹7,00,000 - ₹8,50,000",  // Price Range
        mileageRange: "NA",  // Mileage/Range
        safetyFeatures: "ROPS, Power Steering, 2WD/4WD",  // Safety Features
        colorOptions: "Red, Yellow",  // Color Options
        dimensions: "3850 mm (Length), 1950 mm (Width), 2400 mm (Height)",  // Dimensions
        performanceFeatures: "Hydraulic Lifting, Efficient Fuel Consumption",  // Performance Features
        interiorFeatures: "Operator Cabin, Adjustable Seat",  // Interior Features
        exteriorFeatures: "Durable Tires, High Ground Clearance",  // Exterior Features
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",  // Warranty & After-Sales Service
        releaseDateYear: "2019"  ,// Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/New Holland 7030.png"

        },
    
        "New Holland 6500": {
        type: "Commercial",
        brand: "New Holland",
        modelNameNumber: "6500",  // Model Name Number
        engineSpecifications: "55 HP, 4 Cylinder",  // Engine Specifications
        fuelType: "Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹6,00,000 - ₹7,50,000",  // Price Range
        mileageRange: "NA",  // Mileage/Range
        safetyFeatures: "ROPS, Power Steering",  // Safety Features
        colorOptions: "Red, Yellow",  // Color Options
        dimensions: "3800 mm (Length), 1900 mm (Width), 2400 mm (Height)",  // Dimensions
        performanceFeatures: "Fuel Efficient, Power Steering",  // Performance Features
        interiorFeatures: "Basic Cabin, Adjustable Seat",  // Interior Features
        exteriorFeatures: "High Ground Clearance, Strong Build",  // Exterior Features
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",  // Warranty & After-Sales Service
        releaseDateYear: "2018",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/New Holland 6500.png"

        },
    
       "Sonalika DI 734 DLX": {
        type: "Tractor",
        brand: "Sonalika",
        modelNameNumber: "DI 734 DLX",
        engineSpecifications: "3.3L Diesel, 35 HP",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "1",  // Typically for tractors
        priceRange: "₹5,50,000 - ₹6,00,000",
        mileageRange: "Varies by usage",
        safetyFeatures: "Standard Tractor Safety Features, Roll Over Protection",
        colorOptions: "Red, Blue, Green",
        dimensions: "3475 mm (Length), 1730 mm (Width), 2000 mm (Height)",
        performanceFeatures: "Hydraulic Lift, Power Steering, 8 Forward & 2 Reverse Gears",
        interiorFeatures: "Comfortable Seat, Basic Dashboard",
        exteriorFeatures: "Wide Front Tyres, Strong Build",
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Sonalika DI 734 DLX.png"

        },
    
        "Sonalika Tiger DI 75 CRDS": {
        type: "Tractor",
        brand: "Sonalika",
        modelNameNumber: "Tiger DI 75 CRDS",
        engineSpecifications: "4.0L Diesel, 75 HP",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "1",
        priceRange: "₹7,50,000 - ₹8,00,000",
        mileageRange: "Varies by usage",
        safetyFeatures: "Standard Tractor Safety Features, Roll Over Protection",
        colorOptions: "Red, Blue, Yellow",
        dimensions: "3700 mm (Length), 1850 mm (Width), 2300 mm (Height)",
        performanceFeatures: "CRDI Engine, Powerful Hydraulic System",
        interiorFeatures: "Comfortable Seat, Advanced Dashboard",
        exteriorFeatures: "Strong Chassis, Wide Tyres",
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",
        releaseDateYear: "2021",
        imageUrl: "assets/images/vehicle_models_images/Sonalika Tiger DI 75 CRDS.png"

        },
    
        "Sonalika DI 745 III": {
        type: "Tractor",
        brand: "Sonalika",
        modelNameNumber: "DI 745 III",
        engineSpecifications: "3.9L Diesel, 50 HP",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "1",
        priceRange: "₹6,00,000 - ₹6,50,000",
        mileageRange: "Varies by usage",
        safetyFeatures: "Roll Over Protection, Tractor Safety Features",
        colorOptions: "Red, Green, Blue",
        dimensions: "3600 mm (Length), 1650 mm (Width), 2000 mm (Height)",
        performanceFeatures: "Power Steering, Dual Clutch System",
        interiorFeatures: "Comfortable Operator Seat, Basic Dashboard",
        exteriorFeatures: "Heavy Duty Tyres, Robust Build",
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",
        releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/Sonalika DI 745 III.png"

        },
    
        "Sonalika 60Max Tiger": {
        type: "Tractor",
        brand: "Sonalika",
        modelNameNumber: "60Max Tiger",
        engineSpecifications: "3.5L Diesel, 60 HP",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "1",
        priceRange: "₹6,50,000 - ₹7,00,000",
        mileageRange: "Varies by usage",
        safetyFeatures: "Roll Over Protection, Enhanced Safety Features",
        colorOptions: "Red, Yellow, Green",
        dimensions: "3650 mm (Length), 1750 mm (Width), 2200 mm (Height)",
        performanceFeatures: "Advanced Hydraulic System, Enhanced Stability",
        interiorFeatures: "Comfortable Operator Seat, Modern Dashboard",
        exteriorFeatures: "Wide Front Tyres, Durable Build",
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",
        releaseDateYear: "2022",
        imageUrl: "assets/images/vehicle_models_images/Sonalika 60Max Tiger.png"

        },
    
        "Sonalika DI 35 Sikander": {
        type: "Tractor",
        brand: "Sonalika",
        modelNameNumber: "DI 35 Sikander",
        engineSpecifications: "3.0L Diesel, 35 HP",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "1",
        priceRange: "₹5,00,000 - ₹5,50,000",
        mileageRange: "Varies by usage",
        safetyFeatures: "Roll Over Protection, Standard Safety Features",
        colorOptions: "Red, Blue, Green",
        dimensions: "3400 mm (Length), 1600 mm (Width), 1900 mm (Height)",
        performanceFeatures: "Power Steering, Efficient Hydraulic System",
        interiorFeatures: "Basic Seat, Simple Dashboard",
        exteriorFeatures: "Durable Tyres, Solid Frame",
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Sonalika DI 35 Sikander.png"

        },
    
        "Sonalika Worldtrac 90 4WD": {
        type: "Tractor",
        brand: "Sonalika",
        modelNameNumber: "Worldtrac 90 4WD",
        engineSpecifications: "4.2L Diesel, 90 HP",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "1",
        priceRange: "₹9,50,000 - ₹10,00,000",
        mileageRange: "Varies by usage",
        safetyFeatures: "Roll Over Protection, Advanced Safety Features",
        colorOptions: "Red, Yellow, Green",
        dimensions: "3800 mm (Length), 1800 mm (Width), 2400 mm (Height)",
        performanceFeatures: "4WD System, Advanced Hydraulic Mechanism",
        interiorFeatures: "Comfortable Operator Seat, Advanced Dashboard",
        exteriorFeatures: "Heavy Duty Tyres, Robust Construction",
        warrantyAfterSalesService: "2-year Warranty, 24/7 Support",
        releaseDateYear: "2023",
        imageUrl: "assets/images/vehicle_models_images/Sonalika Worldtrac 90 4WD.png"

        },
    
       "Swaraj 744 FE": {
        type: "Agricultural",
        brand: "Swaraj",
        modelNameNumber: "744 FE",
        engineSpecifications: "50 HP, 3-Cylinder, Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹6,00,000 - ₹7,00,000",
        mileageRange: "15 - 20 km/l",
        safetyFeatures: "Power Steering, Dual Clutch, Mechanical Brakes",
        colorOptions: "Red, Green, Blue, and more",
        dimensions: "3685 mm (Length), 1775 mm (Width), 2235 mm (Height)",
        performanceFeatures: "Hydraulic Lifting, Multi-Speed PTO",
        interiorFeatures: "Comfortable Seats, Adjustable Steering",
        exteriorFeatures: "LED Headlamps, High Ground Clearance, Reflective Mirrors",
        warrantyAfterSalesService: "2-year/2,000 hours Warranty, 24/7 Customer Support",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Swaraj 744 FE.png"

        },
    
        "Swaraj 735 FE": {
        type: "Agricultural",
        brand: "Swaraj",
        modelNameNumber: "735 FE",
        engineSpecifications: "35 HP, 3-Cylinder, Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹5,00,000 - ₹6,00,000",
        mileageRange: "16 - 18 km/l",
        safetyFeatures: "Power Steering, Dual Clutch",
        colorOptions: "Red, Green, Blue",
        dimensions: "3400 mm (Length), 1700 mm (Width), 2200 mm (Height)",
        performanceFeatures: "Multi-Speed PTO, Hydraulic Lifting",
        interiorFeatures: "Ergonomically Designed Seats, Adjustable Steering",
        exteriorFeatures: "High Ground Clearance, Strong Grille",
        warrantyAfterSalesService: "2-year/2,000 hours Warranty, 24/7 Customer Support",
        releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/Swaraj 735 FE.png"

        },
    
        "Swaraj 855 FE": {
        type: "Agricultural",
        brand: "Swaraj",
        modelNameNumber: "855 FE",
        engineSpecifications: "55 HP, 4-Cylinder, Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹7,50,000 - ₹8,50,000",
        mileageRange: "14 - 18 km/l",
        safetyFeatures: "Power Steering, Hydraulic Brakes",
        colorOptions: "Red, Green, White",
        dimensions: "3750 mm (Length), 1800 mm (Width), 2300 mm (Height)",
        performanceFeatures: "High Lifting Capacity, Multi-Speed PTO",
        interiorFeatures: "Leather Seats, Digital Dashboard",
        exteriorFeatures: "LED Lights, High Ground Clearance",
        warrantyAfterSalesService: "2-year/2,000 hours Warranty, 24/7 Customer Support",
        releaseDateYear: "2021",
        imageUrl: "assets/images/vehicle_models_images/Swaraj 855 FE.png"

        },
    
        "Swaraj 963 FE": {
        type: "Agricultural",
        brand: "Swaraj",
        modelNameNumber: "963 FE",
        engineSpecifications: "60 HP, 4-Cylinder, Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹8,00,000 - ₹9,00,000",
        mileageRange: "13 - 17 km/l",
        safetyFeatures: "Power Steering, Dual Clutch",
        colorOptions: "Red, Green, Yellow",
        dimensions: "3950 mm (Length), 1850 mm (Width), 2400 mm (Height)",
        performanceFeatures: "Heavy-duty Lifting, Hydraulic Control",
        interiorFeatures: "Adjustable Seat, Digital Instrument Cluster",
        exteriorFeatures: "LED DRLs, Strong Bumper",
        warrantyAfterSalesService: "2-year/2,000 hours Warranty, 24/7 Customer Support",
        releaseDateYear: "2022",
        imageUrl: "assets/images/vehicle_models_images/Swaraj 963 FE.png"

        },
    
        "Swaraj 725 XM": {
        type: "Agricultural",
        brand: "Swaraj",
        modelNameNumber: "725 XM",
        engineSpecifications: "25 HP, 3-Cylinder, Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹4,00,000 - ₹5,00,000",
        mileageRange: "18 - 22 km/l",
        safetyFeatures: "Power Steering, Mechanical Brakes",
        colorOptions: "Red, Green, Blue",
        dimensions: "3300 mm (Length), 1650 mm (Width), 2100 mm (Height)",
        performanceFeatures: "Hydraulic Lifting, Multi-Speed PTO",
        interiorFeatures: "Comfortable Seat, Adjustable Steering",
        exteriorFeatures: "High Ground Clearance, LED Headlamps",
        warrantyAfterSalesService: "2-year/2,000 hours Warranty, 24/7 Customer Support",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Swaraj 725 XM.png"

        },
    
        "Swaraj 824 XM": {
        type: "Agricultural",
        brand: "Swaraj",
        modelNameNumber: "824 XM",
        engineSpecifications: "24 HP, 3-Cylinder, Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹3,50,000 - ₹4,50,000",
        mileageRange: "20 - 23 km/l",
        safetyFeatures: "Power Steering, Mechanical Brakes",
        colorOptions: "Red, Green, Yellow",
        dimensions: "3200 mm (Length), 1600 mm (Width), 2100 mm (Height)",
        performanceFeatures: "Hydraulic Lifting, Adjustable PTO",
        interiorFeatures: "Ergonomically Designed Seats, Adjustable Steering",
        exteriorFeatures: "LED Lights, High Ground Clearance",
        warrantyAfterSalesService: "2-year/2,000 hours Warranty, 24/7 Customer Support",
        releaseDateYear: "2017",
        imageUrl: "assets/images/vehicle_models_images/Swaraj 824 XM.png"

        },
    
       "Escorts Farmtrac Smart 45": {
        type: "Agricultural",
        brand: "Escorts",
        modelNameNumber: "Smart 45",
        engineSpecifications: "3.3L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹6,00,000 - ₹7,00,000",
        mileageRange: "12 - 15 km/l",
        safetyFeatures: "Power Steering, Mechanical Oil Bath, Anti-Roll Bar",
        colorOptions: "Red, Green, Yellow, Blue",
        dimensions: "3450 mm (Length), 1700 mm (Width), 2290 mm (Height)",
        performanceFeatures: "Heavy Duty Engine, 45 HP Power, 4WD",
        interiorFeatures: "Adjustable Driver Seat, Ergonomic Controls",
        exteriorFeatures: "Wide Tyres, Durable Frame, High Ground Clearance",
        warrantyAfterSalesService: "3-year/3000 hours Warranty, 24/7 Support",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Escorts Farmtrac Smart 45.png"

        },
    
        "Escorts Josh 335": {
        type: "Agricultural",
        brand: "Escorts",
        modelNameNumber: "Josh 335",
        engineSpecifications: "3.5L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹5,50,000 - ₹6,50,000",
        mileageRange: "10 - 13 km/l",
        safetyFeatures: "Hydraulic Brakes, Roll Bar, Anti-Vibration System",
        colorOptions: "Red, Green, White",
        dimensions: "3580 mm (Length), 1780 mm (Width), 2400 mm (Height)",
        performanceFeatures: "Hydraulic Lifting System, 35 HP Power, 2WD",
        interiorFeatures: "Comfortable Seats, User-Friendly Dashboard",
        exteriorFeatures: "Durable Tires, Protective Front Guard, Strong Body Frame",
        warrantyAfterSalesService: "2-year/2500 hours Warranty, 24/7 Support",
        releaseDateYear: "2022",
        imageUrl: "assets/images/vehicle_models_images/Escorts Josh 335.png"

        },
        
        "Escorts Powertrac Euro 60": {
        type: "Agricultural",
        brand: "Escorts",
        modelNameNumber: "Euro 60",
        engineSpecifications: "4.4L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹7,50,000 - ₹8,50,000",
        mileageRange: "10 - 14 km/l",
        safetyFeatures: "Dual Clutch, Hydraulic Brakes, Roll Over Protection",
        colorOptions: "Red, Yellow, Green",
        dimensions: "3800 mm (Length), 1800 mm (Width), 2550 mm (Height)",
        performanceFeatures: "60 HP Power, Advanced Lifting System, 4WD",
        interiorFeatures: "Adjustable Seat, High Comfort Steering",
        exteriorFeatures: "Strong Frame, Wide Rear Tyres, Protective Bumper",
        warrantyAfterSalesService: "3-year/3500 hours Warranty, 24/7 Support",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Escorts Powertrac Euro 60.png"

        },
    
       "Kubota MU 5502 4WD": {
        type: "Commercial",
        brand: "Kubota",
        modelNameNumber: "MU 5502 4WD",
        engineSpecifications: "55 HP, 4-cylinder Diesel Engine",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹8,00,000 - ₹9,00,000",
        mileageRange: "10 - 12 km/l",
        safetyFeatures: "Power Steering, Roll-Over Protection, Hydraulic Brakes",
        colorOptions: "Kubota Orange, Black",
        dimensions: "3980 mm (Length), 1750 mm (Width), 2200 mm (Height)",
        performanceFeatures: "4WD, Heavy-duty Lift, Adjustable PTO",
        interiorFeatures: "Basic Dashboard, Comfortable Seats",
        exteriorFeatures: "Wide Wheelbase, Front Guard",
        warrantyAfterSalesService: "2-year/1500-hour Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2022",
        imageUrl: "assets/images/vehicle_models_images/Kubota MU 5502 4WD.png"

        },
    
            "FZ-Series": {
                type: "Motorcycle",
                brand: "Yamaha",
                modelNameNumber: "FZ Series",
                engineSpecifications: "149cc, Air-cooled, Single-Cylinder, SOHC",
                fuelType: "Petrol",
                transmissionType: "Manual",
                seatingCapacity: "2",
                priceRange: "₹1,00,000 - ₹1,20,000",
                mileageRange: "45 - 50 km/l",
                safetyFeatures: "Single Channel ABS, LED Tail Lamp, Side Stand Engine Cut-off",
                colorOptions: "Matte Black, Racing Blue, Dark Cyan",
                dimensions: "1990 mm (Length), 785 mm (Width), 1135 mm (Height)",
                performanceFeatures: "BS6 Compliant Engine, Fuel Injection, Digital Speedometer",
                interiorFeatures: "Digital Instrument Console, LED Headlamps",
                exteriorFeatures: "Fender, Alloy Wheels, LED Indicators",
                warrantyAfterSalesService: "2-year Warranty, Roadside Assistance",
                releaseDateYear: "2008",
        imageUrl: "assets/images/vehicle_models_images/FZ-Series.png"

            },
            
            "MT-15": {
                type: "Motorcycle",
                brand: "Yamaha",
                modelNameNumber: "MT-15",
                engineSpecifications: "155cc, Liquid-cooled, 4-stroke, SOHC",
                fuelType: "Petrol",
                transmissionType: "Manual",
                seatingCapacity: "2",
                priceRange: "₹1,60,000 - ₹1,80,000",
                mileageRange: "40 - 45 km/l",
                safetyFeatures: "Dual Channel ABS, LED Tail Lamp, Side Stand Engine Cut-off",
                colorOptions: "Ice Fluo, Metallic Black, Dark Matt Blue",
                dimensions: "2020 mm (Length), 800 mm (Width), 1070 mm (Height)",
                performanceFeatures: "BS6 Compliant Engine, LED Projector Headlamp, VVA Technology",
                interiorFeatures: "Digital Instrument Console, Blue Core Technology",
                exteriorFeatures: "Muscular Tank Design, LED DRLs, Alloy Wheels",
                warrantyAfterSalesService: "2-year Warranty, Roadside Assistance",
                releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/MT-15.png"

            },
            
            "R15": {
                type: "Motorcycle",
                brand: "Yamaha",
                modelNameNumber: "R15",
                engineSpecifications: "155cc, Liquid-cooled, 4-stroke, SOHC",
                fuelType: "Petrol",
                transmissionType: "Manual",
                seatingCapacity: "2",
                priceRange: "₹1,50,000 - ₹1,80,000",
                mileageRange: "40 - 45 km/l",
                safetyFeatures: "Dual Channel ABS, LED Tail Lamp, Side Stand Engine Cut-off",
                colorOptions: "Thunder Grey, Racing Blue, Dark Knight",
                dimensions: "1990 mm (Length), 730 mm (Width), 1135 mm (Height)",
                performanceFeatures: "BS6 Compliant Engine, Variable Valve Actuation (VVA), Lightweight Chassis",
                interiorFeatures: "Digital Speedometer, LED Tail Lamp, USB Charging Port",
                exteriorFeatures: "Racing Inspired Design, LED DRLs, Alloy Wheels",
                warrantyAfterSalesService: "2-year Warranty, Roadside Assistance",
                releaseDateYear: "2008",
        imageUrl: "assets/images/vehicle_models_images/R15.png"

            },
            
            "FZ-X": {
                type: "Motorcycle",
                brand: "Yamaha",
                modelNameNumber: "FZ-X",
                engineSpecifications: "149cc, Air-cooled, Single-Cylinder, SOHC",
                fuelType: "Petrol",
                transmissionType: "Manual",
                seatingCapacity: "2",
                priceRange: "₹1,20,000 - ₹1,40,000",
                mileageRange: "45 - 50 km/l",
                safetyFeatures: "Single Channel ABS, LED Tail Lamp, Side Stand Engine Cut-off",
                colorOptions: "Matte Black, Dark Cyan, Racing Blue",
                dimensions: "1990 mm (Length), 785 mm (Width), 1135 mm (Height)",
                performanceFeatures: "BS6 Compliant Engine, Fuel Injection, Digital Speedometer",
                interiorFeatures: "Digital Instrument Console, LED Headlamps",
                exteriorFeatures: "Fender, Alloy Wheels, LED Indicators",
                warrantyAfterSalesService: "2-year Warranty, Roadside Assistance",
                releaseDateYear: "2021",
        imageUrl: "assets/images/vehicle_models_images/FZ-X.png"

            },
            
            "R15 V4": {
                type: "Motorcycle",
                brand: "Yamaha",
                modelNameNumber: "R15 V4",
                engineSpecifications: "155cc, Liquid-cooled, 4-stroke, SOHC",
                fuelType: "Petrol",
                transmissionType: "Manual",
                seatingCapacity: "2",
                priceRange: "₹1,85,000 - ₹2,00,000",
                mileageRange: "40 - 45 km/l",
                safetyFeatures: "Dual Channel ABS, LED Tail Lamp, Side Stand Engine Cut-off",
                colorOptions: "Racing Blue, Dark Knight, Metallic White",
                dimensions: "1990 mm (Length), 730 mm (Width), 1135 mm (Height)",
                performanceFeatures: "BS6 Compliant Engine, Variable Valve Actuation (VVA), LED Projector Headlamp",
                interiorFeatures: "Digital Instrument Console, USB Charging, Smart LED Tail Lamp",
                exteriorFeatures: "Racing Inspired Design, LED DRLs, Alloy Wheels",
                warrantyAfterSalesService: "2-year Warranty, Roadside Assistance",
                releaseDateYear: "2021",
        imageUrl: "assets/images/vehicle_models_images/R15 V4.png"

            },
    
            "MY-15": {
                type: "Motorcycle",
                brand: "Yamaha",
                modelNameNumber: "MY-15",
                engineSpecifications: "153cc, Single-Cylinder, Air-Cooled",
                fuelType: "Petrol",
                transmissionType: "Manual",
                seatingCapacity: "2",
                priceRange: "₹1,10,000 - ₹1,30,000",
                mileageRange: "45 - 50 km/l",
                safetyFeatures: "Single Channel ABS, LED Tail Lamp, Side Stand Engine Cut-off",
                colorOptions: "Dark Red, Matte Black, Silver",
                dimensions: "1995 mm (Length), 770 mm (Width), 1130 mm (Height)",
                performanceFeatures: "BS6 Compliant Engine, Fuel Injection",
                interiorFeatures: "Analog Instrument Console, LED Tail Lamp",
                exteriorFeatures: "Stylish Body Design, Alloy Wheels",
                warrantyAfterSalesService: "2-year Warranty, Roadside Assistance",
                releaseDateYear: "2015",
        imageUrl: "assets/images/vehicle_models_images/MY-15.png"

            },    
    
        "Massey Ferguson 5118": {
        type: "Commercial",
        brand: "Massey Ferguson",
        modelNameNumber: "5118",
        engineSpecifications: "4.4L 4-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹8,00,000 - ₹10,00,000",  // Price Range
        mileageRange: "12 - 15 km/l",  // Mileage/Range
        safetyFeatures: "Air Brakes, Power Steering, Hydraulic Lift",  // Safety Features
        colorOptions: "Red, Yellow, Green",  // Color Options
        dimensions: "4030 mm (Length), 1900 mm (Width), 2200 mm (Height)",  // Dimensions
        performanceFeatures: "High-Performance Engine, Advanced Hydraulics, 4WD",  // Performance Features
        interiorFeatures: "Comfortable Seat, Simple Controls, Spacious Cabin",  // Interior Features
        exteriorFeatures: "Strong Chassis, LED Tail Lamps, Robust Design",  // Exterior Features
        warrantyAfterSalesService: "2-year/2000 hours Warranty, 24/7 Customer Support",  // Warranty & After-Sales Service
        releaseDateYear: "2015",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Massey Ferguson 5118.png"

        },
    
        "Massey Ferguson 254 DI Dynatrak 4WD": {
        type: "Commercial",
        brand: "Massey Ferguson",
        modelNameNumber: "254 DI Dynatrak 4WD",
        engineSpecifications: "3.3L 3-Cylinder Diesel",
        fuelType: "Diesel",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹6,00,000 - ₹8,00,000",  // Price Range
        mileageRange: "13 - 16 km/l",  // Mileage/Range
        safetyFeatures: "Power Steering, Hydraulic Brakes, High Ground Clearance",  // Safety Features
        colorOptions: "Red, Yellow, Green",  // Color Options
        dimensions: "3470 mm (Length), 1800 mm (Width), 2100 mm (Height)",  // Dimensions
        performanceFeatures: "Dynamic Power, 4WD Capability, Advanced Gearbox",  // Performance Features
        interiorFeatures: "Spacious Cabin, Comfortable Seat, Easy-to-Use Controls",  // Interior Features
        exteriorFeatures: "Sturdy Build, LED Tail Lamps, Robust Design",  // Exterior Features
        warrantyAfterSalesService: "2-year/2000 hours Warranty, 24/7 Customer Support",  // Warranty & After-Sales Service
        releaseDateYear: "2018",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Massey Ferguson 254 DI Dynatrak 4WD.png"

        },
    
        "TVS Radeon": {
        type: "Motorcycle",
        brand: "TVS",
        modelNameNumber: "Radeon",
        engineSpecifications: "109.7cc Single-Cylinder, Air-Cooled Engine",
        fuelType: "Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹60,000 - ₹75,000",
        mileageRange: "65 - 70 km/l",
        safetyFeatures: "Combi-Brake System (CBS), Telescopic Front Forks, Drum Brakes",
        colorOptions: "Black, Red, Grey, Blue",
        dimensions: "2000 mm (Length), 705 mm (Width), 1050 mm (Height)",
        performanceFeatures: "Smooth Ride, Long Suspension Travel, Stylish Design",
        interiorFeatures: "Analog Speedometer, Telescopic Front Forks",
        exteriorFeatures: "Chrome Finished Silencer, Stylish Headlamp, LED Tail Lamp",
        warrantyAfterSalesService: "5-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/TVS Radeon.png"

        },
    
        "Honda Activa 6G": {
        type: "Scooter",
        brand: "Honda",
        modelNameNumber: "Activa 6G",
        engineSpecifications: "109.51cc, Air-Cooled, Single-Cylinder",
        fuelType: "Petrol",
        transmissionType: "CVT",
        seatingCapacity: "2",
        priceRange: "₹74,000 - ₹80,000",
        mileageRange: "45 - 50 km/l",
        safetyFeatures: "Combi-Brake System (CBS), Puncture Resistant Tyres",
        colorOptions: "Pearl Spartan Red, Matte Axis Grey Metallic, Black, White",
        dimensions: "1833 mm (Length), 697 mm (Width), 1156 mm (Height)",
        performanceFeatures: "Smooth Performance, Silent Start, Eco-Indicator",
        interiorFeatures: "Digital Speedometer, External Fuel Lid, LED Headlamp",
        exteriorFeatures: "LED Position Lamps, Stylish Graphics",
        warrantyAfterSalesService: "3-year/36,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Honda Activa 6G.png"

        },
    
        "Honda CB Hornet 160R": {
        type: "Motorcycle",
        brand: "Honda",
        modelNameNumber: "CB Hornet 160R",
        engineSpecifications: "162.71cc, Air-Cooled, Single-Cylinder",
        fuelType: "Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹1,10,000 - ₹1,25,000",
        mileageRange: "40 - 45 km/l",
        safetyFeatures: "Dual Disc Brakes, CBS, LED Tail Lamp",
        colorOptions: "Striking Green, Matte Axis Grey, Sports Red",
        dimensions: "2030 mm (Length), 783 mm (Width), 1063 mm (Height)",
        performanceFeatures: "Sporty Performance, Responsive Handling, LED Indicators",
        interiorFeatures: "Digital Instrument Cluster, Gear Indicator",
        exteriorFeatures: "Sharp Headlamp, Premium Styling",
        warrantyAfterSalesService: "2-year/24,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2015",
        imageUrl: "assets/images/vehicle_models_images/Honda CB Hornet 160R.png"

        },
    
        "Honda CBR 250R": {
        type: "Motorcycle",
        brand: "Honda",
        modelNameNumber: "CBR 250R",
        engineSpecifications: "249.6cc, Liquid-Cooled, Single-Cylinder",
        fuelType: "Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹1,70,000 - ₹2,00,000",
        mileageRange: "25 - 30 km/l",
        safetyFeatures: "ABS, Disc Brakes, Programmed Fuel Injection (PGM-FI)",
        colorOptions: "Racing Red, Matte Black, Pearl White",
        dimensions: "2035 mm (Length), 720 mm (Width), 1127 mm (Height)",
        performanceFeatures: "Sporty Design, Strong Performance, Adjustable Suspension",
        interiorFeatures: "Digital Instrument Console, Full-Fairing Design",
        exteriorFeatures: "LED Headlamp, Aggressive Styling",
        warrantyAfterSalesService: "2-year/24,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2011",
        imageUrl: "assets/images/vehicle_models_images/Honda CBR 250R.png"

        },
    
        "Honda CB Shine": {
        type: "Motorcycle",
        brand: "Honda",
        modelNameNumber: "CB Shine",
        engineSpecifications: "124cc, Air-Cooled, Single-Cylinder",
        fuelType: "Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹75,000 - ₹85,000",
        mileageRange: "55 - 60 km/l",
        safetyFeatures: "Combi-Brake System (CBS), Drum Brakes, Telescopic Front Forks",
        colorOptions: "Black, Red, Blue",
        dimensions: "2020 mm (Length), 762 mm (Width), 1084 mm (Height)",
        performanceFeatures: "Smooth Ride, Refined Engine, Comfortable Seat",
        interiorFeatures: "Analog Speedometer, Clear Visibility",
        exteriorFeatures: "Chrome Finish, Stylish Design",
        warrantyAfterSalesService: "3-year/36,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2006",
        imageUrl: "assets/images/vehicle_models_images/Honda CB Shine.png"

        },
    
        "Honda SP 125": {
        type: "Motorcycle",
        brand: "Honda",
        modelNameNumber: "SP 125",
        engineSpecifications: "124cc, Air-Cooled, Single-Cylinder",
        fuelType: "Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹80,000 - ₹90,000",
        mileageRange: "60 - 65 km/l",
        safetyFeatures: "Combi-Brake System (CBS), LED Tail Light",
        colorOptions: "Matte Axis Grey, Pearl Spartan Red, Black",
        dimensions: "2027 mm (Length), 746 mm (Width), 1097 mm (Height)",
        performanceFeatures: "Powerful Engine, Low Maintenance",
        interiorFeatures: "Digital Meter Console, Side Stand Engine Cut-Off",
        exteriorFeatures: "Sharp Headlamps, Premium Body Design",
        warrantyAfterSalesService: "3-year/36,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Honda SP 125.png"

        },
    
        "Honda XBlade": {
        type: "Motorcycle",
        brand: "Honda",
        modelNameNumber: "XBlade",
        engineSpecifications: "162.71cc, Air-Cooled, Single-Cylinder",
        fuelType: "Petrol",
        transmissionType: "Manual",
        seatingCapacity: "2",
        priceRange: "₹1,10,000 - ₹1,25,000",
        mileageRange: "45 - 50 km/l",
        safetyFeatures: "Dual Disc Brakes, CBS, LED Tail Lamp",
        colorOptions: "Pearl Spartan Red, Matte Black, Blue",
        dimensions: "2013 mm (Length), 790 mm (Width), 1127 mm (Height)",
        performanceFeatures: "Sporty Styling, Fuel Efficient, LED Lighting",
        interiorFeatures: "Digital Instrument Cluster, Full Digital Console",
        exteriorFeatures: "Aggressive Headlamp, LED Indicators",
        warrantyAfterSalesService: "2-year/24,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Honda XBlade.png"

        },
    
    
        "TVS Apache RTR 160": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "Apache RTR 160",  // Model Name Number
        "engineSpecifications": "159.7cc Single-Cylinder, 4-Stroke, Air-Cooled",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹1,05,000 - ₹1,15,000",  // Price Range
        "mileageRange": "40 - 45 km/l",  // Mileage/Range
        "safetyFeatures": "Single-channel ABS, Dual Disc Brakes, Tubeless Tyres",  // Safety Features
        "colorOptions": "Gloss Black, Matte Blue, Pearl White, Racing Red",  // Color Options
        "dimensions": "2045 mm (Length), 790 mm (Width), 1050 mm (Height)",  // Dimensions
        "performanceFeatures": "Sharp Handling, Powerful Engine, Dual Disc Brakes",  // Performance Features
        "interiorFeatures": "Fully Digital Instrument Cluster, LED Tail Lamp",  // Interior Features
        "exteriorFeatures": "LED DRLs, Aggressive Styling, Sporty Look",  // Exterior Features
        "warrantyAfterSalesService": "5-year/50,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        "releaseDateYear": "2006" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/TVS Apache RTR 160.png"

        },
    
        "TVS Apache RTR 180": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "Apache RTR 180",  // Model Name Number
        "engineSpecifications": "177.4cc Single-Cylinder, 4-Stroke, Air-Cooled",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹1,20,000 - ₹1,30,000",  // Price Range
        "mileageRange": "35 - 40 km/l",  // Mileage/Range
        "safetyFeatures": "Single-channel ABS, Dual Disc Brakes, Tubeless Tyres",  // Safety Features
        "colorOptions": "Matte Black, Racing Red, White, Yellow",  // Color Options
        "dimensions": "2070 mm (Length), 790 mm (Width), 1050 mm (Height)",  // Dimensions
        "performanceFeatures": "Smooth Power Delivery, Sporty Handling, Disc Brakes",  // Performance Features
        "interiorFeatures": "Fully Digital Instrument Cluster, LED Tail Lamp",  // Interior Features
        "exteriorFeatures": "Aggressive Styling, LED DRLs, Muscular Design",  // Exterior Features
        "warrantyAfterSalesService": "5-year/50,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        "releaseDateYear": "2008" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/TVS Apache RTR 180.png"

        },
    
        "TVS Apache RR 310": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "Apache RR 310",  // Model Name Number
        "engineSpecifications": "312.2cc Single-Cylinder, Liquid-Cooled, DOHC",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹2,80,000 - ₹3,00,000",  // Price Range
        "mileageRange": "25 - 30 km/l",  // Mileage/Range
        "safetyFeatures": "Dual-Channel ABS, Cornering ABS, Traction Control",  // Safety Features
        "colorOptions": "Racing Red, Phantom Black",  // Color Options
        "dimensions": "2000 mm (Length), 786 mm (Width), 1135 mm (Height)",  // Dimensions
        "performanceFeatures": "Track-focused, High Performance, Superior Handling",  // Performance Features
        "interiorFeatures": "Fully Digital Instrument Cluster, Bluetooth Connectivity",  // Interior Features
        "exteriorFeatures": "Aerodynamic Design, LED DRLs, LED Tail Light",  // Exterior Features
        "warrantyAfterSalesService": "3-year/36,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        "releaseDateYear": "2017",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/TVS Apache RR 310.png"

        },
        
        "TVS Ntorq 125": {
        "type": "Scooter",
        "brand": "TVS",
        "modelNameNumber": "Ntorq 125",  // Model Name Number
        "engineSpecifications": "124.8cc Single-Cylinder, 4-Stroke, Air-Cooled",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "CVT",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹75,000 - ₹85,000",  // Price Range
        "mileageRange": "40 - 45 km/l",  // Mileage/Range
        "safetyFeatures": "Disc Brake, Drum Brake, Combined Braking System",  // Safety Features
        "colorOptions": "Matte Black, White, Red, Yellow",  // Color Options
        "dimensions": "1871 mm (Length), 710 mm (Width), 1160 mm (Height)",  // Dimensions
        "performanceFeatures": "Sporty Design, Bluetooth Connectivity, SmartXonnect",  // Performance Features
        "interiorFeatures": "Digital Instrument Console, LED Tail Light",  // Interior Features
        "exteriorFeatures": "LED DRLs, Sharp Styling, Dual-tone Seat",  // Exterior Features
        "warrantyAfterSalesService": "5-year/50,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        "releaseDateYear": "2018" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/TVS Ntorq 125.png"

        },
    
        "TVS Jupiter": {
        "type": "Scooter",
        "brand": "TVS",
        "modelNameNumber": "Jupiter",  // Model Name Number
        "engineSpecifications": "109.7cc Single-Cylinder, 4-Stroke, Air-Cooled",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "CVT",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹72,000 - ₹85,000",  // Price Range
        "mileageRange": "55 - 60 km/l",  // Mileage/Range
        "safetyFeatures": "Drum Brake, Combined Braking System",  // Safety Features
        "colorOptions": "Matte Black, White, Red, Grey",  // Color Options
        "dimensions": "1834 mm (Length), 650 mm (Width), 1115 mm (Height)",  // Dimensions
        "performanceFeatures": "Smooth Handling, Practical Design, Efficient Engine",  // Performance Features
        "interiorFeatures": "Analog Instrument Console, USB Charging Port",  // Interior Features
        "exteriorFeatures": "Stylish Design, LED Tail Light",  // Exterior Features
        "warrantyAfterSalesService": "5-year/50,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        "releaseDateYear": "2013",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/TVS Jupiter.png"

        },
        
        "TVS XL100": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "XL100",  // Model Name Number
        "engineSpecifications": "99.7cc Single-Cylinder, 4-Stroke, Air-Cooled",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹40,000 - ₹45,000",  // Price Range
        "mileageRange": "65 - 70 km/l",  // Mileage/Range
        "safetyFeatures": "Drum Brake, Combi Brake System",  // Safety Features
        "colorOptions": "Red, Green, Blue, Yellow",  // Color Options
        "dimensions": "1900 mm (Length), 710 mm (Width), 1070 mm (Height)",  // Dimensions
        "performanceFeatures": "Efficient Fuel Economy, Practical Utility",  // Performance Features
        "interiorFeatures": "Analog Instrument Cluster, Simple Design",  // Interior Features
        "exteriorFeatures": "Sturdy Build, Comfortable Seating",  // Exterior Features
        "warrantyAfterSalesService": "5-year/50,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        "releaseDateYear": "2018",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/TVS XL100.png"

        },
    
        "Bajaj Dominar 400": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Dominar 400",
        engineSpecifications: "373.3cc Single-Cylinder, Liquid-Cooled, DOHC",
        fuelType: "Petrol",
        transmissionType: "6-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹2,00,000 - ₹2,20,000",
        mileageRange: "25 - 30 km/l",
        safetyFeatures: "Dual-Channel ABS, LED Headlamps, Rear Disc Brake",
        colorOptions: "Aurora Green, Vine Black, Matte Black",
        dimensions: "2156 mm (Length), 836 mm (Width), 1117 mm (Height)",
        performanceFeatures: "Liquid-Cooled Engine, Digital Console, LED Lighting",
        interiorFeatures: "LED Display, Comfortable Seat, Dual-channel ABS",
        exteriorFeatures: "LED DRLs, Dual-Tone Colors, Dual-Disc Brakes",
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Roadside Assistance",
        releaseDateYear: "2016",
        imageUrl: "assets/images/vehicle_models_images/Bajaj Dominar 400.png"

        },
    
        "Bajaj Avenger Street 160": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Avenger Street 160",
        engineSpecifications: "160cc Single-Cylinder, Air-Cooled",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹1,00,000 - ₹1,15,000",
        mileageRange: "40 - 45 km/l",
        safetyFeatures: "Single Channel ABS, Anti-slip Seat, Integrated Braking",
        colorOptions: "Ebony Black, Spicy Red",
        dimensions: "2210 mm (Length), 806 mm (Width), 1133 mm (Height)",
        performanceFeatures: "Cruise Control, LED Tail Lamp, Low Seat Height",
        interiorFeatures: "Simple, Minimalist Design",
        exteriorFeatures: "Blacked-out Styling, Matte Finish",
        warrantyAfterSalesService: "2-year/24,000 km Warranty",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Bajaj Avenger Street 160.png"

        },
    
        "Bajaj Avenger Cruise 220": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Avenger Cruise 220",
        engineSpecifications: "220cc Single-Cylinder, Oil-Cooled",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹1,15,000 - ₹1,30,000",
        mileageRange: "35 - 40 km/l",
        safetyFeatures: "Dual-Channel ABS, Anti-slip Seat, LED Tail Lamp",
        colorOptions: "Auburn Black, Desert Gold",
        dimensions: "2210 mm (Length), 806 mm (Width), 1133 mm (Height)",
        performanceFeatures: "Comfortable Ride, LED Tail Light, Dual-Channel ABS",
        interiorFeatures: "Minimalist Interior, Comfortable Cruiser Seat",
        exteriorFeatures: "Classic Cruiser Styling, Chrome Accents",
        warrantyAfterSalesService: "2-year/24,000 km Warranty",
        releaseDateYear: "2017",
        imageUrl: "assets/images/vehicle_models_images/Bajaj Avenger Cruise 220.png"

        },
    
        "CT 100": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "CT 100",
        engineSpecifications: "102cc Single-Cylinder, Air-Cooled",
        fuelType: "Petrol",
        transmissionType: "4-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹50,000 - ₹60,000",
        mileageRange: "80 - 90 km/l",
        safetyFeatures: "Anti-slip Seat, Drum Brakes",
        colorOptions: "Black, Red, Blue",
        dimensions: "1930 mm (Length), 750 mm (Width), 1040 mm (Height)",
        performanceFeatures: "Fuel-Efficient Engine, Easy Maneuvering",
        interiorFeatures: "Comfortable and Simple Design",
        exteriorFeatures: "Classic Styling, Economical Body",
        warrantyAfterSalesService: "2-year/24,000 km Warranty",
        releaseDateYear: "2004",
        imageUrl: "assets/images/vehicle_models_images/CT 100.png"

        },
    
       "V15": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "V15",
        engineSpecifications: "149.5cc Single-Cylinder, Air-Cooled",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹70,000 - ₹80,000",
        mileageRange: "45 - 50 km/l",
        safetyFeatures: "Disc Brake, Tubeless Tyres, Anti-slip Seat",
        colorOptions: "Mystic Red, Ebony Black",
        dimensions: "2044 mm (Length), 765 mm (Width), 1070 mm (Height)",
        performanceFeatures: "Fuel-efficient Engine, Comfortable Ride",
        interiorFeatures: "Simple, Easy-to-read Instrument Cluster",
        exteriorFeatures: "Classic and Modern Styling",
        warrantyAfterSalesService: "2-year/24,000 km Warranty",
        releaseDateYear: "2016",
        imageUrl: "assets/images/vehicle_models_images/V15.png"

        },
    
        "Bajaj Pulsar 200NS": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Pulsar 200NS",  // Model Name Number
        engineSpecifications: "199.5cc, Liquid-Cooled, 4-Valve",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,20,000 - ₹1,50,000",  // Price Range
        mileageRange: "35 - 40 km/l",  // Mileage/Range
        safetyFeatures: "Dual-Channel ABS, Split Seats",  // Safety Features
        colorOptions: "Black, White, Red, Blue",  // Color Options
        dimensions: "2018 mm (Length), 803 mm (Width), 1035 mm (Height)",  // Dimensions
        performanceFeatures: "Triple Spark Technology, Monoshock Suspension",  // Performance Features
        interiorFeatures: "Digital Instrument Cluster, Split Seats",  // Interior Features
        exteriorFeatures: "LED Tail Light, Tinted Windshield",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2012" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Bajaj Pulsar 200NS.png"

        },
    
        "Bajaj Pulsar 220F": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Pulsar 220F",  // Model Name Number
        engineSpecifications: "220cc, Single-Cylinder, Oil-Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,35,000 - ₹1,60,000",  // Price Range
        mileageRange: "30 - 35 km/l",  // Mileage/Range
        safetyFeatures: "Front & Rear Disc Brakes, Digital Console, LED Tail Light",  // Safety Features
        colorOptions: "Black, Blue, Red",  // Color Options
        dimensions: "2055 mm (Length), 755 mm (Width), 1165 mm (Height)",  // Dimensions
        performanceFeatures: "Twin Spark Engine, Monoshock Rear Suspension",  // Performance Features
        interiorFeatures: "LED Speedometer, Fully Digital Console",  // Interior Features
        exteriorFeatures: "Projector Headlamps, V-shaped Tail Light",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2007" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Bajaj Pulsar 220F.png"

        },
    
       "Bajaj Dominar 250": {
        type: "Passenger",
        brand: "Bajaj",
        modelNameNumber: "Dominar 250",  // Model Name Number
        engineSpecifications: "248.8cc, Single-Cylinder, Liquid-Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,80,000 - ₹2,00,000",  // Price Range
        mileageRange: "30 - 35 km/l",  // Mileage/Range
        safetyFeatures: "Dual-Channel ABS, Upside Down Front Forks",  // Safety Features
        colorOptions: "Aurora Green, Vine Black",  // Color Options
        dimensions: "2050 mm (Length), 813 mm (Width), 1112 mm (Height)",  // Dimensions
        performanceFeatures: "Advanced Liquid Cooling System, Twin Spark Engine",  // Performance Features
        interiorFeatures: "Full Digital Console, LED DRLs",  // Interior Features
        exteriorFeatures: "Full LED Lighting, Sporty Design",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Bajaj Dominar 250.png"

        },
    
        "Hero Pleasure Plus": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "Pleasure Plus",
        engineSpecifications: "110.9cc Air-Cooled, 4-Stroke, OHC",
        fuelType: "Petrol",
        transmissionType: "Automatic",
        seatingCapacity: "2",
        priceRange: "₹72,000 - ₹80,000",
        mileageRange: "50 - 60 km/l",
        safetyFeatures: "Combi-Brake System (CBS), Side Stand Indicator",
        colorOptions: "Pearl Fadeless White, Matte Vernier Grey, Glossy Black, and more",
        dimensions: "1790 mm (Length), 710 mm (Width), 1160 mm (Height)",
        performanceFeatures: "Smooth Handling, Easy to Ride, Lightweight",
        interiorFeatures: "Digital Speedometer, 18L Under-seat Storage",
        exteriorFeatures: "Stylish Design, LED Tail Light, Large Footboard",
        warrantyAfterSalesService: "5-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/Hero Pleasure Plus.png"

        },
    
       "Hero Destini 125": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "Destini 125",
        engineSpecifications: "124.6cc Air-Cooled, 4-Stroke, OHC",
        fuelType: "Petrol",
        transmissionType: "Automatic",
        seatingCapacity: "2",
        priceRange: "₹75,000 - ₹85,000",
        mileageRange: "45 - 55 km/l",
        safetyFeatures: "Combi-Brake System (CBS), Side Stand Indicator",
        colorOptions: "Panther Black, Chestnut Brown, Moon Yellow, and more",
        dimensions: "1820 mm (Length), 726 mm (Width), 1153 mm (Height)",
        performanceFeatures: "Smooth Power Delivery, Easy Handling",
        interiorFeatures: "Digital Speedometer, USB Charging Port",
        exteriorFeatures: "Stylish Design, LED Tail Light, Front Disc Brake",
        warrantyAfterSalesService: "5-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Hero Destini 125.png"

        },
        
        "Hero Karizma XMR": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "Karizma XMR",
        engineSpecifications: "210cc Liquid-Cooled, 4-Stroke, DOHC",
        fuelType: "Petrol",
        transmissionType: "6-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹1,70,000 - ₹1,90,000",
        mileageRange: "30 - 35 km/l",
        safetyFeatures: "Dual-Channel ABS, LED Headlamp",
        colorOptions: "Matte Blue, Glossy Red, Black",
        dimensions: "2135 mm (Length), 810 mm (Width), 1135 mm (Height)",
        performanceFeatures: "Sporty Handling, High-Speed Stability, Dual-Channel ABS",
        interiorFeatures: "Full Digital Instrument Cluster, Smart App Connectivity",
        exteriorFeatures: "LED DRLs, Projector Headlamps, Sharp Styling",
        warrantyAfterSalesService: "5-year/50,000 km Warranty, 24/7 Roadside Assistance",
        releaseDateYear: "2024",
        imageUrl: "assets/images/vehicle_models_images/Hero Karizma XMR.png"

        },
    
        "HeroSuperSplendor": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "Super Splendor",
        engineSpecifications: "124.7cc Air-Cooled, 4-Stroke Single Cylinder OHC",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹80,000 - ₹90,000",
        mileageRange: "68-70 km/l",
        safetyFeatures: "Integrated Braking System (IBS), Drum Brakes",
        colorOptions: "Canvas Black, Dusky Black, Nexus Blue, Heavy Grey",
        dimensions: "2042 mm (Length), 740 mm (Width), 1102 mm (Height)",
        performanceFeatures: "XTEC Technology, Improved Suspension",
        interiorFeatures: "N/A",
        exteriorFeatures: "Halogen Headlamp, Stylish Graphics",
        warrantyAfterSalesService: "5-year/50,000 km Warranty",
        releaseDateYear: "2005",
        imageUrl: "assets/images/vehicle_models_images/HeroSuperSplendor.png"

        },
    
        "HeroXPulse200": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "XPulse 200",
        engineSpecifications: "199.6cc Oil-Cooled, 4-Stroke Single Cylinder OHC",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹1,25,000 - ₹1,45,000",
        mileageRange: "40-42 km/l",
        safetyFeatures: "Single-Channel ABS, Front Disc Brake",
        colorOptions: "Matte Nexus Blue, White, Black, Sports Red",
        dimensions: "2222 mm (Length), 850 mm (Width), 1258 mm (Height)",
        performanceFeatures: "Off-Road ABS, Long Travel Suspension",
        interiorFeatures: "N/A",
        exteriorFeatures: "LED Headlamp, Digital Instrument Cluster",
        warrantyAfterSalesService: "5-year/70,000 km Warranty",
        releaseDateYear: "2019",
        imageUrl: "assets/images/vehicle_models_images/HeroXPulse200.png"

        },
    
        "HeroXtreme160R": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "Xtreme 160R",
        engineSpecifications: "163cc Air-Cooled, 4-Stroke Single Cylinder OHC",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹1,10,000 - ₹1,30,000",
        mileageRange: "48-50 km/l",
        safetyFeatures: "Single-Channel ABS, Disc Brakes",
        colorOptions: "Pearl Silver White, Vibrant Blue, Matte Sports Red",
        dimensions: "2029 mm (Length), 793 mm (Width), 1052 mm (Height)",
        performanceFeatures: "Lightweight Chassis, Aggressive Styling",
        interiorFeatures: "N/A",
        exteriorFeatures: "LED Headlamp, Split Grab Rail",
        warrantyAfterSalesService: "5-year/50,000 km Warranty",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/HeroXtreme160R.png"

        },
    
        "HeroXoom110": {
        type: "Two-Wheeler",
        brand: "Hero",
        modelNameNumber: "Xoom 110",
        engineSpecifications: "110cc Air-Cooled, 4-Stroke Single Cylinder OHC",
        fuelType: "Petrol",
        transmissionType: "Automatic",
        seatingCapacity: "2",
        priceRange: "₹75,000 - ₹85,000",
        mileageRange: "55-58 km/l",
        safetyFeatures: "Integrated Braking System (IBS), Front Disc Brake",
        colorOptions: "Black, Red, Blue",
        dimensions: "1881 mm (Length), 731 mm (Width), 1110 mm (Height)",
        performanceFeatures: "XTEC Technology, Cornering Lights",
        interiorFeatures: "N/A",
        exteriorFeatures: "LED Projector Headlamp, Sporty Design",
        warrantyAfterSalesService: "5-year/50,000 km Warranty",
        releaseDateYear: "2023",
        imageUrl: "assets/images/vehicle_models_images/HeroXoom110.png"

        },
    
        "Hero Xtreme 125R": {
            "type": "Two-Wheeler",
            "brand": "Hero",
            "modelNameNumber": "Xtreme 125R",
            "engineSpecifications": "124.7cc Air-cooled, 4-Stroke, Single Cylinder",
            "fuelType": "Petrol",
            "transmissionType": "Manual",
            "seatingCapacity": "2",
            "priceRange": "₹75,000 - ₹85,000",
            "mileageRange": "50 - 55 km/l",
            "safetyFeatures": "CBS (Combi Brake System), LED Taillight",
            "colorOptions": "Red, Blue, Black, and more",
            "dimensions": "2043 mm (Length), 743 mm (Width), 1105 mm (Height)",
            "performanceFeatures": "Advanced Suspension, Smooth Gear Shifting",
            "interiorFeatures": "Digital Instrument Cluster",
            "exteriorFeatures": "Stylish Graphics, LED Headlamp",
            "warrantyAfterSalesService": "5-year Warranty, Extensive Service Network",
            "releaseDateYear": "2023",
        imageUrl: "assets/images/vehicle_models_images/Hero Xtreme 125R.png"

        },
        
        "Hero Passion Plus": {
            "type": "Two-Wheeler",
            "brand": "Hero",
            "modelNameNumber": "Passion Plus",
            "engineSpecifications": "97.2cc Air-cooled, 4-Stroke, Single Cylinder",
            "fuelType": "Petrol",
            "transmissionType": "Manual",
            "seatingCapacity": "2",
            "priceRange": "₹65,000 - ₹75,000",
            "mileageRange": "50 - 60 km/l",
            "safetyFeatures": "Combined Braking System (CBS), LED Tail Lamp",
            "colorOptions": "Black, Red, White, and more",
            "dimensions": "1985 mm (Length), 735 mm (Width), 1070 mm (Height)",
            "performanceFeatures": "Efficient Fuel Delivery, Reliable Suspension",
            "interiorFeatures": "Analog Instrument Cluster",
            "exteriorFeatures": "Stylish Body Graphics, Front Disc Brake",
            "warrantyAfterSalesService": "5-year Warranty, Trusted Service Network",
            "releaseDateYear": "2023",
        imageUrl: "assets/images/vehicle_models_images/Hero Passion Plus.png"

        },
        
        "Hero HF Deluxe": {
            "type": "Two-Wheeler",
            "brand": "Hero",
            "modelNameNumber": "HF Deluxe",
            "engineSpecifications": "97.2cc Air-cooled, 4-Stroke, Single Cylinder",
            "fuelType": "Petrol",
            "transmissionType": "Manual",
            "seatingCapacity": "2",
            "priceRange": "₹55,000 - ₹70,000",
            "mileageRange": "60 - 70 km/l",
            "safetyFeatures": "Alloy Wheels, Combi-Brake System (CBS)",
            "colorOptions": "Black, Blue, Red, and more",
            "dimensions": "1965 mm (Length), 735 mm (Width), 1050 mm (Height)",
            "performanceFeatures": "Fuel Efficient, Easy Handling",
            "interiorFeatures": "Simple Instrument Cluster",
            "exteriorFeatures": "Chiseled Design, Reflector Tail Lamp",
            "warrantyAfterSalesService": "5-year Warranty, Wide Service Network",
            "releaseDateYear": "2022",
        imageUrl: "assets/images/vehicle_models_images/Hero HF Deluxe.png"

        },
    
        "Hero Glamour": {
            "type": "Two-Wheeler",
            "brand": "Hero",
            "modelNameNumber": "Glamour",
            "engineSpecifications": "124.7cc Air-cooled, 4-Stroke, Single Cylinder",
            "fuelType": "Petrol",
            "transmissionType": "Manual",
            "seatingCapacity": "2",
            "priceRange": "₹75,000 - ₹85,000",
            "mileageRange": "55 - 60 km/l",
            "safetyFeatures": "CBS, LED Tail Lamp, Side Stand Indicator",
            "colorOptions": "Black, Blue, Red, and more",
            "dimensions": "2050 mm (Length), 760 mm (Width), 1060 mm (Height)",
            "performanceFeatures": "Smooth Engine, High Fuel Efficiency",
            "interiorFeatures": "Digital Speedometer, Smart Instrument Console",
            "exteriorFeatures": "Stylish Body Panels, LED Headlamps",
            "warrantyAfterSalesService": "5-year Warranty, Pan-India Service Network",
            "releaseDateYear": "2023",
        imageUrl: "assets/images/vehicle_models_images/Hero Glamour.png"

        },
    
        "Glamour": {
        "type": "Passenger",
        "brand": "Hero",
        "modelNameNumber": "Glamour",
        "engineSpecifications": "124.7cc Air-Cooled, Single Cylinder",
        "fuelType": "Petrol",
        "transmissionType": "5-Speed Manual",
        "seatingCapacity": "2",
        "priceRange": "₹85,000 - ₹1,00,000",
        "mileageRange": "55 - 65 km/l",
        "safetyFeatures": "Integrated Braking System (IBS), Side Stand Engine Cut-off",
        "colorOptions": "Techno Blue, Radiant Red, Midnight Black",
        "dimensions": "2051 mm (Length), 743 mm (Width), 1074 mm (Height)",
        "performanceFeatures": "i3S Technology, Digi-Analog Console",
        "interiorFeatures": "N/A (Motorcycle)",
        "exteriorFeatures": "LED Headlamp, Stylish Graphics",
        "warrantyAfterSalesService": "5-year/70,000 km Warranty",
        "releaseDateYear": "2005",
        imageUrl: "assets/images/vehicle_models_images/Glamour.png"

         },
    
        "Xtreme 160R": {
        "type": "Passenger",
        "brand": "Hero",
        "modelNameNumber": "Xtreme 160R",
        "engineSpecifications": "163cc Air-Cooled, Single Cylinder",
        "fuelType": "Petrol",
        "transmissionType": "5-Speed Manual",
        "seatingCapacity": "2",
        "priceRange": "₹1,20,000 - ₹1,35,000",
        "mileageRange": "45 - 55 km/l",
        "safetyFeatures": "Single-Channel ABS, Side Stand Engine Cut-off",
        "colorOptions": "Pearl Silver White, Vibrant Blue, Stealth Edition Black",
        "dimensions": "2029 mm (Length), 793 mm (Width), 1052 mm (Height)",
        "performanceFeatures": "Lightweight Frame, Fully Digital Console, LED Lighting",
        "interiorFeatures": "N/A (Motorcycle)",
        "exteriorFeatures": "Sporty Design, LED Headlamp and Indicators",
        "warrantyAfterSalesService": "5-year/70,000 km Warranty",
        "releaseDateYear": "2020",
        imageUrl: "assets/images/vehicle_models_images/Xtreme 160R.png"

        },
    
        "Royal Enfield Meteor 350": {
        type: "Motorcycle",
        brand: "Royal Enfield",
        modelNameNumber: "Meteor 350",
        engineSpecifications: "349 cc, Single Cylinder, Air-Oil Cooled",
        fuelType: "Petrol",
        transmissionType: "5-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹2,00,000 - ₹2,20,000",
        mileageRange: "35 km/l",
        safetyFeatures: "Dual Channel ABS, Disc Brakes",
        colorOptions: "Fireball Yellow, Stellar Red, Supernova Brown, and more",
        dimensions: "2140 mm (Length), 845 mm (Width), 1140 mm (Height)",
        performanceFeatures: "Tripper Navigation, Comfortable Touring Design",
        interiorFeatures: "Not Applicable",
        exteriorFeatures: "Halogen Headlamp, LED Tail Lamp, Alloy Wheels",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, Roadside Assistance",
        releaseDateYear: "2020",
        imageUrl: "assets/images/vehicle_models_images/Royal Enfield Meteor 350.png"

        },
        
        "Royal Enfield Interceptor 650": {
        type: "Motorcycle",
        brand: "Royal Enfield",
        modelNameNumber: "Interceptor 650",
        engineSpecifications: "648 cc, Parallel Twin, Air-Oil Cooled",
        fuelType: "Petrol",
        transmissionType: "6-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹3,00,000 - ₹3,20,000",
        mileageRange: "25 km/l",
        safetyFeatures: "Dual Channel ABS, Disc Brakes",
        colorOptions: "Orange Crush, Baker Express, Sunset Strip, and more",
        dimensions: "2122 mm (Length), 789 mm (Width), 1165 mm (Height)",
        performanceFeatures: "Smooth Twin Engine, Comfortable Upright Position",
        interiorFeatures: "Not Applicable",
        exteriorFeatures: "Round Headlamp, Teardrop Fuel Tank, Spoke Wheels",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, Roadside Assistance",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Royal Enfield Interceptor 650.png"

        },
    
        "Royal Enfield Continental GT 650": {
        type: "Motorcycle",
        brand: "Royal Enfield",
        modelNameNumber: "Continental GT 650",
        engineSpecifications: "648 cc, Parallel Twin, Air-Oil Cooled",
        fuelType: "Petrol",
        transmissionType: "6-Speed Manual",
        seatingCapacity: "2",
        priceRange: "₹3,20,000 - ₹3,50,000",
        mileageRange: "25 km/l",
        safetyFeatures: "Dual Channel ABS, Disc Brakes",
        colorOptions: "Rocker Red, British Racing Green, Mr. Clean, and more",
        dimensions: "2122 mm (Length), 789 mm (Width), 1165 mm (Height)",
        performanceFeatures: "Café Racer Styling, Responsive Handling",
        interiorFeatures: "Not Applicable",
        exteriorFeatures: "Round Headlamp, Clip-on Handlebars, Spoke Wheels",
        warrantyAfterSalesService: "3-year/Unlimited km Warranty, Roadside Assistance",
        releaseDateYear: "2018",
        imageUrl: "assets/images/vehicle_models_images/Royal Enfield Continental GT 650.png"

        },
    
        "Continental GT 650": {
        type: "Motorcycle",
        brand: "Royal Enfield",
        modelNameNumber: "Continental GT 650",  // Model Name
        engineSpecifications: "648 cc, Parallel Twin, Air-Oil Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "6-speed Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹3,05,000 - ₹3,31,000",  // Price Range
        mileageRange: "27 - 30 km/l",  // Mileage/Range
        safetyFeatures: "Dual Channel ABS, Disc Brakes",  // Safety Features
        colorOptions: "British Racing Green, Rocker Red, Ventura Storm, and more",  // Color Options
        dimensions: "2122 mm (Length), 789 mm (Width), 1024 mm (Height)",  // Dimensions
        performanceFeatures: "Twin Exhaust, High Torque Output",  // Performance Features
        interiorFeatures: "Analog Speedometer, Tripper Navigation (Optional)",  // Interior Features
        exteriorFeatures: "Cafe Racer Design, Sculpted Fuel Tank",  // Exterior Features
        warrantyAfterSalesService: "3-year Warranty, 1-year Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2018" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Continental GT 650.png"

        },
    
        "Enfield Classic 350": {
        type: "Motorcycle",
        brand: "Royal Enfield",
        modelNameNumber: "Classic 350",  // Model Name
        engineSpecifications: "349 cc, Single Cylinder, Air-Oil Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "5-speed Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,93,000 - ₹2,20,000",  // Price Range
        mileageRange: "35 - 40 km/l",  // Mileage/Range
        safetyFeatures: "Dual Channel ABS, Disc Brakes",  // Safety Features
        colorOptions: "Halcyon Green, Chrome Red, Signals Desert Sand, and more",  // Color Options
        dimensions: "2145 mm (Length), 785 mm (Width), 1090 mm (Height)",  // Dimensions
        performanceFeatures: "Refined Engine, Comfortable Riding Posture",  // Performance Features
        interiorFeatures: "Analog Speedometer, Tripper Navigation (Optional)",  // Interior Features
        exteriorFeatures: "Retro Styling, Metal Construction",  // Exterior Features
        warrantyAfterSalesService: "3-year Warranty, 1-year Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2021" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Enfield Classic 350.png"

        },
    
        "Royal Enfield Bullet 350": {
        type: "Motorcycle",
        brand: "Royal Enfield",
        modelNameNumber: "Bullet 350",  // Model Name
        engineSpecifications: "346 cc, Single Cylinder, Air Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "5-speed Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,50,000 - ₹1,80,000",  // Price Range
        mileageRange: "37 - 42 km/l",  // Mileage/Range
        safetyFeatures: "Single Channel ABS, Disc Brake (Front)",  // Safety Features
        colorOptions: "Black, Forest Green, Onyx Black",  // Color Options
        dimensions: "2170 mm (Length), 810 mm (Width), 1120 mm (Height)",  // Dimensions
        performanceFeatures: "Classic Thump, Sturdy Build",  // Performance Features
        interiorFeatures: "Analog Speedometer, Minimal Instrumentation",  // Interior Features
        exteriorFeatures: "Iconic Design, Pinstripe Fuel Tank",  // Exterior Features
        warrantyAfterSalesService: "2-year Warranty",  // Warranty & After-Sales Service
        releaseDateYear: "1948 (Initial), Updated Regularly",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Royal Enfield Bullet 350.png"

        },
        
        "Classic 350": {
            type: "Bike",
            brand: "Royal Enfield",
            engineSpecifications: "349cc, Air/Oil-Cooled, Single-Cylinder Engine",
            fuelType: "Petrol",
            transmissionType: "5-Speed Manual",
            seatingCapacity: "2",
            priceRange: "₹1,90,000 - ₹2,20,000",
            mileageRange: "35 - 40 km/l",
            safetyFeatures: "Dual-Channel ABS, Disc Brakes",
            colorOptions: "Chrome Red, Halcyon Black, Signals Marsh Grey, and more",
            dimensions: "2145 mm (Length), 785 mm (Width), 1090 mm (Height)",
            performanceFeatures: "Smooth Gear Shifting, Enhanced Stability",
            releaseDateYear: "2021",  // Latest model update
        imageUrl: "assets/images/vehicle_models_images/Classic 350.png"

        },
        
        "Bullet 350": {
            type: "Bike",
            brand: "Royal Enfield",
            engineSpecifications: "346cc, Single-Cylinder Engine",
            fuelType: "Petrol",
            transmissionType: "5-Speed Manual",
            seatingCapacity: "2",
            priceRange: "₹1,50,000 - ₹1,90,000",
            mileageRange: "37 - 40 km/l",
            safetyFeatures: "Single-Channel ABS, Disc and Drum Brakes",
            colorOptions: "Black, Bullet Silver, Regal Red, and more",
            dimensions: "2170 mm (Length), 810 mm (Width), 1120 mm (Height)",
            performanceFeatures: "Iconic Thump Sound, Reliable Performance",
            releaseDateYear: "2019",  // Latest model update
        imageUrl: "assets/images/vehicle_models_images/Bullet 350.png"

        },
    
        "Meteor 350": {
            type: "Bike",
            brand: "Royal Enfield",
            engineSpecifications: "349cc, Air/Oil-Cooled, Single-Cylinder Engine",
            fuelType: "Petrol",
            transmissionType: "5-Speed Manual",
            seatingCapacity: "2",
            priceRange: "₹2,00,000 - ₹2,25,000",
            mileageRange: "35 - 40 km/l",
            safetyFeatures: "Dual-Channel ABS, Disc Brakes",
            colorOptions: "Fireball Yellow, Stellar Blue, Supernova Brown, and more",
            dimensions: "2140 mm (Length), 845 mm (Width), 1140 mm (Height)",
            performanceFeatures: "Cruise Comfort, Refined Engine",
            releaseDateYear: "2020",  // Latest model update
        imageUrl: "assets/images/vehicle_models_images/Meteor 350.png"

        },
    
        "Interceptor 650": {
            type: "Bike",
            brand: "Royal Enfield",
            engineSpecifications: "648cc, Parallel-Twin Engine",
            fuelType: "Petrol",
            transmissionType: "6-Speed Manual",
            seatingCapacity: "2",
            priceRange: "₹3,00,000 - ₹3,20,000",
            mileageRange: "25 - 30 km/l",
            safetyFeatures: "Dual-Channel ABS, Disc Brakes",
            colorOptions: "Orange Crush, Baker Express, Mark Two, and more",
            dimensions: "2122 mm (Length), 789 mm (Width), 1165 mm (Height)",
            performanceFeatures: "High Torque, Smooth Power Delivery",
            releaseDateYear: "2018",  // Latest model update
        imageUrl: "assets/images/vehicle_models_images/Interceptor 650.png"

        },
    
        "Activa": {
        "type": "Two-Wheeler",
        "brand": "Honda",
        "modelNameNumber": "Activa Series",  // Series Name (Activa 6G, Activa 125, etc.)
        "engineSpecifications": "109.51cc BS6 Petrol Engine",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Automatic",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹75,000 - ₹85,000",  // Price Range
        "mileageRange": "45 - 50 km/l",  // Mileage/Range
        "safetyFeatures": "CBS with Equalizer, LED Headlamp",  // Safety Features
        "colorOptions": "Black, Pearl White, Red, Grey, and more",  // Color Options
        "dimensions": "1833 mm (Length), 697 mm (Width), 1156 mm (Height)",  // Dimensions
        "performanceFeatures": "Silent Start, Enhanced Smart Tumble Technology",  // Performance Features
        "interiorFeatures": "Digital-Analog Meter, External Fuel Lid",  // Interior Features
        "exteriorFeatures": "Stylish LED Headlamps, Chrome Highlights",  // Exterior Features
        "warrantyAfterSalesService": "3-year Warranty, Optional Extended Warranty",  // Warranty & After-Sales Service
        "releaseDateYear": "2000",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Activa.png"

        },
    
        "Shine": {
        "type": "Two-Wheeler",
        "brand": "Honda",
        "modelNameNumber": "Shine 125",  // Model Name Number
        "engineSpecifications": "124cc BS6 Petrol Engine",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual, 5-speed Gearbox",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹80,000 - ₹90,000",  // Price Range
        "mileageRange": "55 - 60 km/l",  // Mileage/Range
        "safetyFeatures": "CBS with Equalizer, Disc/Drum Brakes",  // Safety Features
        "colorOptions": "Black, Grey, Red, Blue",  // Color Options
        "dimensions": "2046 mm (Length), 737 mm (Width), 1116 mm (Height)",  // Dimensions
        "performanceFeatures": "Enhanced Smart Power, Silent Start Technology",  // Performance Features
        "interiorFeatures": "Digital-Analog Meter, Comfortable Seat",  // Interior Features
        "exteriorFeatures": "Chrome Highlights, Stylish Graphics",  // Exterior Features
        "warrantyAfterSalesService": "3-year Warranty, Optional Extended Warranty",  // Warranty & After-Sales Service
        "releaseDateYear": "2006" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Shine.png"

        },
    
        "CBR 250R": {
        "type": "Two-Wheeler",
        "brand": "Honda",
        "modelNameNumber": "CBR 250R",  // Model Name Number
        "engineSpecifications": "249cc DOHC BS6 Petrol Engine",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual, 6-speed Gearbox",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹1,65,000 - ₹2,00,000",  // Price Range
        "mileageRange": "35 - 40 km/l",  // Mileage/Range
        "safetyFeatures": "Dual Channel ABS, Disc Brakes",  // Safety Features
        "colorOptions": "Black, Red, Yellow, Grey",  // Color Options
        "dimensions": "2030 mm (Length), 720 mm (Width), 1127 mm (Height)",  // Dimensions
        "performanceFeatures": "Sporty Handling, Liquid-Cooled Engine",  // Performance Features
        "interiorFeatures": "Digital Console, Aerodynamic Windshield",  // Interior Features
        "exteriorFeatures": "Sporty Graphics, LED DRLs",  // Exterior Features
        "warrantyAfterSalesService": "2-year Warranty, Optional Extended Warranty",  // Warranty & After-Sales Service
        "releaseDateYear": "2011",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/CBR 250R.png"

        },
    
        "CB Shine SP": {
        "type": "Two-Wheeler",
        "brand": "Honda",
        "modelNameNumber": "CB Shine SP",  // Model Name Number
        "engineSpecifications": "124cc BS6 Petrol Engine",  // Engine Specifications
        "fuelType": "Petrol",  // Fuel Type
        "transmissionType": "Manual, 5-speed Gearbox",  // Transmission Type
        "seatingCapacity": "2",  // Seating Capacity
        "priceRange": "₹85,000 - ₹95,000",  // Price Range
        "mileageRange": "55 - 60 km/l",  // Mileage/Range
        "safetyFeatures": "CBS with Equalizer, Disc/Drum Brakes",  // Safety Features
        "colorOptions": "Black, Red, Grey, Blue",  // Color Options
        "dimensions": "2007 mm (Length), 762 mm (Width), 1085 mm (Height)",  // Dimensions
        "performanceFeatures": "Smooth Gear Shifts, Silent Start",  // Performance Features
        "interiorFeatures": "Digital-Analog Meter, Spacious Seat",  // Interior Features
        "exteriorFeatures": "Chrome Highlights, Stylish Graphics",  // Exterior Features
        "warrantyAfterSalesService": "3-year Warranty, Optional Extended Warranty",  // Warranty & After-Sales Service
        "releaseDateYear": "2015" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/CB Shine SP.png"

        },
    
        "Apache RTR 180": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "RTR 180", 
        "engineSpecifications": "177.4 cc, Single-cylinder, 4-stroke",
        "fuelType": "Petrol",  
        "transmissionType": "5-speed Manual",  
        "seatingCapacity": "2",  
        "priceRange": "₹1,32,000 - ₹1,36,000",  
        "mileageRange": "40 - 45 km/l",  
        "safetyFeatures": "Single-channel ABS, Rear Lift Protection",
        "colorOptions": "Pearl White, Gloss Black, T Grey",  
        "dimensions": "2085 mm (Length), 730 mm (Width), 1105 mm (Height)",  
        "performanceFeatures": "Race-Tuned Fuel Injection, Glide Through Technology",
        "interiorFeatures": "Digital Instrument Console, SmartXonnect Connectivity",  
        "exteriorFeatures": "LED DRLs, Sculpted Tank, Race-Inspired Graphics",  
        "warrantyAfterSalesService": "5-year Warranty, Extensive Dealer Network",  
        "releaseDateYear": "2009",
        imageUrl: "assets/images/vehicle_models_images/Apache RTR 180.png"

        },
    
        "Apache RR 310": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "RR 310", 
        "engineSpecifications": "312.2 cc, Single-cylinder, Liquid-cooled",
        "fuelType": "Petrol",  
        "transmissionType": "6-speed Manual",  
        "seatingCapacity": "2",  
        "priceRange": "₹2,72,000 - ₹2,85,000",  
        "mileageRange": "30 - 35 km/l",  
        "safetyFeatures": "Dual-channel ABS, Slipper Clutch",
        "colorOptions": "Titanium Black, Racing Red",  
        "dimensions": "2001 mm (Length), 786 mm (Width), 1135 mm (Height)",  
        "performanceFeatures": "Ride-by-Wire, Track Tuned Suspension, Bi-LED Projector Headlights",
        "interiorFeatures": "5-inch TFT Display, SmartXonnect System",  
        "exteriorFeatures": "Aerodynamic Fairing, Race-Inspired Design, LED Taillamps",  
        "warrantyAfterSalesService": "5-year Warranty, Nationwide Service Centers",  
        "releaseDateYear": "2017",
        imageUrl: "assets/images/vehicle_models_images/Apache RR 310.png"

        },
    
        "Raider 125": {
        "type": "Motorcycle",
        "brand": "TVS",
        "modelNameNumber": "Raider 125", 
        "engineSpecifications": "124.8 cc, Single-cylinder, 3-valve Engine",
        "fuelType": "Petrol",  
        "transmissionType": "5-speed Manual",  
        "seatingCapacity": "2",  
        "priceRange": "₹97,000 - ₹1,10,000",  
        "mileageRange": "55 - 60 km/l",  
        "safetyFeatures": "Synchronized Braking Technology (SBT)",
        "colorOptions": "Striking Red, Blazing Blue, Wicked Black",  
        "dimensions": "2070 mm (Length), 785 mm (Width), 1028 mm (Height)",  
        "performanceFeatures": "Eco and Power Modes, Reverse LCD Cluster",
        "interiorFeatures": "Digital Console, USB Charging Port",  
        "exteriorFeatures": "LED Headlamp, Sporty Design",  
        "warrantyAfterSalesService": "5-year Warranty, Pan-India Service Centers",  
        "releaseDateYear": "2021",
        imageUrl: "assets/images/vehicle_models_images/Raider 125.png"

        },
    
        "Ntorq": {
        "type": "Scooter",
        "brand": "TVS",
        "modelNameNumber": "Ntorq 125", 
        "engineSpecifications": "124.8 cc, Single-cylinder, Air-cooled",
        "fuelType": "Petrol",  
        "transmissionType": "CVT Automatic",  
        "seatingCapacity": "2",  
        "priceRange": "₹87,000 - ₹1,05,000",  
        "mileageRange": "40 - 50 km/l",  
        "safetyFeatures": "Synchronized Braking System (SBS)",
        "colorOptions": "Red, Yellow, Black, Blue, Metallic Grey",  
        "dimensions": "1861 mm (Length), 710 mm (Width), 1164 mm (Height)",  
        "performanceFeatures": "SmartXonnect Bluetooth Connectivity, Race Tuned Suspension",
        "interiorFeatures": "Digital Display, USB Charger",  
        "exteriorFeatures": "LED Headlamp, Signature LED DRLs",  
        "warrantyAfterSalesService": "5-year Warranty, Extensive Dealer Network",  
        "releaseDateYear": "2018",
        imageUrl: "assets/images/vehicle_models_images/Ntorq.png"

         },
    
        "Jupiter": {
        "type": "Scooter",
        "brand": "TVS",
        "modelNameNumber": "Jupiter", 
        "engineSpecifications": "109.7 cc, Single-cylinder, Air-cooled",
        "fuelType": "Petrol",  
        "transmissionType": "CVT Automatic",  
        "seatingCapacity": "2",  
        "priceRange": "₹75,000 - ₹85,000",  
        "mileageRange": "55 - 60 km/l",  
        "safetyFeatures": "Synchronized Braking System (SBS)",
        "colorOptions": "Royal Wine, Starlight Blue, Midnight Black",  
        "dimensions": "1834 mm (Length), 650 mm (Width), 1115 mm (Height)",  
        "performanceFeatures": "ETFi Technology, Smooth Suspension",
        "interiorFeatures": "External Fuel Filler Cap, Digital Analog Speedometer",  
        "exteriorFeatures": "LED Headlamp, Metal Body Panels",  
        "warrantyAfterSalesService": "5-year Warranty, TVS Service Support",  
        "releaseDateYear": "2013",
        imageUrl: "assets/images/vehicle_models_images/Jupiter.png"

        },
    
        "ApacheRTR160": {
        type: "Two-Wheeler",
        brand: "TVS",
        modelNameNumber: "Apache RTR 160",
        engineSpecifications: "159.7cc, 4-Stroke, SI Engine, Oil-Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual, 5-Speed",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,19,000 - ₹1,30,000",  // Price Range
        mileageRange: "45 - 50 km/l",  // Mileage/Range
        safetyFeatures: "ABS, Tubeless Tyres, Disc Brakes",  // Safety Features
        colorOptions: "Racing Red, Matte Blue, Gloss Black, Pearl White, and more",  // Color Options
        dimensions: "2045 mm (Length), 790 mm (Width), 1050 mm (Height)",  // Dimensions
        performanceFeatures: "RTR Engine, Lightweight Chassis, Race-Tuned Suspension",  // Performance Features
        interiorFeatures: "Digital Instrument Cluster with Lap Timer",  // Interior Features
        exteriorFeatures: "LED DRLs, Aerodynamic Design, Muscular Tank",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Widespread Service Network",  // Warranty & After-Sales Service
        releaseDateYear: "2005" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/ApacheRTR160.png"

        },
    
        "Gixxer 150": {
        type: "Motorcycle",
        brand: "Suzuki",
        modelNameNumber: "Gixxer 150",  // Model Name Number
        engineSpecifications: "154.9cc, Single Cylinder, Air-cooled, SOHC",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual (5-speed)",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,15,000 - ₹1,25,000",  // Price Range
        mileageRange: "45 - 50 km/l",  // Mileage/Range
        safetyFeatures: "Dual Disc Brakes, ABS (Anti-lock Braking System)",  // Safety Features
        colorOptions: "Matte Black, Candy Sonic Silver, Glass Sparkle Black, and more",  // Color Options
        dimensions: "2050 mm (Length), 785 mm (Width), 1035 mm (Height)",  // Dimensions
        performanceFeatures: "Sporty Design, Tubeless Tires, Lightweight Frame",  // Performance Features
        interiorFeatures: "Digital Instrument Cluster, LED Tail Light",  // Interior Features
        exteriorFeatures: "LED Headlamp, Sporty Muffler, Split Seat",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2014"  ,// Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Gixxer 150.png"

        },
    
        "Access 125": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "Access 125",  // Model Name Number
        engineSpecifications: "124.8cc, 4-Stroke, Single Cylinder",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "CVT (Continuously Variable Transmission)",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹75,000 - ₹95,000",  // Price Range
        mileageRange: "50 - 55 km/l",  // Mileage/Range
        safetyFeatures: "CBS (Combined Braking System), Tubeless Tyres, Side-Stand Indicator",  // Safety Features
        colorOptions: "Pearl White, Matte Blue, Glossy Black, Heavy Grey, and more",  // Color Options
        dimensions: "1870 mm (Length), 685 mm (Width), 1160 mm (Height)",  // Dimensions
        performanceFeatures: "Fuel Efficient Engine, Smooth Ride, Light Handling",  // Performance Features
        interiorFeatures: "Digital Instrument Cluster, Smartphone Connectivity, Storage Space",  // Interior Features
        exteriorFeatures: "Stylish LED Tail Lamp, Front Disc Brake, Sleek Body Design",  // Exterior Features
        warrantyAfterSalesService: "5-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2007"  ,// Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Access 125.png"

        },
    
        "V-Strom": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "V-Strom",  // Model Name Number
        engineSpecifications: "2.0L Turbocharged Petrol",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual/Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹10,00,000 - ₹15,00,000",  // Price Range
        mileageRange: "14 - 18 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",  // Safety Features
        colorOptions: "Pearl White, Metallic Black, Dark Blue, Silver, and more",  // Color Options
        dimensions: "4430 mm (Length), 1835 mm (Width), 1635 mm (Height)",  // Dimensions
        performanceFeatures: "Turbocharged Engine, All-Wheel Drive, Sports Mode",  // Performance Features
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Digital Instrument Cluster",  // Interior Features
        exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof, Fog Lamps",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2024" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/V-Strom.png"

        },
    
        "Hayabusa": {
        type: "Motorcycle",
        brand: "Suzuki",
        modelNameNumber: "Hayabusa",  // Model Name Number
        engineSpecifications: "1340cc Inline-4, Liquid-Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "6-Speed Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹16,00,000 - ₹20,00,000",  // Price Range
        mileageRange: "15 - 20 km/l",  // Mileage/Range
        safetyFeatures: "Dual Channel ABS, Traction Control, Anti-lift Control",  // Safety Features
        colorOptions: "Glass Sparkle Black, Metallic Oort Grey, Pearl Brilliant White",  // Color Options
        dimensions: "2205 mm (Length), 770 mm (Width), 1165 mm (Height)",  // Dimensions
        performanceFeatures: "1340cc Engine, Electronic Fuel Injection, Advanced Aerodynamics",  // Performance Features
        interiorFeatures: "Instrument Cluster with LCD Display, Multi-function Display",  // Interior Features
        exteriorFeatures: "Aerodynamic Bodywork, LED Lighting, Dual Exhausts",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2021"  ,// Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Hayabusa.png"

        },
    
        "Ather 450X": {
        type: "Electric",
        brand: "Ather",
        modelNameNumber: "450X",  // Model Name Number
        engineSpecifications: "Electric Motor, 6 kW Power Output",  // Engine Specifications
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,30,000 - ₹1,40,000",  // Price Range
        mileageRange: "70 - 85 km per charge",  // Mileage/Range
        safetyFeatures: "Regenerative Braking, Anti-theft System, Reverse Assist",  // Safety Features
        colorOptions: "Space Grey, White, Green, and more",  // Color Options
        dimensions: "1830 mm (Length), 700 mm (Width), 1150 mm (Height)",  // Dimensions
        performanceFeatures: "Fast Charging, 6 kW Power Output, 85 km Range",  // Performance Features
        interiorFeatures: "Touchscreen Dashboard, Smartphone Connectivity, Bluetooth",  // Interior Features
        exteriorFeatures: "LED Headlights, Sleek Body Design, Tubeless Tires",  // Exterior Features
        warrantyAfterSalesService: "3-year/30,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Ather 450X.png"

        },
    
        "Ather 450": {
        type: "Electric",  // Vehicle Type
        brand: "Ather",  // Brand
        modelNameNumber: "450",  // Model Name Number
        engineSpecifications: "Electric Motor, 6 kW peak power",  // Engine Specifications
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic (Single Speed)",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,20,000 - ₹1,40,000",  // Price Range
        mileageRange: "75 - 85 km per charge",  // Mileage/Range
        safetyFeatures: "LED Headlamps, Regenerative Braking, Smart Battery Management System",  // Safety Features
        colorOptions: "Mint, Matte Grey, White",  // Color Options
        dimensions: "1844 mm (Length), 707 mm (Width), 1250 mm (Height)",  // Dimensions
        performanceFeatures: "Fast Charging, Connected Features, Smart Display",  // Performance Features
        interiorFeatures: "Touchscreen Dashboard, Navigation, Bluetooth Connectivity",  // Interior Features
        exteriorFeatures: "Stylish Body Design, LED Tail Lamps, Modern Front Design",  // Exterior Features
        warrantyAfterSalesService: "3-year/30,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2018" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Ather 450.png"

        },
    
        "Ola Electric": {
        type: "Electric Passenger",
        brand: "Ola",
        modelNameNumber: "S1 Pro",  // Model Name Number (Example)
        engineSpecifications: "Single Motor, 8.5 kW",  // Engine Specifications
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,30,000 - ₹1,50,000",  // Price Range
        mileageRange: "181 km per charge",  // Mileage/Range
        safetyFeatures: "SIP (Safety Impact Protection), Regenerative Braking, Anti-theft System",  // Safety Features
        colorOptions: "Black, White, Blue, Red, and more",  // Color Options
        dimensions: "1850 mm (Length), 725 mm (Width), 1250 mm (Height)",  // Dimensions
        performanceFeatures: "Maximum Speed: 115 km/h, 0-40 km/h in 3.6 seconds",  // Performance Features
        interiorFeatures: "Touchscreen Infotainment, Navigation, Smartphone Connectivity",  // Interior Features
        exteriorFeatures: "LED Headlamps, Rearview Camera, Alloy Wheels",  // Exterior Features
        warrantyAfterSalesService: "3-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2021" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Ola Electric.png"

        },
    
        "Ola S1 Pro": {
        type: "Electric",
        brand: "Ola",
        modelNameNumber: "S1 Pro",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "Motor: 8.5 kW, Peak Power: 8.5 kW",  // Engine Specifications
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,30,000 - ₹1,50,000",  // Price Range
        mileageRange: "135 - 170 km/charge",  // Mileage/Range
        safetyFeatures: "Dual-channel ABS, Regenerative Braking, Anti-theft alarm",  // Safety Features
        colorOptions: "Matted Black, Neo Mint, Jet Black, Silver, White, and more",  // Color Options
        dimensions: "1920 mm (Length), 850 mm (Width), 1150 mm (Height)",  // Dimensions
        performanceFeatures: "Top Speed: 115 km/h, 0-40 km/h in 3 seconds, 8.5 kW Motor",  // Performance Features
        interiorFeatures: "Fully Digital Dashboard, Smart Navigation, Customizable Ride Modes",  // Interior Features
        exteriorFeatures: "LED Headlamps, Sporty Design, Anti-theft Lock",  // Exterior Features
        warrantyAfterSalesService: "3-year/50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2021"  ,// Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Ola S1 Pro.png"

        },
    
        "Ola S1": {
        type: "Electric",
        brand: "Ola",
        modelNameNumber: "S1",  // Model Name Number
        engineSpecifications: "Mid-Drive Motor, 8.5 kW Power",  // Engine Specifications
        fuelType: "Electric",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,00,000 - ₹1,30,000",  // Price Range
        mileageRange: "141 - 181 km/charge",  // Mileage/Range
        safetyFeatures: "Combined Braking System, Anti-theft Alarm, Remote Locking",  // Safety Features
        colorOptions: "Jet Black, Neo Mint, Coral Glam, Liquid Silver",  // Color Options
        dimensions: "1859 mm (Length), 700 mm (Width), 1150 mm (Height)",  // Dimensions
        performanceFeatures: "High-Performance Motor, Reverse Mode, Ride Modes (Eco, Normal, Sport)",  // Performance Features
        interiorFeatures: "7-inch Touchscreen, Bluetooth Connectivity, Smartphone App Integration",  // Interior Features
        exteriorFeatures: "LED Headlamps, DRLs, Rear Disc Brakes",  // Exterior Features
        warrantyAfterSalesService: "3-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2021" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Ola S1.png"

        },
    
        "Suzuki Intruder 150": {
        type: "Motorcycle",
        brand: "Suzuki",
        modelNameNumber: "Intruder 150",  // Model Name Number (Example, update as per your data)
        engineSpecifications: "154.9cc Single Cylinder, Air-cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,30,000 - ₹1,50,000",  // Price Range
        mileageRange: "40 - 45 km/l",  // Mileage/Range
        safetyFeatures: "Dual Disc Brakes, ABS, Tubeless Tires",  // Safety Features
        colorOptions: "Metallic Matte Black, Glass Sparkle Black, and more",  // Color Options
        dimensions: "2230 mm (Length), 805 mm (Width), 1195 mm (Height)",  // Dimensions
        performanceFeatures: "Powerful 154.9cc Engine, Smooth Ride, Comfortable Ergonomics",  // Performance Features
        interiorFeatures: "LED Tail Light, Digital Speedometer, Anti-Theft System",  // Interior Features
        exteriorFeatures: "Aggressive Styling, Chrome Finish, Stylish Alloy Wheels",  // Exterior Features
        warrantyAfterSalesService: "2-year/30,000 km Warranty, Suzuki Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2018" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Suzuki Intruder 150.png"

        },
        
        "Burgman Street 125": {
        type: "Passenger",
        brand: "Suzuki",
        modelNameNumber: "Burgman Street 125",  // Model Name Number
        engineSpecifications: "124cc, Single-cylinder, Air-cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "Automatic",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹1,10,000 - ₹1,25,000",  // Price Range
        mileageRange: "40 - 45 km/l",  // Mileage/Range
        safetyFeatures: "Disc Brakes, Combined Braking System (CBS), LED Tail Lamp",  // Safety Features
        colorOptions: "Metallic Matte Fibroin Grey, Glass Sparkle Black, Pearl Mirage White, and more",  // Color Options
        dimensions: "1880 mm (Length), 675 mm (Width), 1160 mm (Height)",  // Dimensions
        performanceFeatures: "LED Headlamps, Bluetooth Connectivity, Smart Storage",  // Performance Features
        interiorFeatures: "Digital Instrument Cluster, Spacious Under-Seat Storage",  // Interior Features
        exteriorFeatures: "LED Headlamps, Sleek Design, Chrome Detailing",  // Exterior Features
        warrantyAfterSalesService: "2-year Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2018",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Burgman Street 125.png"

        },
    
        "V-Strom 650": {
        type: "Motorcycle",  // Type
        brand: "Suzuki",  // Brand
        modelNameNumber: "V-Strom 650",  // Model Name Number
        engineSpecifications: "645cc V-Twin, 4-Stroke, Liquid Cooled",  // Engine Specifications
        fuelType: "Petrol",  // Fuel Type
        transmissionType: "6-Speed Manual",  // Transmission Type
        seatingCapacity: "2",  // Seating Capacity
        priceRange: "₹7,50,000 - ₹9,00,000",  // Price Range
        mileageRange: "20 - 25 km/l",  // Mileage/Range
        safetyFeatures: "ABS, Traction Control System, Low RPM Assist",  // Safety Features
        colorOptions: "Glass Sparkle Black, Champion Yellow, Pearl Glacier White, and more",  // Color Options
        dimensions: "2275 mm (Length), 880 mm (Width), 1405 mm (Height)",  // Dimensions
        performanceFeatures: "Adventure Touring, Adjustable Windscreen, Comfortable Ride",  // Performance Features
        interiorFeatures: "Digital Instrument Cluster, LED Lighting, Multi-function Display",  // Interior Features
        exteriorFeatures: "Aluminium Handguards, High-mounted Exhaust, Twin LED Headlights",  // Exterior Features
        warrantyAfterSalesService: "2-year/40,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2004",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/V-Strom 650.png"

        },
    
        "Classic": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "Classic",  // Model Name Number
        engineSpecifications: "1.2L Petrol, 1.5L Diesel",  // Engine Specifications
        fuelType: "Petrol/Diesel",  // Fuel Type
        transmissionType: "Manual",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹7,00,000 - ₹12,00,000",  // Price Range
        mileageRange: "15 - 20 km/l",  // Mileage/Range
        safetyFeatures: "Dual Airbags, ABS with EBD, Reverse Parking Sensors",  // Safety Features
        colorOptions: "Spice Red, Royal Blue, Pearlescent White, Midnight Black",  // Color Options
        dimensions: "3800 mm (Length), 1700 mm (Width), 1500 mm (Height)",  // Dimensions
        performanceFeatures: "Compact Design, Fuel Efficiency, Smooth Handling",  // Performance Features
        interiorFeatures: "Basic Infotainment System, Fabric Upholstery, Manual AC",  // Interior Features
        exteriorFeatures: "Halogen Headlamps, Body-colored Bumpers, Steel Wheels",  // Exterior Features
        warrantyAfterSalesService: "3-year/1,00,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2020",  // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Classic.png"

        },
    
    
        "Java 42": {
        type: "Passenger",
        brand: "Tata",
        modelNameNumber: "Java 42",  // Model Name Number
        engineSpecifications: "1.5L Petrol, 2.0L Diesel",  // Engine Specifications (Example)
        fuelType: "Petrol/Diesel",  // Fuel Type
        transmissionType: "Manual/Automatic",  // Transmission Type
        seatingCapacity: "5",  // Seating Capacity
        priceRange: "₹7,50,000 - ₹12,00,000",  // Price Range
        mileageRange: "16 - 20 km/l",  // Mileage/Range
        safetyFeatures: "6 Airbags, ABS with EBD, ESC, Hill Assist",  // Safety Features
        colorOptions: "Jet Black, Ocean Blue, Urban Silver, Arctic White, and more",  // Color Options
        dimensions: "3995 mm (Length), 1820 mm (Width), 1600 mm (Height)",  // Dimensions
        performanceFeatures: "Turbocharged Engine, Multi-Drive Modes, Sports Mode",  // Performance Features
        interiorFeatures: "Touchscreen Infotainment, Leather Upholstery, Digital Instrument Cluster",  // Interior Features
        exteriorFeatures: "LED DRLs, Projector Headlamps, Dual-tone Roof, Fog Lamps",  // Exterior Features
        warrantyAfterSalesService: "5-year/1,50,000 km Warranty, 24/7 Roadside Assistance",  // Warranty & After-Sales Service
        releaseDateYear: "2024" , // Release Date/Year
        imageUrl: "assets/images/vehicle_models_images/Java 42.png"

        },

"Harrier": {
    type: "Passenger",
    brand: "Tata",
    description: "Premium SUV with powerful engine and spacious interior.",
    features: ["Leather Seats", "Panoramic Sunroof", "Cruise Control"],
    modelNameNumber: "Tata Harrier XZA+ Dark Edition",  
    engineSpecifications: "2.0L Kryotec Turbocharged Diesel Engine, 1956cc, 170 PS, 350 Nm",  
    fuelType: "Diesel",  
    transmissionType: "6-speed Automatic and Manual",  
    seatingCapacity: "5",  
    priceRange: "₹15.49 Lakh - ₹24.49 Lakh (ex-showroom)",  
    mileageRange: "16.35 km/l - 17.05 km/l",  
    safetyFeatures: "6 Airbags, ABS with EBD, ESP, Hill Hold Assist, Roll-Over Mitigation",  
    colorOptions: "Atlas Black, Orcus White, Tropical Mist, Daytona Grey, Royale Blue, and Calypso Red",  
    dimensions: "Length: 4598 mm, Width: 1894 mm, Height: 1706 mm, Wheelbase: 2741 mm",  
    performanceFeatures: "Drive Modes (Eco, City, Sport), Multi Drive 2.0, Advanced Terrain Response System",  
    interiorFeatures: "Leather Upholstery, 8.8-inch Infotainment System, Ambient Lighting, JBL Sound System",  
    exteriorFeatures: "LED DRLs, Dual-function LED Headlamps, 18-inch Diamond-Cut Alloy Wheels, Panoramic Sunroof",  
    warrantyAfterSalesService: "2 years/unlimited km warranty with extended options and reliable service network",  
    releaseDateYear: "2023",  
    imageUrl: "assets/images/vehicle_models_images/Harrier.png"
},

    "Mahindra XEV 9e": {
      "type": "Electric",
      "brand": "Mahindra",
      "description": "Innovative electric SUV with futuristic design and technology.",
      "features": ["Long-range Battery", "Connected Features", "Fast Charging"],
      "modelNameNumber": "Mahindra XEV 9e Flagship",
      "engineSpecifications": "Dual Electric Motors, 400 km Range, 150 kW",
      "fuelType": "Electric",
      "transmissionType": "Single-speed Automatic",
      "seatingCapacity": "5",
      "priceRange": "₹35.00 Lakh (estimated)",
      "mileageRange": "400 km (range)",
      "safetyFeatures": "ADAS, 6 Airbags, ABS with EBD, Lane Keep Assist",
      "colorOptions": "White Pearl, Electric Blue, Midnight Black",
      "dimensions": "Length: 4600 mm, Width: 1900 mm, Height: 1680 mm, Wheelbase: 2750 mm",
      "performanceFeatures": "Dual Motor AWD, Regenerative Braking, Drive Modes",
      "interiorFeatures": "AI-enabled Infotainment, Premium Upholstery, Ambient Lighting",
      "exteriorFeatures": "LED Light Bar, Aerodynamic Design, 19-inch Alloys",
      "warrantyAfterSalesService": "8 years/1,60,000 km battery warranty",
      "releaseDateYear": "2024",
      "imageUrl": "assets/images/vehicle_models_images/Mahindra_XEV_9e.png"
    },

    // Add more vehicle models as needed

};


// script.js

// Remove "populateYears" function, year-related dropdown code, and fuel-type related code

// Generalized function for populating dropdown options

function populateDropdown(selectElement, options, placeholder) {
    selectElement.innerHTML = `<option value=''>${placeholder}</option>`;
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// 3 dots and lines for mobile phones

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

// Event listeners for cascading filters

document.getElementById("vehicle-type").addEventListener("change", function() {
    const selectedType = this.value;
    const vehicleBrandSelect = document.getElementById("vehicle-brand");
    vehicleBrandSelect.innerHTML = "<option value=''>Select Brand</option>";
    if (selectedType && data.vehicleBrands[selectedType]) {
        populateDropdown(vehicleBrandSelect, data.vehicleBrands[selectedType], "Select Brand");
        vehicleBrandSelect.disabled = false;
    } else {
        vehicleBrandSelect.disabled = true;
    }
});

// Handle brand selection

document.getElementById("vehicle-brand").addEventListener("change", function() {
    const selectedBrand = this.value;
    const vehicleModelSelect = document.getElementById("vehicle-model");
    vehicleModelSelect.innerHTML = "<option value=''>Select Model</option>";
    if (selectedBrand && data.vehicleModels[selectedBrand]) {
        populateDropdown(vehicleModelSelect, data.vehicleModels[selectedBrand], "Select Model");
        vehicleModelSelect.disabled = false;
    } else {
        vehicleModelSelect.disabled = true;
    }
});


// Visitor count functionality (mocked for demonstration)

let visitorCount = localStorage.getItem("visitorCount") || 0;
visitorCount++;
localStorage.setItem("visitorCount", visitorCount);

// Mock data for vehicle stats (Replace with actual data if available)

const vehicleStats = {
    types: 5,
    brands: 42,
    models: 351
};

// Update the footer with dynamic data

window.addEventListener("DOMContentLoaded", () => {

    // Update visitor count

    const visitorCountElement = document.getElementById("visitor-count");
    visitorCountElement.querySelector("span").textContent = visitorCount;

    // Update vehicle stats

    document.getElementById("vehicle-types").textContent = vehicleStats.types;
    document.getElementById("vehicle-brands").textContent = vehicleStats.brands;
    document.getElementById("vehicle-models").textContent = vehicleStats.models;
});
