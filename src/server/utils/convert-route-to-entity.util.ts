const mapping: Record<string, string> = {
  preferences: 'preference',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
