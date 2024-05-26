from django.shortcuts import render

# Create your views here.
def repository(request):
    return render(request, 'repository.html', data)
