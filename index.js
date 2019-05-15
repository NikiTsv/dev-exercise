const fs = require('fs');
const path = require('path');
const readCSV = require('./readCSV');
const calculateAverageUrbanAnualPopulationGrowth = require('./calculateGrowth');
const calculateEmissions = require('./calculateEmissions');

let data = readCSV('data.csv');

// removing unnecessary rows
data = data.splice(4);

const columnNames = data[0];
const countryWithHighestAverageGrowthBetween1980and1990 = calculateAverageUrbanAnualPopulationGrowth(data);

console.log('Country with highest average growth between 1980 and 1990:', countryWithHighestAverageGrowthBetween1980and1990.name, countryWithHighestAverageGrowthBetween1980and1990.value);

const yearWithHighestEmissions = calculateEmissions(data, columnNames);

console.log('Year with highest CO2 emissions throughout all countires', yearWithHighestEmissions);


