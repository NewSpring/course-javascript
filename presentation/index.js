// Import React
import React, { Component } from "react";
import {
  Spectacle,
  Deck,
  Slide,
  Heading,
  S,
  Text,
  List,
  ListItem,
  Image,
  Code,
} from "spectacle";

import {
  theme,
} from "../assets";

import CodeSlide from "spectacle-code-slide";
export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500}>

          <Slide transition={[]} bgColor="primary">
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Javascript 101</S>
            </Heading>
            <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
              Modern Javascript
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Why Javascript?
            </Heading>
            <Heading size={10} textFont="secondary" textColor="dark-secondary">
              <S type="italic">Isn't it just jQuery anyway?</S>
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Originally written in two weeks, Javascript is a language born in the browser. Over its years of growth and adoption, the language moved to the server and even the IoT (internet of things) world. It is the only way we can build native apps, web apps, and servers using the same language. <br/><br/><S type="bold italic">Why Javascript?</S>: because javascript is everywhere and we want to bring the Gospel to the world.
            </Text>

          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Image src="https://pbs.twimg.com/media/ClUu_bOWYAAjZl2.jpg" />
          </Slide>


          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              Primitives, Objects, and Globals
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">The building blocks of the language</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Primitives
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Javascript is made up of 7 data types. Six of those types are primitive. These types are immutable, meaning they cannot be changed. In day to day development, these are used to represent values of things in your application.
            </Text>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              <S type="bold">The primitive types are:</S>
            </Text>
            <List textFont="secondary" textColor="dark-primary">
              <ListItem textSize="28px" margin="0 0 10px 0">Boolean</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">Null</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">Undefined</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">Number</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">String</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">Symbol</ListItem>
            </List>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./primitive.example")}
            ranges={[
              { loc: [0, 1], title: "Primitives in code" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Booleans are either true or false" },
              { loc: [2, 3] },
              { loc: [2, 3], note: "null values are intentionally empty values" },
              { loc: [3, 4] },
              { loc: [3, 4], note: "undefined is assigned to variables that are declared without values, or in arguments without values"},
              { loc: [4, 5] },
              { loc: [4, 5], note: "numbers are float values (can have decimal points). By default, these are in base 10"},
              { loc: [5, 6] },
              { loc: [5, 6], note: "strings represent text based values"},
              { loc: [6, 7] },
              { loc: [6, 7], note: "Symbols are unique and immutable instances"},
            ]}/>
          <Slide transition={[]} bgColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="primary">
              Objects
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The 7th datatype in javascript is an Object. Objects make up everything that is not a primitive. Its pretty much the entire language! Objects are complex data structures. They contain data in arbitrary mappings and have a common way to access data. In javascript functions, dates, arrays, and POJO (Plain ol javascript objects) are all Object types.
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./object.example")}
            ranges={[
              { loc: [0, 1], title: "Objects in code" },
              { loc: [1, 6] },
              { loc: [1, 3], note: "Plain javascript objects are represented as keys and values" },
              { loc: [1, 3], note: "In this expample, `string` is the key, and \"hello\" is the value" },
              { loc: [3, 4], note: "You should access a value through dot notation" },
              { loc: [4, 5], note: "If you need to dynamically access a value, you can use bracket notation"},
              { loc: [6, 11] },
              { loc: [6, 11], note: "Arrays are a type of Object where there is a particular relationship between integer-key-ed properties and the 'length' property"},
              { loc: [6, 11], note: "Think of Arrays as a list"},
              { loc: [7, 8] },
              { loc: [8, 9], note: "Access values in an array using bracket notation" },
              { loc: [9, 10], note: "Standard arrays have methods on the object that make it easy to work with the values" },
              { loc: [10, 11], note: "Arrays also have a `length` property used to get the total number of items in the array" },
              { loc: [12, 16] },
              { loc: [12, 16], note: "Functions are objects that can manipulate other objects, or the state of the application" },
              { loc: [13, 14], note: "Functions are created using the `function` or `=>` syntax" },
              { loc: [14, 15], note: "Functions can be called using brackets" },
              { loc: [15, 16], note: "Functions also have methods on the object for other uses" },
              { loc: [17, 21] },
              { loc: [17, 21], note: "Dates are an example of a global object type that uses the constructor notation instead of the literal notation" },
              { loc: [18, 19], note: "That just means use `new` when making a date" },
              { loc: [19, 20], note: "Dates represent values on their own" },
              { loc: [20, 21], note: "However, they are still and object with methods" }
            ]}/>
          <Slide transition={[]} bgColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="primary">
              Globals (the global object)
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Based on the environment that you work in, javascript will give you access to different values, methods, and objects by default. In the browser, the global object is the <code>window</code>, in node, its the <code>global</code> object. Anything that exists on the global object can be used without pointing to its reference.
            </Text>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              One of the most commonly used global is the <code>console</code>. This global (and its methods) allow you to print out various information about the application. Not all globals are the same! For example <code>process</code> exists globally in node, but not in the browser whereas <code>navigator</code> exists in browser but not in node.
            </Text>
          </Slide>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              Blocks and Closures
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Code isolation and one of the best parts of javascript</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="primary">
              Blocks
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              On the most simple level, blocks are statements bound between curly braces. Since ES6, blocks define an isolated scope. They are used to group statements together and prevent variable leakage on a global scale. Blocks are pretty much awesome.
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./blocks.example")}
            ranges={[
              { loc: [0, 1], title: "Blocks in code" },
              { loc: [1, 4] },
              { loc: [1, 4], note: "the x variable exists within the block created between lines 2 - 4"},
              { loc: [5, 10] },
              { loc: [5, 10], note: "In es5, blocks did not encapsulate scope of its contents" },
              { loc: [11, 16] },
              { loc: [11, 16], note: "In es6, blocks do encapsulate scope"}
            ]}/>
          <Slide transition={[]} bgColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="primary">
              Closures
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Clousures are your best friend. No really, they are. A closure lets you associate some data with a <code>function</code> that operates on that data. They protect against variable hoisting and scope leakage, and let you make functions with internal state. They also make more sense in code so...
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./closures.example")}
            ranges={[
              { loc: [0, 1], title: "Closures in code" },
              { loc: [1, 11] },
              { loc: [1, 11], note: "`name` only exists within the closure of whoami" },
              { loc: [3, 8], title: "A Closure" },
              { loc: [5, 6], title: "Another closure" },
              { loc: [10, 11], note: "When called, displayName has access to the parent closure and the value of `name`"},
              { loc: [12, 22] },
              { loc: [13, 19], note: "`makeWhoAmI` creates a function that keeps access to `name` because of the closure" },
              { loc: [15, 16], note: "Returning the function" },
              { loc: [20, 21], note: "When we make the function, it can be assigned to a variable" }, {
                loc: [21, 22], note: "When called, the created displayName has access to the parent closure and the value of `name`"
              }, { loc: [23, 29], title: "Practical Closures"},
              { loc: [25, 28], note: "`encourage` creates a function that you can use to encourage someone" },
              { loc: [26, 27], note: "The created function keeps the environment data (`x`) from when it was created"},
              { loc: [30, 32], note: "Here we create two encouraging functions with different messages"},
              { loc: [30, 32], note: "Without closures, `youCanDoIt` would be overwritten by `believeInYourSelf"},
              { loc: [33, 35], note: "When called, the functios retain the data from their creation, and use the new data passed into the funciton"},
              { loc: [34, 35], title: "Believe in yourself Team!"}

            ]}/>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              Variables
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Naming things is hard</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="primary">
              var, let, and const
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              A variable is a symbolic name for values in your code. A variable must start with a letter, underscore, or a dollar sign. Javascript is case sensitive so <code>var Name;</code> is different than <code> var name;</code>. The standard casing for javascript is camelCase (as opposed to PascalCase in C languages and snake_case in python). A variable can be assigned on declaration <code>var name = "james";</code> or left empty <code>var name;</code>.
            </Text>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Javascript has three variable types (as of ES6): <code>var</code>, <code>let</code>, and <code>const</code>. <S type="bold italic"><code>var</code></S> declares a hoistabled generic variable. <S type="bold italic"><code>let</code></S> declares a block scope local variable. It is simillar to <code>var</code> but only exists in the block it is defined within. <S type="bold italic"><code>const</code></S> declares a read only named constant.
            </Text>

          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Var and Hoisting
            </Heading>
            <Heading size={10} textFont="secondary" textColor="dark-secondary">
              <S type="italic">or why we don't use var anymore</S>
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              A variable declared using the <code>var</code> or <code>let</code> statement with no initial value specified has the value <code>undefined</code>. If you attempt to access an undeclared variable that was created using <code>var</code> or <code>let</code> it will read undefined. However, <code>var</code> variables will be hoisted to the top of their scope. This hoisting can cause silent errors in code, or have unintended side effects.
            </Text>

            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              When in doubt, use <S type="bold italic"><code>const</code></S>. If you need to reassign the variable, 1. make sure you do, 2. use <S type="bold italic"><code>let</code></S>.
            </Text>

          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./variables.example")}
            ranges={[
              { loc: [0, 1], title: "Variables in code" },
              { loc: [2, 3], },
              { loc: [1, 6], note: "Variables can be reassigned when initialized with `var`"},
              { loc: [8, 9], },
              { loc: [7, 12], note: "Variables can be reassigned when initialized with `let`"},
              { loc: [14, 15], },
              { loc: [13, 18], note: "Variables cannot be reassigned when initialized with `const`"}, { loc: [19, 26], title: "Variable Hoisting"},
              { loc: [20, 21], note: "This should read `The value of d is undefined`" },
              { loc: [23, 24], note: "This should throw a [Reference Error]" },
              { loc: [26, 33], title: "Hoisting and Closures" },
              { loc: [26, 33] },
              { loc: [30, 31], note: "This will be undefined because the scoped myvar is hoisted"}
            ]}/>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              Functions
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">The building blocks of applications</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The anatomy of a function
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              A <code>function</code> is made up of two required statements, and three optional ones. First is declaration itself. In ES6 you can declare a <code>function</code> using <S type="bold italic"><code>function</code></S> or a <S type="bold italic"><code>=></code></S>. Next is the actual statement. This is either formed using brackets <S type="bold italic"><code>{"{}"}</code></S>, using parenthesis when using an arrow delcaration <S type="bold italic"><code>{"()"}</code></S> or using the same line <S type="bold italic"><code>x => x + 1;</code></S>.
            </Text>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The optional parts of a <code>function</code> are the <code>name</code>, <code>arguments</code> and the <code>return</code>. The <S type="bold italic"><code>name</code></S> is used to reference the <code>function</code> and is helpful when debugging. The <S type="bold italic"><code>arguments</code></S> are the values passed to the <code>function</code> by the callee. These are new variables created within the closure of the function. The <S type="bold italic"><code>return </code></S> statement within the block, means the function returns a value as the result of the function. Unbracketed functions assume a return.
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./function-structure.example")}
            ranges={[
              { loc: [0, 1], title: "Functions in code" },
              { loc: [1, 4] },
              { loc: [5, 8], note: "named function `hello`" },
              { loc: [9, 13], note: "function with a return statement" },
              { loc: [14, 17], note: "function with an argument" },
              { loc: [18, 19], note: "single line unnamed function a return and arrow declaration" },
              { loc: [20, 24] },
              { loc: [24, 26], note: "implicit return functions", },
              { loc: [27, 30] }
            ]}/>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              Conditionals
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Using falsy and thruthy values to control flow</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Falsy values
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              A falsy value is a value, either computed or declared, that evaluates to false when evaluated in a Boolean context. The following values are always falsy:
            </Text>
            <List textFont="secondary" textColor="dark-primary">
              <ListItem textSize="28px" margin="0 0 10px 0">false</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">0</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">""</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">null</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">undefined</ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0">NaN</ListItem>
            </List>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Falsy statements
            </Heading>
            <Text
              margin="30px 0 20px 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Comparison of falsy values in javascript is often misunderstood. This is due to the type coercion of values in some cases. The falsy values <code>false</code>, <code>0</code>, and <code>""</code> are all equivalent and can be compared against each other using a coerced equality.
            </Text>
            <Text
              margin="30px 0 20px 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Evaluation of Boolean statements should always be done using <S type="bold italic"><code>===</code></S> instead of <S type="bold italic"><code>==</code></S>. In javascript <code>==</code> tries to coerce the type of both sides of evaluation.
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./falsy.example")}
            ranges={[
              { loc: [0, 1], title: "Is this true?!" },
              { loc: [1, 3] },
              { loc: [1, 2], note: "true"},
              { loc: [2, 3], note: "false"},
              { loc: [4, 6] },
              { loc: [4, 5], note: "true"},
              { loc: [5, 6], note: "false"},
              { loc: [7, 9] },
              { loc: [7, 8], note: "true"},
              { loc: [8, 9], note: "false"},
              { loc: [10, 12] },
              { loc: [10, 11], note: "false"},
              { loc: [11, 12], note: "false"},
              { loc: [13, 15] },
              { loc: [13, 14], note: "true"},
              { loc: [14, 15], note: "true"},
              { loc: [16, 18] },
              { loc: [16, 17], note: "true"},
              { loc: [17, 18], note: "true"},
              { loc: [19, 21] },
              { loc: [19, 20], note: "true"},
              { loc: [20, 21], note: "false"},
              { loc: [22, 24] },
              { loc: [22, 23], note: "false"},
              { loc: [23, 24], note: "false"},
              { loc: [25, 27] },
              { loc: [25, 26], note: "false"},
              { loc: [26, 27], note: "false"},
            ]}/>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Truthy statements
            </Heading>
            <Text
              margin="30px 0 20px 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Everything that is not falsy in javascript is truthy. The same type coercion applys when checking truthy values as when checking falsy.
            </Text>
            <Text
              margin="30px 0 20px 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Evaluation of Boolean statements should always be done using <S type="bold italic"><code>===</code></S> instead of <S type="bold italic"><code>==</code></S>. In javascript <code>==</code> tries to coerce the type of both sides of evaluation. Yes this is repeated from the last slide, its that important.
            </Text>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              If...else // switch...case
            </Heading>
            <Text
              margin="30px 0 20px 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Javascript has two types of conditional statements; <S type="bold italic"><code>if...else</code></S> and <S type="bold italic"><code>switch...case</code></S>. The <S type="italic">if statement</S> executes a statement if the specified condition evaluates as truthy. Multiple if..else statements can be combined to create an <S type="italic">else if statement</S>. Conditions in if conditionals can be different between each check point. Conditionals also do not break evaluation.
            </Text>
            <Text
              margin="30px 0 20px 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The <S type="italic">switch statement</S> evaluates an expression and matches it to a case clause to execute a statement. Unlike if statements, switch statements only evaluate a single condition. However, they can still run multiple statements if it matches multiple cases.
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./conditionals.example")}
            ranges={[
              { loc: [0, 1], title: "Conditionals in code" },
              { loc: [1, 4], note: "Simple conditional" },
              { loc: [5, 10], note: "Else statement" },
              { loc: [11, 16], note: "Else if statement" },
              { loc: [17, 23] },
              { loc: [24, 25], note: "Single line conditional ❤️ ❤️ ❤️ (JP) "},
              { loc: [26, 34] },
              { loc: [33, 34] },
              { loc: [27, 28], note: "Early return from the function" },
              { loc: [32, 33] },
              { loc: [29, 30], note: "Intended return from the function" },
              { loc: [36, 37], title: "Switch Statement" },
              { loc: [36, 37], note: "Switch + expression" },
              { loc: [37, 38], note: "Case statement" },
              { loc: [39, 40], note: "Break statement" },
              { loc: [40, 42], note: "Combined statements" },
              { loc: [44, 45], note: "Using a default" },
              { loc: [48, 58] },
              { loc: [53, 54], note: "Missing break statement" },
              { loc: [51, 57], note: "Both statements are executed" }
            ]}/>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              Loops
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Iteration in three forms</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The catalog of loops
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              Javascript has three base loop types with two additional loop syntax methods for easily iterating over Objects and Arrays. Loops also come with a few reserved helpers to assist in controlling loops.
            </Text>
            <List textFont="secondary" textColor="dark-primary">
              <ListItem textSize="28px" margin="0 0 10px 0"><S type="italic bold"><code>for</code></S></ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0"><S type="italic bold"><code>do...while</code></S></ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0"><S type="italic bold"><code>while</code></S></ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0"><S type="italic bold"><code>for...in</code></S></ListItem>
              <ListItem textSize="28px" margin="0 0 10px 0"><S type="italic bold"><code>for...of</code></S></ListItem>
            </List>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The basic <S type="italic bold"><code>for</code></S> loop
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The basic <S type="italic bold"><code>for</code></S> loop (also called a C loop) is a generic method for iterating a statement for a given number of times. The syntax for the loop is:<br/><br/><S type="italic bold"><code>for ([initial]; [condition]; [increment])&#8199;{"{"}<br/>&#8199;&#8199;statement<br/>{"}"}</code></S>
            </Text>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The <S type="italic bold"><code>do...while</code></S> loop
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The <S type="italic bold"><code>do...while</code></S> statement repeats until a specified condition evaluates to false. A <S type="italic bold"><code>do...while</code></S> statement looks as follows:<br/><br/><S type="italic bold"><code>do<br/>&#8199;&#8199;statement<br/>while (condition);</code></S>
            </Text>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The <S type="italic bold"><code>while</code></S> loop
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The <S type="italic bold"><code>while</code></S> statement executes its statements as long as a specified condition evaluates to true. A <S type="italic bold"><code>while</code></S> statement looks as follows:<br/><br/><S type="italic bold"><code>while (condition)<br/>&#8199;&#8199;statement;</code></S>
            </Text>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The <S type="italic bold"><code>for...in</code></S> loop
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The <S type="italic bold"><code>for...in</code></S> loop is a shorthand method for iterating over all keys in an object. It takes the following form:<br/><br/><S type="italic bold"><code>for (let key in obj)&#8199;{"{"}<br/>&#8199;&#8199;statement;<br/>{"}"}</code></S>
            </Text>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              The <S type="italic bold"><code>for...of</code></S> loop
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              The <S type="italic bold"><code>for...of</code></S> loop is a shorthand method for iterating over all the values in an array. It takes the following form:<br/><br/><S type="italic bold"><code>for (let value of arr)&#8199;{"{"}<br/>&#8199;&#8199;statement;<br/>{"}"}</code></S>
            </Text>
          </Slide>
          <Slide transition={[]} bgColor="light-primary">
            <Heading  fit caps lineHeight={1} textColor="primary">
              Loop helpers
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              All loops have a few reserved words that can be used to control the execution of the loop. <S type="italic bold"><code>label</code></S>, <S type="italic bold"><code>continue</code></S>, and <S type="italic bold"><code>break</code></S> are the controlling words. In this lesson we will just cover <code>continue</code> and <code>break</code>. When inside a loop, if you want to move to the next execution cycle, you can you use a <code>continue</code> statement which will break execution of the current loop. If you need to stop iterating over a loop, use a <code>break</code> statement.
            </Text>
          </Slide>
          <CodeSlide
            lang="javascript"
            transition={[]}
            code={require("raw!./loops.example")}
            ranges={[
              { loc: [0, 1], title: "Loops in code" },
              { loc: [1, 10] },
              { loc: [2, 5] },
              { loc: [2, 3], note: "Initial expression, condition, increment expression" },
              { loc: [6, 10] },
              { loc: [6, 8], note: "Iterate over an array" },
              { loc: [8, 9], note: "Access the item in the array" },
              { loc: [11, 17] },
              { loc: [18, 25] },
              { loc: [26, 30], note: "This will lock up your application forever" },
              { loc: [31, 36] },
              { loc: [32, 33], note: "Here we create an object with two keys" },
              { loc: [33, 34], note: "Define the internal variable using `let`" },
              { loc: [34, 35], note: "Access the values from the keys" },
              { loc: [37, 43] },
              { loc: [38, 40], note: "Define an array, and attach an arbitray value to it" },
              { loc: [40, 43], note: "If you use a for...in loop, you will get something like this" }, { loc: [40, 43], note: "0, 1, 2, 3, test" },
              { loc: [44, 47], note: "How to actually access the data" },
              { loc: [48, 56] },
              { loc: [52, 53], note: "Continue statement" },
              { loc: [57, 65] },
              { loc: [61, 62], note: "Break statement" }

            ]}/>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} margin="0 0 20px 0" fit caps lineHeight={1} textColor="light-primary">
              Thank you!
            </Heading>
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Tune in next week for...</S>
            </Heading>
          </Slide>
          <Slide transition={[]} bgColor="primary">
            <Heading size={8} textFont="secondary" textColor="light-secondary">
              <S type="italic">Javascript 102</S>
            </Heading>
            <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
              Errors, RegEx, class, and `this`
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
