import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {
  @Input() src?: string | SafeUrl | null;
  @Input() alt?: string;
  @Input() name?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'circle' | 'square' = 'circle';

  public initials = '';

  ngOnInit(): void {
    this.initials = this.getInitials();
  }

  onError(): void {
    this.src = null;
  }

  private getInitials(): string {
    if (!this.name) {
      return '';
    }

    const [firstName, ...lastNames] = this.name.split(' ');

    if (!lastNames.length) {
      return firstName.length > 1
        ? `${firstName.charAt(0).toUpperCase()}${firstName
            .charAt(1)
            .toUpperCase()}`
        : firstName.charAt(0).toUpperCase();
    }

    const lastName = lastNames[lastNames.length - 1];

    return `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  }
}
