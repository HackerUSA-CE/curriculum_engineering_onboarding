import { Section, CodeSnippet, Document, H1, H2, H3, H4, Li, Ul, Ol, Br, Link, P, Span, Image, Citation } from 'lib/components'
import path from 'path'
import { LESSON1_NAME, ACTIVITY1_NAME } from "../_constants"


export default () => (
    <Document>
        <H4>{LESSON1_NAME}</H4>
        <H1>Activity: {ACTIVITY1_NAME}</H1>
        <Br />
        <Section>
            <H2>JavaScript Classes</H2>
            <Ul>
                <Li>Classes allow us to model real-world objects in our programs</Li>
                <Li>An object is an instance of a class and we can have many objects of a single class</Li>
                <Li>We can store data in fields and behavior in methods all within a single class</Li>
                <Li>Like functions, classes help us reuse our code so we don't have to write duplicate code</Li>
            </Ul>            
        </Section>    
        <Section>
            <H2>Class Syntax</H2>                       
            <Ul>
                <Li>We define a class using the 'class' keyword</Li>  
                <Li>A class can have one 'constructor' method that takes the field values we want to save as parameters</Li>  
                <Li>Using the 'this' keyword we can reference methods and fields of our class within our class methods</Li>  
                <Li>To instantiate a new instance of a class we use the 'new' keyword</Li>
            </Ul>
            <Br />
            <H2>Defining a class</H2>
            <CodeSnippet lines={false}>{`
               class Car {
                   constructor(brand, model, year) {
                       this.brand = brand;
                       this.model = model;
                       this.year = year;
                   }
                   brag() {
                       console.log("My car is a " + this.year + " " + 
                            this.brand + " " + this.model + "!");
                   }
               }`}
            </CodeSnippet>  
            <Br />
            <Br />
            <H2>Using a class</H2>
            <CodeSnippet lines={false}>{`
               const myCoolCar = new Car("Ford", "Mustang", 2022);
               myCoolCar.brag();
               > My car is a 2022 Ford Mustang!
               `}
            </CodeSnippet>
        </Section>    
        <Br />
        <Section>
            <H2>Class methods can take input and return values</H2>
            <CodeSnippet lines={false}>{`
                class Calculator {
                    addNums(num1, num2) {
                        return (num1 + num2);
                    }
                }
                const calc = new Calculator();
                calc.addNums(7,33);
                > 40
                `}
            </CodeSnippet>
            <Br />
            <Br />
        </Section>
        <Section>        
            <H1>Classes of Chance</H1>
            {/* <Image path={path.resolve(__dirname + "/_assets/casino.jpg")} alt ="Casino image" /> */}
            <P>Photo by <Link href="https://unsplash.com/@originspoker?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dylan Clifton</Link> on <Link href="https://unsplash.com/s/photos/casino?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</Link></P>
            <Br />
            <H2>Directions</H2>
            <P>You just opened a casino and are introducing a brand new game of change to your customers.</P>  
            <Br />
            <P>
                Our game will be a simple coin flipping game that encourages customers to play for longer by increasing the reward with each consecutive game they play.
            </P>
            <Br/>
            <Ol>
                <Li>Create a <Span bold>Casino</Span> class that takes a <Span bold>name</Span> as input to it's constructor.</Li>
                <Li>Add another field called <Span bold>timesPlayed</Span> that has a default value of 0.</Li>
                <Li>Create a method called <Span bold>playGame(betAmount)</Span> that checks if <Span bold>Math.random() is less than or equal to 0.5</Span>. If true, console.log that the name of the casino wins. If false, say the player wins the bet amount.</Li>
                <Li>When the player wins increment the <Span bold>timesPlayed</Span> by one. Then, when the player wins, change the amount they won to equal: <Span bold>betAmount * (this.timesPlayed + 1)</Span></Li>
            </Ol>
            <Br />
            <CodeSnippet lines={false}>
                {`
                const myCasino = new Casino("HackerU Casino");
                myCasino.playGame(5);
                > You won 5 dollars from HackerU Casino!
                myCasino.playGame(5);
                > You won 10 dollars at the HackerU Casino!
                myCasino.playGame(5);
                > HackerU Casino wins!
                `}
            </CodeSnippet>
            <Link href="https://repl.it/join/sgazowyv-codynicholson">Solution Code</Link>
            <Br/>
            <H2>BONUS</H2>
            <P>
                Add a <Span bold>isFakeCoin</Span> field to your class and always have the casino win every time when the isFakeCoin is set to true.
            </P>
            <Br />
            <CodeSnippet lines={false}>
                {`
                const myBonusCasino = new BonusCasino("HackerU Casino", true);
                myBonusCasino.playGame(5);
                > HackerU Casino wins!
                myBonusCasino.playGame(66);
                > HackerU Casino wins!
                myBonusCasino.playGame(66);
                > HackerU Casino wins!
                `}
            </CodeSnippet>
            <Link href="https://repl.it/join/glxlodir-codynicholson">Solution Code</Link>
            <Br />
            <H2>EXTRA BONUS</H2>
            <P>
                Add another function called <Span bold>rollDie(d)</Span> that console.logs what you get when you roll a die that has "d" sides.
                <Span bold>NOTE</Span>: We definitely used google to get the equation for this when we designed the curriculum. Don't be afraid to search!
            </P>
            <Br />
            <CodeSnippet lines={false}>
                {`
                const myEBCasino = new ExtraBonusCasino("HackerU Casino", false);
                myEBCasino.rollDie();
                > You rolled a 2!
                myEBCasino.rollDie();
                > You rolled a 1!
                myEBCasino.rollDie();
                > You rolled a 3!
                myEBCasino.rollDie();
                > You rolled a 6!
                myEBCasino.rollDie();
                > You rolled a 5!
                `}
            </CodeSnippet>
            <Br/>
            <Link href="https://repl.it/join/poxhdsoh-codynicholson">Solution Code</Link>
            <Br/>
            <P>
                By adding more methods and fields to this class you could simulate drawing a card from a deck, 
                and then you could hypothetically build just about any card game with just a bit more math!
            </P>
        </Section>
    </Document>
)
