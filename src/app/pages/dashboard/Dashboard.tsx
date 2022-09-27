/**
 * 
 * Dashboard
 * 
 * Display informations about the user connected
 * 
 */

import DeconnectionButton from "../../components/boutons/deconnectionButton/deconnectionButton";
import SectionProjet from "./components/SectionProjet";
import SectionUser from "./components/SectionUser";


const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <h2 className="accent">Dashboard.</h2>
            <p>
                    Ici vous trouverez les
                    informations relatives à votre
                    compte personnel.
            </p>

            <SectionProjet />

            <SectionUser />

            
          
            <DeconnectionButton />
        </div>
    )
}

export default Dashboard;


/*

- liste user : admin
- liste projet : admin | user

*/