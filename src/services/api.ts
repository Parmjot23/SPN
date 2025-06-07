import { QueryClient } from '@tanstack/react-query';

// This file can be used for real or mock API calls
// Currently a placeholder for future expansions

export const apiClient = new QueryClient();

// Example stub function
export async function fetchServiceDetails(slug: string) {
  // In real scenario, you'd fetch from an API
  // For now, let's return some mock data:
  return {
    slug,
    title: slug.toUpperCase() + ' Transportation',
    description: `Details about our ${slug.toUpperCase()} service.`
  };
}
