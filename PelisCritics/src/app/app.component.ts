import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DescriptionPComponent } from './component/description-p/description-p.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, DescriptionPComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PelisCritics';
}
