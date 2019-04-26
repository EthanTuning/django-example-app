$(document).ready(init);

function init() {

    $('#write-new-article-btn').on('click', writeNewArticle);

}

function writeNewArticle() {

    $('#editor-section').show();
    $('#write-new-article-btn').hide();

    var editor = new EditorJS({

        holderId: 'editor-container',
        autofocus: false,
        tools: {
            header: {
                class: Header,
                inlineToolbar: true,
                config: {
                    placeholder: 'Header'
                },
                shortcut: 'CMD+SHIFT+H'
            },
            list: {
                class: List,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+L'
            },
            checklist: {
                class: Checklist,
                inlineToolbar: true,
            },
            quote: {
                class: Quote,
                inlineToolbar: true,
                config: {
                    quotePlaceholder: 'Enter a quote',
                    captionPlaceholder: 'Quote\'s author',
                },
                shortcut: 'CMD+SHIFT+O'
            },
            warning: Warning,
            marker: {
                class:  Marker,
                shortcut: 'CMD+SHIFT+M'
            },
            code: {
                class:  CodeTool,
                shortcut: 'CMD+SHIFT+C'
            },
            delimiter: Delimiter,
            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+C'
            },
            linkTool: LinkTool,
            embed: Embed
        },
        data: {
            blocks: [
                {
                    type: 'header'
                }
            ]
        }

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
            data: JSON.stringify({
                title: $('#title-input').val(),
                author: $('#author-input').val(),
                date: $('#date-input').val(),
                post: JSON.stringify(outputData)
            }),
            datatype: 'json'

        });

    }).catch((error) => {

        console.log('Saving failed: ', error);

    });
    
    location.reload(true);

}

function cancelNewArticle(editor) {

    editor.destroy();

    $('#editor-section').hide();
    $('#write-new-article-btn').show();

    location.reload();

}