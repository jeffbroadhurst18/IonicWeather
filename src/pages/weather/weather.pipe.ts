import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transformLocation' })
export class TransformLocationPipe implements PipeTransform {
    transform(input: string): string {
        switch (input) {
            case 'os': { return 'Orkney & Shetland'; }
            case 'he': { return 'Highland & Eilean Siar'; }
            case 'gr': { return 'Grampian'; }
            case 'ta': { return 'Tayside'; }
            case 'st': { return 'Strathclyde'; }
            case 'dg': { return 'Dumfries, Galloway, Lothian'; }
            case 'ni': { return 'Northern Ireland'; }
            case 'yh': { return 'Yorkshire & the Humber'; }
            case 'ne': { return 'Northeast England'; }
            case 'em': { return 'East Midlands'; }
            case 'ee': { return 'East of England'; }
            case 'se': { return 'London & Southeast England'; }
            case 'nw': { return 'Northwest England'; }
            case 'wm': { return 'West Midlands'; }
            case 'sw': { return 'Southwest England'; }
            case 'wl': { return 'Wales'; }
            case 'uk': { return 'UK'; }
            default: { return 'unknown'; }
        }
    }
}