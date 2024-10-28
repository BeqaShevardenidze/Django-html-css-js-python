from django.urls import path
from . import views

urlpatterns = [
    path('', views.javascript_home, name='javascript_home'),
]