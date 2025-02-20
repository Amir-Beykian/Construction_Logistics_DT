from django.contrib.auth.models import AbstractUser
from django.db import models

# User Roles
USER_ROLES = (
    ('project', 'Project User'),
    ('supplier', 'Supplier User'),
    ('bouwhub', 'Bouwhub User'),
    ('admin', 'Admin User'),
)

class CustomUser(AbstractUser):
    role = models.CharField(max_length=20, choices=USER_ROLES, default='project')

    def __str__(self):
        return self.username
