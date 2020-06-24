You're given a non-empty array of arrays where each subarray holds three integers and represents a disk. These integers denote ech disks's width, depth, and height, respectively. YOur goal is to stack up the disks and to maximilize the total height of the stack. A disk must have a strictly smaller width, depth, and height than any other disk below it. 

Write a function tht returns an array of the disks in the final stack, starting with the top disk and ending with the bottom disk. Note that you can't rotate disks; in other words, the integers in each subarray must represent [width, depth, height] at all times. 

You cna ssume that there will only be one stack with the greatest total height. 