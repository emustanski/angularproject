import { Injectable } from '@angular/core';
import { IAd } from './interfaces';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  adsRef: AngularFireList<any>;
  adRef: AngularFireObject<any>;

  constructor(public db: AngularFireDatabase) {}

  CreateAd(ad: IAd) {
    this.adsRef.push({
      headline: ad.headline,
      company: ad.company,
      description: ad.description,
      location: ad.location,
      createdAt: Date.now(),
    });
  }

  GetAd(id: string) {
    this.adRef = this.db.object('allads/' + id);

    return this.adRef;
  }

  getAdId() {
    const adRef = this.db.object('allads');
  }

  getAllAds() {
    this.adsRef = this.db.list('allads');
    return this.adsRef;
  }

  UpdateAd(ad: IAd) {
    this.adRef.update({
      headline: ad.headline,
      company: ad.company,
      description: ad.description,
      location: ad.location,
    });
  }

  DeleteAd(id: string) {
    this.adRef = this.db.object('allads/' + id);
    this.adRef.remove();
  }
}
