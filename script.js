
const vehicles = [
    {  make: 'Toyota', model: 'Corolla', year: 2022, price: 20000, mileage: 15000, location: 'New York', color: 'white', features: ['sunroof'], fuel: 'gasoline', transmission: 'automatic' },
    {  make: 'Ford', model: 'Focus', year: 2021, price: 18000, mileage: 12000, location: 'Los Angeles', color: 'black', features: ['leather-seats'], fuel: 'diesel', transmission: 'manual' },
    {  make: 'Tesla', model: 'Model 3', year: 2023, price: 35000, mileage: 5000, location: 'San Francisco', color: 'red', features: ['navigation'], fuel: 'electric', transmission: 'automatic' },
    {  make: 'Honda', model: 'Civic', year: 2020, price: 22000, mileage: 10000, location: 'Miami', color: 'black', features: ['sunroof', 'navigation'], fuel: 'gasoline', transmission: 'manual' },
];








// Toggle visibility of advanced filters
document.getElementById("advanced-toggle").addEventListener("click", function() {
    const advancedFilters = document.getElementById("advanced-filters");
    if (advancedFilters.classList.contains("hidden")) {
        advancedFilters.classList.remove("hidden");
    } else {
        advancedFilters.classList.add("hidden");
    }
});

// Search form submission handling
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input values
    const filters = {
       
        make: document.getElementById("make").value,
        model: document.getElementById("model").value,
        year: document.getElementById("year").value,
        priceRange: document.getElementById("price-range").value,
        mileage: document.getElementById("mileage").value,
        location: document.getElementById("location").value,
        color: document.getElementById("color").value,
        features: document.getElementById("features").value,
        fuelType: document.getElementById("fuel-type").value,
        transmission: document.getElementById("transmission").value,
    };

    // Trigger the search function with filters
    searchVehicles(filters);
});




  // 
// Function to filter vehicles based on form input
function searchVehicles(filters) {
    const {
       make, model, year, priceRange, mileage,
        location, color, features, fuelType, transmission
    } = filters;

    // Filter vehicles based on the form inputs
    const filteredVehicles = vehicles.filter(vehicle => {
        return (
            
            (make === '' || vehicle.make.toLowerCase().includes(make.toLowerCase())) &&
            (model === '' || vehicle.model.toLowerCase().includes(model.toLowerCase())) &&
            (year === '' || vehicle.year == year) &&
            (priceRange === '' || vehicle.price <= priceRange) &&
            (mileage === '' || vehicle.mileage <= mileage) &&
            (location === '' || vehicle.location.toLowerCase().includes(location.toLowerCase())) &&
            (color === '' || vehicle.color.toLowerCase().includes(color.toLowerCase())) &&
            (features === '' || vehicle.features.includes(features.toLowerCase())) &&
            (fuelType === '' || vehicle.fuel.toLowerCase().includes(fuelType.toLowerCase())) &&
            (transmission === '' || vehicle.transmission.toLowerCase().includes(transmission.toLowerCase()))
        );
    });

    // Show the filtered vehicles
    displayVehicles(filteredVehicles);
}

// Function to display the vehicles
function displayVehicles(vehicles) {
    const resultsContainer = document.getElementById('vehicle-results');
    resultsContainer.innerHTML = ''; // Clear any previous results

    if (vehicles.length === 0) {
        resultsContainer.innerHTML = '<p>No vehicles found.</p>';
        return;
    }

    vehicles.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.classList.add('vehicle-card');
        vehicleCard.innerHTML = `
            <a href="vehicle-detail.html">
                <img src="vehicle${vehicle.id}.jpg" alt="Vehicle ${vehicle.id}" class="vehicle-image">
                <p>${vehicle.make} ${vehicle.model} (${vehicle.year})</p>
                <p>Price: $${vehicle.price}</p>
                <p>Mileage: ${vehicle.mileage} miles</p>
            </a>
        `;
        resultsContainer.appendChild(vehicleCard);
    });
}

// Optional: Function to show detailed view of a vehicle (for example purposes)
function showVehicleDetail(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
        document.getElementById('vehicle-title').textContent = `${vehicle.make} ${vehicle.model} (${vehicle.year})`;
        document.getElementById('vehicle-image').src = `vehicle${vehicle.id}.jpg`;
        document.getElementById('vehicle-price').textContent = `Price: $${vehicle.price}`;
        document.getElementById('vehicle-mileage').textContent = `Mileage: ${vehicle.mileage} miles`;
        document.getElementById('vehicle-engine').textContent = `Engine: ${vehicle.engine}`;
        document.getElementById('vehicle-transmission').textContent = `Transmission: ${vehicle.transmission}`;
        document.getElementById('vehicle-fuel-type').textContent = `Fuel Type: ${vehicle.fuel}`;

        document.getElementById('vehicle-results').style.display = 'none';
        document.getElementById('vehicle-detail-section').style.display = 'block';
    }
}

// Optional: Function to close vehicle details and return to search
function closeVehicleDetail() {
    document.getElementById('vehicle-detail-section').style.display = 'none';
    document.getElementById('vehicle-results').style.display = 'grid';
}


