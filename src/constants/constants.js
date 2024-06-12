import { Camera, Clock, Layers, Link, Monitor, Ruler, Shield, Wrench } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    to: "/",
    text: "Početna",
  },
  {
    id: 2,
    to: "/video-nadzor",
    text: "Video nadzor",
  },
  {
    id: 3,
    to: "/iskopi",
    text: "Iskopi",
  },
  {
    id: 4,
    to: "/kontakt",
    text: "Kontakt",
  },
];

export const videoTestimonials = [
  {
    name: "Ana Petrović",
    position: "Menadžer bezbednosti",
    text: "Ugradnja video nadzora od strane Global Beo Mobil Trend bila je izvanredna. Sistem funkcioniše besprekorno i pruža nam osećaj sigurnosti u svakom trenutku. Preporučujem njihove usluge svima koji žele vrhunsku zaštitu.",
    img: "/./avatar4.jpg",
  },
  {
    name: "Jelena Marković",
    position: "Projektni inženjer",
    text: "Sistem video nadzora koji je postavila [Naziv firme] je vrhunski. Kvalitet slike je izuzetan, a pristup sa daljine je veoma praktičan. Njihov tim je bio profesionalan od početka do kraja.",
    img: "/./avatar5.jpg",
  },
];
export const iskopiTestimonials = [
  {
    name: "Marko Nikolić",
    position: "Vlasnik građevinske firme",
    text: "Kada smo angažovali Global Beo Mobil Trend za iskopne radove, znali smo da smo u dobrim rukama. Njihovi operateri su veoma iskusni i radovi su izvedeni savršeno. Svakako ćemo ih ponovo angažovati.",
    img: "/./avatar1.jpg",
  },
  {
    name: "Stefan Đorđević",
    position: "Glavni inženjer",
    text: "Radovi na iskopima koje je izvršio Global Beo Mobil Trend su premašili naša očekivanja. Bageristi su vešti i precizni, što je omogućilo nesmetan napredak projekta. Preporučujem ih za sve vrste iskopnih radova.",
    img: "/./avatar3.jpg",
  },
];

export const iskopiCards = [
  {
    icon: Ruler,
    title: 'Preciznost',
    text: 'Naši iskopni radovi su izvedeni s visokim nivoom preciznosti. Koristimo naprednu tehnologiju i stručnost našeg tima kako bismo osigurali tačnost svakog iskopavanja, bez obzira na složenost i specifične zahteve projekta, omogućavajući precizno postavljanje temelja i infrastrukture.',
  },
  {
    icon: Clock,
    title: 'Efikasnost',
    text: 'Efikasnost je ključni aspekt naših usluga. Naš tim je obučen da radi brzo i efektivno, koristeći najsavremeniju opremu. Time osiguravamo da svaki projekat bude završen u predviđenom roku, bez kompromisa na kvalitetu i bez nepotrebnih zastoja.',
  },
]

export const iskopiCards2 = [
  {
    icon: Shield,
    title: 'Bezbednost',
    text: 'Bezbednost je naš prioritet. Sprovodimo sve neophodne mere da osiguramo sigurno radno okruženje za naš tim i sve prisutne na gradilištu. Pridržavamo se najviših standarda sigurnosti kako bismo minimizirali rizike i osigurali uspešan završetak svakog projekta.',
  },
  {
    icon: Layers,
    title: 'Fleksibilnost',
    text: 'Naši iskopni radovi su prilagodljivi i fleksibilni, osiguravajući da možemo da odgovorimo na sve specifične zahteve vašeg projekta. Bilo da se radi o malim ili velikim iskopima, naš tim je spreman da se prilagodi vašim potrebama, garantujući optimalne rezultate u svakoj situaciji.',
  },
]

export const videoCards = [
  {
    icon: Camera,
    title: 'Instalacija',
    text: 'Naš tim stručnjaka osigurava brzu i efikasnu instalaciju sistema video nadzora. Bez obzira na veličinu i složenost objekta, prilagođavamo se vašim specifičnim potrebama i zahtevima, garantujući maksimalnu pokrivenost i optimalno pozicioniranje kamera za potpunu sigurnost.',
  },
  {
    icon: Monitor,
    title: 'Praćenje',
    text: 'Naši sistemi omogućavaju 24/7 praćenje vašeg prostora. Sa mogućnošću daljinskog pristupa putem mobilnih uređaja, možete pratiti dešavanja u realnom vremenu, bilo kada i bilo gde. Naša rešenja pružaju sigurnost i mir u svakom trenutku.',
  },
]

export const videoCards2 = [
  {
    icon: Wrench,
    title: 'Održavanje',
    text: 'Redovno održavanje vašeg sistema video nadzora je ključno za njegovo besprekorno funkcionisanje. Nudimo kompletnu podršku i brzu reakciju na sve kvarove i potrebe za prilagođavanjem sistema, osiguravajući dugotrajnu i pouzdanu zaštitu vašeg prostora.',
  },
  {
    icon: Link,
    title: 'Integracija',
    text: 'Naši sistemi video nadzora lako se integrišu sa postojećom sigurnosnom infrastrukturom. Bilo da se radi o alarmima, kontroli pristupa ili pametnim kućnim sistemima, naši stručnjaci će osigurati besprekornu integraciju koja poboljšava ukupnu sigurnost i funkcionalnost vašeg objekta.',
  },
]