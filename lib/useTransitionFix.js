import Router from 'next/router';
import { useEffect } from 'react';

export const OPACITY_EXIT_DURATION = 1;

const routeChange = () => {
    const tempFix = () => {
        const elements = document.querySelectorAll('style[media="x"]');
        elements.forEach((elem) => elem.removeAttribute('media'));
        // this will build styles but shouldn't be an issue for personal site
        // setTimeout(() => {
        //     elements.forEach((elem) => elem.remove());
        // }, OPACITY_EXIT_DURATION * 1000);
    };
    tempFix();
};

export const useTransitionFix = () => {
    useEffect(() => {
        Router.events.on('routeChangeComplete', routeChange);
        Router.events.on('routeChangeStart', routeChange);

        return () => {
            Router.events.off('routeChangeComplete', routeChange);
            Router.events.off('routeChangeStart', routeChange);
        };
    }, []);

    useEffect(() => {
        if (Router.router.pathname === '/404') {
            Router.router.push(Router.router.pathname)
        } else {
            Router.router?.push(Router.router?.asPath);
        }
    }, []);
};