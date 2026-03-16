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
                location: 'Katy, TX',
                fallbackSeed: 'everson-building',
                description: 'Everson Luxury Apartments redefine urban living in suburban Katy, Texas. Our 300-unit mid-rise offers a blend of convenience and affordability, with quick access to local businesses and highways. Ideal for both professionals and families.',
                link: 'https://theeversonapartments.com/'
            }
        ]
    },
    medical: {
        title: 'Medical',
        description: 'Strategic healthcare developments designed for essential community services.',
        projects: [
            {
                title: 'Elite Medical Center',
                location: 'Medical',
                fallbackSeed: 'elite-medical',
                description: '7000 Sq Ft Medical Center',
            },
            {
                title: 'Med-Care Center',
                location: 'Medical',
                fallbackSeed: 'med-care',
                description: '2500 Sq Ft Medical Center',
            },
            {
                title: '5 Step Wellness Center',
                location: 'Medical',
                fallbackSeed: 'wellness-center',
                description: '',
            }
        ]
    },
    residential: {
        title: 'Residential',
        description: 'Modern, repeatable housing prototypes for the next generation of living.',
        projects: [
            {
                title: 'Oak Hollow',
                location: 'USA',
                fallbackSeed: 'oak-hollow',
                description: 'A showcase of luxury residential development, Oak Hollow combines modern architecture with sustainable design.',
            },
            {
                title: '1242 Trace Drive',
                location: 'Deer Park, TX',
                fallbackSeed: 'trace-drive',
                description: 'Mediterranean-inspired luxury living in the heart of Deer Park.',
            },
            {
                title: '1503 Beaconshire Road',
                location: 'Houston, TX',
                fallbackSeed: 'beaconshire-road',
                description: 'A classic traditional estate in Houston, featuring premium craftsmanship and elegant design.',
            },
            {
                title: '911 Wildwood Drive',
                location: 'Houston, TX',
                fallbackSeed: 'wildwood-drive',
                description: 'Contemporary residential excellence with a focus on open spaces and natural light.',
            }
        ]
    },
    hotels: {
        title: 'Hotels',
        description: 'Hospitality environments built for operational excellence and guest comfort.',
        projects: [
            {
                title: 'Holiday Inn Express',
                location: 'Hotels',
                fallbackSeed: 'hotel-holiday-inn',
                description: '60 Rooms – Limited Service Hotel',
            },
            {
                title: 'Best Western',
                location: 'Hotels',
                fallbackSeed: 'hotel-best-western-1',
                description: '125 Rooms – Full Service Hotel',
            },
            {
                title: 'Best Western',
                location: 'Hotels',
                fallbackSeed: 'hotel-best-western-2',
                description: '120 Rooms – Limited Service Hotel',
            }
        ]
    },
    automotive: {
        title: 'Automotive',
        description: 'Specialized retail and service infrastructure for the automotive industry.',
        projects: [
            {
                title: 'Auto Experts',
                location: 'Automotive',
                fallbackSeed: 'auto-experts-v2',
                description: 'Good Year Tires and Repair Center',
            },
            {
                title: 'Caliber Collision',
                location: 'Automotive',
                fallbackSeed: 'caliber-collision-v2',
                description: 'Automotive Paint and Body Shop',
            },
            {
                title: 'Japanese Auto Center',
                location: 'Automotive',
                fallbackSeed: 'japanese-auto-v2',
                description: 'Japanese Auto Repair Specialists',
            },
            {
                title: 'Stirling Auto Body',
                location: 'Automotive',
                fallbackSeed: 'stirling-auto-v2',
                description: 'National Paint and Body Shop',
            },
            {
                title: 'Chevron Gas Station',
                location: 'Automotive',
                fallbackSeed: 'chevron-gas-v2',
                description: 'Gas Station and Convenience Store',
            }
        ]
    },
    restaurants: {
        title: 'Restaurants',
        description: 'Prime retail spaces optimized for the culinary and service industry.',
        projects: [
            {
                title: 'Arby\'s Roast Beef',
                location: 'Restaurants',
                fallbackSeed: 'restaurant-arbys',
                description: 'Fast Food Chain',
            },
            {
                title: 'Denny\'s Restaurant',
                location: 'Restaurants',
                fallbackSeed: 'restaurant-dennys',
                description: 'Fast Food Chain',
            },
            {
                title: 'Serious Pizza',
                location: 'Restaurants',
                fallbackSeed: 'restaurant-serious-pizza',
                description: 'Restaurant and Entertainment',
            },
            {
                title: 'Indian Accent',
                location: 'Restaurants',
                fallbackSeed: 'restaurant-indian-accent',
                description: 'Fine Dining Indian Restaurant',
            }
        ]
    },
    beauty: {
        title: 'Beauty',
        description: 'Elegantly designed retail suites for health, wellness, and beauty partners.',
        projects: [
            {
                title: 'Urban Retreat',
                location: 'Day Spa',
                fallbackSeed: 'urban-retreat',
                description: '7000 Sq Ft Day Spa',
            },
            {
                title: 'Urban Retreat Studio',
                location: 'Day Spa',
                fallbackSeed: 'urban-retreat-studio',
                description: '5000 Sq Ft Day Spa',
            }
        ]
    },
    retail: {
        title: 'Retail',
        description: 'Diverse projects across various sectors reflecting our platform versatility.',
        projects: [
            {
                title: 'Unicorp Wholesale Supply Company',
                location: 'Retail Distribution',
                fallbackSeed: 'unicorp-wholesale',
                description: 'A comprehensive wholesale distribution center designed for high-volume supply and logistics.',
            },
            {
                title: 'Rocky Mountain Chocolate Factory',
                location: 'Retail',
                fallbackSeed: 'rocky-mountain-chocolate',
                description: 'A modern retail and production facility for premium confectionery products.',
            },
            {
                title: 'Joshua’s Lounge & Bar',
                location: 'Hospitality',
                fallbackSeed: 'joshuas-lounge',
                description: 'A sophisticated urban hospitality venue featuring contemporary design and warm brick aesthetics.',
            }
        ]
    }
};
