"""
Definition of models.
"""

from django.db import models
from django.utils import timezone

# Create your models here.

class Article(models.Model):
    date = models.DateTimeField(default=timezone.now)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    text = models.TextField()

    def post_article(self):
        self.save()