---
layout: post
title: Attending a Natural Language Processing Talk by John DeNero
date: 2015-03-20 23:04:03
description: Notes on a talk by Berkeley professor and former Google Translate researcher John DeNiro on Natural Language Processing and Human Computer Interaction
categories: Programming
published: false
---

All of us have done something like this: *Google Translate* > *"Hello"* > *Translate to Dutch* > *Paste* but give little though to what process, or brain other than our own, is doing all of the work.

Many of our initial assumptions about Human-Computer Interactions are naive. A child or student might explain this process as "*someone must have entered the dictionary into a computer and that's how we get translations*". But there is far more work involved in order to accurate decompose and then translate sentences.

This is exactly what Professor John DeNero talked about at Berkeley's [Cloyne Co OP](http://www.bsc.coop/housing/houses/large-houses/cloyne-court) on March 18th. DeNero teaches the most popular Berkeley class: 61A.

I decided to attend this event after a Facebook invitation from [Hackers@Berkeley](http://hackersatberkeley.com). I had no idea that DeNero had such a proficient background in the subject until right before the event. What I found out was: before his current position, Professor DeNero was a [researcher](http://research.google.com/pubs/author38952.html) at Google. He worked specifically on [Google Translate](https://translate.google.com) and Natural Language Processing.


### Natural Language Processing

Quickly... what the hell is it? From [Wikipedia](http://en.wikipedia.org/wiki/Natural_language_processing):

> Natural language processing (NLP) is a field of computer science, artificial intelligence, and linguistics concerned with the interactions between computers and human (natural) languages
> [...] challenges in NLP involve natural language understanding, that is, enabling computers to derive meaning from human or natural language input, and others involve natural language generation.

Basically, make computer understand what *we*, humans say (not what binary says) and communicate back in our paradigms of language.

To address this, he opened with this simple sentence...

> Programs must be written for people to read

Besides being a relevant concept in Computer Science, it can be interpreted and broken up in many ways. Each word has an isolated meaning which is the simplest and an implied meaning in context of the other words. For example "programs" can be any of these 

![definitions](/assets/images/a-talk-on-natural-language-processing-by-john-denero/syntactic-ambiguity.png)

Or the sentence can be taken as "Programs must be written... for people to read"; such that people will be illiterate unless programs are written.

This context, DeNero brought up, can be the difference between a completely coherent sentence and one of bizarre possibilities.

Take this headline in subjective context...

> Stolen Painting Found by Tree

Depending on one's interpretation, a response could be "wonderful!" or... "thank you tree."

One more...

> Children Make Nutritious Snacks

### The Problem

The humor of this comes from the combination of *syntactic* and *semantic* ambiguity; the difference between multiple word interpretations, and multiple phrase interpretations.

Colloquial conversations are much more complex than a series of dictionary definitions strung together. When we talk we mean things we don't say, we use sarcasm, implications, negations, and more complex linguistic tools in order to express ourselves.

One solution for first understanding sentence structure is use *supervised word alignment*: a person, usually an *undergraduate*, annotates sentences into their grammatical skeleton. From there, the data can be used as a reference in translation and decomposition.

But that isn't enough. Only working on human labor and limited data pool doesn't facilitate accurate and rapid translations. So, while working at Google, DeNero and the translate team scraped the entire internet for every english body of text, mostly from governments and the UN. This resulted in over one trillion words.

What they did with this *unsupervised* data is attempt to align the words, or infer the skeleton and linking of each sentence and it's translation. What resulted was a series of probabilities. Probabilities which could tell you how often a word was a noun, adjective, or in a clause; as well as how often it translated into other words.

The data guided the reduction of both syntactic and semantic ambiguity through strict probability; similar to how 7th century Arabian scholars [solved](http://en.wikipedia.org/wiki/Frequency_analysis#History_and_usage) the [Cesar cipher](http://en.wikipedia.org/wiki/Caesar_cipher): **frequency analysis**.


> ...Not quite done yet... More to write about... just need more time... Looking for general remarks on grammer, accuracy, and flow. How easy is it to read? Aiming for the middle ground of knowledge base. Do I need more citations and references? Am I too vauge? Too detailed? How easily woud this be understood by a programmer? Non-programmer?