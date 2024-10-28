from django.shortcuts import render

# Create your views here.
def javascript(request):
    return render(request, 'javascript1/javascript.html')

def jsLesson1(request):
    return render(request, 'javascript1/js-lesson1.html')

def jsLesson2(request):
    return render(request, 'javascript1/js-lesson2.html')

def calculator(request):
    return render(request, 'javascript1/calculator.html')

def slider(request):
    return render(request, 'javascript1/slider.html')

def gptslider(request):
    return render(request, 'javascript1/gpt-slider.html')