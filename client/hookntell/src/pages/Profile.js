import { IonContent, IonPage} from "@ionic/react";
import React from "react";
import LargeHeader from '../components/Header/LargeHeader'
import SmallHeader from '../components/Header/SmallHeader'

const Profile = () => {
    return (
        <IonPage>
            <SmallHeader title="Profile"/>
                <IonContent fullscreen>
                    <LargeHeader title="Profile"/>
                </IonContent>
        </IonPage>
    )
}

export default Profile;