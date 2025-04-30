import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {

<<<<<<< HEAD
    title: "MedTrack",
    description: 'Track your Medicine with ease, discover & share AI prompts '
=======
    title:"MedTrack text-white",
    description: 'Track Your Daily Medicine '
}
>>>>>>> 647f8256c2ec7750aa42ec2c92a534e5aa53da50

};
const Rootlayout = ({ children }) => {
    return (
        <html lang='eng'>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
};


export default Rootlayout;