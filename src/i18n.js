import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import aboutEn from "./locales/en/about.json";
import aboutPt from "./locales/pt/about.json";
import aboutEsp from "./locales/es/about.json";
import aboutFr from "./locales/fr/about.json";
import aboutPo from "./locales/po/about.json";
import aboutDe from "./locales/de/about.json";
import aboutFl from "./locales/fl/about.json";

import experiencesEn from "./locales/en/experiences.json";
import experiencesFr from "./locales/fr/experiences.json";
import experiencesEs from "./locales/es/experiences.json";
import experiencesPt from "./locales/pt/experiences.json";
import experiencesPo from "./locales/po/experiences.json";
import experiencesDe from "./locales/de/experiences.json";
import experiencesFl from "./locales/fl/experiences.json";

import sensationsEn from "./locales/en/sensations.json";
import sensationsFr from "./locales/fr/sensations.json";
import sensationsEs from "./locales/es/sensations.json";
import sensationsPt from "./locales/pt/sensations.json";
import sensationsPo from "./locales/po/sensations.json";
import sensationsDe from "./locales/de/sensations.json";
import sensationsFl from "./locales/fl/sensations.json";

import servicesEn from "./locales/en/services.json";
import servicesEs from "./locales/es/services.json";
import servicesFr from "./locales/fr/services.json";
import servicesPt from "./locales/pt/services.json";
import servicesPo from "./locales/po/services.json";
import servicesDe from "./locales/de/services.json";
import servicesFl from "./locales/fl/services.json";

import igltaEn from "./locales/en/iglta.json";
import igltaEs from "./locales/es/iglta.json";
import igltaFr from "./locales/fr/iglta.json";
import igltaPt from "./locales/pt/iglta.json";
import igltaPo from "./locales/po/iglta.json";
import igltaDe from "./locales/De/iglta.json";
import igltaFl from "./locales/fl/iglta.json";

import groupsIndividualsEn from "./locales/en/groupsIndividuals.json";
import groupsIndividualsEs from "./locales/es/groupsIndividuals.json";
import groupsIndividualsFr from "./locales/fr/groupsIndividuals.json";
import groupsIndividualsPt from "./locales/pt/groupsIndividuals.json";
import groupsIndividualsPo from "./locales/po/groupsIndividuals.json";
import groupsIndividualsDe from "./locales/de/groupsIndividuals.json";
import groupsIndividualsFl from "./locales/fl/groupsIndividuals.json";

import luxuryEn from "./locales/en/luxury.json"
import luxuryEsp from "./locales/es/luxury.json"
import luxuryFr from "./locales/fr/luxury.json"
import luxuryPt from "./locales/pt/luxury.json"
import luxuryPo from "./locales/po/luxury.json"
import luxuryDe from "./locales/de/luxury.json"
import luxuryFl from "./locales/fl/luxury.json"

import miceEn from "./locales/en/mice.json"
import miceEsp from "./locales/es/mice.json"
import miceFr from "./locales/fr/mice.json"
import micePt from "./locales/pt/mice.json"
import micePo from "./locales/po/mice.json"
import miceDe from "./locales/de/mice.json"
import miceFl from "./locales/fl/mice.json"

import exclusiveEn from "./locales/en/exclusive.json"
import exclusiveEsp from "./locales/es/exclusive.json"
import exclusiveFr from "./locales/fr/exclusive.json"
import exclusivePt from "./locales/pt/exclusive.json"
import exclusivePo from "./locales/po/exclusive.json"
import exclusiveDe from "./locales/de/exclusive.json"
import exclusiveFl from "./locales/fl/exclusive.json"

import workationEn from './locales/en/workation.json'
import workationEsp from './locales/es/workation.json'
import workationFr from './locales/fr/workation.json'
import workationPt from './locales/pt/workation.json'
import workationPo from './locales/po/workation.json'
import workationDe from './locales/de/workation.json'
import workationFl from './locales/fl/workation.json'

import hotelsEn from './locales/en/hotels.json'
import hotelsEsp from './locales/es/hotels.json'
import hotelsFr from './locales/fr/hotels.json'
import hotelsPt from './locales/pt/hotels.json'
import hotelsPo from './locales/po/hotels.json'
import hotelsDe from './locales/de/hotels.json'
import hotelsFl from './locales/fl/hotels.json'

import clientsEn from './locales/en/clients.json'
import clientsFr from './locales/fr/clients.json'
import clientsEs from './locales/es/clients.json'
import clientsPt from './locales/pt/clients.json'
import clientsPo from './locales/po/clients.json'
import clientsDe from './locales/de/clients.json'
import clientsFl from './locales/fl/clients.json'

import pagePendingEn from './locales/en/pending.json'
import pagePendingEsp from './locales/es/pending.json'
import pagePendingFr from './locales/fr/pending.json'
import pagePendingPt from './locales/pt/pending.json'
import pagePendingPo from './locales/po/pending.json'
import pagePendingDe from './locales/de/pending.json'
import pagePendingFl from './locales/fl/pending.json'

import registerEn from './locales/en/register.json'
import registerEs from './locales/es/register.json'
import registerFr from './locales/fr/register.json'
import registerPt from './locales/pt/register.json'
import registerPo from './locales/po/register.json'
import registerDe from './locales/de/register.json'
import registerFl from './locales/fl/register.json'

import loginEn from './locales/en/login.json'
import loginEs from './locales/es/login.json'
import loginFr from './locales/fr/login.json'
import loginPt from './locales/pt/login.json'
import loginPo from './locales/po/login.json'
import loginDe from './locales/de/login.json'
import loginFl from './locales/fl/login.json'

import homeEn from './locales/en/home.json'
import homeEs from './locales/es/home.json'
import homeFr from './locales/fr/home.json'
import homePt from './locales/pt/home.json'
import homePo from './locales/po/home.json'
import homeDe from './locales/de/home.json'
import homeFl from './locales/fl/home.json'

import productionEn from './locales/en/productions.json'
import productionEs from './locales/es/productions.json'
import productionFr from './locales/fr/productions.json'
import productionPt from './locales/pt/productions.json'
import productionPo from './locales/po/productions.json'
import productionDe from './locales/de/productions.json'
import productionFl from './locales/fl/productions.json'

import infosHTLEn from './locales/en/infosHTL.json'
import infosHTLEs from './locales/es/infosHTL.json'
import infosHTLFr from './locales/fr/infosHTL.json'
import infosHTLPt from './locales/pt/infosHTL.json'
import infosHTLPo from './locales/po/infosHTL.json'
import infosHTLDe from './locales/de/infosHTL.json'
import infosHTLFl from './locales/fl/infosHTL.json'

import forgotEn from './locales/en/forgotreset.json'
import forgotEs from './locales/es/forgotreset.json'
import forgotFr from './locales/fr/forgotreset.json'
import forgotPt from './locales/pt/forgotreset.json'
import forgotPo from './locales/po/forgotreset.json'
import forgotDe from './locales/de/forgotreset.json'
import forgotFl from './locales/fl/forgotreset.json'

i18n.use(initReactI18next).init({
  resources: {
    en: 
    { 
      about: aboutEn, 
      experiences: experiencesEn,
      services: servicesEn,
      iglta: igltaEn,
      groupsIndividuals: groupsIndividualsEn,
      luxury: luxuryEn,
      mice: miceEn,
      exclusive: exclusiveEn,
      workation: workationEn,
      hotels: hotelsEn,
      clients: clientsEn,
      sensations: sensationsEn,
      pending: pagePendingEn,
      register: registerEn,
      login: loginEn,
      home: homeEn,
      productions: productionEn,
      infosHTL: infosHTLEn,
      forgotreset: forgotEn
    },
    esp: 
    { 
      about: aboutEsp, 
      experiences: experiencesEs,
      services: servicesEs,
      iglta: igltaEs,
      groupsIndividuals: groupsIndividualsEs,
      luxury: luxuryEsp,
      mice: miceEsp,
      exclusive: exclusiveEsp,
      workation: workationEsp,
      hotels: hotelsEsp,
      clients: clientsEs,
      sensations: sensationsEs,
      pending: pagePendingEsp,
      register: registerEs,
      login: loginEs,
      home: homeEs,
      productions: productionEs,
      infosHTL: infosHTLEs,
      forgotreset: forgotEs
    },
    pt: 
    { 
      about: aboutPt, 
      experiences: experiencesPt,
      services: servicesPt,
      iglta: igltaPt,
      groupsIndividuals: groupsIndividualsPt,
      luxury: luxuryPt,
      mice: micePt,
      exclusive: exclusivePt,
      workation: workationPt,
      hotels: hotelsPt,
      clients: clientsPt,
      sensations: sensationsPt,
      pending: pagePendingPt,
      register: registerPt,
      login: loginPt,
      home: homePt,
      productions: productionPt,
      infosHTL: infosHTLPt,
      forgotreset: forgotPt
    },
    fr: 
    { 
      about: aboutFr, 
      experiences: experiencesFr,
      services: servicesFr,
      iglta: igltaFr,
      groupsIndividuals: groupsIndividualsFr,
      luxury: luxuryFr,
      mice: miceFr,
      exclusive: exclusiveFr,
      workation: workationFr,
      hotels: hotelsFr,
      clients: clientsFr,
      sensations: sensationsFr,
      pending: pagePendingFr,
      register: registerFr,
      login: loginFr,
      home: homeFr,
      productions: productionFr,
      infosHTL: infosHTLFr,
      forgotreset: forgotFr
    },
    po: 
    { 
      about: aboutPo, 
      experiences: experiencesPo,
      services: servicesPo,
      iglta: igltaPo,
      groupsIndividuals: groupsIndividualsPo,
      luxury: luxuryPo,
      mice: micePo,
      exclusive: exclusivePo,
      workation: workationPo,
      hotels: hotelsPo,
      clients: clientsPo,
      sensations: sensationsPo,
      pending: pagePendingPo,
      register: registerPo,
      login: loginPo,
      home: homePo,
      productions: productionPo,
      infosHTL: infosHTLPo,
      forgotreset: forgotPo
    },
    de: 
    { 
      about: aboutDe, 
      experiences: experiencesDe,
      services: servicesDe,
      iglta: igltaDe,
      groupsIndividuals: groupsIndividualsDe,
      luxury: luxuryDe,
      mice: miceDe,
      exclusive: exclusiveDe,
      workation: workationDe,
      hotels: hotelsDe,
      clients: clientsDe,
      sensations: sensationsDe,
      pending: pagePendingDe,
      register: registerDe,
      login: loginDe,
      home: homeDe,
      productions: productionDe,
      infosHTL: infosHTLDe,
      forgotreset: forgotDe
    },
    fl:
    { 
      about: aboutFl, 
      experiences: experiencesFl,
      services: servicesFl,
      iglta: igltaFl,
      groupsIndividuals: groupsIndividualsFl,
      luxury: luxuryFl,
      mice: miceFl,
      exclusive: exclusiveFl,
      workation: workationFl,
      hotels: hotelsFl,
      clients: clientsFl,
      sensations: sensationsFl,
      pending: pagePendingFl,
      register: registerFl,
      login: loginFl,
      home: homeFl,
      productions: productionFl,
      infosHTL: infosHTLFl,
      forgotreset: forgotFl
    },
  },
  lng: "en", // idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;