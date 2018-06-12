const pixel = {
  init: function() {
    this.el = document.querySelector(".pixel")
    this.height = document
      .querySelector(".pixel")
      .getBoundingClientRect().height
    this.width = document.querySelector(".pixel").getBoundingClientRect().width
    this.vMax = Math.floor(window.innerHeight / this.height)
    this.hMax = Math.floor(window.innerWidth / this.width)
  },
  getRandom: function() {
    let obj = {}
    obj.vRandom = Math.floor(Math.random() * this.vMax) * this.height
    obj.hRandom = Math.floor(Math.random() * this.hMax) * this.width
    return obj
  },
  update: setInterval(() => {
    pixel.el.style.left = `${pixel.getRandom().hRandom}px`
    pixel.el.style.top = `${pixel.getRandom().vRandom}px`
    pixel.el.classList.add("bling")
    setTimeout(() => {
      pixel.el.classList.remove("bling")
    }, 1000)
  }, 2000)
}
const draw = {
  elements: {
    lines: document.querySelectorAll(".draw")
  },
  init: function () {
    this.delay()
  },
  delay: function () {
    let increment = Math.floor(2000 / this.elements.lines.length)
    this.elements.lines.forEach((line, i) => {
      line.style.animationDelay = `${2000 + i * increment}ms`
    })
  }
}
draw.init()
pixel.init()
