from django.db import models
from ckeditor.fields import RichTextField

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField()

    def __str__(self):
        return self.title   
