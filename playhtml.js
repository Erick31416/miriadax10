const play = (id, question, response) => `<!-- HTML view -->
<html>
    <head>
    <title>MVC Example</title>
    <meta charset="utf-8">
        <!-- <script type="text/javascript" src="jquery-2.1.4.min.js.js" > </script> -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript">
            $(function(){
                $('#play').on('click',function(){
                    $.ajax
                    ({
                        type:'POST',
                        url:'/quizzes/${id}/playAjax/'+$('#respuestaUser').val(),
                        success: function(isRight){
                            if (isRight === 'true'){
                                $('#divCorrecto').show(10);
                                $('#divInCorrecto').hide(10);
                            }else{
                                $('#divInCorrecto').show(10);
                                $('#divCorrecto').hide(10);
                            }
                        }
                    });
                })
            });
        </script>
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
        
            ${question}: <p>
            <input id = 'respuestaUser' type="text" name="response" value="${response}" placeholder="Answer" />
            <button id = 'play' value="Check"> clki </button>
            <div id = 'divCorrecto' style =' display : none' >Respuesta Corecta</div>
            <div id = 'divInCorrecto' style =' display : none' >Respuesta Incorecta</div>

        </p>
        <a href="/quizzes"><button>Go back</button></a>
        </div>
    </body>
</html>`;

module.exports = {
    play
}