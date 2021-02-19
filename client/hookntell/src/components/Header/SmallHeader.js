import React from "react";
import {IonHeader, IonTitle, IonToolbar} from '@ionic/react';

const SmallHeader = ({title}) => {
    return (
        <IonHeader>
            <IonToolbar style={{background: "#ccdae0"}} color="tertiary">
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default SmallHeader;