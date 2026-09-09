import React from 'react';

const SchemaMarkup = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness", "RealEstateDeveloper"],
        "name": "Z-Co Development",
        "alternateName": "Z-Co Development Corp",
        "url": "https://z-co.info",
        "logo": {
            "@type": "ImageObject",
            "url": "https://z-co.info/asset/z-co-logo-vertical.png",
            "width": 200,
            "height": 200
        },
        "image": "https://z-co.info/asset/z-co-og-image.jpg",
        "description": "Z-Co Development is a vertically integrated real estate development company specializing in build-to-rent, healthcare, mixed-use, and EB-5 investment projects across Texas.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5120 Woodway Dr. Suite 7018",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77056",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.7383,
            "longitude": -95.4777
        },
        "telephone": "+18322038054",
        "email": "info@z-co.info",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "17:00"
        },
        "areaServed": [
            { "@type": "State", "name": "Texas" },
            { "@type": "City", "name": "Houston" },
            { "@type": "City", "name": "Katy" },
            { "@type": "City", "name": "San Antonio" }
        ],
        "knowsAbout": [
            "Real Estate Development",
            "Build-to-Rent",
            "Healthcare Real Estate",
            "Mixed-Use Development",
            "EB-5 Investment",
            "Commercial Real Estate Texas"
        ],
        "sameAs": [
            "https://www.linkedin.com/company/z-co-development",
            "https://www.instagram.com/z_co_tx/",
            "https://www.facebook.com/Z.CO.TX"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.0",
            "reviewCount": "4",
            "bestRating": "5"
        }
    };

    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Z-Co Development Active Projects — Texas Real Estate Pipeline",
        "description": "Current real estate development pipeline including build-to-rent, healthcare, mixed-use, and hospitality projects across Texas.",
        "numberOfItems": 7,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "TowneCenter — Katy, Texas",
                    "description": "A mixed-use development on Fry Road featuring Class-A apartments, senior living, climate-controlled storage, and modern medical offices.",
                    "address": { "@type": "PostalAddress", "addressLocality": "Katy", "addressRegion": "TX" }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "Reviva — Transitional Care & Rehabilitation Center, Texas",
                    "description": "Purpose-built transitional care and rehabilitation center delivering post-acute care, physical therapy, and short-term rehabilitation in a modern, patient-centered campus.",
                    "address": { "@type": "PostalAddress", "addressRegion": "TX" }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "MedPlex — Katy, Texas",
                    "description": "A patient-centered healthcare platform combining a licensed community hospital, outpatient medical services, and a physician network.",
                    "address": { "@type": "PostalAddress", "addressLocality": "Katy", "addressRegion": "TX" }
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "Strobes Tower — Houston Medical Center",
                    "description": "A nearly $280 million high-rise building offering a fusion of commercial, residential, and hotel spaces in Houston.",
                    "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX" }
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "Dove Trails — San Antonio, Texas",
                    "description": "A premier 4-plex build-to-rent development where modern living meets serene surroundings.",
                    "address": { "@type": "PostalAddress", "addressLocality": "San Antonio", "addressRegion": "TX" }
                }
            },
            {
                "@type": "ListItem",
                "position": 6,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "Shops @ Fry Road — Katy, Texas",
                    "description": "A strategically located retail center designed to capture high-traffic demand on Fry Road, Katy, Texas.",
                    "address": { "@type": "PostalAddress", "addressLocality": "Katy", "addressRegion": "TX" }
                }
            },
            {
                "@type": "ListItem",
                "position": 7,
                "item": {
                    "@type": "RealEstateListing",
                    "name": "Daycare Center — Katy, Texas",
                    "description": "A state-of-the-art educational childcare facility designed to provide a safe, engaging, and enriching environment for early childhood development.",
                    "address": { "@type": "PostalAddress", "addressLocality": "Katy", "addressRegion": "TX" }
                }
            }
        ]
    };

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Z-Co Development Insights",
        "description": "Expert insights on real estate development, investment strategies, healthcare real estate, build-to-rent, and Texas market trends from Z-Co Development Corp.",
        "url": "https://z-co.info/insights",
        "publisher": {
            "@type": "Organization",
            "name": "Z-Co Development",
            "logo": {
                "@type": "ImageObject",
                "url": "https://z-co.info/asset/z-co-logo-vertical.png"
            }
        },
        "inLanguage": "en-US"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Z-Co Development",
        "url": "https://z-co.info",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://z-co.info/insights?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </>
    );
};

export default SchemaMarkup;
