import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Personne } from '../model/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectPersonneSubject = new Subject<Personne>();
  personnes: Personne[] = [];

  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '                 ', 123456, 38),
    ];
  }

  getPersonnesAPI(): Observable<Personne[]> {
    return this.http.get<Personne[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');
  }

  getPersonnes(): Personne[] {
    return this.personnes
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
