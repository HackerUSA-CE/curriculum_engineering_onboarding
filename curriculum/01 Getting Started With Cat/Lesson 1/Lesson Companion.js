import { Document, H2, H3, H4, P, Br, MultipleChoice, Answer, CodeSnippet, CodeExercise } from 'lib/components'
import { LESSON1_NAME } from '../_constants'
const { js } = CodeSnippet.Annotations

export default () => (
    <Document>
        <H4>{`JavaScript & Front-End Web Development Course`}</H4>
        <H2>{LESSON1_NAME}</H2>
        <P>Use these questions throughout the lesson to check your understanding</P>
        <Br/>
        
        <H3>OOP Trivia #1</H3>                   
        <MultipleChoice>
            A class is an instance of an object.
            <Answer feedback="An object is an instance of a class!">True</Answer>
            <Answer correct feedback="An object is an instance of a class!">False</Answer>
        </MultipleChoice>

        <H3>OOP Trivia #2</H3>                
        <MultipleChoice>
            In JavaScript classes cannot have more than one constructor method
            <Answer correct>True</Answer>
            <Answer>False</Answer>
        </MultipleChoice> 

        <H3>OOP Trivia #3</H3>           
        <MultipleChoice>
            When I store data in a field of my class using 'this.fieldName = someValue', that value will be accessible to all instances of that class.
            <Answer feedback="Each instance of of your class has it's own unique data in it's fields that is not shared between instances of the class.">True</Answer>
            <Answer correct>False</Answer>                                      
        </MultipleChoice>

        <H3>Creating a Class Problem #1</H3>   
        <CodeExercise
            title="Creating a Class Problem #1"
            instructions="There is something wrong with my code. I can't instantiate a new instance of my class. What's wrong?"
            setup={`
            `}
            starterCode={`
                class Fruit {
                    constructor(name) {
                        this.name = name;
                        this.color = color;
                    }
                }
                let banana = new Fruit("banana", "yellow");
                console.log(banana);
            `}
            test={`
                if(typeof Fruit == 'undefined') throw Error('Use the class keyword to define a Fruit class with a name and color field');
                let wasAbleToCallAsFunction = false;
                try {
                    Fruit();
                    wasAbleToCallAsFunction = true;
                } catch(err) {}
                if(wasAbleToCallAsFunction) throw Error('Almost! This allows us to create a Fruit object');
                let banana7 = new Fruit("banana", "yellow");
                if(banana7.color !== 'yellow') throw Error('The color of the Fruit was expected to be yellow.');
            `}
        />

        <H3>Creating a Class Problem #2</H3>   
        <CodeExercise
            title="Creating a Class Problem #2"
            instructions="I'm able to create this class just fine, but I can't get my elevator to go up and down! What's wrong?"
            setup={`
            `}
            starterCode={`
                class Elevator {
                    constructor() {
                        this.floor = 1;
                    }
                    
                    goUp() {
                        floor += 1;
                        console.log(
                            "Going up to floor " + floor
                        );
                    }
                
                    goDown() {
                        floor -= 1;
                        console.log(
                            "Going up to floor " + floor
                        );
                    }
                }
                let elevator = new Elevator();
                elevator.goUp();
                elevator.goUp();
                elevator.goDown();
                console.log(elevator);
            `}
            test={`
                if(typeof Elevator == 'undefined') throw Error('Use the class keyword to define a Elevator class with a goUp() and goDown() method');
                let wasAbleToCallAsFunction = false;
                try {
                    Elevator();
                    wasAbleToCallAsFunction = true;
                } catch(err) {}
                if(wasAbleToCallAsFunction) throw Error('Almost! This allows us to create a Elevator object');
            `}
        />

        <H3>Creating a Class Problem #3</H3>   
        <CodeExercise
            title="Creating a Class Problem #3"
            instructions="I'm getting this weird error about my curly braces and parentheses I'm using in my TV class definition. It doesn't make sense. How can I fix my code?"
            setup={`
            `}
            starterCode={`
                class TV(size, brand) {
                    this.size = size;
                    this.brand = brand;
                }
                let myTV = new TV("big", "Sony");
                console.log(myTV);
            `}
            test={`
                if(typeof TV == 'undefined') throw Error('Use the class keyword to define a TV class with a name and color field');
                let wasAbleToCallAsFunction = false;
                try {
                    TV();
                    wasAbleToCallAsFunction = true;
                } catch(err) {}
                if(wasAbleToCallAsFunction) throw Error('Almost! This allows us to create a TV object');
            `}
        />

    </Document>
)
