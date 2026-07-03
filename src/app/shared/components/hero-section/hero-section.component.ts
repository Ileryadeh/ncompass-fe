// Angular
import { Component, input } from '@angular/core';

// Local
import { HomeUi } from '../../../core/dto/home.dto';

/**
 * Presentational hero banner for the home page.
 * Receives already-mapped UI data from its parent — does no fetching itself.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  // 2. I/O
  public readonly data = input.required<HomeUi>();
}
