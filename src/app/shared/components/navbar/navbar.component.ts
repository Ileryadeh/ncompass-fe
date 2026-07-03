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
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // 3. Signals
  public readonly navLinks = signal(NAV_LINKS);
}