function calculateBodaFare(distanceInKm){
  const baseFare = 50;         // Base fare for the ride
 const chargePerKilometer = 15;    // charge per kilometer
 const tripFare = distanceInKm * chargePerKilometer; // calculate the fare based on distance
    const totalFare = baseFare + tripFare; // calculate the total fare

console.log(`Uko Kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${tripFare}`);
console.log(`Total: KES ${totalFare}`);
console.log(`Panda Pikipiki`);

}
// prompt the user
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm = parseFloat(input);

//validate the input
if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Tafadhali ingiza nambari halali ya kilometer.");
}
else {
    calculateBodaFare(distanceInKm);
}
