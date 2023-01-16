import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

//we can add it on app.module.ts->providers: [RandomNumGenService]

export class RandomNumGenService{

    RandomNumGenCode(){
        let a=Math.random()*9;
        let b=Math.random()*9;
        let c=Math.random()*9;
        let d=Math.random()*9;
        let e=Math.random()*9;

        let rangeCode=`${Math.round(a)}
        ${Math.round(b)}
        ${Math.round(c)}
        ${Math.round(d)}
        ${Math.round(e)}`

        return rangeCode;
    }
}