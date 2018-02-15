export class Pixel {
    public colourB: number;
    public colourG: number;
    public colourR: number;
    public state: number;

    constructor(colourB: number, colourG: number, colourR: number, state: number) {
        this.colourB = colourB,
        this.colourG = colourG,
        this.colourR = colourR,
        this.state = state
    }
    drive() {
        return 'Pixel : ' + `${this.colourB} - ${this.colourG} - ${this.colourR} - ${this.state}`         
    }

}
