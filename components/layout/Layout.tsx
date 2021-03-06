import Header from './Header'
import Footer from './Footer'

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
