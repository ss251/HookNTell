import { IonContent, IonPage} from "@ionic/react";
import React from "react";
import LargeHeader from '../components/Header/LargeHeader'
import SmallHeader from '../components/Header/SmallHeader'

const Resources = () => {
    return (
        <IonPage>
            <SmallHeader title="Resources"/>
                <IonContent fullscreen>
                    <LargeHeader title="Resources"/>
                </IonContent>
        </IonPage>
    )
}

export default Resources;