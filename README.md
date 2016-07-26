# Why Test?

## Objectives

1. Explain why we write tests for our applications
2. Describe high-level approaches to testing
3. Explain the difference between unit and integration tests

## The need for testing
![Testing for failures](https://media.giphy.com/media/7MZ0v9KynmiSA/giphy.gif)

For new programmers, testing can seem like a massive undertaking. There's so much stuff to set up at
first, where do we even begin? But we won't be scared off like that — that's not how we roll. Once
more unto the breach!

The truth is, testing can be super helpful. It helps us verify that our code works as intended, and
provides a nice starting point for other developers to dissect our code (and hopefully contribute).
Having automated tests makes us feel confident that our code is robust. Who doesn't like to feel
confident? I like feeling confident about things.

Another thing that most people new to testing seem to overlook is the time we _gain_ by writing
tests. Sure, we have to spend some time setting up your initial testing infrastructure, and writing
the tests themselves. That, however, pales in comparison to the time we gain by having a machine
check our code for us, instead of doing it manually. Machines are orders of magnitude faster than
humans (unless you're a Terminator), so the testing is done a lot quicker. This allows us to write
**more** code in **less** time!

Let's say we're implementing some kind of card game (think Uno or something similar). We have all
this game logic that is intertwined. Testing this stuff manually (e.g. going through all of the
steps required to see the result of what we're working on) would take forever. Running the tests for
it, however, literally takes *less than a second*. Doesn't that sound appealing? Programmers are
lazy by default. It's good to be lazy. Let the machines do the heavy lifting!


## So how does it work?
![How does it work?](https://media.giphy.com/media/xTk9ZMcahswelC60ko/giphy.gif)

Ideally, we start by writing tests first. Everyone thinks about the code they're going to write to
a certain degree, but writing tests forces us to put this into words. We're effectively creating a
spec for our code — we're writing down how it should behave. Doing this also makes us think about
edge cases and error handling a little sooner, which is always good for code quality.

However, in the real world, writing tests isn't always the first thing that's done. Sometimes we
already have a bunch of code — whether it's from an old project, code that was handed down to us,
and so on. Writing tests *after* code has already been written is still a very valuable exercise: it
allows us to more deeply understand the code. It also gives us the confidence to refactor things,
since if the tests still pass, our program still works!

Something you'll hear often is the 'Red, Green, Refactor' mantra. The 'Red' part stands for writing
a test that fails initially (since you don't have any code at that point). Next, we make your tests
pass (make them 'Green') in the simplest possible way. When all tests pass, we can go ahead and refactor
things to either optimize for performance, to make things more legibile, or just to simply clean up
our code.


## Different kinds of tests
When talking about testing, you'll notice that there are various sorts of tests. Here, we'll quickly
illustrate the difference between them using our card game example from before.

### Unit testing
Unit testing is testing the smallest unit possible of our program. These small units are usually
single functions — these functions can still be relatively big, so the amount of tests you write for
that unit kind of depends on the size of the unit you're testing. For example, in our card game, we
have a function that checks if a card can be legally played:

```js
function canCardBeLegallyPlayed(cardToBePlayed, cardOnTopOfDeck) {
  const isSameColor = cardToBePlayed.color === cardOnTopOfDeck.color;
  const isSameSymbol = cardToBePlayed.symbol === cardOnTopOfDeck.symbol;
  const isBlackBonusCard = cardToBePlayed.color === 'black';

  return isSameColor || isSameSymbol || isBlackBonusCard;
}
```

This is a relatively simple function, but there are already edge cases involved: we can only play a
card if the number and/or symbol matches, **or** if the card is a black bonus card. We can write
several tests for this and modify the input.

### Integration testing
Integration testing is where we kick things up a notch and start looking at the bigger picture — how
do all the units of our program work together? Do they play nice when used next to each other? Is
the data returned from our functions being stored in the right place?

### End-to-end testing
This is the most similar thing to our manual testing we'll find here. End-to-end testing is the big
kahuna. Think of end-to-end testing like the things we'd do in the browser ourselves: _'when I click
this button, the card should appear in this location_. This kind of testing takes a while to set up
and is done using specialized tools. These tests are also the _slowest_ of them all to run since
they have to do so much work. Still much, much faster than testing things manually, though!
