import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updte',
  templateUrl: './updte.component.html',
  styleUrls: ['./updte.component.css']
})
export class UpdteComponent implements OnInit {
  thoughtID: any;
  slider1Value: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sss()

  }
  sss(){
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.thoughtID = params.id;
      console.log(this.thoughtID)
    })
  }

  async  sve() {
    const title: any = document.getElementById('title');
    this.slider1Value = title.value;
    console.log(this.slider1Value);
    fetch('http://localhost:8000/lists/'+ this.thoughtID, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({title: this.slider1Value })

      }) ;
  }
}
