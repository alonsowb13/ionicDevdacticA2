import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
  }

  openDetails(film){
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
