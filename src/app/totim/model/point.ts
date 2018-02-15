export class Point_Matrix_Lecko {
    
    public colourB: number;
    public colourG: number;
    public colourR: number;
    public state: number;
    public coord_line : number;
    public coord_column: number;

    constructor(colourB: number, colourG: number, colourR: number, state: number, coord_line : number, coord_column : number) {
        this.colourB = colourB,
        this.colourG = colourG,
        this.colourR = colourR,
        this.state = state,
        this.coord_line = coord_line,
        this.coord_column = coord_column
    }

    drive() {
        return 'Point : ' + `${this.colourB} - ${this.colourG} - ${this.colourR} - ${this.coord_line} - ${this.coord_column}`         
    }

        
}
