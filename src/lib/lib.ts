import { DataView } from './interfaces';
import * as moment from 'moment';

export function insertAverage (data: DataView, props: string[], avg_props: string[]): DataView {

  let totalDays: number = 0;

  if (data.interval === 'year') {
    // years
    for ( let j = 0; j < data.items.length; j++ ) {
      // assume for now that yearly date ranges always start in January
      let daysInYear = 365;
      if ( moment( data.items[j].date ).isLeapYear() ) { daysInYear++; }

      for ( let i = 0; i < props.length; i++ ) {

        let adu = data.items[j][ props[i] ] / daysInYear;
        data.items[j][ avg_props[i] ] = adu;
      }

      totalDays = totalDays + daysInYear;
    }
  } else {
    // months
    
    for ( let j = 0; j < data.items.length; j++ ) {
      let daysInMonth: number;

      for ( let i = 0; i < props.length; i++ ) {

        daysInMonth = moment( data.items[j].date ).daysInMonth();
        let adu = data.items[j][ props[i] ] / daysInMonth;
        data.items[j][ avg_props[i] ] = adu;
      }

      totalDays = totalDays + daysInMonth;
    }
  }
  // total
  for ( let i = 0; i < props.length; i++ ) {

    let adu = data.totals[ props[i] ] / totalDays;
    data.totals[ avg_props[i] ] = adu;
  }
  return data;
}
