/**
 * Created by whisper on 2016/6/18.
 */
import {BasicActionComponent as BasicActionComponent} from '../../BasicActionComponent/BaiscActionComponent'
export class FavComponents extends BasicActionComponent
{
    constructor(...args)
    {
        super(args);
    }
    CountUp()
    {
        this.count++;
        this.dom.getElementsByClassName("fav t-right-bottom")[0].innerHTML=this.count;
    }
    draw()
    {

    }
}