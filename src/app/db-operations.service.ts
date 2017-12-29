import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class DbOperationsService {
	apiURL = "http://localhost/rest_api_example/index";
  	constructor(private http: Http){}
  	//Save users
	saveUsers(users: any[]){
		console.log(users);
		this.http.post(this.apiURL, users)
    	.subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
	}
	//Get all users
	getUsers() {
		const headers = new Headers();

		headers.append("Cache-Control", "no-cache");
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Max-Age', '1728000');
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
	    return this.http.get(this.apiURL);
	}
	//Update user
	updateUser(user)
	{
		return this.http.put(this.apiURL, user).subscribe(
        (val) => {
            console.log("UPDATE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("UPDATE call in error", response);
        },
        () => {
            console.log("The UPDATE observable is now completed.");
        });
	}
	//Delete user
	deleteUser(user){
		return this.http.delete(this.apiURL, new RequestOptions({body : user
  		})).subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
	}
}
