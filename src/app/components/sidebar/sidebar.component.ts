import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  mobile: boolean | undefined
  showMenu: boolean = true
  btnIcon = "../../../assets/images/menu.png"

  ngOnInit(): void {
    if(window.innerWidth < 550){
      this.mobile = true
      this.showMenu= false
    }
  }

  changeBtn(){
    if(this.showMenu){
      this.btnIcon = "../../../assets/images/close.png"
    }
    else{
      this.btnIcon = "../../../assets/images/menu.png"
    }
  }

  toggleBtn(){
    this.showMenu = !this.showMenu
    this.changeBtn()
  }

  onResize(event: any) {
    if (event.target.innerWidth<550){
      this.mobile = true
      this.showMenu= false
      this.changeBtn()
    }
    else{
      this.mobile = false
      this.showMenu= true
      this.changeBtn()
    }
  }
}
