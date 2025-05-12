from django.shortcuts import render, redirect
from .models import Membership

def home(request):
    if request.method == 'POST':
        name = request.POST.get('fname')
        email = request.POST.get('email')
        membership = request.POST.get('membership')
        message = request.POST.get('message')

        Membership.objects.create(
            full_name=name,
            email=email,
            membership_type=membership,
            message=message
        )

        return redirect('home')

    return render(request, 'myapp/home.html')

def about(request):
    return render(request, 'myapp/about.html')

