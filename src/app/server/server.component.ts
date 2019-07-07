import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverName = 'TestServer';
  userName = '';
  usernameReset = false;

  onReset()
  {
    this.usernameReset = true;
    this.userName = '';
  }
}
