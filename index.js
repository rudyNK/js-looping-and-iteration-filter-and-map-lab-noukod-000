// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  array = drivers.filter(driver => driver.revenue > revenue)
  return array.map(driver => driver.name)
}

function exactMatch(drivers, params) {
  const k = Object.keys(params)
  return drivers.filter(d => d[k] === params[k] )
}

function exactMatchToList(drivers, params) {
  const k = Object.keys(params)
  return drivers.filter(d => d[k] === params[k] ).map(d => d.name)
}  