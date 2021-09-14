import { Component, OnInit } from '@angular/core';
import {PlayDataService} from '../../play-data.service'


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  duration: any = 100;
  currentTime: any = 50;
  isPlaying: boolean = false;
  image = "http://dmitryvolkov.me/demo/volna/img/covers/cover.svg"
  readCurrentTime = '00:00'
  readDuration = '00:00'
  volume = 0.5

  audio: any;
  constructor(
    private playData : PlayDataService
  ) {
    this.audio = new Audio()
    
   }

  ngOnInit(): void {
    this.playData.get().subscribe((obj: any)=>{
      this.image = obj.image;
      this.audio.src = obj.src
      this.audio.load()
      this.play()
    })
  }

  setSeek(value: any){
  }

  play(){
    this.audio.play()
    this.isPlaying = true;
  }

  pause(){
    this.audio.pause()
    this.isPlaying = false

  }

  
}
