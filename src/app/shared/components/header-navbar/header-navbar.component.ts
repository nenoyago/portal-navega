import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowLeft
    })
  ],
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.less']
})
export class HeaderNavbarComponent {
  @Input() title = '';
  @Input() route = '';

  @Output() back = new EventEmitter<void>();
}
