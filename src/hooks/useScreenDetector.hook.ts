'use client';

import { useMediaQuery } from 'react-responsive';

// You can modify the screen's value and name to fit your needs

/** The output of the `useScreenDetector` hook. */
export type UseScreenDetectorOutput = {
    /** True if the screen is small (max-width: 575.98px) */
    sm: boolean;
    /** True if the screen is medium (min-width: 576px) and (max-width: 767.98px) */
    md: boolean;
    /** True if the screen is large (min-width: 768px) and (max-width: 991.98px) */
    lg: boolean;
    /** True if the screen is extra large (min-width: 992px) and (max-width: 1199.98px) */
    xl: boolean;
    /** True if the screen is extra extra large (min-width: 1200px) and (max-width: 1399.98px) */
    xxl: boolean;
};

/**
 * Hook to detect the screen size in range.
 *
 * @description This hook uses the `react-responsive` library to detect the screen size in range.
 * @returns Returns an object with the following properties:
 * - sm: boolean - True if the screen is small (max-width: 575.98px)
 * - md: boolean - True if the screen is medium (min-width: 576px) and (max-width: 767.98px)
 * - lg: boolean - True if the screen is large (min-width: 768px) and (max-width: 991.98px)
 * - xl: boolean - True if the screen is extra large (min-width: 992px) and (max-width: 1199.98px)
 * - xxl: boolean - True if the screen is extra extra large (min-width: 1200px) and (max-width: 1399.98px)
 * @example
 * ```ts
 * const { xs, sm, md, lg, xl, xxl } = useScreenDetector();
 * ```
 * @note If you use next.js, structure your import like this to disable server-side rendering for components that use the hook:
 * ```ts
 * import dynamic from 'next/dynamic';
 * const CustomComponent = dynamic(() => import('./CustomComponent'), { ssr: false });
 * ```
 */
export const useScreenDetector = (): UseScreenDetectorOutput => ({
    sm: useMediaQuery({ maxWidth: 575.98, screen: true }),
    md: useMediaQuery({ minWidth: 576, maxWidth: 767.98, screen: true }),
    lg: useMediaQuery({ minWidth: 768, maxWidth: 991.98, screen: true }),
    xl: useMediaQuery({ minWidth: 992, maxWidth: 1199.98, screen: true }),
    xxl: useMediaQuery({ minWidth: 1200, maxWidth: 1399.98, screen: true }),
});
