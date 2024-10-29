import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { filter, fromEvent, map } from 'rxjs';
import { HeaderNavbarComponent } from 'src/app/shared/components/header-navbar';
import { NavigationMenuComponent } from 'src/app/shared/components/navigation-menu';

import { MenuSummaryComponent } from './components/menu-summary/menu-summary.component';
import { menu } from './menu';

const isMobileSize = () => {
  return window.innerWidth < 768;
};

@Component({
  selector: 'app-my-plans',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderNavbarComponent,
    NavigationMenuComponent,
    MenuSummaryComponent
  ],
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.less']
})
export class MyPlansComponent {
  readonly menuItems = menu;

  protected currentPath = '';
  protected title = 'Meu plano';

  protected isMobile = signal(typeof window !== 'undefined' && isMobileSize());

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initializeCurrentPathAndTitle();

    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isMobile.set(isMobileSize());
      });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.getDeepestChild(this.route))
      )
      .subscribe((data) => {
        this.currentPath = this.getPathWithoutSlash(
          data.snapshot.routeConfig?.path || ''
        );
        this.title = this.getTitleFromCurrentPath(this.currentPath);
      });
  }

  private initializeCurrentPathAndTitle() {
    const deepestChild = this.getDeepestChild(this.route);
    this.currentPath = this.getPathWithoutSlash(
      deepestChild.snapshot?.routeConfig?.path || ''
    );
    this.title = this.getTitleFromCurrentPath(this.currentPath);
  }

  getTitleFromCurrentPath(currentPath: string): string {
    const { title } = this.menuItems.find(
      (item) => item.route === currentPath
    ) || { title: 'Meu plano' };

    return title;
  }

  private getPathWithoutSlash(path: string): string {
    return path.startsWith('/') ? path.substring(1) : path;
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  get routeToBack(): string {
    return this.isMainPage ? '/dashboard' : '/..';
  }

  get isMainPage(): boolean {
    return this.currentPath === '';
  }
}
