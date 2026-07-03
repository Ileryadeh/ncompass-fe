// Angular
import { WritableSignal } from '@angular/core';

// 3rd party
import { Observable, finalize } from 'rxjs';

/**
 * Wraps a source observable so a loading signal automatically toggles
 * to `true` on subscribe and back to `false` when the source completes,
 * errors, or is unsubscribed. Consumers must never call `.set(true)` /
 * `.set(false)` on the loading signal manually.
 *
 * Takes the source observable directly (rather than being used inside
 * `.pipe()`) so TypeScript can infer `T` from the source itself —
 * a pipe-only version has no argument to infer `T` from and silently
 * degrades to `unknown`.
 *
 * @param {Observable<T>} source$ - observable to wrap
 * @param {WritableSignal<boolean>} loadingSignal - signal to auto-toggle
 * @returns {Observable<T>} the same observable, with loading side effects attached
 *
 * @example
 * withLoading(
 *   this.homeService.getHomeData(),
 *   this.isLoading
 * ).subscribe((data) => this.homeData.set(this.mapDataToUi(data)));
 */
export function withLoading<T>(
  source$: Observable<T>,
  loadingSignal: WritableSignal<boolean>
): Observable<T> {
  loadingSignal.set(true);

  return source$.pipe(
    finalize((): void => {
      loadingSignal.set(false);
    })
  );
}
