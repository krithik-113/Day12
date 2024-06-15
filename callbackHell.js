//DOM
const heading = document.createElement("h2")


// function declaration
const countDown = (num) => {
    heading.innerText = num
}

let num = 10
// callback Hell
countDown(num,setTimeout(() => {
    num -= 1 //9
    countDown(num, setTimeout(() => {
        num -= 1 //8
        countDown(num, setTimeout(() => {
            num -= 1 //7
            countDown(num, setTimeout(() => {
                num -= 1 //6
                countDown(num, setTimeout(() => {
                    num -= 1 //5
                    countDown(num, setTimeout(() => {
                        num -= 1 //4
                        countDown(num, setTimeout(() => {
                            num -= 1 //3
                            countDown(num, setTimeout(() => {
                                num -= 1 //2
                                countDown(num, setTimeout(() => {
                                    num -= 1 //1
                                    countDown(num, setTimeout(() => {
                                        num = "Happy New Year" //-0
                                        countDown(num)
                                    },1000))
                                },1000))
                            },1000))
                        },1000))
                    },1000))
                },1000))
            },1000))
        },1000))
    },1000))
}, 1000))

document.body.append(heading)