$(document).ready(init);

function init() {

    $('#write-new-article-btn').on('click', writeNewArticle);

}

function writeNewArticle() {

    $('#editor-section').show();
    $('#write-new-article-btn').hide();

    var editor = new EditorJS({

        holderId: 'editor-container',
        autofocus: true

    });

    $('#save-new-article-btn').click(function () {
        saveNewArticle(editor);
    });

    $('#cancel-new-article-btn').click(function () {
        cancelNewArticle(editor);
    });
}

function saveNewArticle(editor) {

    editor.saver.save().then((outputData) => {

        console.log('Article data: ', outputData);

        var csrftoken = $.cookie('csrftoken');

        function csrfSafeMethod(method) {

            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));

        }

        $.ajaxSetup({
            beforeSend: function (xhr, settings) {

                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {

                    xhr.setRequestHeader("X-CSRFToken", csrftoken);

                }

            }
        });

        $.ajax({
            url: '/blog',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(outputData),
            datatype: 'text'
        });

    }).catch((error) => {

        console.log('Saving failed: ', error);

    });
    
    location.reload();

}

function cancelNewArticle(editor) {

    editor.destroy();

    $('#editor-section').hide();
    $('#write-new-article-btn').show();

    location.reload();

}