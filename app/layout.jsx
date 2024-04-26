import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {

    title:"MedTrack",
<<<<<<< HEAD
    description: 'Track your Medicine with ease '
=======
    description: 'discover & share AI prompts '
>>>>>>> 17e1b51f5bafa9bda9911bf99ebe70f3bda2a1d7
}

const Rootlayout = ({children}) => {
  return (
        <html lang='eng'>
                <body> 
                    <Provider>
                    <div className="main">
                        <div className="gradient"/> 
                    </div>
                    
                    <main className="app">
                        <Nav/>
                        {children}
                </main> 
                </Provider>
            </body>
        </html>
  )
}

export default Rootlayout;