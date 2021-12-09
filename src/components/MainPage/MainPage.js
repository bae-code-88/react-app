import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../../pages/Home/index';
import Offer from '../../pages/Offer/index';
import Inquiry from '../../pages/Inquiry/index';
import Realization from '../../pages/Realization/index';
import Team from '../../pages/Team/index';
import Carrer from '../../pages/Carrer/index';
import Contact from '../../pages/Contact/index';


import { MainContainer } from './MainPageElements';


const MainPage=({t})=> {
    return (
      <MainContainer>
        <Switch>
        <Route path='/' exact component={Home} t={t} />
        <Route path='/oferta' component={Offer} t={t}/>
        <Route path='/zapytanie' component={Inquiry} t={t} />
        <Route path='/realizacje' component={Realization} t={t} />
        <Route path='/zespół' component={Team} t={t} />
        <Route path='/kariera' component={Carrer} t={t} />
        <Route path='/kontakt' component={Contact} t={t}/>
        </Switch>
        </MainContainer>
    )
}
export default MainPage;