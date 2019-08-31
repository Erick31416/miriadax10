const quizForm =(msg, method, action, question, answer) => `<!-- HTML view -->
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
                margin: auto;
                text-align: center;
            }
        </style>
    </head> 
    <body>
    <div  class = 'centrado' >
        <h1>MVC: Quizzes</h1>
        <form   method="${method}"   action="${action}">
            ${msg}: <p>
            <input  type="text"  name="question" value="${question}" placeholder="Question" />
            <input  type="text"  name="answer"   value="${answer}"   placeholder="Answer" />
            <input  type="submit" value="Aceptar"/> <br>
        </form>
        </p>
        <a href="/quizzes"><button>Indice </button></a>
        </div>
    </body>
</html>`;

module.exports = {
    quizForm
}