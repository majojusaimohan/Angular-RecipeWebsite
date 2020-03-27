import { Ingredients } from '../shared/ingredients.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagepath: string;
    public ingredents: Ingredients[];


    constructor(name: string, desc: string, imagepath:string , ingredent: Ingredients[] ){

        this.name=name;
        this.description=desc;
        this.imagepath=imagepath
        this.ingredents=ingredent;
    }
}