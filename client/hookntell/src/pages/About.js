import { IonContent, IonPage} from "@ionic/react";
import React from "react";
import LargeHeader from '../components/Header/LargeHeader'
import SmallHeader from '../components/Header/SmallHeader'

const About = () => {
    return (
        <IonPage>
            <SmallHeader title="About"/>
                <IonContent fullscreen>
                    <LargeHeader title="About"/>
                </IonContent>
        </IonPage>
    )
}

export default About;