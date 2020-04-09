import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition{
    in({from, to, done}){

        const tl = new TimelineLite();
        tl.fromTo(from, 0.75, {opacity: '1'}, {opacity: '0', onComplete: function(){
                from.remove();
            }
        })
        .fromTo(to, 0.75, {opacity: '0'}, {opacity: '1', onComplete: function(){
            done();
        }})

    }
    out({from, done}){
        done();
    }
}

export default Fade;