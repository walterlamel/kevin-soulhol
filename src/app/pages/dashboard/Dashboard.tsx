/**
 * 
 * Dashboard
 * 
 * Display informations about the user connected
 * 
 */

import DeconnectionButton from "../../components/boutons/deconnectionButton/deconnectionButton";
import SectionProjet from "./components/SectionProjet";


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

            
            - liste user : admin
            - liste projet : admin | user
            <DeconnectionButton />
        </div>
    )
}

export default Dashboard;