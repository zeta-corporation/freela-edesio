from django.db import models

from django.contrib.auth.models import AbstractUser
import uuid


def upload_to(instance,filename):
    return 'images/filename'.format(filename=filename)


class User(AbstractUser):

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    status = models.CharField(max_length=30,default='n-pago')
    tel = models.TextField(max_length=30,default='8199999-9999')
    image_url = models.TextField(max_length=1200,default="")



