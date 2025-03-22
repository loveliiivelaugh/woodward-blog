import { type UtilityStoreType } from '@store/utilityStore';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router";
import App from "@components/App/App";
import Providers from "@components/Custom/providers/Providers";
import SinglePostPage from "../pages/SinglePostPage"
import { PageTransitionWrapper } from "@theme/ThemeProvider";
import { Footer } from '../Mui/Dashboard/Dashboard';
import { Navbar } from '@components/Custom/ReusableNavbar/ReusableNavbar';
import BlurOnScroll from '../../utilities/theme/BlurOnScroll';
import NewsletterSignupForm from '@components/Custom/forms/premade/Newsletter';
import PostsPage from '@components/pages/PostsPage';
import ContactPage from '@components/pages/Contact';

type NavItemsType = {
    label: string;
    path?: string;
    element?: any;
    onClick?: (stores: any) => void;
};

const extraNavItems: NavItemsType[] = [
    {
        label: "Subscribe",
        onClick: ({ utilityStore }: { utilityStore: UtilityStoreType }) => utilityStore.setModal({
            open: true,
            content: (<NewsletterSignupForm />)
        })
    }
];

// todo => this can go in a global app config
export const appRoutes = [
    {
        path: "/",
        label: "Home",
        element: (<App />)
    },
    {
        path: "/post/:postId",
        element: (<SinglePostPage />)
    },
    {
        path: "/posts",
        label: "All Posts",
        element: (<PostsPage />)
    },
    {
        path: "/contact",
        label: "Contact",
        element: (<ContactPage />)
    }
].map((route) => ({ 
    ...route, 
    id: route.path,
    element: (
        <>
            <Navbar 
                navItems={(routes) => [
                    ...routes.filter((route, routeIndex) => (routeIndex !== 1)),
                    ...extraNavItems
                ]}
            />
            <BlurOnScroll>
                {route.element}
            </BlurOnScroll>
            <Footer />
        </>
    )
}));

const appRouter = createBrowserRouter(appRoutes);

export function AppRouter() {
    return (
        <PageTransitionWrapper>
            <Providers>
                {(initialData) => <RouterProvider router={appRouter} />}
            </Providers>
        </PageTransitionWrapper>
    )
};