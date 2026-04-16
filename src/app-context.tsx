import { Introduction } from "./landing/introduction";
import { BookList } from "./lotus-app/components/book-list";
import { createInjector, rootInjector, provideValue } from "./package/injectables";
import { RouteMap, Router } from "./package/routing";
import { HelloWorld } from "./tester/hello-world";

export const appContextInjector = createInjector(rootInjector);


export const routeMap = new RouteMap([
    {
        path: "/",
        componentFactory: () => {
            return <Introduction />
        },
    },
    {
        path: "/samples",
        componentFactory: () => {
            return <HelloWorld />
        }
    },
    {
        path: "/lotus-books",
        componentFactory: () => {
            return <BookList />
        }
    },
]);

const router = new Router({
    routeMap,
    initialPath: window.location.pathname + window.location.search
});

provideValue(Router, router, appContextInjector);
provideValue(RouteMap, routeMap, appContextInjector);