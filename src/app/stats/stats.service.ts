import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StatsService{
    summary=new Subject<any>();
    countryHistory=new Subject<any>();
    countries=new Subject<any>();
    alpha3Code:Subject<string>;
    constructor(){}

    getSummary(){          
        fetch("https://api.covid19api.com/summary", {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response =>{
            return response.json();
        }).then(res=>{
            this.summary.next(res);
        })
        .catch(error => 
            console.log('error', error));
    }

    getTotalByCountry(country:string){
        fetch("https://api.covid19api.com/total/dayone/country/"+country, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response =>{
            return response.json();
        }).then(res=>{
            this.countryHistory.next(res);
        })
        .catch(error => 
            console.log('error', error));
    }
    
    getCountries(){
        fetch("https://api.covid19api.com/countries", {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response =>{
            return response.json();
        }).then(res=>{
            this.countries.next(res);
        })
        .catch(error => 
            console.log('error', error));
    }
}