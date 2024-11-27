const data = {

    vehicleTypes: {

        vehicletype: ["Commercial Vehicles", "Luxury and Premium Vehicles", "Passenger Vehicles", "Tractor and Farm Equipment", "Two Wheeler"],
    },

    vehicleBrands: {
        
        "Commercial Vehicles": ["Ashok Leyland", "Eicher Motors", "Tata Motors", "Force Motors"],
        
        "Luxury and Premium Vehicles": ["Audi India", "BMW India", "Jaguar Land Rover India", "Mercedes-Benz India", "Volvo Auto India"],
        
        "Passenger Vehicles": ["Fiat India Automobiles Pvt. Ltd", "Honda Cars India", "Hyundai Motor India Ltd", "Kia Motors India", "Maruti Suzuki India Ltd", "Nissan Motor India", "Skoda Auto India", "Toyota Kirloskar Motor", "Volkswagen India"],
        
        "Tractor and Farm Equipment": ["TAFE (Tractors and Farm Equipment Limited)", "Sonalika Tractors", "New Holland Agriculture India", "Mahindra Tractors", "John Deere India"],
        
        "Two Wheeler": ["Yamaha Motor India", "TVS Motor Company", "Suzuki Motorcycle India", "Royal Enfield", "Honda Motorcycle & Scooter", "Hero MotoCorp", "Bajaj Auto"]

    },

    vehicleModels: {

        "Audi India": ["A3", "A4", "A6", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "e-tron", "RS Q8", "S5", "S6"],  
       
        "BMW India": ["2 Series Gran Coupe", "3 Series", "3 Series Gran Limousine", "4 Series", "5 Series", "6 Series Gran Turismo", "7 Series", "8 Series", "X1", "X3", "X4", "X5", "X6", "X7", "i4", "iX", "iX1", "i7", "Z4", "M2", "M3", "M4", "M5", "M8", "XM"],  
       
        "Jaguar Land Rover India": ["F-Type", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace", "Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Sport", "Range Rover Velar"],  
       
        "Mercedes-Benz India": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "EQB", "EQC", "EQS", "AMG A 35", "AMG C 63", "AMG E 63", "AMG G 63", "AMG GLE 53", "AMG GLE 63"],  
       
        "Volvo Auto India": ["XC60", "XC90", "S60", "S90"],  
        
        "Ashok Leyland": ["BOSS", "Ecomet", "Partner", "Dost", "Stile", "U-Truck", "4923"],  
       
        "Eicher Motors": ["Pro 2049", "Pro 2059", "Pro 2110", "Pro 3015", "Pro 4028T", "Pro 6041", "Ecomet Star", "1615 HE", "1915 HE", "4220 HG"],  
       
        "Fiat India Automobiles Pvt. Ltd": ["Linea", "Punto", "Avventura", "Tipo"],  
       
        "Force Motors": ["Traveller", "Trax", "Gurkha", "Urbania", "Citiline", "Monobus", "Delivery Van", "Ambulance"],  
       
        "Honda Cars India": ["City", "Amaze", "WR-V", "Civic", "Accord", "Jazz"],  
       
        "Hyundai Motor India Ltd": ["Exter", "Grand i10 Nios", "i20", "Aura", "Verna", "Creta", "Alcazar", "Venue", "Tucson", "Ioniq 5", "Venue N Line", "i20 N Line"],  
       
        "Kia Motors India": ["Sonet", "Seltos", "Carens", "Carnival", "EV6", "EV9"],  
       
        "Maruti Suzuki India Ltd": ["Alto 800", "Alto K10", "Baleno", "Celerio", "Ciaz", "Eeco", "Ertiga", "FRONX", "Grand Vitara", "Ignis", "Jimny", "S-Presso", "Swift", "Swift Dzire", "XL6", "Wagon R", "Wagon R Tour", "Alto Tour", "Ertiga Tour", "Super Carry", "Eeco Cargo", "Invicto"],  
       
        "Nissan Motor India": ["Magnite", "X-Trail", "GT-R"],  
       
        "Skoda Auto India": ["Kushaq", "Slavia", "Kodiaq", "Superb", "Octavia", "Enyaq iV", "Kylaq"],  
       
        "Tata Motors": ["Nexon", "Harrier", "Safari", "Tiago", "Tigor", "Punch", "Altroz", "Curvv", "Gravitas", "Nano", "Nexon EV", "Tiago EV", "Tigor EV", "Punch EV", "Curvv EV", "Harrier EV"],  
        
        "Toyota Kirloskar Motor": ["Innova Crysta", "Fortuner", "Glanza", "Yaris", "Camry", "Corolla Altis", "Hilux"],  
        
        "Volkswagen India": ["Virtus", "Taigun", "Tiguan", "New Tiguan", "Virtus GT"],  
        
        "TAFE (Tractors and Farm Equipment Limited)": ["5036 D", "5042 D", "5050 D", "3028 EN", "5075 E", "PowerPro 5105", "PowerPro 5050", "PowerPro 5305", "555 DI", "605 DI MS", "605 DI PP", "605 DI i", "Tech+ 265 DI", "Tech+ 405 4WD", "Tech+ 415 4WD", "Tech+ 475", "Tech+ 575 4WD", "Tech+ 585", "SP Plus 265 DI", "SP Plus 275 DI", "SP Plus 415 DI", "SP Plus 475 DI", "SP Plus 575 DI", "SP Plus 585 DI", "XP Plus 265 Orchard", "XP Plus 415 DI", "XP Plus 475 DI MS", "XP Plus 585 DI", "225 DI", "245 DI Vineyard", "305 DI Vineyard", "365 DI", "3132", "3140", "2130", "2121", "2136", "655 DI PP", "755 DI PP 4WD", "35 RX", "47 RX", "50 RX", "60 RX", "Sikander DI 35", "Sikander DI 42", "Sikander DI 60", "Sikander DI 750"],  
        
        "Sonalika Tractors": ["Sonalika DI 734 DLX"],  
        
        "New Holland Agriculture India": ["New Holland T5", "New Holland 7030", "New Holland 6500"],  
        
        "Mahindra Tractors": ["5050 D", "575 DI SP Plus", "5050 D", "575 DI"],  
        
        "John Deere India": ["5050 D", "5042 D", "5050 D", "3038 E", "5050 E"],  
        
        "Yamaha Motor India": ["FZ series", "MT-15", "R15", "FZ-X"],  
        
        "TVS Motor Company": ["Apache RTR 160", "Apache RTR 180", "Apache RR 310", "Raider 125", "Ntorq", "Jupiter"],  
        
        "Suzuki Motorcycle India": ["Gixxer", "Access 125", "V-Strom", "Hayabusa"],  
        
        "Royal Enfield": ["Classic 350", "Bullet 350", "Meteor 350", "Interceptor 650", "Continental GT 650"],  
        
        "Honda Motorcycle & Scooter": ["Activa", "Shine", "CBR 250R", "CB Shine SP"],  
        
        "Hero MotoCorp": ["Splendor Plus", "Passion Pro", "Xtreme 160R", "Glamour"],  
        
        "Bajaj Auto": ["Pulsar", "Dominar", "Avenger", "CT 100", "V15"]  
    
    }
};

// Remove the Year and Fuel Type functionality
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
