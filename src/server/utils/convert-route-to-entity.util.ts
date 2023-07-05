const mapping: Record<string, string> = {
  comments: 'comment',
  reviews: 'review',
  users: 'user',
  websites: 'website',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
