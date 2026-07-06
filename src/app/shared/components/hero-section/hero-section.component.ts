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
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  // 2. I/O
  /**
   * Input data for the hero banner — mapped to UI shape by the parent.
   * @public
   * @readonly
   */
  public readonly data = input.required<HomeUi>();
}
