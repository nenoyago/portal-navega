import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [CommonModule, ShellRoutingModule]
})
export class ShellModule {}
