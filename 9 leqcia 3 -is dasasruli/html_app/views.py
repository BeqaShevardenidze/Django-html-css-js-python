from django.shortcuts import render
import os
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def html_home(request):
    return render(request, 'html_app/html_home.html')

def html_home_video_1(request):
    return render(request, 'html_app/html_home_video_1.html')

def html_home_video_2(request):
    return render(request, 'html_app/html_home_video_2.html')

def html_home_video_3(request):
    return render(request, 'html_app/html_home_video_3.html')