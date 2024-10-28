"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from home.views import index

from html1.views import html

from css1.views import css
from css1.views import zindex
from css1.views import zindexnavbar

from javascript1.views import javascript

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('html', html, name='html'),

    path('css', css, name='css'),
    path('css/z-index', zindex, name='z-index'),
    path('css/z-index/z-index-navbar', zindexnavbar, name='z-index-navbar'),

    path('javascript1', javascript, name='javascript')


]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
