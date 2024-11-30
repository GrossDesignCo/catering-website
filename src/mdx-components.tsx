import type { MDXComponents } from 'mdx/types';
import { ContactForm } from '@/components/contact-form';
// import MenuPricing from '@/pages/menu-pricing';
// import { SoftImage } from './components/soft-image';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // MenuPricing,
    // SoftImage,
    ContactForm,
    ...components,
  };
}
