import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-body',
  templateUrl: './artist-body.component.html',
  styleUrls: ['./artist-body.component.css']
})
export class ArtistBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  artistData = [{
    name: "",
    image: "../../../../assets/artists/Humane Sagar .jpg"
  },{
    name: "",
    image: "../../../../assets/artists/Aseema Panda.jpg"
  },{
    name: "",
    image: "../../../../assets/artists/Antara Chakraborty.jpg"
  },{
    name: "",
    image: "../../../../assets/artists/Kuldeep Pattnaik.jpg"
  },{
    name: "",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/ankit-tiwari.jpeg?qoHg4P1Xl4IilXhXmsIWfodzB1gPeO4p"
  },{
    name: "",
    image: "https://images.indianexpress.com/2021/07/sonu-nigam-1200-1.jpg"
  }]

}
