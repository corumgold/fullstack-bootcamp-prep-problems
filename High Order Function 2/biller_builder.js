// Write a function billerBuilder that takes the name of a US state as an argument. 
// billerBuilder should return a new function that takes the price of an item and 
// returns the correct final price of the item, given the following:

// if NY, charge 3% for shipping and 4% for sales tax
// if NJ, charge 5% for shipping and 6.625% for sales tax
// let newYorkBiller = biller('NY');
// newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04)

// let newJerseyBiller = biller('NJ');
// newJerseyBiller(100) // => 111.95625 (100 * 1.05 * 1.06625)