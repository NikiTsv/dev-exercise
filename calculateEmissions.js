const indicatorName = 'CO2 emissions (kt)';
const urbanPopulationPropIndex = '2';
const startYearPropIndex = 4;
const endYearPropIndex = 61;


module.exports = function (data, columns) {
    let yearMap = {};
    let countriesWithEmissionsIndicator = data.filter(r=> r[urbanPopulationPropIndex] == indicatorName);

    for (let i = 0; i < data.length; i++) {
        const row = data[i];

        for (let index = startYearPropIndex; index < endYearPropIndex; index++) {
            let value = 0;
            const rawValue = row[index.toString()];

            if(rawValue!=''){
                value = parseFloat(rawValue);
            }

            const year = columns[index.toString()];

            if(!yearMap[year]) {
                yearMap[year] = value;
            }else {
                yearMap[year] += value;
            }
        }
    }

    let maxValue = 0;
    let maxYear = null;

    for(var prop in yearMap) {
        if(yearMap[prop] >= maxValue){
            maxValue = yearMap[prop];
            maxYear = prop;
        }
    }

    return maxYear;
}