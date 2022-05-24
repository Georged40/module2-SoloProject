let num = 30
const meterFeetConversion = 3.28084
const feetMeterConversion = 0.3048
const kiloPoundConversion = 2.20462
const poundKiloConversion = 0.453592
const literGalloonConversion = 0.264174
const galloonLiterConversion = 3.78541

let figure = document.getElementById("number").textContent = num
const meterFoot = document.getElementById("length")
const literGall = document.getElementById("volume")
const kiloPound = document.getElementById("mass")


meterFoot.innerHTML = 
`${num} metres = ${parseFloat(num/meterFeetConversion).toFixed(3)} Feet | 
${num} feet = ${parseFloat(num/feetMeterConversion).toFixed(3)} meters`

literGall.innerHTML =`${num} litres = ${parseFloat(num/literGalloonConversion).toFixed(3)} gallons | ${num} galloons = ${parseFloat(num/galloonLiterConversion).toFixed(3)} liters`

kiloPound.innerHTML = `${num} kilos = ${parseFloat(num/kiloPoundConversion).toFixed(3)} pounds | ${num} pounds = ${parseFloat(num/poundKiloConversion).toFixed(3)} kilos`
