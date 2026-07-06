// Angular
import { Component, signal } from '@angular/core';

// Local
import { NAV_LINKS } from '../../utils/app.constant';

/**
 * Site-wide navigation bar.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // 3. Signals
  /**
   * Signal containing the navigation links used in the navbar.
   * @public
   * @readonly
   */
  public readonly navLinks = signal(NAV_LINKS);
}