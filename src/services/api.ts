import { QueryClient } from '@tanstack/react-query';
import DryVanImg from '../assets/dryvan.png';
import SemiTruckImg from '../assets/semitruck.png';
import ReeferImg from '../assets/Refrigerated.png';

// This file can be used for real or mock API calls
// Currently a placeholder for future expansions

export const apiClient = new QueryClient();

// Example stub function
interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const servicesData: Record<string, Omit<ServiceInfo, 'slug'>> = {
  ltl: {
    title: 'LTL Shipping',
    description:
      'Our less-than-truckload service consolidates your freight with other shipments for a cost-effective solution that still meets your deadlines.',
    image: DryVanImg
  },
  ftl: {
    title: 'FTL Shipping',
    description:
      'Full truckload options give your cargo exclusive use of a trailer, ideal for high-volume or time-sensitive freight that requires a direct route.',
    image: SemiTruckImg
  },
  refrigerated: {
    title: 'Refrigerated Transport',
    description:
      'Our modern reefer fleet keeps temperature-sensitive goods fresh and compliant from pickup through delivery, no matter the distance.',
    image: ReeferImg
  }
};

export function getAllServices(): ServiceInfo[] {
  return Object.entries(servicesData).map(([slug, data]) => ({ slug, ...data }));
}

export async function fetchServiceDetails(slug: string): Promise<ServiceInfo> {
  // In real scenario, you'd fetch from an API
  return {
    slug,
    ...(servicesData[slug] ?? {
      title: 'Service',
      description: '',
      image: ''
    })
  };
}
