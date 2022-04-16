# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Live Site URL: [Hosted Link](https://aphatheology.github.io/Interactive-Rating-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- Thinking beyond the Layout. I initially implemented the rating with button element, and end up with a buggy code when implementing the interaction, I had to rewrite the rating using a customised radio button.

- One should always think about implementing the interactions on the project and how to structure the Javascript involved, this will help to determine which element should have class or id (for possible DOM manipulation).

```html
    <input type="radio" id="star1" name="rating" value="1">
	<label for="star1">1</label>
```

### Continued development

- Adding animation to make the selection smooth.


## Author

- Website - [Aphatheology](https://www.github.com/aphatheology)
- Frontend Mentor - [@aphatheology](https://www.frontendmentor.io/profile/aphatheology)
- Twitter - [@mustbeta](https://www.twitter.com/mustbeta)


## Acknowledgments

- I searched on how to write text inside radio button and I got the perfect solution from this  [Write text in radio button codepen](https://codepen.io/w3programmings/pen/zzRKpy)

### Thanks
