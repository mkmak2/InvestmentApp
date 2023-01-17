from django.db import models

# Create your models here.

class UserData(models.Model):
 username = models.CharField(max_length=255, unique=True, primary_key=True)
 password = models.CharField(max_length=255)
 email = models.EmailField(max_length=255,blank=True)
 is_logged = models.BooleanField(default=False)

 def __str__(self):
    return self.username

 

    
    
 

