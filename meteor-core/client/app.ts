/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core'
 
import {bootstrap} from 'angular2-meteor';
 
import {Parties} from 'collections/parties';
 
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class Socially {
    parties: Mongo.Crusor<Object>
    constructor () {
        this.parties = Parties.find()
    }
    removeParty(party) {
        Parties.remove(party._id);
    }
}
 
bootstrap(Socially)