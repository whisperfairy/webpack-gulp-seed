/**
 * Created by whisper on 2016/6/18.
 */
export class BasicActionComponent {

    constructor(...args) {
        this.count = 0,
            this.title = args[0] ,
            this.dom = args[1] ,
            this.dom.click (()=>{
                this.CountUp();
            });
            // this.dom.click(function () {
            //  alert(1);
            // });
    }

    CountUp() {
        console.log(1);
        this.count++
    }

    clear() {
        this.count = 0
    }
}
