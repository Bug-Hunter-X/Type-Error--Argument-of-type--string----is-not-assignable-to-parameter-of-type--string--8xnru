# Type Error in TypeScript: Passing Array to String Function

This repository demonstrates a common type error in TypeScript that occurs when an array is passed to a function expecting a string argument.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

## Problem

The `greeter` function expects a string argument, but an array of strings is passed to it, resulting in a type error.

## Solution

The solution involves type checking and correctly handling the array input. The solution file, `bugSolution.ts`, demonstrates how to address this issue, using type guards and array manipulation to ensure the function operates correctly with various inputs. 
