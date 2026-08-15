import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";

const Home = lazy(() => import("./pages/home"));
const AboutUs = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

const WorkListing = lazy(() => import("./pages/work"));
const WorkDetails = lazy(() => import("./pages/workDetails"));

const ArticlesListing = lazy(() => import("./pages/articles"));
const ArticleDetails = lazy(() => import("./pages/articleDetails"));

const EventsListing = lazy(() => import("./pages/events"));
const EventDetails = lazy(() => import("./pages/eventDetails"));

const PublicationsListing = lazy(() => import("./pages/publications"));
const PublicationDetails = lazy(() => import("./pages/publicationDetails"));
const PublicationIssueDetails = lazy(
    () => import("./pages/publicationIssueDetails"),
);

const OpportunitiesListing = lazy(() => import("./pages/opportunities"));
const OpportunityDetails = lazy(() => import("./pages/opportunityDetails"));

const LegalListing = lazy(() => import("./pages/legal"));
const LegalDetails = lazy(() => import("./pages/legalDetails"));

const NotFound = lazy(() => import("./pages/notFound"));

const PageLoader = () => {
    return (
        <Box
            sx={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1.5,
            }}
        >
            <CircularProgress size={34} thickness={4} />

            <Typography variant="body2">Loading page...</Typography>
        </Box>
    );
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about-us" element={<AboutUs />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/work" element={<WorkListing />} />

                <Route path="/work/:workSlug" element={<WorkDetails />} />

                <Route path="/articles" element={<ArticlesListing />} />

                <Route
                    path="/articles/:articleSlug"
                    element={<ArticleDetails />}
                />

                <Route path="/events" element={<EventsListing />} />

                <Route path="/events/:eventSlug" element={<EventDetails />} />

                <Route path="/publications" element={<PublicationsListing />} />

                <Route
                    path="/publications/:publicationSlug"
                    element={<PublicationDetails />}
                />

                <Route
                    path="/publications/:publicationSlug/:issueSlug"
                    element={<PublicationIssueDetails />}
                />

                <Route
                    path="/opportunities"
                    element={<OpportunitiesListing />}
                />

                <Route
                    path="/opportunities/:opportunitySlug"
                    element={<OpportunityDetails />}
                />

                <Route path="/legal" element={<LegalListing />} />

                <Route path="/legal/:legalSlug" element={<LegalDetails />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
