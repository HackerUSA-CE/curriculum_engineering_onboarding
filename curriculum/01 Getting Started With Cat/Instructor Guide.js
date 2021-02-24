import { Document, H1, H2, H3, Ul, Li, P, Image, Br, Section, Span } from 'lib/components'
import { LESSON1_NAME, LESSON2_NAME, ACTIVITY1_NAME } from "./_constants"
import { CourseIndex } from 'templates'

import path from 'path'
export default () => (
    <Document>
        <Image path={path.resolve(__dirname, '../../../assets/hackeru-logo.jpg')} />
        <Br /><Br />
        <H1>Full Stack Development Program</H1>
        <H3>FSD05 Object-Oriented Programming with JS</H3>
        <Br/>
        <Section>
            <H2>Course Path</H2>
            <CourseIndex
                course="FSWD05 JavaScript & Front-End Web Development"
                acronym="JS"
                currentModule="Object Oriented Programming with JS"
            />
        </Section>
        <H2>Lesson Objectives</H2>
        <Ul>
            <Li>Distinguish between the OOP paradigm and procedural programming paradigms</Li>
            <Li>Describe basic OOP concepts including: classes, objects, field variables, encapsulation, and instantiation</Li>
            <Li>Utilize methods to add behavior to our classes</Li>
            <Li>Using 'this' to reference the unique instance of the class you're using</Li>
        </Ul>
        <Br/>
        <H2>Context for Subject Material</H2>
        <Section>
            <P>
                They should only know about data types, control flow, functions, and async at this point.
                It's very important that they are able to decide when to use procedural or object-oriented programming. 
                I explain it as: Functions add behavior that we can attach data to, while Classes hold data that we can attach behavior to by adding methods.
            </P>
            <Br/>
            <P>
                Take extra care in explaining the terms "encapsulate" and "instantiate" in the context of OOP. 
                We encapsulate so that we can write code once and use it many times. 
                Instantiation is the process of creating an instance of a class.
            </P>
            <Br/>
            <P>
                It's very easy to conflate the terms "object" and "class". Repeat the difference. 
                This will make explaining that 'this' refers to the unique instance of a class easier to understand.
            </P>
            <Br/>
            <P>
                The difference between methods and functions are also often conflated. 
                Use repetition to reiterate that a method belongs to a class, while a function does not. 
                They can both take input, return values, and call other functions/methods within their bodies. 
            </P>
        </Section>
        <H2>Topic Prioritization</H2>
        <P>The goal is to familiarize learners with object-oriented concepts and to enable them to create basic classes. This includes:</P>
        <Ul>
            <Li>Accurately describing OOP terms including: Class, Object, Method, Encapsulation, Instantiation</Li>
            <Li>Creating a class with fields, methods, and a constructor</Li>
            <Li>Describing the difference between a Method and a Function</Li>
            <Li>Utilize "this" keyword to reference the instance of the class in methods</Li>
            <Li>Creating methods that take input and return values</Li>
        </Ul>
        <Br/>
        <H2>Strategic Presentation Guide & Student Context</H2>
        <Section>
            <P><Span bold>Take each slide slower than you think you need to.</Span> Each slide is designed to be a launch point for a few minutes of lecture. Avoid the temptation to just read the slide's text aloud and instead prepare a few paragraphs of text related to the topic presented on the slide. All the information needed can't fit on the slides - we're providing visual cues and relying on your expertise to fill in the gaps! Additionally, it can't be assumed at this point that learners know any HTML beyond that which was introduced in the introductory course. Extra context you can provide from experience about using HTML on the job will be enormously helpful to learners.</P>
            <P><Span bold>Remember that learners have a companion guide to your lecture slides!</Span> On top of absorbing information for possibly the first time, learners have a guide with exercises and notes to follow along with during your lecture. This is designed to reinforce your teaching through repetition and active learning.</P>
            <P><Span bold>Review your activities.</Span> As always, we recommend spending a small amount of time reviewing the solutions to each lab or activity and answering any questions that came up while learners were practicing their new skills.</P>
        </Section>
        <H2>Lesson Overview & Schedule</H2>
        <Section>
            <H3>Lesson 1: {LESSON1_NAME}</H3>
            <P><Span bold>1 hour total</Span></P>
            <P>This lesson covers basic Object-Oriented concepts and examples.</P>
            <Ul>
                <Li><Span bold>Slides:</Span> {LESSON1_NAME} (25-30 minutes)</Li>
                <Li><Span bold>Activity:</Span> {ACTIVITY1_NAME} (30-35 minutes)</Li>
                <Li><Span bold>Lesson Companion Guide:</Span> This is an interactive multiple choice quiz to be filled out as the lesson progresses</Li>
            </Ul>
        </Section>
    </Document>
)
