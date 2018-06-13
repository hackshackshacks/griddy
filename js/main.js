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
const cases = {
  elements: {
    cases: document.querySelector('.cases'),
    main: document.querySelector('main'),
    buttons: document.querySelectorAll('.changeview')
  },
  init: function () {
    this.elements.cases.classList.add('inactive')
    this.handleEvents()
  },
  handleEvents: function () {
    this.elements.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.toggleView()
      })
    })
  },
  toggleView: function () {
    this.elements.cases.classList.toggle('inactive')
    this.elements.main.classList.toggle('inactive')
  }
}
cases.init()
draw.init()
pixel.init()
