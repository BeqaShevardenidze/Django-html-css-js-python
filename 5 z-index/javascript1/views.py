from django.shortcuts import render

# Create your views here.
def javascript(request):
    return render(request, 'javascript1/javascript.html')