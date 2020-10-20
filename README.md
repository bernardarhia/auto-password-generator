# Auto-password-generator
This is a simple password generator

## Motivation
Few weeks ago, I got hacked in one of my social media account. That was when I decided to create this kickass password generator


## Technology used
<b>Built with</b>

* #### Javascript 


## How to use
Below is a guide to how to use this package

### Installation

```
npm install devil-passgen
```
### Usage

```const passgen = require('passgen')
const password = passgen();
```
By Default, The password generator will generate 30 Random password characters including:

- Uppercased letters
- Lowercased letters
- Numbers
- Special Characters

#### Adding arguments
The password generator takes in two arguments

##### The first is 
- the characters you want the script to generate for you

```
const passgen = require('passgen')

const password = passgen('abcdefgh')
```

This will generate 30 random password characters using the argument provided that is, 'abcdefgh'


##### The second is 
- the password length

you can provide a length to the code to generate the password for you


```
const passgen = require('passgen')

const password = passgen('abcdefgh',20)

```

This script will generate 20 random characters using the first argument as its pattern generator


## Screenshot
![image](https://res.cloudinary.com/everich1/image/upload/v1603185280/githubSnippets/snippet_u5naeg.png)


 
