import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  avatar: string = 'assets/icon/avatar.svg';
  settings: string = 'assets/icon/settings.svg';
  trade: string = 'assets/icon/trade.svg';
  
  constructor() {}

}
