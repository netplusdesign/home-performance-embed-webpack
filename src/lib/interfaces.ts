export interface ViewSummaryTotals {
    used: number;
    solar: number;
    net: number;
    adu?: number;
    hdd: number;
  }
    
  export interface ViewSummary {
    date: string;
    used: number;
    solar: number;
    net: number;
    adu?: number;
    hdd: number;
  }
    
  export interface DataView {
    interval: string;
    items: ViewSummary[]
    totals: ViewSummaryTotals;
    view: string;
  } 