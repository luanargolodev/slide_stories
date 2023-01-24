export default class Slide {
  container
  slides
  controls
  time
  index
  slide

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container
    this.slides = slides
    this.controls = controls
    this.time = time
    this.index = 0
    this.slide = this.slides[this.index]
    this.show(this.index)

    this.init()
  }

  hide(el: Element) {
    el.classList.remove("active")
  }

  show(index: number) {
    this.index = index
    this.slide = this.slides[this.index]
    this.slides.forEach((slide) => this.hide(slide))
    this.slide.classList.add("active")
  }

  prev() {
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1
    this.show(prev)
  }

  next() {
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0
    this.show(next)
  }

  private addControls() {
    const prevButton = document.createElement("button")
    const nextButton = document.createElement("button")

    this.controls.appendChild(prevButton)
    this.controls.appendChild(nextButton)

    prevButton.innerText = "Slide anterior"
    nextButton.innerText = "Próximo slide"

    prevButton.addEventListener("pointerup", () => this.prev())
    nextButton.addEventListener("pointerup", () => this.next())
  }

  private init() {
    this.addControls()
    this.show(this.index)
  }
}
