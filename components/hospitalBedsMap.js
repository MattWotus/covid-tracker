$.ajax({
  headers: {
    "X-Access-Token": "63fc2898-dbd6-4529-ab07-4311a179dbaf"
  },
  url: "https://cors-anywhere.herokuapp.com/api.covid19api.com/summary",
  method: "GET",
  success: getCovidDataSuccess,
  error: getCovidDataError
});

function getCovidDataSuccess(data) {
  var countryData = data["Countries"];
  var hospitalBedsArray = [];
  var countryArray = [];
  for (var i = 0; i < countryData.length; i++) {
    var country = countryData[i]["Country"];
    var totalBeds = countryData[i]["Premium"]["CountryStats"]["HospitalBedsPerThousand"];
    countryArray.push(country);
    hospitalBedsArray.push(totalBeds);
  };
  countryArray.splice(136, 1);
  hospitalBedsArray.splice(136, 1);
  countryArray.splice(142, 1);
  hospitalBedsArray.splice(142, 1);
  var bedRateArray = [];
  for (var i = 0; i < hospitalBedsArray.length; i++) {
    var multiplication = hospitalBedsArray[i] * 1000;
    bedRateArray.push(multiplication);
  }
  google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBgy8LzcrzHLkGU97C0EgbAMfJJSv89-BI'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Hospital Beds Per Capita'],
      [countryArray[0], bedRateArray[0]],
      [countryArray[1], bedRateArray[1]],
      [countryArray[2], bedRateArray[2]],
      [countryArray[3], bedRateArray[3]],
      [countryArray[4], bedRateArray[4]],
      [countryArray[5], bedRateArray[5]],
      [countryArray[6], bedRateArray[6]],
      [countryArray[7], bedRateArray[7]],
      [countryArray[8], bedRateArray[8]],
      [countryArray[9], bedRateArray[9]],
      [countryArray[10], bedRateArray[10]],
      [countryArray[11], bedRateArray[11]],
      [countryArray[12], bedRateArray[12]],
      [countryArray[13], bedRateArray[13]],
      [countryArray[14], bedRateArray[14]],
      [countryArray[15], bedRateArray[15]],
      [countryArray[16], bedRateArray[16]],
      [countryArray[17], bedRateArray[17]],
      [countryArray[18], bedRateArray[18]],
      [countryArray[19], bedRateArray[19]],
      [countryArray[20], bedRateArray[20]],
      [countryArray[21], bedRateArray[21]],
      [countryArray[22], bedRateArray[22]],
      [countryArray[23], bedRateArray[23]],
      [countryArray[24], bedRateArray[24]],
      [countryArray[25], bedRateArray[25]],
      [countryArray[26], bedRateArray[26]],
      [countryArray[27], bedRateArray[27]],
      [countryArray[28], bedRateArray[28]],
      [countryArray[29], bedRateArray[29]],
      [countryArray[30], bedRateArray[30]],
      [countryArray[31], bedRateArray[31]],
      [countryArray[32], bedRateArray[32]],
      [countryArray[33], bedRateArray[33]],
      [countryArray[34], bedRateArray[34]],
      [countryArray[35], bedRateArray[35]],
      [countryArray[36], bedRateArray[36]],
      [countryArray[37], bedRateArray[37]],
      [countryArray[38], bedRateArray[38]],
      [countryArray[39], bedRateArray[39]],
      [countryArray[40], bedRateArray[40]],
      [countryArray[41], bedRateArray[41]],
      [countryArray[42], bedRateArray[42]],
      [countryArray[43], bedRateArray[43]],
      [countryArray[44], bedRateArray[44]],
      [countryArray[45], bedRateArray[45]],
      [countryArray[46], bedRateArray[46]],
      [countryArray[47], bedRateArray[47]],
      [countryArray[48], bedRateArray[48]],
      [countryArray[49], bedRateArray[49]],
      [countryArray[50], bedRateArray[50]],
      [countryArray[51], bedRateArray[51]],
      [countryArray[52], bedRateArray[52]],
      [countryArray[53], bedRateArray[53]],
      [countryArray[54], bedRateArray[54]],
      [countryArray[55], bedRateArray[55]],
      [countryArray[56], bedRateArray[56]],
      [countryArray[57], bedRateArray[57]],
      [countryArray[58], bedRateArray[58]],
      [countryArray[59], bedRateArray[59]],
      [countryArray[60], bedRateArray[60]],
      [countryArray[61], bedRateArray[61]],
      [countryArray[62], bedRateArray[62]],
      [countryArray[63], bedRateArray[63]],
      [countryArray[64], bedRateArray[64]],
      [countryArray[65], bedRateArray[65]],
      [countryArray[66], bedRateArray[66]],
      [countryArray[67], bedRateArray[67]],
      [countryArray[68], bedRateArray[68]],
      [countryArray[69], bedRateArray[69]],
      [countryArray[70], bedRateArray[70]],
      [countryArray[71], bedRateArray[71]],
      [countryArray[72], bedRateArray[72]],
      [countryArray[73], bedRateArray[73]],
      [countryArray[74], bedRateArray[74]],
      [countryArray[75], bedRateArray[75]],
      [countryArray[76], bedRateArray[76]],
      [countryArray[77], bedRateArray[77]],
      [countryArray[78], bedRateArray[78]],
      [countryArray[79], bedRateArray[79]],
      [countryArray[80], bedRateArray[80]],
      [countryArray[81], bedRateArray[81]],
      [countryArray[82], bedRateArray[82]],
      [countryArray[83], bedRateArray[83]],
      [countryArray[84], bedRateArray[84]],
      [countryArray[85], bedRateArray[85]],
      [countryArray[86], bedRateArray[86]],
      [countryArray[87], bedRateArray[87]],
      [countryArray[88], bedRateArray[88]],
      [countryArray[89], bedRateArray[89]],
      [countryArray[90], bedRateArray[90]],
      [countryArray[91], bedRateArray[91]],
      [countryArray[92], bedRateArray[92]],
      [countryArray[93], bedRateArray[93]],
      [countryArray[94], bedRateArray[94]],
      [countryArray[95], bedRateArray[95]],
      [countryArray[96], bedRateArray[96]],
      [countryArray[97], bedRateArray[97]],
      [countryArray[98], bedRateArray[98]],
      [countryArray[99], bedRateArray[99]],
      [countryArray[100], bedRateArray[100]],
      [countryArray[101], bedRateArray[101]],
      [countryArray[102], bedRateArray[102]],
      [countryArray[103], bedRateArray[103]],
      [countryArray[104], bedRateArray[104]],
      [countryArray[105], bedRateArray[105]],
      [countryArray[106], bedRateArray[106]],
      [countryArray[107], bedRateArray[107]],
      [countryArray[108], bedRateArray[108]],
      [countryArray[109], bedRateArray[109]],
      [countryArray[110], bedRateArray[110]],
      [countryArray[111], bedRateArray[111]],
      [countryArray[112], bedRateArray[112]],
      [countryArray[113], bedRateArray[113]],
      [countryArray[114], bedRateArray[114]],
      [countryArray[115], bedRateArray[115]],
      [countryArray[116], bedRateArray[116]],
      [countryArray[117], bedRateArray[117]],
      [countryArray[118], bedRateArray[118]],
      [countryArray[119], bedRateArray[119]],
      [countryArray[120], bedRateArray[120]],
      [countryArray[121], bedRateArray[121]],
      [countryArray[122], bedRateArray[122]],
      [countryArray[123], bedRateArray[123]],
      [countryArray[124], bedRateArray[124]],
      [countryArray[125], bedRateArray[125]],
      [countryArray[126], bedRateArray[126]],
      [countryArray[127], bedRateArray[127]],
      [countryArray[128], bedRateArray[128]],
      [countryArray[129], bedRateArray[129]],
      [countryArray[130], bedRateArray[130]],
      [countryArray[131], bedRateArray[131]],
      [countryArray[132], bedRateArray[132]],
      [countryArray[133], bedRateArray[133]],
      [countryArray[134], bedRateArray[134]],
      [countryArray[135], bedRateArray[135]],
      [countryArray[136], bedRateArray[136]],
      [countryArray[137], bedRateArray[137]],
      [countryArray[138], bedRateArray[138]],
      [countryArray[139], bedRateArray[139]],
      [countryArray[140], bedRateArray[140]],
      [countryArray[141], bedRateArray[141]],
      [countryArray[142], bedRateArray[142]],
      [countryArray[143], bedRateArray[143]],
      [countryArray[144], bedRateArray[144]],
      [countryArray[145], bedRateArray[145]],
      [countryArray[146], bedRateArray[146]],
      [countryArray[147], bedRateArray[147]],
      [countryArray[148], bedRateArray[148]],
      [countryArray[149], bedRateArray[149]],
      [countryArray[150], bedRateArray[150]],
      [countryArray[151], bedRateArray[151]],
      [countryArray[152], bedRateArray[152]],
      [countryArray[153], bedRateArray[153]],
      [countryArray[154], bedRateArray[154]],
      [countryArray[155], bedRateArray[155]],
      [countryArray[156], bedRateArray[156]],
      [countryArray[157], bedRateArray[157]],
      [countryArray[158], bedRateArray[158]],
      [countryArray[159], bedRateArray[159]],
      [countryArray[160], bedRateArray[160]],
      [countryArray[161], bedRateArray[161]],
      [countryArray[162], bedRateArray[162]],
      [countryArray[163], bedRateArray[163]],
      [countryArray[164], bedRateArray[164]],
      [countryArray[165], bedRateArray[165]],
      [countryArray[166], bedRateArray[166]],
      [countryArray[167], bedRateArray[167]],
      [countryArray[168], bedRateArray[168]],
      [countryArray[169], bedRateArray[169]],
      [countryArray[170], bedRateArray[170]],
      [countryArray[171], bedRateArray[171]],
      [countryArray[172], bedRateArray[172]],
      [countryArray[173], bedRateArray[173]],
      [countryArray[174], bedRateArray[174]],
      [countryArray[175], bedRateArray[175]],
      [countryArray[176], bedRateArray[176]],
      [countryArray[177], bedRateArray[177]],
      [countryArray[178], bedRateArray[178]],
      [countryArray[179], bedRateArray[179]],
      [countryArray[180], bedRateArray[180]],
      [countryArray[181], bedRateArray[181]],
      [countryArray[182], bedRateArray[182]],
      [countryArray[183], bedRateArray[183]],
    ]);
    var options = {
      colorAxis: {
        colors: ['lightblue', 'dodgerblue', 'blue', 'mediumblue']
      },
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  };
};

function getCovidDataError(error) {
  console.error(error);
};
