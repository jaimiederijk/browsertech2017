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
- inline script dat html5 tags opvangt. dus een Combi van oude IE browsers en geen werkende JavaScript sloopt de website.
```
<script>
  'article aside footer header nav section time'.replace(/\w+/g,function(n){document.createElement(n)});
</script>
```

### php


- Zoeken in lijst
- Contacten toevoegen
- Lijst contacten genereren

### css
- css om voor IE gemaakte elementen ```display:block``` mee te geven
- eerst size in px en daarna enhance met EM's
- tabindex op div om details zichtbaar te maken met alleen css.
``` div:focus a {make vissible} ```
- fontsize 0 ipv ```display=none``` zodat tabbaar blijft
- Tabbaarheid zorgt er ook voor dat zichtbaar blijft
- inline-block oplossingen voor ie7 en firefox2
```
display: -moz-inline-stack;
display: inline-block;
zoom: 1;
*display: inline;
```

### JavaScript
- classname ipv classlist gebruiken
- getelementbytag ipv queryselector gebruiken
```
  var htmlElements = {
    contacts: document.getElementsByTagName('div')
  }
```
- onclick ipv eventlistener gebruiken.
```
  htmlElements.contacts[i].onclick = function() {
    if (htmlElements.contacts[i].className == "show") {
      htmlElements.contacts[i].className = htmlElements.contacts[i].className.replace(/\bshow/g, "");
    } else {
      htmlElements.contacts[i].className = "show";
    }

  }
```
