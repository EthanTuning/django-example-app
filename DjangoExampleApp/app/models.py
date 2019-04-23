"""
Definition of models.
"""

from django.db import models
from django.utils import timezone

# Create your models here.

class Article(models.Model):

    author = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    date = models.DateTimeField(default=timezone.now)
    text = models.TextField()