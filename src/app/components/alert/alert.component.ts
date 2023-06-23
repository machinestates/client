import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @ViewChild('wrapper') private content;
  public message: any;
  private typed: Typed;
  private typeSpeed = 60;

  /**
   * Unused
   */
  constructor(private alertService: AlertService) { }

  /**
   * On initialization, subscribe to getMessage() in Alert service
   */
  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      if (message && message.hasOwnProperty('messages')) {
        this.message = message;
        if (this.typed && this.typed.constructor === Typed) {
          this.typed.destroy();
        }
        this.typed = new Typed(this.content.nativeElement.querySelector('.typing'), {
          strings: this.message.messages,
          typeSpeed: this.message.typeSpeed || this.typeSpeed
        });
      }
    });
  }

}