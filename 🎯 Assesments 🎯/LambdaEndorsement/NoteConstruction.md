# Problem
Harold write a note containing seneitive information that he doesn't want traced back to him through handwriting recognition software. He decides to cut out whole words from magazines and use them to recreate hit note. The words in his note are case-sensitive and he must only use whole worde from the magazine. 

Write a funcion that, given an array of words available for him to use from magazines and the words contained in his note, returns `true` if it is possible to recreate the note using the words in the magazines. Otherwise, it should return `false` 

# Analysis

## Inputs 
- Strings

## Edge Case
- Based on length of the note and amagazine check if it even possible make a note with the number of words avaialble => then you can check the words themselves

## Starting Variables
1. Magazine_HASHTABLE => holds all the available words & the amount of times that word is availabe

## Steps
1. Fill Magazine_HASHTABLE

2. Loop  Through String and check against Magazine_HASHTABLE availability 

3. If you make it ALL the way through without returning false from ^^ then return True

## Time & Space Complexity
Space = 0(1)
Time = O(m) + O(n) ==> `m = magazine / n = note`