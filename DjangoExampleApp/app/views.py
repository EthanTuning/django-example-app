"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
from django.template import RequestContext
from datetime import datetime
import json

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home',
        }
    )

def about(request):
    """Renders the about page."""
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
        content = jsonData['blocks']

        return HttpResponse("OK")

    else: 
        """Renders the blog page"""
        assert isinstance(request, HttpRequest)
        return render(
            request,
            'app/blog.html',
            {
                'title':'Blog',
            }
        )