import { Injectable } from '@angular/core';
import { IMeisterschaftenliste } from '../interfaces/imeisterschaftenliste';

// const Liste:IMeisterschaftenliste[] = [
//   {
//     ID: 1,
//     Bezeichnung: 'Testmeisterschaft 1',
//     Beginn: new Date(2023, 0, 1),
//     Ende: new Date(2023, 11, 31),
//     MeisterschaftstypID: 1,
//     Meisterschaftstyp: 'Meisterschaft',
//     Aktiv: 0
//   },
//   {
//     ID: 2,
//     Bezeichnung: 'Jahreswechseltunier',
//     Beginn: new Date(2024, 0, 3),
//     Ende: new Date(2024, 0, 3),
//     MeisterschaftstypID: 2,
//     Meisterschaftstyp: 'Blitztunier',
//     Aktiv: 0
//   },
//   {
//     ID: 4,
//     Bezeichnung: 'Testmeisterschaft 2',
//     Beginn: new Date(2024, 0, 1),
//     Ende: new Date(2024, 11, 31),
//     MeisterschaftstypID: 3,
//     Meisterschaftstyp: 'Kombimeisterschaft',
//     Aktiv: 1
//   }
// ]

@Injectable({
  providedIn: 'root'
})
export class MeisterschaftserviceService {
  liste:IMeisterschaftenliste[] = [{
    ID: 1,
    Bezeichnung: 'Testmeisterschaft 1',
    Beginn: new Date(2023, 0, 1),
    Ende: new Date(2023, 11, 31),
    MeisterschaftstypID: 1,
    Meisterschaftstyp: 'Meisterschaft',
    Aktiv: 0
  },
  {
    ID: 2,
    Bezeichnung: 'Jahreswechseltunier',
    Beginn: new Date(2024, 0, 3),
    Ende: new Date(2024, 0, 3),
    MeisterschaftstypID: 2,
    Meisterschaftstyp: 'Blitztunier',
    Aktiv: 0
  },
  {
    ID: 3,
    Bezeichnung: 'Testmeisterschaft 2',
    Beginn: new Date(2024, 0, 1),
    Ende: new Date(2024, 11, 31),
    MeisterschaftstypID: 3,
    Meisterschaftstyp: 'Kombimeisterschaft',
    Aktiv: 1
  }];

  constructor() { }

  public GetMeisterschaftsliste():IMeisterschaftenliste[]{

    return this.liste;
  }
}
