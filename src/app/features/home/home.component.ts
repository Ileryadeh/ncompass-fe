// Angular
import { Component, OnInit, inject, signal } from '@angular/core';

// 3rd party
import { catchError, forkJoin, of } from 'rxjs';

// Local
import { HomeService } from '../../core/services/home.service';
import { HomeDto, FeatureCardDto, HomeUi, FeatureCardUi } from '../../core/dto/home.dto';
import { withLoading } from '../../shared/utils/with-loading.util';

/**
 * Home page feature component. Fetches hero + feature card data,
 * maps it to UI shape, and renders shared presentational components.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // 1. Services
  private readonly homeService = inject(HomeService);

  // 3. Signals
  public readonly isLoading = signal<boolean>(false);
  public readonly heroData = signal<HomeUi | null>(null);
  public readonly featureCards = signal<FeatureCardUi[]>([]);

  // 4. Hooks
  /**
   * Angular lifecycle hook — triggers initial data load.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.loadHomeData();
  }

  // 5. API
  /**
   * Fetches hero and feature card data in parallel, maps both to UI
   * shape, and updates local signals. Loading state is handled
   * entirely by withLoading — never toggled manually here.
   * @returns {void}
   */
  private loadHomeData(): void {
    const homeData$ = forkJoin({
      hero: this.homeService.getHomeData(),
      features: this.homeService.getFeatureCards(),
    }).pipe(catchError(() => of({ hero: null, features: [] })));

    withLoading(homeData$, this.isLoading).subscribe(({ hero, features }) => {
      this.heroData.set(hero ? this.mapDataToUi(hero) : null);
      this.featureCards.set(features.map((card: FeatureCardDto): FeatureCardUi => this.mapFeatureCardToUi(card)));
    });
  }

  /**
   * Maps raw hero API payload to UI shape.
   * @param {HomeDto} data - raw hero payload
   * @returns {HomeUi} mapped hero UI object
   */
  private mapDataToUi(data: HomeDto): HomeUi {
    return {
      title: data.title,
      subtitle: data.subtitle,
      ctaLabel: data.ctaLabel,
      ctaLink: data.ctaLink,
    };
  }

  /**
   * Maps a single raw feature card payload to UI shape.
   * @param {FeatureCardDto} card - raw feature card payload
   * @returns {FeatureCardUi} mapped feature card UI object
   */
  private mapFeatureCardToUi(card: FeatureCardDto): FeatureCardUi {
    return {
      id: card.id,
      iconName: card.iconName,
      heading: card.heading,
      description: card.description,
    };
  }
}
