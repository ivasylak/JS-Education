let city = new Object()
    city.name = "Ternopil";
    city.createdYear = 1540;
    city.mainStreet = "Ruska";

    function propsCount(city) {
        return Object.keys(city).length;
    }

    propsCount(city);

