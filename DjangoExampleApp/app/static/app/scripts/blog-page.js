$(document).ready(init);

function init() {

    $('#write-new-article-btn').on('click', writeNewArticle);
    $('#save-new-article-btn').on('click', saveNewArticle);
    $('#cancel-new-article-btn').on('click', cancelNewArticle);

    const editor = new EditorJS({

        holderId: 'editor-container',
        autofocus: true

    });

}

function writeNewArticle() {

    $('#editor-section').show();
    $('#write-new-article-btn').hide();

}

function saveNewArticle() {



}

function cancelNewArticle() {

    $('#editor-section').hide();
    $('#write-new-article-btn').show();

}