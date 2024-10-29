import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroArrowPath,
  heroEye,
  heroEyeSlash,
  heroHome
} from '@ng-icons/heroicons/outline';
import { AvatarComponent } from 'src/app/shared/components/avatar';

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
      heroEyeSlash,
      heroArrowPath
    }),
    MatTooltipModule,
    AvatarComponent
  ]
})
export class ShellModule {}
