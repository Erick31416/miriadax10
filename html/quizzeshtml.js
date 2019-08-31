const index = (quizzes) => `<!-- HTML view -->

<html>
    <head>
        <title>MVC Example</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <style>
            form {
                margin-block-end: 0;
            }
            body {
                background: powderblue;
            }
            .centrado {
                margin-top: 10vh;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
            }
        </style>
    </head>
    <body>
    <table class = 'centrado' >
    <!-- 
    <caption><h1>MVC: Quizzess</h1></caption>
    -->
    <tr>
        <td>
            <h1>MVC: Quizzess</h1>
        </td>
    </tr>
    `
+ quizzes.reduce(
    (ac, quiz) => ac += 
`       <tr>
            <td><a href="/quizzes/${quiz.id}/play">${quiz.question}</a></td>
            <td><a href="/quizzes/${quiz.id}/edit"><button>Edit</button></a></td>
            <td><form method="post" action="/quizzes/${quiz.id}?_method=DELETE">
            <input type="submit" onclick="return confirm('confirma si borrar ${quiz.question}?')" value="Delete"/>
            </form></td>
        </tr>`,""
    )
+ `
        <tr>
            <td>
            <div class = 'centrado' ><a href="/quizzes/new"><button>New Quiz</button></a></div>
            </td>
        </tr>
    </table>
    
    </body>
</html>`;

module.exports = {
    index
}