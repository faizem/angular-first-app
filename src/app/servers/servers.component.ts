import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showSecret = false;
  log = [];
  onToggle(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
