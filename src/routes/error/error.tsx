import { Link, useRouteError } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Error.module.scss";


const ErrorPage = () =>  {
    const error = useRouteError();
    console.error(error);

    return (
        <> 
            <Header />
            <main>
                <div className={styles.errorContainer}>
                    <span className={styles.errorNumber}>404</span>
                    <span className={styles.errorText}>Oups! La page que vous demandez n'existe pas.</span>
                    <Link to={"/"} className={styles.errorLink}>Retourner sur la page d’accueil</Link>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ErrorPage;