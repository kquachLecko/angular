export class Point_Matrix_Lecko {
    
    public colourB: number;
    public colourG: number;
    public colourR: number;
    public state: number;
    public coord_line : number;
    public coord_column: number;

    constructor(colourR: number, colourG: number, colourB: number, state: number, coord_line : number, coord_column : number) {
        this.colourR = colourR,
        this.colourG = colourG,
        this.colourB = colourB,
        this.state = state,
        this.coord_line = coord_line,
        this.coord_column = coord_column
    }

    drive() {
        return 'Point : ' + `${this.colourB} - ${this.colourG} - ${this.colourR} - ${this.coord_line} - ${this.coord_column}`         
    }
    sameColor(p2 : Point_Matrix_Lecko ) : boolean{
        if(this.colourB == p2.colourB && this.colourG == p2.colourG && this.colourR == p2.colourR ){
            return true;
        }
        return false
    }
        
}
