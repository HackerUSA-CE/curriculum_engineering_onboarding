import { Citation, CodeSnippet, Br, H1, H2, H3, Li, Link, Span, Presentation, Ul, SpeakerNotes, Image } from 'lib/components'
import { Title, Text, Media, Column, LearningObjectives } from 'templates'  
import path from 'path'
import { LESSON1_NAME } from "../_constants"

const { js } = CodeSnippet.Annotations

export default () => (
    <Presentation>
        <Title.Slide
            title={LESSON1_NAME}
            moduleNumber="01"
        />

        <LearningObjectives
            subtitle={LESSON1_NAME}
            objectives={[                
                "Describe what CAT is and why we use it",
                "Install CAT",
                "Familiarize the user interface",
                "Create slides using components and templates"
            ]}
        />

        <Media.Slide title="What is CAT?" subtitle={LESSON1_NAME} icon="geo-fill">        
            <Media.Description>
                <H2>We use the Curriculum Automation Tool to design class materials in a consistent format that is easy to update</H2>
            </Media.Description>
            <Media.Content>
                <Image path={path.resolve(__dirname + "./../_assets/content-create.jpg")} alt ="Model of a person" />
                <Citation href="https://unsplash.com/photos/BPZ1huYak7c">
                    Source: unsplash.com
                </Citation>
            </Media.Content>
            <SpeakerNotes>
                {`
Hook people into the topic by talking about how popular OOP is in the programming world.
Insert your own experiences you've had in the real-world using the paradigm.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Media.Slide title="What is a class?" subtitle={LESSON1_NAME} icon="gem">
            <Media.Description>
                <H2>A class is the blueprint we write so that we can build objects</H2>
                <Br />
                <H2>We can reuse the same class to create many objects</H2>
            </Media.Description>
            <Media.Content>
                {/* <Image path={path.resolve(__dirname + "/_assets/blueprint.jpg")} alt ="Blueprint on whiteboard" /> */}
                <Citation href="https://unsplash.com/photos/3V8xo5Gbusk">
                    Source: unsplash.com
                </Citation>
            </Media.Content>
            <SpeakerNotes>
                {`
Talk about how classes allow us to model things in the real-world.
We can create many classes, and many instances of each of our classes known as "objects" that can all interact with each other.
Make sure the difference between a class and an object is clear since they are often mistakenly conflated.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Media.Slide title="What are fields of a class?" subtitle={LESSON1_NAME} icon="gem">
            <Media.Description>
                <H2></H2>
                <H2>Classes have fields that we can <Span bold>encapsulate</Span> our data in</H2>
                <Br />
                <H2>What other fields could be used to define a person?</H2>
            </Media.Description>
            <Media.Content>
                {/* <Image path={path.resolve(__dirname + "/_assets/person_model.png")} alt ="Fields of our person class" /> */}
            </Media.Content>
            <SpeakerNotes>
                {`
Fields define the data that our class has.
Explain how encapsulation can be used to avoid having to write the same code over and over.
Ask the class what other fields could be added to the Person class.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Media.Slide title="What is an object?" subtitle={LESSON1_NAME} icon="gem">
            <Media.Description>
                <H2>An object is an instance of a class</H2>
                <Br />
                <H2>We can create many instances of the same class with unique data</H2>
                <Br />
                <H2>Each one of these birds has a unique name, height, and wingspan. The class would be "Bird".</H2>
            </Media.Description>
            <Media.Content>
                {/* <Image path={path.resolve(__dirname + "/_assets/birds.jpg")} alt ="Birds we could represents programmatically with a class and objects" /> */}
                <Citation href="https://unsplash.com/photos/e7-PSQNDspY">
                    Source: unsplash.com
                </Citation>
            </Media.Content>
            <SpeakerNotes>
                {`
Explain that an object as an instance of a class is not the same as an object literal, as seen in prior units.
Reference the picture and explain all the birds in the picture are unique bird objects, but they all are related by the class: Bird. 
The fields of the class would be "name", "height", "wingspan". The objects would be each individual bird in the picture.`
                }
            </SpeakerNotes>
        </Media.Slide>

        <Media.Slide title="Using the 'class' keyword" subtitle={LESSON1_NAME} icon="pencil-square" columns={2}>
            <Media.Description>
                <H2>We add a "constructor" method to our class that is called each time we <Span bold>instantiate</Span> a new bird object.</H2>
                <Br />
                <H2>We use the "new" keyword when instantiating a new instance of our class.</H2>
                <Link href="https://repl.it/join/pdnmmfra-codynicholson">Code Link</Link>
            </Media.Description>
            <Media.Content>
                <H2>Coding our first class:</H2>
                <CodeSnippet content={js`
                    class Bird {
                        constructor(name, height, wingspan) {
                            this.name = name;
                            this.height = height;
                            this.wingspan = wingspan;
                        }
                    }
                    let larryBird = new Bird("Larry", 81, 58);
                    console.log(larryBird);
                `} />               
            </Media.Content>
            <SpeakerNotes>
                {`
A constructor is a special method on our class that is called when a new instance of our class is created.
We'll cover methods more later on in this lesson.
We can make many classes in the same JavaScript file.
Without the "new" keyword we won't be able to create a new instance of our class.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Column.Slide title="Excel Rows As Objects" subtitle={LESSON1_NAME} icon="bar-chart-fill" columns={2}>
            <Column.One>
                <H2>Excel rows as objects:</H2>
                <CodeSnippet content={js`
                    let larryBird = new Bird("Larry", 81, 58);
                    let macGyver = new Bird("MacGyver", 4, 15);
                    let kiwi = new Bird("Kiwi", 22, 17);
                    let sunshine = new Bird("Sunshine", 3, 30);
                    let tiki = new Bird("Tiki", 12, 12);
                `} />               
            </Column.One>
            <Column.Two>
                {/* <Image path={path.resolve(__dirname + "/_assets/excel_birds.png")} alt ="How excel rows could be represented as objects in JavaScript" /> */}
            </Column.Two>
            <SpeakerNotes>
                {`
Using our Bird class, we can take all of the information in this excel sheet into our program by creating an object for each row.
Now that we have our five bird objects in our program we write programs using our new objects: Like a function to find the tallest bird or the bird with the shortest wingspan.
One big advantage we get from using a class is that we can add behavior to our data - a key concept in OOP (Lead into next slide).
                `}
            </SpeakerNotes>
        </Column.Slide>

        <Media.Slide title="What Can Birds Do?" subtitle={LESSON1_NAME} icon="exclamation-square-fill">        
            <Media.Description>
                <H2>We can add behavior to our classes by adding <Span bold>methods</Span></H2>
                <Br />
                <H2>Adding the <Span bold>squawk()</Span> method allows all bird objects to squawk by calling the method on the object</H2>
                <Link href="https://repl.it/join/jypkyetx-codynicholson">Code Link</Link>
            </Media.Description>
            <Media.Content>
                <CodeSnippet content={js`
                        class Bird {
                            constructor(name, height, wingspan) {
                                this.name = name;
                                this.height = height;
                                this.wingspan = wingspan;
                            }
                            
                            squawk() {
                                console.log("Squawk!!");
                            }
                        }
                        let kiwi = new Bird("Kiwi", 22, 17);
                        kiwi.squawk();
                    `} />
            </Media.Content>
            <SpeakerNotes>
                {`
A method is a function that belongs to a class.
The methods of a class define what a class can do.
We can add as many methods as we want to our class as long as they have unique names.
We can call these methods again and again as long as we have an instance of our class.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Column.Slide title="What is 'this'?" subtitle={LESSON1_NAME} icon="question" columns={2}>        
            <Column.One>
                <H2>In our constructor method we set our fields using <Span bold>'this'</Span> every time we make a new instance of our class.</H2>
                <H2>We can use <Span bold>'this'</Span> to other methods of our class to access the data we stored in the fields of our class.</H2>
                <Citation href="https://unsplash.com/photos/CdK2eYhWfQ0">
                    Source: unsplash.com
                </Citation>       
            </Column.One>
            <Column.Two>
                {/* <Image path={path.resolve(__dirname + "/_assets/dogs.jpg")} alt = "Dogs" /> */}
            </Column.Two>
            <SpeakerNotes>
                {`
'this' is used to reference the data and behavior of our unique instance of our class.
If we make a Dog class that has a field for name and a field for color, and then we make a dog object with name="Sunny" and color="blonde",
then this.name will be "Sunny" and this.breed will be "blonde" for this instance of the Dog class.
We could have a second dog class with different data, and then using 'this' would allow us to access that instance's unique data as well.
                `}
            </SpeakerNotes>
        </Column.Slide>

        <Media.Slide title="Using 'this' To Get Field Values" subtitle={LESSON1_NAME} icon="gem">        
            <Media.Content>
                <CodeSnippet content={js`
                        class Bird {
                            constructor(name, height, wingspan) {
                                this.name = name;
                                this.height = height;
                                this.wingspan = wingspan;
                            }
                            squawk() {
                                console.log("Squawk!!");
                            }
                            introduce() {
                                console.log("I'm " + this.name + 
                                    " and I am " + this.height +
                                    " tall and my wingspan is " + 
                                    this.wingspan + ".");
                                this.squawk();
                            }
                        }
                        let sunshine = new Bird("Sunshine", 3, 30);
                        sunshine.introduce();
                    `} />
            </Media.Content>
            <Media.Description>
                <H2>We can print out our bird's unique field values by using 'this' in our methods, like in our new <Span bold>introduce()</Span> method</H2>
                <Br/>
                <H2>We can also use <Span bold>'this'</Span> to call methods of our class like we call <Span bold>'this'</Span> in <Span bold>'this'</Span>.</H2>
                <Link href="https://repl.it/join/nfcpstwh-codynicholson">Code Link</Link>
            </Media.Description>
            <SpeakerNotes>
                {`
Using 'this' we can grab the fields of our instances, and we can also call the methods of our instances as seen in introduce() when we call squawk().
Grabbing our field variables and calling methods like this gives us the ability to do almost anything with our classes.
We could make a Bank class with a 'amountOfMoney' field and write a method withdraw() and deposit() method to add and subtract money from our bank.
We could make a Elevator class with a 'floor' field and write a method goUp() and goDown() to switch floors.
We'll see more examples in the coming slides.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Media.Slide title="Methods Can Take Input & Return Values" subtitle={LESSON1_NAME} icon="gem">        
            <Media.Content>
                <CodeSnippet content={js`
                        class Bird {
                            constructor(name, height, wingspan) {
                                this.name = name;
                                this.height = height;
                                this.wingspan = wingspan;
                            }
                            squawk() {
                                console.log("Squawk!!");
                            }
                            introduce() {
                                console.log("I'm " + this.name + 
                                    " and I am " + this.height +
                                    " tall and my wingspan is " + 
                                    this.wingspan + ".");
                                this.squawk();
                            }
                            repeatAfterMe(msg) {
                                return this.name + " says: " + msg + "!";
                            }
                        }
                        let tiki = new Bird("Tiki", 12, 12);
                        var msg = tiki.repeatAfterMe("Hi birdy!");
                        console.log(msg);
                    `} />
            </Media.Content>
            <Media.Description>
                <H2>Just like a function, methods of a class can also take input parameters and return values, like in this <Span bold>repeatAfterMe()</Span> method</H2>
                <Link href="https://repl.it/join/ekilbozl-codynicholson">Code Link</Link>
            </Media.Description>
            <SpeakerNotes>
                {`
We can grab the returned string from our repeatAfterMe() method and use the value later in our script.
                `}
            </SpeakerNotes>
        </Media.Slide>

        <Text.Slide title="Summary" subtitle={LESSON1_NAME} icon="ladder">
            <Text.Content>
                <H2>We've just covered some core concepts of Object-Oriented Programming:</H2>
                <Br />
                <Br />
                <Ul>
                    <Li>Creating a class</Li>
                    <Li>Building objects using a class</Li>
                    <Li>Using 'this' to reference the instance of our class</Li>
                    <Li>Adding behavior to our classes w/ input and return values</Li>                    
                </Ul>
                <Br />
                <Br />
                <H3>Ready to practice?!</H3>
            </Text.Content>
        </Text.Slide>

    </Presentation >
)
