/**
 * Created by whisper on 2016/6/18.
 */
import {BasicActionComponent as BasicActionComponent} from '../../BasicActionComponent/BaiscActionComponent'
require('../css/FavComponents.css');
export class FavComponents extends BasicActionComponent
{
    constructor(...args)
    {
        super(args[0],args[1]);
    }
    CountUp()
    {
            this.count++;
        console.log( $(".fav.t-right-bottom "));
            $(".fav.t-right-bottom").html(this.count);

    }
    draw()
    {

    }
}