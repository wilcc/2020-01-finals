# Term 1 Final Exam

`npm install` and `npm test`!


### Problem Descriptions

* `makeRunOn` - given a string, it returns a copy of the string where every period--except for one that ends the string--has been replaced by a comma.
* `stringOut` - given a string, it returns a string with a space between every letter. It should not double spaces. That is, given a string of `what would you do`, it returns `w h a t w o u l d y o u do`, NOT `w h a t  w o u l d  y o u  d o`, or variations with even more spaces.
* `nightOwls` - filters the list to return the objects whose property `asleep` is true and whose `localTime` is between `100` and `400` inclusive. It should not modify the original array. **BEWARE**: putting a 0 at the start of a number does NOT due what you think it does, so don't put the numbers in full 24-hour-clock format (i.e., 0100 for 1am and 0200 for 2am). You probably weren't going to anyway, but... let's not make that why we fail this question.
* `totalScore` - sums the scores from every `level` object in the given list. If any `level` object has a multiplier property, the `score` is multiplied by the `multiplier` before being added to the sum.
* `getToBed` - returns a new list where every person object in the given list whose `localTime` is between `100` and `400` inclusive has their `asleep` property set to true. Does not mutate the original list.
* `findIndices` - a function that takes a list and another function (a callback) as parameters and returns a new list holding the indices of the list at which, when the corresponding element is passed into the callback function, it returns `true`. (See the test for precise examples!)
* `Faqtory` - a factory function that returns an object with methods for managing a FAQ list. It contains an array of questions set to empty to start with, an `addQuestion` method for adding questions to the list, and an `answerQuestion` method for answering those questions that have yet to be answered. **NOTE:** the questions being added are objects. Making a function that returns a question object may be worth it, but either way, make sure those questions are objects! **HINT** the `id` can be set by looking at how many questions are already in the list.
