Quality is Job #1
* Overview
* Test runner? Test framework? Assertions library?
  1. test runner runs your tests that you've written using ...
  1. a test framework which uses an...
  1. assertion library to assert your assumptions are correct
* Common Tools for node
  * test runners & frameworks
    1. tap
    1. mocha
    1. vows -- no coverage (doc issue from 2014, closed not resolved)
  * assertion libraries
    1. tap
    3. assert
    4. chai
    5. should
    6. expect
  * coverage tools
    1. istanbul
    1. blanket (mocha, jasmine, qunit only) 
* unit tests vs functional tests vs tdd vs bdd vs...
  * prefer tests that verify functionality
  * prefer tetst that isolate components, but not individual functions
  * tdd is hard becuase i sometimes don't know what i want _until_ i've written some code
* don't pollute global namespace 
  * mocha tests are un-runnable via node directly
  * vows test are but require a little bit of trickery 
  * inserting globals is magic. where did `describe` and `it` come from?
* be less verbose
  * bdd's verbiage is a bit much tbh
* live demo time!

