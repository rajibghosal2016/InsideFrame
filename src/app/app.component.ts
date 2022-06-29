import { Component, HostListener, OnDestroy } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'InsideFrame';

  ngOnDestroy(): void {
    console.log('inside iframe is geting destroyed');
  }

  @HostListener('window:message', ['$event'])
  onMessage(e: any) {
    console.log(e);
    if (e["data"] == "close")
      this.closeApp();
  }

  closeApp() {
    platformBrowser().destroy();
  }
}
