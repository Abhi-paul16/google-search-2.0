import React from 'react'
import { Switch , Route , Redirect } from 'react-router';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/"> 
                     <Redirect to = '/search'></Redirect>
                </Route>
            </Switch>
        </div>
    )
}
