from django.urls import path
from . import views

urlpatterns = [
    path('', views.html_home, name='html_home'),
    path('/html_home_video_1', views.html_home_video_1, name='html_home_video_1'),
    path('/html_home_video_2', views.html_home_video_2, name='html_home_video_2'),
    path('/html_home_video_3', views.html_home_video_3, name='html_home_video_3'),
]