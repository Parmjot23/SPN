import { QueryClient } from '@tanstack/react-query';

// This file can be used for real or mock API calls
// Currently a placeholder for future expansions

export const apiClient = new QueryClient();

// Example stub function
interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
}

const servicesData: Record<string, Omit<ServiceInfo, 'slug'>> = {
  ltl: {
    title: 'LTL Shipping',
    description:
      'Less-than-truckload service ideal for small freight that doesn\'t require a full trailer.'
  },
  ftl: {
    title: 'FTL Shipping',
    description:
      'Full truckload solutions for high-volume shipments that need dedicated space.'
  },
  refrigerated: {
    title: 'Refrigerated Transport',
    description:
      'Temperature-controlled trailers keeping perishables fresh across long distances.'
  },
  'cross-border': {
    title: 'Cross-Border',
    description:
      'Hassle-free shipping across Canada and the United States with our customs expertise.'
  }
};

export function getAllServices(): ServiceInfo[] {
  return Object.entries(servicesData).map(([slug, data]) => ({ slug, ...data }));
}

export async function fetchServiceDetails(slug: string): Promise<ServiceInfo> {
  // In real scenario, you'd fetch from an API
  return { slug, ...(servicesData[slug] ?? { title: 'Service', description: '' }) };
}
