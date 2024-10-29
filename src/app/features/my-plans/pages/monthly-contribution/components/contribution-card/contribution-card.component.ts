import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';

export type EditContributionPayload = {
  id: number;
};

@Component({
  selector: 'app-contribution-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent, MatButtonModule],
  providers: [
    provideIcons({
      heroChevronRight
    })
  ],
  templateUrl: './contribution-card.component.html',
  styleUrls: ['./contribution-card.component.less']
})
export class ContributionCardComponent {
  @Input() id!: number;
  @Input() label!: string;
  @Input() value!: number;
  @Input() percent?: number;

  @Output() editContribution = new EventEmitter<EditContributionPayload>();

  onEditContribution() {
    this.editContribution.emit({ id: this.id });
  }
}
