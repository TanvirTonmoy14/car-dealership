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
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const priceRange = document.getElementById("price-range").value;
    const mileage = document.getElementById("mileage").value;
    const location = document.getElementById("location").value;
    const color = document.getElementById("color").value;
    const features = document.getElementById("features").value;
    const fuelType = document.getElementById("fuel-type").value;
    const transmission = document.getElementById("transmission").value;
    
    // Display a message (or handle search logic)
    alert(`Searching for: ${make} ${model}, Year: ${year}, Price Range: ${priceRange}, Mileage: ${mileage}, Location: ${location}, Color: ${color}, Features: ${features}, Fuel Type: ${fuelType}, Transmission: ${transmission}`);
});
