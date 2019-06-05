const index = (quizzes) => `<!-- HTML view -->

<html>
    <head><title>MVC Example</title><meta charset="utf-8">
    <style>
        form {
            margin-block-end: 0;
        }
        body {
            background: powderblue;
        }
        .centrado {
            margin: auto;
            text-align: center;
        }
    </style>
    </head> 
    <body> 
    <table class = 'centrado' >
        <caption><h1>MVC: Quizzes</h1></caption>`

+ quizzes.reduce(
    (ac, quiz) => ac += 
`       <tr>
            <td><a href="/quizzes/${quiz.id}/play">${quiz.question}</a></td>
            <td><a href="/quizzes/${quiz.id}/edit"><button>Edit</button></a></td>
            <td><form method="post" action="/quizzes/${quiz.id}?_method=DELETE">
            <input type="submit" onclick="return confirm('confirma si borrar ${quiz.question}?')" value="Delete"/>
            </form></td>
            <br>\n
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