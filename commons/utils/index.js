import Vue from 'vue'
import axios from 'axios'
import {_} from 'underscore'
var slugify = require("underscore.string/slugify")

var self = this

var countryISOMapping3To2 = {AFG: "AF", ALA: "AX", ALB: "AL", DZA: "DZ", ASM: "AS", AND: "AD", AGO: "AO", AIA: "AI", ATA: "AQ", ATG: "AG", ARG: "AR", ARM: "AM", ABW: "AW", AUS: "AU", AUT: "AT", AZE: "AZ", BHS: "BS", BHR: "BH", BGD: "BD", BRB: "BB", BLR: "BY", BEL: "BE", BLZ: "BZ", BEN: "BJ", BMU: "BM", BTN: "BT", BOL: "BO", BIH: "BA", BWA: "BW", BVT: "BV", BRA: "BR", VGB: "VG", IOT: "IO", BRN: "BN", BGR: "BG", BFA: "BF", BDI: "BI", KHM: "KH", CMR: "CM", CAN: "CA", CPV: "CV", CYM: "KY", CAF: "CF", TCD: "TD", CHL: "CL", CHN: "CN", HKG: "HK", MAC: "MO", CXR: "CX", CCK: "CC", COL: "CO", COM: "KM", COG: "CG", COD: "CD", COK: "CK", CRI: "CR", CIV: "CI", HRV: "HR", CUB: "CU", CYP: "CY", CZE: "CZ", DNK: "DK", DJI: "DJ", DMA: "DM", DOM: "DO", ECU: "EC", EGY: "EG", SLV: "SV", GNQ: "GQ", ERI: "ER", EST: "EE", ETH: "ET", FLK: "FK", FRO: "FO", FJI: "FJ", FIN: "FI", FRA: "FR", GUF: "GF", PYF: "PF", ATF: "TF", GAB: "GA", GMB: "GM", GEO: "GE", DEU: "DE", GHA: "GH", GIB: "GI", GRC: "GR", GRL: "GL", GRD: "GD", GLP: "GP", GUM: "GU", GTM: "GT", GGY: "GG", GIN: "GN", GNB: "GW", GUY: "GY", HTI: "HT", HMD: "HM", VAT: "VA", HND: "HN", HUN: "HU", ISL: "IS", IND: "IN", IDN: "ID", IRN: "IR", IRQ: "IQ", IRL: "IE", IMN: "IM", ISR: "IL", ITA: "IT", JAM: "JM", JPN: "JP", JEY: "JE", JOR: "JO", KAZ: "KZ", KEN: "KE", KIR: "KI", PRK: "KP", KOR: "KR", KWT: "KW", KGZ: "KG", LAO: "LA", LVA: "LV", LBN: "LB", LSO: "LS", LBR: "LR", LBY: "LY", LIE: "LI", LTU: "LT", LUX: "LU", MKD: "MK", MDG: "MG", MWI: "MW", MYS: "MY", MDV: "MV", MLI: "ML", MLT: "MT", MHL: "MH", MTQ: "MQ", MRT: "MR", MUS: "MU", MYT: "YT", MEX: "MX", FSM: "FM", MDA: "MD", MCO: "MC", MNG: "MN", MNE: "ME", MSR: "MS", MAR: "MA", MOZ: "MZ", MMR: "MM", NAM: "NA", NRU: "NR", NPL: "NP", NLD: "NL", ANT: "AN", NCL: "NC", NZL: "NZ", NIC: "NI", NER: "NE", NGA: "NG", NIU: "NU", NFK: "NF", MNP: "MP", NOR: "NO", OMN: "OM", PAK: "PK", PLW: "PW", PSE: "PS", PAN: "PA", PNG: "PG", PRY: "PY", PER: "PE", PHL: "PH", PCN: "PN", POL: "PL", PRT: "PT", PRI: "PR", QAT: "QA", REU: "RE", ROU: "RO", RUS: "RU", RWA: "RW", BLM: "BL", SHN: "SH", KNA: "KN", LCA: "LC", MAF: "MF", SPM: "PM", VCT: "VC", WSM: "WS", SMR: "SM", STP: "ST", SAU: "SA", SEN: "SN", SRB: "RS", SYC: "SC", SLE: "SL", SGP: "SG", SVK: "SK", SVN: "SI", SLB: "SB", SOM: "SO", ZAF: "ZA", SGS: "GS", SSD: "SS", ESP: "ES", LKA: "LK", SDN: "SD", SUR: "SR", SJM: "SJ", SWZ: "SZ", SWE: "SE", CHE: "CH", SYR: "SY", TWN: "TW", TJK: "TJ", TZA: "TZ", THA: "TH", TLS: "TL", TGO: "TG", TKL: "TK", TON: "TO", TTO: "TT", TUN: "TN", TUR: "TR", TKM: "TM", TCA: "TC", TUV: "TV", UGA: "UG", UKR: "UA", ARE: "AE", GBR: "GB", USA: "US", UMI: "UM", URY: "UY", UZB: "UZ", VUT: "VU", VEN: "VE", VNM: "VN", VIR: "VI", WLF: "WF", ESH: "EH", YEM: "YE", ZMB: "ZM", ZWE: "ZW"}

var countryISOMapping2To3 = {AF: 'AFG', AX: 'ALA', AL: 'ALB', DZ: 'DZA', AS: 'ASM', AD: 'AND', AO: 'AGO', AI: 'AIA', AQ: 'ATA', AG: 'ATG', AR: 'ARG', AM: 'ARM', AW: 'ABW', AU: 'AUS', AT: 'AUT', AZ: 'AZE', BS: 'BHS', BH: 'BHR', BD: 'BGD', BB: 'BRB', BY: 'BLR', BE: 'BEL', BZ: 'BLZ', BJ: 'BEN', BM: 'BMU', BT: 'BTN', BO: 'BOL', BA: 'BIH', BW: 'BWA', BV: 'BVT', BR: 'BRA', VG: 'VGB', IO: 'IOT', BN: 'BRN', BG: 'BGR', BF: 'BFA', BI: 'BDI', KH: 'KHM', CM: 'CMR', CA: 'CAN', CV: 'CPV', KY: 'CYM', CF: 'CAF', TD: 'TCD', CL: 'CHL', CN: 'CHN', HK: 'HKG', MO: 'MAC', CX: 'CXR', CC: 'CCK', CO: 'COL', KM: 'COM', CG: 'COG', CD: 'COD', CK: 'COK', CR: 'CRI', CI: 'CIV', HR: 'HRV', CU: 'CUB', CY: 'CYP', CZ: 'CZE', DK: 'DNK', DJ: 'DJI', DM: 'DMA', DO: 'DOM', EC: 'ECU', EG: 'EGY', SV: 'SLV', GQ: 'GNQ', ER: 'ERI', EE: 'EST', ET: 'ETH', FK: 'FLK', FO: 'FRO', FJ: 'FJI', FI: 'FIN', FR: 'FRA', GF: 'GUF', PF: 'PYF', TF: 'ATF', GA: 'GAB', GM: 'GMB', GE: 'GEO', DE: 'DEU', GH: 'GHA', GI: 'GIB', GR: 'GRC', GL: 'GRL', GD: 'GRD', GP: 'GLP', GU: 'GUM', GT: 'GTM', GG: 'GGY', GN: 'GIN', GW: 'GNB', GY: 'GUY', HT: 'HTI', HM: 'HMD', VA: 'VAT', HN: 'HND', HU: 'HUN', IS: 'ISL', IN: 'IND', ID: 'IDN', IR: 'IRN', IQ: 'IRQ', IE: 'IRL', IM: 'IMN', IL: 'ISR', IT: 'ITA', JM: 'JAM', JP: 'JPN', JE: 'JEY', JO: 'JOR', KZ: 'KAZ', KE: 'KEN', KI: 'KIR', KP: 'PRK', KR: 'KOR', KW: 'KWT', KG: 'KGZ', LA: 'LAO', LV: 'LVA', LB: 'LBN', LS: 'LSO', LR: 'LBR', LY: 'LBY', LI: 'LIE', LT: 'LTU', LU: 'LUX', MK: 'MKD', MG: 'MDG', MW: 'MWI', MY: 'MYS', MV: 'MDV', ML: 'MLI', MT: 'MLT', MH: 'MHL', MQ: 'MTQ', MR: 'MRT', MU: 'MUS', YT: 'MYT', MX: 'MEX', FM: 'FSM', MD: 'MDA', MC: 'MCO', MN: 'MNG', ME: 'MNE', MS: 'MSR', MA: 'MAR', MZ: 'MOZ', MM: 'MMR', NA: 'NAM', NR: 'NRU', NP: 'NPL', NL: 'NLD', AN: 'ANT', NC: 'NCL', NZ: 'NZL', NI: 'NIC', NE: 'NER', NG: 'NGA', NU: 'NIU', NF: 'NFK', MP: 'MNP', NO: 'NOR', OM: 'OMN', PK: 'PAK', PW: 'PLW', PS: 'PSE', PA: 'PAN', PG: 'PNG', PY: 'PRY', PE: 'PER', PH: 'PHL', PN: 'PCN', PL: 'POL', PT: 'PRT', PR: 'PRI', QA: 'QAT', RE: 'REU', RO: 'ROU', RU: 'RUS', RW: 'RWA', BL: 'BLM', SH: 'SHN', KN: 'KNA', LC: 'LCA', MF: 'MAF', PM: 'SPM', VC: 'VCT', WS: 'WSM', SM: 'SMR', ST: 'STP', SA: 'SAU', SN: 'SEN', RS: 'SRB', SC: 'SYC', SL: 'SLE', SG: 'SGP', SK: 'SVK', SI: 'SVN', SB: 'SLB', SO: 'SOM', ZA: 'ZAF', GS: 'SGS', SS: 'SSD', ES: 'ESP', LK: 'LKA', SD: 'SDN', SR: 'SUR', SJ: 'SJM', SZ: 'SWZ', SE: 'SWE', CH: 'CHE', SY: 'SYR', TW: 'TWN', TJ: 'TJK', TZ: 'TZA', TH: 'THA', TL: 'TLS', TG: 'TGO', TK: 'TKL', TO: 'TON', TT: 'TTO', TN: 'TUN', TR: 'TUR', TM: 'TKM', TC: 'TCA', TV: 'TUV', UG: 'UGA', UA: 'UKR', AE: 'ARE', GB: 'GBR', US: 'USA', UM: 'UMI', UY: 'URY', UZ: 'UZB', VU: 'VUT', VE: 'VEN', VN: 'VNM', VI: 'VIR', WF: 'WLF', EH: 'ESH', YE: 'YEM', ZM: 'ZMB', ZW: 'ZWE'}

var specificIndicators = [
    {id:96, labels:[{value:"0.0", label: "no"}, {value:"0.5", label: "last 10 years"}, {value:"1.0", label: "within last 5 years"}]},
    {id:10, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:36, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:40, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:46, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:57, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:92, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:99, labels:[{value:"0.0", label: "never"}, {value:"0.3", label: "once"}, {value:"0.7", label: "at least 6 times"}, {value:"1.0", label:"annually"}]},
    {id:7, labels:[{value:"0.0", label: "not adopted"}, {value:"1.0", label: "adopted"}]}
];

// get indicators table
// GLOBAL VAR : $store.DBClassifIndicators - $store.DBIndicators - $store.DBIndicatorsObj
async function getAPIIndicators ($store) {
  // console.log('domains.auth.getUserInfos')
  const config = {
    headers: {
      // 'authorization': 'Bearer ' + token
    }
  }

  var randNb = Math.round(Math.random()*1000000)
  return axios.get('https://ocde.wedodata.fr/paris21_api/getIndicators.php?rand='+randNb, config)
    .then(response => {
      var tmpArray = response.data

      $store.DBIndicators = []
      $store.DBIndicatorsObj = {}

      _.each(tmpArray.indicators, function (indicator) {
        var indicatorObj = indicator
        indicatorObj.value = indicator.id
        indicatorObj.text = indicator.name
        $store.DBIndicators.push(indicatorObj)
        $store.DBIndicatorsObj[indicator.id] = indicator
      })

      $store.DBKeyIndicators = _.filter(tmpArray.indicators, function (indicator) {
        return indicator.key_indicator == '1'
      })

      $store.DBDefaultCPage = _.filter(tmpArray.indicators, function (indicator) {
        return indicator.default_cpage == '1'
      })

      $store.DBClassifIndicators = []
      var tmpClassifsObj = _.groupBy(tmpArray.indicators, function (indicator) {
        return indicator.classif
      })

      _.each(tmpClassifsObj, function(classifItems, classifKey){
        var classifAlpha = 10
        if(classifKey == 'Production') classifAlpha = 2
        else if(classifKey == 'Dissemination') classifAlpha = 3
        else if(classifKey == 'Use') classifAlpha = 4
        else if(classifKey == 'Investment') classifAlpha = 5
        else if(classifKey == 'Planning') classifAlpha = 1
        var classif = {
          key: classifKey,
          alpha: classifAlpha,
          items: classifItems
        }
        $store.DBClassifIndicators.push(classif)
      })

      $store.DBClassifIndicators = _.sortBy($store.DBClassifIndicators, function(classif){
        return classif.alpha
      })

      return true
    })
    .catch(err => {
      console.log('Une erreur est survenue', err)
      return null
    })
}

//get geobase table
// GLOBAL VAR : $store.DBGeographyObj - $store.DBGeography
function getAPIGeography ($store) {
  // console.log('domains.auth.getUserInfos')
  const config = {
    headers: {
      // 'authorization': 'Bearer ' + token
    }
  }

  var randNb = Math.round(Math.random()*1000000)
  return axios.get('https://ocde.wedodata.fr/paris21_api/getGeography.php?rand='+randNb, config)
    .then(response => {
      var tmpArray = response.data

      var tmpGeography = []

      $store.DBGeographyObj = {}
      _.each(tmpArray.geography, function (geoItem) {
        geoItem.name = geoItem.country
        geoItem.type = 'country'
        if(geoItem.name == '') {
          if(geoItem.subregion == ''){
            geoItem.name = geoItem.region
            geoItem.type = 'region'
          }
          else{
            geoItem.name = geoItem.subregion
            geoItem.type = 'subregion'
          }
        }
        tmpGeography.push(geoItem)
        $store.DBGeographyObj[geoItem.m49] = geoItem
      })

      $store.DBGeography = _.sortBy(tmpGeography, function(geo){
        return geo.name
      })

      return true
    })
    .catch(err => {
      console.log('Une erreur est survenue', err)
      return null
    })
}

//get datavalues tabe for given geographyID
function getAPIGeoItemData ($store, geoID) {
  // console.log('domains.auth.getUserInfos')
  const config = {
    headers: {
      // 'authorization': 'Bearer ' + token
    }
  }

  if($store.DBGeoItems === undefined) $store.DBGeoItems = {}
  //geoIDS of country + parents
  var geosIDSList = [geoID];
  if($store.DBGeographyObj[geoID].subregion_code !== '' && $store.DBGeoItems[$store.DBGeographyObj[geoID].subregion_code] === undefined) geosIDSList.push($store.DBGeographyObj[geoID].subregion_code)
  if($store.DBGeographyObj[geoID].region_code !== '' && $store.DBGeoItems[$store.DBGeographyObj[geoID].region_code] === undefined) geosIDSList.push($store.DBGeographyObj[geoID].region_code)
  if($store.DBGeoItems['1'] === undefined) geosIDSList.push('1')

  var randNb = Math.round(Math.random()*1000000)
  return axios.get('https://ocde.wedodata.fr/paris21_api/getGeoItemData.php?geoIDSList='+geosIDSList+'&rand='+randNb, config)
    .then(response => {
      var tmpArray = response.data

      var geographies = {}

      _.each(tmpArray.geoItemsDataCSV, function (indicatorRow) {
        if(geographies[indicatorRow.m49] === undefined) {
          geographies[indicatorRow.m49] = {
            m49: indicatorRow.m49,
            indicators:{}
          }
        }

        if(geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id] === undefined) {
          geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id] = {
            id: indicatorRow.indicator_id,
            years: {}
          }
        }

        if(geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id].years[indicatorRow.year] === undefined) {
          geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id].years[indicatorRow.year] = indicatorRow.value.replace(",",".");
        }
      })

      _.each(tmpArray.geoItemsDataWB, function (indicatorRow) {
        if(geographies[indicatorRow.m49] === undefined) {
          geographies[indicatorRow.m49] = {
            m49: indicatorRow.m49,
            indicators:{}
          }
        }

        if(geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id] === undefined) {
          geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id] = {
            id: indicatorRow.indicator_id,
            years: {}
          }
        }

        geographies[indicatorRow.m49].indicators[indicatorRow.indicator_id].years[indicatorRow.year] = indicatorRow.value.replace(",",".");
      })

      _.each(geographies, function(geoObj, geoM49){
        $store.DBGeoItems[geoM49] = {
          m49: geoM49,
          indicators: geoObj.indicators
        }
      })

      return true
    })
    .catch(err => {
      console.log('Une erreur est survenue', err)
      return null
    })
}

//get datavalues tabe for given indicatorID
function getAPIIndicatorItemData ($store, indicatorID) {
  // console.log('domains.auth.getUserInfos')
  const config = {
    headers: {
      // 'authorization': 'Bearer ' + token
    }
  }

  var randNb = Math.round(Math.random()*1000000)
  return axios.get('https://ocde.wedodata.fr/paris21_api/getIndicatorItemData.php?indicatorID='+indicatorID+'&rand='+randNb, config)
    .then(response => {
      var tmpArray = response.data

      var datavaluesObj = {}

      _.each(tmpArray.indicatorItemData, function (datavaluesRow) {
        if(datavaluesObj[datavaluesRow.m49] === undefined) {
          datavaluesObj[datavaluesRow.m49] = {
            iso: datavaluesRow.iso,
            m49: datavaluesRow.m49,
            name: datavaluesRow.country,
            years: {}
          }
        }

        if(datavaluesObj[datavaluesRow.m49].years[datavaluesRow.year] === undefined) {
          datavaluesObj[datavaluesRow.m49].years[datavaluesRow.year] = datavaluesRow.value.replace(",",".");
        }
      })

      if($store.DBIndicatorItems === undefined) $store.DBIndicatorItems = {}

      $store.DBIndicatorItems[indicatorID] = {
        id: indicatorID,
        geographies: datavaluesObj
      }

      console.log("DBIndicatorItems", $store.DBIndicatorItems);

      return true
    })
    .catch(err => {
      console.log('Une erreur est survenue', err)
      return null
    })
}

function csvToArray (csvString) {
  // The array we're going to build
  var csvArray = []
  // Break it into rows to start
  var csvRows = csvString.split(/\n/)
  // Take off the first line to get the headers, then split that into an array
  var csvHeaders = csvRows.shift().split(';')

  // Loop through remaining rows
  for (var rowIndex = 0; rowIndex < csvRows.length; ++rowIndex) {
    var rowArray = csvRows[rowIndex].split(';')

    // Create a new row object to store our data.
    var rowObject = csvArray[rowIndex] = {}

    // Then iterate through the remaining properties and use the headers as keys
    for (var propIndex = 0; propIndex < rowArray.length; ++propIndex) {
      // Grab the value from the row array we're looping through...
      var propValue = rowArray[propIndex].replace(/^"|"$/g, '')
      // ...also grab the relevant header (the RegExp in both of these removes quotes)
      var propLabel = csvHeaders[propIndex].replace(/^"|"$/g, '')

      rowObject[propLabel] = propValue
    }
  }

  return csvArray
}

function getLastKeyFromObj(obj, param, returnType){
  if(obj[param] !== undefined) {
      var sizeValues = _.size(obj[param])
      var dataValue = _.keys(obj[param])[sizeValues-1]
      return dataValue
  }
  return undefined
}

export {
  countryISOMapping2To3,
  countryISOMapping3To2,
  specificIndicators,
  getAPIIndicators,
  getAPIGeography,
  getAPIGeoItemData,
  getLastKeyFromObj,
  getAPIIndicatorItemData
}
