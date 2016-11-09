var fs = require('fs');

var path = "./worksheet/utility.js";

/**
 * Create a file `utility.js` within
 * the worksheet folder.
 */
test(
  "Create a file `utility.js`",
  function () {
    try {
        fs.accessSync(path, fs.F_OK);
        ok(true, "utility.js created");
    } catch (e) {
        ok(false, "utility.js is missing - please create it");
    }
});




/**
 * Borrow the code from the module example (i.e. testmodule.js in
 * the examples folder) and paste it into `utility.js` so that
 * it becomes a javascript module.
 */
test(
  "Borrow the code from the module example",
  function () {
    var util = require(path);
    var msg = util.message("test");
    equal(msg, "***test***", "module created");
});



/**
 * Create a function called compare that accepts two arrays of numbers
 * and compares the contents.  It should return true if the arrays are
 * identical and false otherwise.
 */
test(
  "Compare Arrays",
    function(assert) {
      var util = require(path);
        assert.ok(
          typeof util.compare === "function",
          "Create a function called compare."
        );

        assert.ok(
            util.compare([1], [1]),
            "two arrays with 1, should pass"
        );

        assert.ok(
            util.compare([1, 2, 3], [1, 2, 3]),
            "two identical arrays, should pass"
        );

        assert.ok(
            util.compare([4, 7, 11, 17], [4, 7, 11, 17]),
            "two arrays, for idential elements each, should pass"
        );
    }
);



/**
 * Create a function that reverses an array.  It should take one parameter,
 * which is the array to be reversed, and return a new array with the elements
 * from the first array in the opposite order.  The original array should
 * not be altered.
 */
test(
  "Reverse array export",
  function () {
    var util = require(path);
    ok(util.compare( util.reverse([1,2,3]), [3,2,1]), "reversing integers");
    ok(util.compare( util.reverse([1]), [1]), "reversing a single value");
    ok(util.compare( util.reverse([]), []), "reversing an empty array");
    ok(util.compare( util.reverse(["one", "two", "three"]), ["three","two","one"]), "reversing strings");
});



/**
 * Create a function called largest that accepts an array
 * of numbers and returns the largest number.
 */
QUnit.test("Largest",
    function(assert) {
      var util = require(path);
        assert.ok(
          typeof util.largest === "function",
          "Create a function called largest."
        );
        assert.ok( util.largest([0,1,2]) == 2, "2 is the largest of 0,2 & 2" );
        assert.ok( util.largest([1,1,3]) == 3, "2 is the largest of 1,1 & 3" );
        assert.ok( util.largest([2,2,2]) == 2, "2 is the largest of 2, 2 & 2");
        assert.ok( util.largest([1,2,3,4,5,6,7,8,3,-5]) == 8, "8 is th largest" );
        assert.ok( util.largest([1]) == 1, "single element array works") ;
    }
);



/*
Task1
Create a utility module based largely on what they’ve done before
		Task 2
HTTP server
that uses utility
Provides add service
*/
