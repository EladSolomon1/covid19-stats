import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StatsService } from '../stats.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-country-history',
  templateUrl: './country-history.component.html',
  styleUrls: ['./country-history.component.css']
})
export class CountryHistoryComponent implements OnInit {
  searchForm: FormGroup;
  filteredCountries: Observable<string[]>;
  countries = [];
  isSearched:boolean;
  isLoading:boolean;
  displayedColumns: string[] = [ 'date', 'confirmed', 'active', 'recovered', 'deaths'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource: { data: any; paginator: MatPaginator; sort: MatSort; };


  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.isLoading=false;
    this.statsService.getCountries();
    this.statsService.countries.subscribe(res => {
      this.countries = res.map(country => {
        return country['Country'];
      })
      this.countries.sort();
    })

    this.searchForm=new FormGroup({
      countryName:new FormControl('',{validators:[Validators.required]})
    })

    this.filteredCountries = this.searchForm.controls['countryName'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.dataSource = new MatTableDataSource([]);
  }
  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(countryName => countryName.toLowerCase().includes(filterValue));
  }
  
  

  search(){
    this.isLoading=true;
    this.isSearched=false;
    const countryName=this.searchForm.controls['countryName'].value;
    this.statsService.getTotalByCountry(countryName);
    this.dataSource.data = [];
    this.statsService.countryHistory.subscribe(res => {
      this.dataSource.data = res.reverse();
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.isLoading=false;
      this.isSearched = true;
    });
  }

  sortChange(sortEvent: Sort): void {
    this.dataSource.sort.active = sortEvent.active;
    this.dataSource.sort.direction = sortEvent.direction;

    const currentData = this.dataSource.data.slice();
    this.dataSource.data = this.sortDate(currentData);
  }

  sortDate(currentData: Array<any>): Array<any> {
    return currentData.sort((a, b) => {
      const isAsc = this.dataSource.sort.direction === 'asc';
      switch(this.dataSource.sort.active) {
        case 'date': return compareDate(new Date(a), new Date(b), isAsc);
        case 'confirmed': return compare(a, b, isAsc);
        case 'active': return compare(a, b, isAsc);
        case 'recovered': return compare(a, b, isAsc);
        case 'deaths': return compare(a, b, isAsc);
      }
    });

  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compareDate(a: Date, b: Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}