import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';

export type Menu = {
  icon: string;
  title: string;
  route: string;
};

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronRight
    })
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.less']
})
export class NavigationMenuComponent {
  @Input() menuItems: Menu[] = [];
}
