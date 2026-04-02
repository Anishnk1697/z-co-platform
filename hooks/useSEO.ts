import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Cleanup: we don't necessarily want to remove it on unmount as it might be needed for the next page
    // but the next page's hook will overwrite it.
  }, [title, description]);
};
