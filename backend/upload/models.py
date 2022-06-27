from django.db import models
from django.conf import settings


# UPLOAD_TO = settings.MEDIA_URL
# print(UPLOAD_TO)

# Create your models here.


class Image(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.name
