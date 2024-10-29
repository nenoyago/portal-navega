import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowPath, heroEye, heroHome } from '@ng-icons/heroicons/outline';
import { AvatarComponent } from 'src/shared/components/avatar';

import { HeaderComponent } from './header/header.component';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    NgIconsModule.withIcons({
      heroHome,
      heroEye,
      heroArrowPath
    }),
    AvatarComponent
  ]
})
export class ShellModule {}
