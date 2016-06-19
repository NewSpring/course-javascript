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
              Javascript is made up of 7 data types. Six of those types are primitive. These types are immutable, meaning they cannot be changed. In day to day development, these used to represent values of things in your application.
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
              { loc: [15, 16], note: "Functions alos have methods on the object for other uses" },
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
              One of the most commonly used global is the <code>console</code>. This global (and its methods) allow you to print out various information about the application. Not all globals are the same! For example <code>process</code> exists globally in node, but not in the browser whereas <code>navigator</code> exists in browser but not on node.
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
          {/*
            1. Why Javascript
            2. Primitives / Objects / Globals
            3. Blocks / Closures
            4. Variables
            5. Functions
            6. `this`
            7. Environments
            8. Modules
            */}
          {/*<CodeSlide
            lang="typescript"
            transition={[]}
            code={require("raw!./code.example")}
            ranges={[
              { loc: [0, 1], title: "Code Sample!" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3], note: "Single line returns are acceptable" },
              { loc: [4, 5], note: "trailing commas are super helpful in git diffs" },
            ]}/>*/}
        </Deck>
      </Spectacle>
    );
  }
}
