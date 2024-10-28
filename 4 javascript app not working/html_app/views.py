from django.shortcuts import render

# Create your views here.
def html_home(request):
    return render(request, 'html_app/html_home.html')