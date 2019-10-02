let index = 0
let yindex = 0
basic.forever(() => {
   for (let yindex = 0; yindex <= 4; yindex++) {
       for (let xindex = 0; xindex <= 4; xindex++) {
           led.plot(xindex, yindex)
           basic.pause(100)
           led.unplot(xindex, yindex)
           basic.pause(100)
       }
   }
})
