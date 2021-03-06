import { Component, OnInit } from '@angular/core';
import {PlayDataService} from '../../../../play-data.service'
import {DataService} from '../../../../data.service'

@Component({
  selector: 'app-serum-loaded',
  templateUrl: './serum-loaded.component.html',
  styleUrls: ['./serum-loaded.component.css']
})
export class SerumLoadedComponent implements OnInit {


  

  constructor( private playData : PlayDataService, private musicData: DataService) { 
    this.musicData.getData().subscribe( data => {
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }
  songsData = [
    {
      title: "",
      src: "http://192.168.43.138:8000/852%20Hz%20%E2%9E%A4%20Release%20Unconscious%20Bad%20Energy%20_%20Open%20up%20to%20Spiritual%20Experience%20%26%20Deep%20Healing%20_%20Let%20Go%20%28%20256kbps%20cbr%20%29.mp3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-63MCBaZoty-AmXMySGocxysc_p_dzdORA&usqp=CAU",
    },{
      title: "",
      src: "http://localhost:8000/THE%20MOST%20POWERFUL%20DMT%20ACTIVATION_%20DEEPEST%20MEDITATION%20TECHNIQUE_%20BINAURAL%20BEATS%20MEDITATION%20%28%20720%20X%201280%20%29.mp4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJs5FijAQulGfeM8seQ40bC0Qfl8bH5YPZeQ&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQRs2fI3GDa-KFe3MlIpXdwMT2A45dumNBA&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINvGdTIqkW1BDoCvHrxYQkBSfLldRQHjCkg&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Apu1JPEhQk5HgxHA4jqlmFMVPVfl6ji1RQ&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu9H8ESZfGtFEITKdCBn3-biOulz8hcgY2A&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzw82MvklSE4Jl_1zplpjjXBw6fA7Dsf2XAw&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACP2xK8z8xbHcChn-y036_4OIbEZbj5bHMw&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37SiM0_3A4D8f8ewikig_45tan4o6PUZAJg&usqp=CAU",
    },{
      title: "",
      src: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Y4_aIw0u6mJIIgUHZQPeRNnK-AOS-0n7Qg&usqp=CAU",
    }
  ]

  sendData(data:any){
    this.playData.add(data)
  }
}
