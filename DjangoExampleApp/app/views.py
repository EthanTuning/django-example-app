"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
from django.template import RequestContext
from datetime import datetime
from models import Article
import json

def home(request):

    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home',
        }
    )

def about(request):

    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
        }
    )

def blog(request):

    if request.method == "POST":

        jsonData = json.loads(request.body)
        """content = jsonData['blocks']"""
        article = Article()
        article.title = jsonData['title']
        article.author = jsonData['author']
        article.date = jsonData['date']
        article.text = jsonData['']

        article.save()

        return HttpResponse("OK")

    else:

        assert isinstance(request, HttpRequest)
        return render(
            request,
            'app/blog.html',
            {
                'title':'Blog',
            }
        )