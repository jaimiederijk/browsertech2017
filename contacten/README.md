# Browser Technologie

## Use Case:
> Ik wil in een lijst contacten kunnen zoeken, en details kunnen bekijken

Aanbevolen browser technologie hierbij is Sticky Position

## Contacten Lijst
[demo](http://jaimiederijk.nl/browsertech2017/)

Ik heb een demo gemaakt die volgens het Progressive Enhancement principe is opgebouwd.
De basis functionaliteit is uitgewerkt in html en php. En van daar uit verbeterd met CSS en JavaScript.  

## dingen die ik ben tegengekomen
### html

- form input type = tel wanneer dit niet wordt ondersteunt word het type text. hetzelfde geldt voor andere input types. En type text werkt ook.
- inline script dat html5 tags opvangt.

### php

- zoeken in lijst
- contacten toevoegen
- lijst contacten genereren

### css
- eerst size in px en daarna enhance met EM's
- tabindex op div om details zichtbaar te maken met alleen css.
``` div:focus a {make vissible} ```
- fontsize 0 ipv ```display=none``` zodat tabbaar blijft
- tabbaarheid zorgt er ook voor dat zichtbaar blijft
- inline-block oplossingen voor ie7 en firefox2
```
display: -moz-inline-stack;
display: inline-block;
zoom: 1;
*display: inline;
```

### JavaScript
- classname ipv classlist  
- getelementbytag ipv queryselector
- onclick ipv eventlistener
