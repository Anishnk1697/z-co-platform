export interface PortfolioProject {
    title: string;
    location: string;
    fallbackSeed: string;
    description: string;
    link?: string;
}

export interface PortfolioCategoryData {
    title: string;
    description: string;
    projects: PortfolioProject[];
}

export const PORTFOLIO_DATA: Record<string, PortfolioCategoryData> = {
    multifamily: {
        title: 'Multifamily',
        description: 'Scalable housing solutions engineered for efficiency and community impact.',
        projects: [
            {
                title: 'Everson',
                location: 'USA',
                fallbackSeed: 'multifamily-everson',
                description: 'A completed multifamily project demonstrating Z-Co\'s ability to deliver high-quality residential units at scale.',
                link: 'https://www.z-co.info/completed-projects--multifamily'
            }
        ]
    },
    medical: {
        title: 'Medical',
        description: 'Strategic healthcare developments designed for essential community services.',
        projects: [
            {
                title: 'Medical Center Alpha',
                location: 'Houston, TX',
                fallbackSeed: 'medical-1',
                description: 'A state-of-the-art medical facility integrated into a high-demand urban corridor.',
            }
        ]
    },
    residential: {
        title: 'Residential',
        description: 'Modern, repeatable housing prototypes for the next generation of living.',
        projects: [
            {
                title: 'Resi-Project One',
                location: 'USA',
                fallbackSeed: 'residential-1',
                description: 'Standardized residential delivery focus on speed and quality.',
            }
        ]
    },
    hotels: {
        title: 'Hotels',
        description: 'Hospitality environments built for operational excellence and guest comfort.',
        projects: [
            {
                title: 'Harbor Hotel',
                location: 'Coastal Region',
                fallbackSeed: 'hotel-1',
                description: 'Efficiently delivered hospitality project focusing on modular assembly.',
            }
        ]
    },
    automotive: {
        title: 'Automotive',
        description: 'Specialized retail and service infrastructure for the automotive industry.',
        projects: [
            {
                title: 'Auto Works Hub',
                location: 'USA',
                fallbackSeed: 'automotive-1',
                description: 'Streamlined automotive service center design.',
            }
        ]
    },
    restaurants: {
        title: 'Restaurants',
        description: 'Prime retail spaces optimized for the culinary and service industry.',
        projects: [
            {
                title: 'The Gallery Kitchen',
                location: 'Houston, TX',
                fallbackSeed: 'restaurant-1',
                description: 'High-traffic restaurant development with rapid site delivery.',
            }
        ]
    },
    beauty: {
        title: 'Beauty',
        description: 'Elegantly designed retail suites for health, wellness, and beauty partners.',
        projects: [
            {
                title: 'Wellness Suite Collective',
                location: 'Texas',
                fallbackSeed: 'beauty-1',
                description: 'Boutique beauty spaces delivered with precision.',
            }
        ]
    },
    other: {
        title: 'Other',
        description: 'Diverse projects across various sectors reflecting our platform versatility.',
        projects: [
            {
                title: 'Mixed-Use Prototype',
                location: 'USA',
                fallbackSeed: 'other-1',
                description: 'Specialized project utilizing modular components for non-standard sites.',
            }
        ]
    }
};
