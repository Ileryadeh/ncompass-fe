// Angular
import { Component, input } from '@angular/core';

// Local
import { FeatureCardUi } from '../../../core/dto/home.dto';

/**
 * Presentational card displaying a single feature/benefit item.
 */
@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  // 2. I/O
  /**
   * Input data for the feature card — already mapped to UI shape.
   * @public
   * @readonly
   */
  public readonly data = input.required<FeatureCardUi>();
}
