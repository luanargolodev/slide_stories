export default class Slide {
    container;
    elements;
    controls;
    time;
    constructor(container, elements, controls, time = 5000) {
        this.container = container;
        this.elements = elements;
        this.controls = controls;
        this.time = time;
        console.log(this.container, this.elements, this.controls, this.time);
    }
}
//# sourceMappingURL=Slide.js.map