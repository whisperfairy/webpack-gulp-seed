/**
 * Created by whisper on 2016/6/18.
 */
export class BasicActionComponent {
    constructor(...args) {
            this.count = 0,
            this.title = args[0] || "",
            this.dom = args[1] || "",
            this.dom.attachEvent('onclick',this.CountUp);
    }
    CountUp() {
        this.count++;
    }
    clear() {
        this.count = 0
    }
}
