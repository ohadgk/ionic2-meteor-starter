/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core'
 
import {bootstrap} from 'angular2-meteor';
 
import {Parties} from 'collections/parties';

import {PartiesForm} from 'client/parties-form/parties-form'
 
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [PartiesForm]
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