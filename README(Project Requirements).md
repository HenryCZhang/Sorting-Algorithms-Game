# Sorting Algorithm Educational Game

Create an educational game in a web or mobile application that helps undergraduate students understand sorting algorithm(s) according to the following ~~requirements~~ description.

## The algorithms (**Must Have**)

* [X] We can start with the MergeSort as the only algorithm; however, the system should be designed to allow other algorithms to be added later.

* Merge Sort
* Bubble Sort

## Levels

* **Level 1:**  (__Must Have__)

  * [X] A set of 10 numbers are randomly generated out of the range (1-20) **(updated on Jan. 24th at 09:40 am)**
  * [X] The steps of the algorithm would be executed as visual animation accompanied with explanation texts
    e.g., [mergesortAV](https://opendsa-server.cs.vt.edu/embed/mergesortAV) (this link is provided as an example of the idea and is not to be blindly replicated)
  * [X] The animation should also be interactive in order to keep the user engaged. **(*clarification* updated on Feb. 14th at 10:18 am)**
  * [X] The merging steps are important to understand the algorithm so the user should see them done step by step which also applies to the rest of the levels. **(*clarification* updated on Feb. 14th at 10:18 am)**
* **Level 2:** (__Must Have__)

  * [X] A set of 10 numbers are randomly generated out of the range (1-20) **(updated on Jan. 24th at 09:40 am)**
  * [X] The steps of the algorithm are displayed in the text allowing the user to move the numbers according to the current step.

  * Feedback should be provided at each step **(updated on Jan. 24th at 09:40 am)**
    * [X] Positive feedback (visual and audio) when the step is correct
    * [X] Negative feedback (visual and audio) when the step is incorrect
* **Level 3:** (__Must Have__)

  * [X] A set of 10 numbers are randomly generated out of the range (1-20)
  * [X] The user is to decide what needs to be done at every step

  * Feedback should be provided at each step

    * [X] Positive feedback (visual and audio) when the step is correct
    * [X] Negative feedback (visual and audio) when the step is incorrect
* **Level 4:** (*Should Have*)

  * [X] A set of 20 numbers are randomly generated out of the range (1-50)
  * [X] The user is to decide what needs to be done at every step

  * Feedback should be provided at each step
    * [X] Positive feedback (visual and audio) when the step is correct
    * [X] Negative feedback (visual and audio) when the step is incorrect
* **Level 5:** (*Should Have*)

  * [X] A set of 50 numbers are randomly generated out of the range (1-100)
  * [X] The user is to decide what needs to be done at every step

  * Feedback should be provided at each step
    * [X] Positive feedback (visual and audio) when the step is correct
    * [X] Negative feedback (visual and audio) when the step is incorrect
* **Custom Level:** (Nice to Have)

  * [X] The user the number of numbers (i.e. the length of the array) and the range to select from
  * [X] The user is to decide what needs to be done at every step

  * Feedback should be provided at each step
    * [X] Positive feedback (visual and audio) when the step is correct
    * [X] Negative feedback (visual and audio) when the step is incorrect

## Attempts (*Should Have*)

* [X] The user is allowed to make up to 3 mistakes at each level.

* If a user makes 3 mistakes, they’re giving the following options

  * [X] restart the same level
  * [X] go back to any of the previous levels
  * [X] switch to the latest level with another algorithm  **(updated on Jan. 11th at 10:45 am)**
  * [X] or quit the game

## Timeout (*Should Have*) **(updated on Jan. 24th at 09:40 am)**

* [X] A timer should be displayed in the interface to inform the user of how long they spent on each level.
* [X] After __5__ minutes of inactivity, the session should time out and go back to the home page

## Logging Activities ~(Should Have)~

* [X] (*Should have*) User actions need time spent at each level should be logged for later analysis **(updated on Jan. 11th at 10:45 am)**
* [X] (Nice to Have) An admin can view visual analytics of the logged data **(updated on Jan. 11th at 10:45 am)**

## References

[A. Yohannis and Y. Prabowo, &#34;Sort Attack: Visualization and Gamification of Sorting Algorithm Learning,&#34; 2015 7th International Conference on Games and Virtual Worlds for Serious Applications (VS-Games), 2015, pp. 1-8, doi: 10.1109/VS-GAMES.2015.7295785.](https://ieeexplore.ieee.org/document/7295785)
