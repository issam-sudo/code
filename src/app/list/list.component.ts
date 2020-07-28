import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  URL: string;
  repos: any;
  slider1Value: any;
  tot: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setAllGithubRepos();
     }

  async  setAllGithubRepos() {

      this.URL = environment.URL;
      console.log(this.URL);
      const response = await fetch(this.URL);
      if (response.ok) {

      const json = await response.json();
      console.log(json);
      this.repos = await json;
      console.log(this.repos);

    } else {
      // tslint:disable-next-line:quotemark
      alert("HTTP-Error: " + response.status);

    }
  }
  ss(id){
    this.router.navigate(['/updte/' + id]);

  }

  async  sve() {
  const title: any = document.getElementById('title');
  this.slider1Value = title.value;
  console.log(this.slider1Value);
  fetch('http://localhost:8000/lists', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({title: this.slider1Value })

    }) ;
}
}
