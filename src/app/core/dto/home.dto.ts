/**
 * Raw API payload shape for the home page hero content.
 */
export interface HomeDto {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
}

/**
 * Raw API payload shape for a single feature card item.
 */
export interface FeatureCardDto {
  id: string;
  iconName: string;
  heading: string;
  description: string;
}

/**
 * UI-shaped hero content, post-mapping from HomeDto.
 */
export interface HomeUi {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
}

/**
 * UI-shaped feature card, post-mapping from FeatureCardDto.
 */
export interface FeatureCardUi {
  id: string;
  iconName: string;
  heading: string;
  description: string;
}

/**
 * Sort order for feature cards. Union of allowed literals — this is
 * the one case where `type` is used instead of `interface`.
 */
export type FeatureCardSortOrder = 'asc' | 'desc' | 'featured';
