const Tabletop = require("tabletop")
const fs = require("fs")
const keys = ["2019-nCoV", "Swine Flu", "SARS"]

const loadDatadump = (path) => {
    const json = fs.readFileSync(path)
    const data = JSON.parse(json)
    const tmp = []

    const maxDays = Math.max(...Object.keys(data.infected).map(key => data.infected[key].length))

    for (let x = 0; x < maxDays; x++) {
        Object.keys(data.infected).forEach(decease => {
            if (!tmp[x])
                tmp[x] = {'name': 'Day ' + (x+1)}

            let deaths = data['deaths'][decease][x];
            let infected = data['infected'][decease][x];
            tmp[x][decease + ' (deceased)'] = typeof deaths !== "undefined" ? deaths : null
            tmp[x][decease + ' (infected)'] = typeof infected !== "undefined" ? infected : null
        })
    }

    return tmp
}

function reduceDump(sheet, report, category) {
    let days = Object.keys(sheet.elements);
    let columns = Object.keys(sheet.elements['0'])
    for (let x = 0; x < days.length; x++) {
        let row = typeof report.data[x] !== 'undefined' ? report.data[x] : {'name': 'Day ' + (x + 1)}

        columns.forEach(col => {
            if (col === "Date")
                return

            row[`nCov ${col} (${category})`] = Number(sheet.elements[days[x]][col])
        })

        report.data[x] = row
    }
}

const main = async () => {
    console.log("Fetching data")

    console.log("Load datadump")
    let report = {}
    report.data = loadDatadump("data.json")
    report.lastUpdatedAt = Date.now() + '000'
    report.trackingStarted = {
        "Swine Flue": "2009-04-24",
        "SARS": "2003-03-21",
        "2019-nCoV": "2020-01-01"
    }
    report.source = {
        "Swine Flue": "https://en.wikipedia.org/wiki/2009_flu_pandemic_table_April_2009",
        "SARS": "http://www.diaspoir.net/health/sars/Total.html",
        "2019-nCoV": "https://bnonews.com/index.php/2020/01/the-latest-coronavirus-cases/"
    }



    console.log("Fetch spreadsheet")
    const sheet = await Tabletop.init({
        key: "https://docs.google.com/spreadsheets/d/1e1n55GNglspF07y4Z0niaVO5NN_AXD4yaz_X_EN07w0/pubhtml",
        simpleSheet: false,
    })

    reduceDump(sheet.Infected, report, 'infected');
    reduceDump(sheet.Deceased, report, 'deceased');

    report.columns = {
        "Swine Flu (deceased)": {color: "#cc0000", symbol: "triangle", category: 'deceased', virus: 'Swine Flu'},
        "Swine Flu (infected)": {color: "#FF0000", symbol: "triangle", category: 'infected', virus: 'Swine Flu'},
        "SARS (deceased)": {color: "#00cc00", symbol: "star", category: 'deceased', virus: 'SARS'},
        "SARS (infected)": {color: "#00ff00", symbol: "star", category: 'infected', virus: 'SARS'},
        "nCov Worldwide (infected)": {color: "#FFFF00", symbol: "circle", category: 'infected', virus: 'nCoV'},
        "nCov Hubei (Including Wuhan) (infected)": {color: "#FFFF00", symbol: "circle", category: 'infected', virus: 'Swine Flu'},
        "nCov China (infected)": {color: "#FFFF00", symbol: "circle", category: 'infected', virus: 'nCoV'},
        "nCov Worldwide (without China) (infected)": {color: "#FFFF00", symbol: "circle", category: 'infected', virus: 'Swine Flu'},
        "nCov China (without Hubei) (infected)": {color: "#FFFF00", symbol: "circle", category: 'infected', virus: 'Swine Flu'},
        "nCov Worldwide (deceased)": {color: "#cccc00", symbol: "circle", category: 'deceased', virus: 'nCoV'},
        "nCov Hubei (Including Wuhan) (deceased)": {color: "#cccc00", symbol: "circle", category: 'deceased', virus: 'Swine Flu'},
        "nCov China (deceased)": {color: "#cccc00", symbol: "circle", category: 'deceased', virus: 'nCoV'}
    }

    console.log("Writing datadump")
    fs.writeFileSync("report.json",JSON.stringify(report, null, 2))
    console.log("Finished")
}
main()