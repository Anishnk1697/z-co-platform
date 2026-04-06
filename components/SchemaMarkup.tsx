import React from 'react';

const SchemaMarkup = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness", "RealEstateDeveloper"],
        "name": "Z-Co Development",
        "url": "https://z-co.info",
        "logo": "https://z-co.info/asset/z-co-logo-vertical.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5120 Woodway Dr. Suite 7018",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77056",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@z-co.info",
            "contactType": "customer support"
        },
        "sameAs": [
            "https://www.linkedin.com/company/z-co-development",
            "https://www.instagram.com/z_co_tx/",
            "https://www.facebook.com/Z.CO.TX"
        ]
    };

    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Z-Co Development Projects",
        "description": "Our current real estate development pipeline including build-to-rent, healthcare, and mixed-use projects.",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Product",
                    "name": "TowneCenter",
                    "description": "A mixed-use development on Fry Road featuring Class-A apartments, senior living, and climate-controlled storage.",
                    "brand": { "@type": "Brand", "name": "Z-Co Development" }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Product",
                    "name": "MedPlex",
                    "description": "A patient-centered healthcare platform that combines a licensed community hospital and outpatient services.",
                    "brand": { "@type": "Brand", "name": "Z-Co Development" }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Product",
                    "name": "Strobes Tower",
                    "description": "A nearly $280 million high-rise building offering a fusion of commercial, residential, and hotel spaces in Houston.",
                    "brand": { "@type": "Brand", "name": "Z-Co Development" }
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "Product",
                    "name": "Daycare Center",
                    "description": "A state-of-the-art educational childcare facility designed for early childhood development.",
                    "brand": { "@type": "Brand", "name": "Z-Co Development" }
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "Product",
                    "name": "Dove Trails",
                    "description": "A premier 4-plex development in San Antonio where modern living meets serene surroundings.",
                    "brand": { "@type": "Brand", "name": "Z-Co Development" }
                }
            },
            {
                "@type": "ListItem",
                "position": 6,
                "item": {
                    "@type": "Product",
                    "name": "Shops @ Fry Road",
                    "description": "A strategically located retail center designed to capture high-traffic demand in Katy, Texas.",
                    "brand": { "@type": "Brand", "name": "Z-Co Development" }
                }
            }
        ]
    };

    // Article schema placeholder for future blog posts
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Z-Co Development Blog",
        "description": "Insights, updates, and news on real estate development and investment from Z-Co Development.",
        "publisher": {
            "@type": "Organization",
            "name": "Z-Co Development",
            "logo": {
                "@type": "ImageObject",
                "url": "https://z-co.info/asset/z-co-logo-vertical.png"
            }
        }
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(projectSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(articleSchema)}
            </script>
        </>
    );
};

export default SchemaMarkup;
