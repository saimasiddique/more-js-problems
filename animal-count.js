function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;

        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensityFirst10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;

        const secondDenseAnimals = 10 * animalDensitySecond10Miles;

        const restMiles = miles - 20;
        const RestDenseAnimal = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimal;

        return totalAnimals;
    }
}

const animals = animalCount(35);
console.log(animals);