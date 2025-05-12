from django.db import models

class Membership(models.Model):
    MEMBERSHIP_CHOICES = [
        ('monthly', 'Monthly - Ksh.20'),
        ('quarterly', 'Quarterly - Ksh.50'),
        ('annual', 'Annual - Ksh.200'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    membership_type = models.CharField(max_length=10, choices=MEMBERSHIP_CHOICES)
    message = models.TextField(blank=True, null=True)  # optional

    def __str__(self):
        return f"{self.full_name} - {self.membership_type}"
