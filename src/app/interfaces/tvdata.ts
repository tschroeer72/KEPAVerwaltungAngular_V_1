export interface ITVData {
    ID: number,
    Vorname: string,
    Nachname: string,
    Display: string
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
    constructor(
      public item: ITVData,
      public level = 1,
      public expandable = false,
      public isLoading = false,
    ) {}
  }