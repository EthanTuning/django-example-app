"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
from django.template import RequestContext
from django.views import generic
from datetime import datetime
from app.models import Article
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

class Blog(generic.ListView):

    model = Article
    template_name = 'app/blog.html'

    def get_queryset(self):
        return Article.objects.all()

    def post(self, request):

        jsonData = json.loads(request.body)
        article = Article()
        article.title = jsonData['title']
        article.author = jsonData['author']
        article.date = jsonData['date']
        article.articleJson = jsonData['post']
        article.save()

        return HttpResponse("OK")