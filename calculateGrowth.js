
const indicatorName = 'Urban population growth (annual %)';
const indicatorProp = '2';
const startingYearProp = 24;
const endYearProp = 33;

const shouldIncludeCountry = (row) => {
    for (let index = startingYearProp; index <= endYearProp; index++) {
        if(row[index.toString()] == ''){
            return false;
        }
    }

    return true;
}

const getHighestAverageAnnualPopulationGrowth = (data) => {
    let currentHighestAverage = 0;
    let currentHighestAverageRow = 0;

    for (let i = 0; i < data.length; i++) {
        const avgAnnualGrowth = getAveragePopulationGrowthForCountry(data[i]);
        if(currentHighestAverage <= avgAnnualGrowth){
            currentHighestAverage = avgAnnualGrowth;
            currentHighestAverageRow = i;
        }
    }
    return { name: data[currentHighestAverageRow]['0'], value: currentHighestAverage};
}

const getAveragePopulationGrowthForCountry = (row) => {
    let sum = 0;
    for (let index = startingYearProp; index <= endYearProp; index++) {
        sum += parseFloat(row[index]);
    }

    return sum/(endYearProp-startingYearProp+1);
}

const calculateAverageUrbanAnnualPopulationGrowth = (data) => {
    let rowsWithUrbanPopulationGrowthIndicator = data.filter(r=> r[indicatorProp] == indicatorName && shouldIncludeCountry(r));

    const countryWithHighestAverageGrowthBetween1980and1990 = getHighestAverageAnnualPopulationGrowth(rowsWithUrbanPopulationGrowthIndicator);

    return countryWithHighestAverageGrowthBetween1980and1990;
}

module.exports = {
    calculateAverageUrbanAnnualPopulationGrowth,
    getAveragePopulationGrowthForCountry,
    getHighestAverageAnnualPopulationGrowth,
    shouldIncludeCountry
}