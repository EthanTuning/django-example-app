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
    url(r'^blog$', app.views.blog, name='blog'),
]
