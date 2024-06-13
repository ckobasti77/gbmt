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
    img: "/./avatar4.avif",
  },
  {
    name: "Jelena Marković",
    position: "Projektni inženjer",
    text: "Sistem video nadzora koji je postavila [Naziv firme] je vrhunski. Kvalitet slike je izuzetan, a pristup sa daljine je veoma praktičan. Njihov tim je bio profesionalan od početka do kraja.",
    img: "/./avatar5.avif",
  },
];
export const iskopiTestimonials = [
  {
    name: "Marko Nikolić",
    position: "Vlasnik građevinske firme",
    text: "Kada smo angažovali Global Beo Mobil Trend za iskopne radove, znali smo da smo u dobrim rukama. Njihovi operateri su veoma iskusni i radovi su izvedeni savršeno. Svakako ćemo ih ponovo angažovati.",
    img: "/./avatar1.avif",
  },
  {
    name: "Stefan Đorđević",
    position: "Glavni inženjer",
    text: "Radovi na iskopima koje je izvršio Global Beo Mobil Trend su premašili naša očekivanja. Bageristi su vešti i precizni, što je omogućilo nesmetan napredak projekta. Preporučujem ih za sve vrste iskopnih radova.",
    img: "/./avatar3.avif",
  },
];

export const iskopiCards = [
  {
    icon: Ruler,
    title: 'Preciznost',
    text: 'Naši iskopni radovi su visoko precizni zahvaljujući naprednoj tehnologiji i stručnosti tima. Osiguravamo tačnost iskopavanja za postavljanje temelja i infrastrukture.',
  },
  {
    icon: Clock,
    title: 'Efikasnost',
    text: 'Efikasnost je ključ naših usluga. Naš tim radi brzo i efektivno koristeći najsavremeniju opremu, završavajući projekte na vreme bez kompromisa na kvalitetu.',
  },
]

export const iskopiCards2 = [
  {
    icon: Shield,
    title: 'Bezbednost',
    text: 'Bezbednost je naš prioritet. Osiguravamo sigurno radno okruženje i pridržavamo se najviših sigurnosnih standarda kako bismo minimizirali rizike.',
  },
  {
    icon: Layers,
    title: 'Fleksibilnost',
    text: 'Naši iskopni radovi su prilagodljivi, odgovarajući na specifične zahteve projekta. Bez obzira na veličinu iskopavanja, garantujemo optimalne rezultate.',
  },
]

export const videoCards = [
  {
    icon: Camera,
    title: 'Instalacija',
    text: 'Naš tim osigurava brzu i efikasnu instalaciju video nadzora, prilagođavajući se vašim potrebama za maksimalnu pokrivenost i sigurnost.',
  },
  {
    icon: Monitor,
    title: 'Praćenje',
    text: 'Naši sistemi omogućavaju 24/7 praćenje Vašeg prostora uz daljinski pristup putem mobilnih uređaja, pružajući sigurnost i mir u svakom trenutku.',
  },
]

export const videoCards2 = [
  {
    icon: Wrench,
    title: 'Održavanje',
    text: 'Redovno održavanje sistema video nadzora osigurava besprekorno funkcionisanje. Nudimo podršku i brzu reakciju na kvarove i prilagođavanja.',
  },
  {
    icon: Link,
    title: 'Integracija',
    text: 'Naši sistemi se lako integrišu sa postojećom sigurnosnom infrastrukturom, poboljšavajući ukupnu sigurnost i funkcionalnost objekta.',
  },
]
