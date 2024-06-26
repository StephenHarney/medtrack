import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {

    title:"MedTrack text-white",
    description: 'Track Your Daily Medicine '
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