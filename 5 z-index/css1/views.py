from django.shortcuts import render

# Create your views here.

def css(request):
    return render(request, 'css1/css.html')

def zindex(request):
    return render(request, 'css1/z-index.html')

def zindexnavbar(request):
    return render(request, 'css1/z-index-navbar.html')