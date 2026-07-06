// Angular
import { Component } from '@angular/core';

/**
 * Home page hero section.
 * @public
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  /**
   * Component initialization hook placeholder.
   * Kept explicit for coding standards; add lifecycle members here as needed.
   * @public
   * @returns {void}
   */
  public ngOnInit(): void {
    return undefined as unknown as void;
  }
}
