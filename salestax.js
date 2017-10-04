var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateTotSales(salesData) {
  var sum = salesData[0]
  for (var i = 1; i < salesData.length; i++){
    sum = sum + salesData[i]
  }
  return sum;
}
function calculateSalesTax(sum, province) {
  return sum * salesTaxRates[province]
}
function calc(salesData, taxRates) {
  var calculated = {};
  //Multiply total sales by taxRate per province
  for (var i = 0; i < salesData.length; i++) {
    var sum = calculateTotSales(salesData[i].sales)
    var tax = calculateSalesTax(sum, salesData[i].province)
    if (calculated[salesData[i].name] == undefined) {
      calculated[salesData[i].name] = {
      totalSales: sum,
      totalTaxes: tax
      }
    } else {
      calculated[salesData[i].name] = {
      totalSales: calculated[salesData[i].name].totalSales += sum,
      totalTaxes: calculated[salesData[i].name].totalTaxes += tax
      }
    }
 }
 return calculated;
}
var results = calc(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
