/*
circumference of the NECK
circumference/girth across the CHEST slightly above the nipples
ARMSCYE depth (distance from shoulder to underarm)
natural WAIST LENGTH (from neck to waist)
BACK width (from one armpit to another)
SLEEVE LENGTH (from armpit to wrist)
SHIRT LENGTH (from nape of neck to shirt hem slightly above groin)
*/

import { useState } from "react";

export default function FormFields( { setActiveField } ) {

    const [ sizeFormState, setSizeFormState ] = useState( {
        neck: 0,
        chest: 0,
        armscye: 0,
        waist: 0,
        back: 0,
        sleeve: 0,
        hem: 0
    } );

    return <form className="size-form">
        <section>
            <label htmlFor="neck">Neck: </label>
            <input
                type="number"
                name="neck"
                value={ sizeFormState.neck }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, neck: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
        <section>
            <label htmlFor="chest">Chest: </label>
            <input
                type="number"
                name="chest"
                value={ sizeFormState.chest }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, chest: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
        <section>
            <label htmlFor="armscye">Armscye: </label>
            <input
                type="number"
                name="armscye"
                value={ sizeFormState.armscye }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, armscye: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
        <section>
            <label htmlFor="waist">Waistlength: </label>
            <input
                type="number"
                name="waist"
                value={ sizeFormState.waist }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, waist: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
        <section>
            <label htmlFor="back">Back: </label>
            <input
                type="number"
                name="back"
                value={ sizeFormState.back }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, back: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
        <section>
            <label htmlFor="sleeve">Sleeve: </label>
            <input
                type="number"
                name="sleeve"
                value={ sizeFormState.sleeve }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, sleeve: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
        <section>
            <label htmlFor="hem">Hem: </label>
            <input
                type="number"
                name="hem"
                value={ sizeFormState.hem }
                onChange={ changeEvent => setSizeFormState( { ...sizeFormState, hem: changeEvent.target.value } ) }
                onFocus={ changeEvent => setActiveField( changeEvent.target.name ) }
                onBlur={ () => setActiveField( null ) }
            />
        </section>
    </form>;

}