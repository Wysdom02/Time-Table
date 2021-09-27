from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    name = models.CharField(max_length=100, null=True)
    owner = models.ForeignKey(User, related_name="students" , on_delete=models.CASCADE, null=True)


