from django.shortcuts import render

# Create your views here.
def html_home(request):
    return render(request, 'html_app/html_home.html')

def html_home_video_1(request):
    return render(request, 'html_app/html_home_video_1.html')

def html_home_video_2(request):
    return render(request, 'html_app/html_home_video_2.html')