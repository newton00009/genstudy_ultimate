const qBank = [{
        question: "Flutter developed by?",
        answers: ["Oracle", "Facebook", "Google", "IBM"],
        correct: "Google",
        questionId: "099099"
    },
    {
        question: "Flutter is not a language; it is an SDK.",
        answers: ["True", "False", "Can be true or false", "Can not say"],
        correct: "True",
        questionId: "093909"
    },
    {
        question: "The first alpha version of Flutter was released in ?",
        answers: ["2016", "2017", "2018", "2019"],
        correct: "2017",
        questionId: "009039"
    },
    {
        question: "Flutter is mainly optimized for 2D mobile apps that can run on?",
        answers: ["Android", "IOS", "Both", "None"],
        correct: "Both",
        questionId: "090089"
    },
    {
        question: "It is very necessary to learn Dart language for building Flutter application?",
        answers: ["Yes", "No", "Can be yes or no", "Can not say"],
        correct: "Yes",
        questionId: "01010101"
    },
    {
        question: "A widget that allows us to refresh the screen is called a ____________.",
        answers: ["Stateless", "Stateful", "Satebuild", "All"],
        correct: "Stateful",
        questionId: "092299"
    },
    {
        question: "The examples of the Stateless widget are?",
        answers: ["Text", "Row", "Column", "All"],
        correct: "All",
        questionId: "099099"
    },
    {
        question: "pubspec.yaml file does not contain?",
        answers: ["Project general settings", "Project dependencies", "Project language", "Project assets"],
        correct: "Project language",
        questionId: "222099"
    },
    {
        question: "Which of the following are the advantages of Flutter?",
        answers: ["Cross-platform Development", "Faster Development", "Minimal code", "All"],
        correct: "All",
        questionId: "2222099"
    },
    {
        question: "When you build the Flutter app the first time, does it will take a longer time?",
        answers: ["Yes", "No", "Can be yes or no", "Can not say"],
        correct: "Yes",
        questionId: "09922099"
    },
    {
        question: "Which of the following used to develop the native hybrid app from a single codebase?",
        answers: ["React Native", "Flutter", "Both Flutter & React Native", "Keras"],
        correct: "Both Flutter & React Native",
        questionId: "222292099"
    },
    {
        question: "Which of the following works with a small r key on the terminal or commands prompt?",
        answers: ["Hot Restart", "Hot Reload", "Cold Reload", "Cold Restart"],
        correct: "Hot Reload",
        questionId: "0998999099"
    },
    {
        question: "Which of the following takes more time to compile and update the app?",
        answers: ["Hot Restart", "Hot Reload", "Cold Reload", "Depends on Compiler"],
        correct: "Hot Restart",
        questionId: "099099"
    },
    {
        question: "Which function is responsible for starting the program?",
        answers: ["runApp()", "run()", "flutter()", "main()"],
        correct: "main()",
        questionId: "099099"
    },
    {
        question: "Release mode allows us to optimize the codes and generate them without any debug data in a fully optimized form",
        answers: ["True", "False", "Can be true or false", "Can not say"],
        correct: "True",
        questionId: "099099"
    },
    {
        question: "Which of the following tests a single widget?",
        answers: ["Integration Tests", "Unit Tests", "Interactive Tests", "Widget Tests"],
        correct: "Widget Tests",
        questionId: "09459099"
    },
    {
        question: "WidgetsApp is used for basic navigation",
        answers: ["Yes", "No", "Can be yes or no", "Can not say"],
        correct: "Yes",
        questionId: "0912219099"
    },

];

// n = 5 to export 5 question
export default (n = 5) =>
Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));