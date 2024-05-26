from django.urls import path
from . import views

urlpatterns = [
    path('repo_data', views.repo_data, name='repo_data')
]