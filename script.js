const vehicles = [
    {
        name: "Mahindra Bolero Pickup",
        type: "Truck",
        price: 450,
        location: "Satara, MH",
        condition: "Excellent (2023 Model)",
        service: "Self-drive or with Driver",
        img: "images/pickup.jpg"
    },
    {
        name: "Force Gurkha 4x4",
        type: "Jeep",
        price: 600,
        location: "Pune, MH",
        condition: "Good - Off-road Ready",
        service: "Includes fuel for first 50km",
        img: "images/jeep.jpg"
    },
    {
        name: "Tata 407 Tipper",
        type: "Heavy Truck",
        price: 850,
        location: "Nashik, MH",
        condition: "Workhorse - New Tires",
        service: "Load assistance included",
        img: "images/tata407.jpg"
    },
    {
        name: "John Deere 5310",
        type: "Tractor",
        price: 550,
        location: "Nagpur, MH",
        condition: "Serviced last month",
        service: "Plow attachment available",
        img: "images/tractor.jpg"
    },
    {
        name: "Eicher Multi-Axle",
        type: "Freight Truck",
        price: 1200,
        location: "Mumbai, MH",
        condition: "Long-haul certified",
        service: "Inter-state permit provided",
        img: "images/eicher.jpg"
    },
    {
        name: "Maruti Suzuki Super Carry",
        type: "Mini Truck",
        price: 300,
        location: "Sangli, MH",
        condition: "Brand New",
        service: "Local delivery only",
        img: "images/carry.jpg"
    },
    {
        name: "Isuzu D-Max V-Cross",
        type: "Premium Pickup",
        price: 950,
        location: "Kolhapur, MH",
        condition: "Showroom condition",
        service: "Insurance covered",
        img: "images/isuzu.jpg"
    },
    {
        name: "Ashok Leyland Dost+",
        type: "LCV",
        price: 400,
        location: "Solapur, MH",
        condition: "Reliable Engine",
        service: "24/7 Roadside Assistance",
        img: "images/dost.jpg"
    }
];

const grid = document.getElementById('vehicle-grid');

function loadVehicles() {
    vehicles.forEach(v => {
        const card = `
            <div class="card">
                <img src="${v.img}" alt="${v.name}">
                <div class="card-content">
                    <span class="badge">${v.type}</span>
                    <h3>${v.name}</h3>
                    <p class="price-tag">₹${v.price} / hr</p>
                    <div class="specs">
                        <p>📍 <b>Location:</b> ${v.location}</p>
                        <p>⚙️ <b>Condition:</b> ${v.condition}</p>
                        <p>🛠️ <b>Service:</b> ${v.service}</p>
                    </div>
                    <a href="#" class="btn-rent">Hire Vehicle</a>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

document.addEventListener('DOMContentLoaded', loadVehicles);
