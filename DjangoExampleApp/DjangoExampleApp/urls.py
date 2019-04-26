"""
Definition of urls for DjangoExampleApp.
"""

from datetime import datetime
from django.conf.urls import url
import django.contrib.auth.views

import app.forms
import app.views

# Uncomment the next lines to enable the admin:
# from django.conf.urls import include
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    url(r'^$', app.views.home, name='home'),
    url(r'^about$', app.views.about, name='about'),
    url(r'^blog$', app.views.Blog.as_view(), name='blog'),
    url(r'^article/(?P<pk>\d+)$', app.views.ArticleDetailView.as_view(), name="detail")
]
