

import {Page} from 'ionic-framework/ionic';
//import {PartiesList} from 'parties-list';

//import {MeteorComponent} from 'angular2-meteor-client/main';

@Page({
  templateUrl: 'build/pages/page2/page2.html'
 // directives: [PartiesList]
})
export class Page2{ //extends MeteorComponent{
    //parties: Array<any>;
   //parties: Mongo.Cursor<Object>;

    constructor (iterableDiffers: IterableDiffers) {
      //  super()
      // this.parties = Parties.find();
      console.log("IterableDiffers injection: " + iterableDiffers)
      
    }
}
