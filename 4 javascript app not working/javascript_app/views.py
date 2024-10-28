from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def javascript_home(request):
    return render(request, 'javascript_app/test.html')
    # return HttpResponse("გვერდი")