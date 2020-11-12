console.log('1 - Principio de mi código')

setTimeout(() => {
  console.log('4 - Han pasado dos segundos')
}, 3000)

const twoSecondsTimeout = setTimeout(() => {
  console.log('3 - Han pasado dos segundos')
}, 2000)

console.log('2 - Final de mi código')

for (let i = 0; i < 10; i++) {
  let timeout = setTimeout(() => {
    console.log(`Han pasado ${i * 1000} ms`)

    if (twoSecondsTimeout) {
      clearTimeout(twoSecondsTimeout)
    }
  }, i * 1000)
}

console.log('Has terminado el bucle for!!')