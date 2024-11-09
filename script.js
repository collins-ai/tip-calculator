const bill = document.getElementById(`bill`)
const customTip = document.getElementById(`custom`)
const people = document.getElementById(`people`)
const check = document.getElementById(`check`)

let billValue
let customTipValue
let peopleValue

const tip = document.getElementsByClassName(`smallBtn`)
let tipValue
let singleTip

const reset = document.getElementById(`reset`)
const tipResult = document.getElementById(`tipResult`)
const totalResult = document.getElementById(`totalResult`)
tipResult.innerHTML = `$0.00`
totalResult.innerHTML = `$0.00`


bill.addEventListener(`input`, (e) => {
    billValue = e.target.value
})
customTip.addEventListener(`input`, (e) => {
    customTipValue = e.target.value / 100
})
people.addEventListener(`input`, (e) => {
    if(e.target.value == 0) {
        const newElement = document.createElement(`p`)
        newElement.innerHTML = `Can't be zero`
        newElement.style.position = `absolute`
        newElement.style.top = `.1rem`
        newElement.style.right = `2rem`
        newElement.style.color = `hsl(0, 100%, 50%)`
        e.target.style.borderColor = `hsl(0, 100%, 50%)`
        check.appendChild(newElement)
    }
    peopleValue = e.target.value
})


const getTip = (e) => {
    tipValue = e.target.value / 100
    e.target.style.backgroundColor = `hsl(172, 67%, 45%)`
    e.target.style.color = `hsl(0, 0%, 0%)`
}
for(singleTip of tip) {
    singleTip.addEventListener(`click`, getTip)
}


const resetValues = (e) => {
    if((billValue && tipValue && peopleValue) || (billValue && customTipValue && peopleValue)) {
        if(tipValue) {
            const firstResult = billValue * tipValue / peopleValue
            tipResult.innerHTML = `$` + firstResult.toFixed(2)
            const SecondResult = (billValue * tipValue / peopleValue) + (billValue / peopleValue)
            totalResult.innerHTML = `$` + SecondResult.toFixed(2)
        }
        if(customTipValue) {
            const firstResult = billValue * customTipValue / peopleValue
            tipResult.innerHTML = `$` + firstResult.toFixed(2)
            const SecondResult = (billValue * customTipValue / peopleValue) + (billValue / peopleValue)
            totalResult.innerHTML = `$` + SecondResult.toFixed(2)
        }
        e.target.style.backgroundColor = `hsl(172, 67%, 45%)`
        billValue = ``; tipValue = ``; customTipValue = ``; peopleValue = ``
    }else{
        tipResult.innerHTML = `$0.00`
        totalResult.innerHTML = `$0.00`
        e.target.style.backgroundColor = `hsl(189, 41%, 97%)`
        singleTip.style.backgroundColor = `hsl(183, 100%, 15%)`
        singleTip.style.color = `hsl(0, 0%, 100%)`
        bill.value = ``; customTip.value = ``; people.value = ``  
    }
}
reset.addEventListener(`click`, resetValues)

