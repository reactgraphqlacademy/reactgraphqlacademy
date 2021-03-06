export const UPMENTORING_API_URL =
  `${process.env.GATSBY_UPMENTORING_GRAPHQL_API_BASE_URL}/graphql` ||
  'https://api2.upmentoring.com/graphql';

export const STRIPE_PUBLIC_KEY = process.env.GATSBY_STRIPE_PUBLIC_KEY;
export const SENTRY_DSN = process.env.GATSBY_SENTRY_DSN;
