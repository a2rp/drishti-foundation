import AppRoutes from "./AppRoutes";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import Header from "./components/header";
import { Styled } from "./App.styled";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
    return (
        <Styled.Wrapper>
            <header className="appHeader">
                <Header />
            </header>

            <main className="routesWrapper">
                <ScrollToTop />
                <AppRoutes />
            </main>

            <Footer />

            <GoToTop />
        </Styled.Wrapper>
    );
};

export default App;
