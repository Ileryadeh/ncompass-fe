// Angular
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// 3rd party
import { Observable } from 'rxjs';

// Local
import { HomeDto, FeatureCardDto } from '../dto/home.dto';
import { HOME_ENDPOINT, HOME_FEATURES_ENDPOINT } from '../../shared/constants/api.constant';

/**
 * Handles all HTTP communication for the home feature.
 */
@Injectable({ providedIn: 'root' })
export class HomeService {
  // 1. Services
  private readonly http = inject(HttpClient);

  // 5. API
  /**
   * Fetches hero section content for the home page.
   * @returns {Observable<HomeDto>} raw hero payload
   */
  public getHomeData(): Observable<HomeDto> {
    return this.http.get<HomeDto>(HOME_ENDPOINT);
  }

  /**
   * Fetches the list of feature cards shown on the home page.
   * @returns {Observable<FeatureCardDto[]>} raw feature card payloads
   */
  public getFeatureCards(): Observable<FeatureCardDto[]> {
    return this.http.get<FeatureCardDto[]>(HOME_FEATURES_ENDPOINT);
  }
}
