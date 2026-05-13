import { Component, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('north-side-web');

  images = [
    '/assets/spotify.png',
    '/assets/apple.png',
    '/assets/google.png',
    '/assets/netflix.png',
  ];
  imageAlt = [
    'Spotify',
    'Apple',
    'Google',
    'Netflix',
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  services = ['Web Development', 'Mobile Development', 'UI/UX Design', 'IT Support'];
  selectedService = '';
}
