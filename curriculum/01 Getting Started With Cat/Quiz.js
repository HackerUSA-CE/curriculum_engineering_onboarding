import { Quiz, MultipleChoice, Answer, CodeSnippet } from 'lib/components'

export default () => (
    <Quiz>
        <MultipleChoice>
            A class can be used to create objects. True or false?
            <Answer correct>True</Answer>
            <Answer feedback="The class is the blueprint we use to create objects">False</Answer>
        </MultipleChoice>
        <MultipleChoice>
            What kind of function is called when a class is instantiated?
            <Answer correct>Constructor</Answer>
            <Answer>OnCreate</Answer>
            <Answer>Super</Answer>
            <Answer>Initializer</Answer>
            <Answer>Iterator</Answer>
        </MultipleChoice>
        <MultipleChoice>
            In JavaScript, what keyword can be used to refer to the class instance from within the class itself?
            <Answer feedback="Fun fact - this is correct in creating classes in Python!">"self"</Answer>
            <Answer>"me"</Answer>
            <Answer correct>"this"</Answer>
            <Answer>"that"</Answer>
            <Answer>Use the class name</Answer>
        </MultipleChoice>
        <MultipleChoice>
            Static methods are...?
            <Answer>Restricted against accepting functions as arguments (i.e., no callbacks)</Answer>
            <Answer>Cannot be called except from within the class</Answer>
            <Answer correct>Called on the class instead of the instance</Answer>
            <Answer>Must be pure functions</Answer>
            <Answer>Use the class name</Answer>
        </MultipleChoice>
        <MultipleChoice>
            In JavaScript, one class can inherit properties and methods from another class by using which keyword?
            <Answer>"interface"</Answer>
            <Answer>"inherit"</Answer>
            <Answer>"use"</Answer>
            <Answer correct>"extends"</Answer>
            <Answer>None of the above</Answer>
        </MultipleChoice>
        <MultipleChoice>
            Given the following class definition, how can we instantiate a new dog? 
            <CodeSnippet>{`
                class Dog {
                    bark() {
                        console.log('woof')
                    }
                }
            `}</CodeSnippet>
            <Answer>{`let myDog = Dog();`}</Answer>
            <Answer feedback="This won't create an error, it will call the function and set myDog equal to nothing since the function doesn't return anything">{`let myDog = Dog.bark();`}</Answer>
            <Answer correct>{`let myDog = new Dog();`}</Answer>
            <Answer feedback="This won't create an error, it will set myDog equal to an empty anonymous function">{`let myDog = Dog.constructor();`}</Answer>
            <Answer>None of the above</Answer>
        </MultipleChoice>
    </Quiz>
)
