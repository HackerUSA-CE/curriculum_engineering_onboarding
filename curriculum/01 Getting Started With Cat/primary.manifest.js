import { course, module, lesson, pptx, html } from 'cat/lib/course-manifest-dsl'

export const modules = [
    module('~/01. Getting Started With Cat', [
        lesson('~/Lesson 1', [
            pptx('~/Slides.js'),
            html('~/Lesson Companion.js'),
            html('~/Activity-Code-Review.js'),
        ]),
    ])
]

export default course(5, "~/Onboarding Tutorial", { title: "JavaScript & Front-End Web Development" }, modules)
