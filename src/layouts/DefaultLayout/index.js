import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="Container">
                {children}
            </div>
        </>
    );
}

export default DefaultLayout;
