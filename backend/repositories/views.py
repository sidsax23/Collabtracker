from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
# def repository(request):
#     return render(request, 'repository.html', data)

@api_view(["GET"])
def repo_data(request):
    json_resp = {
        'heatmap_dates' : {'startDate':'2024/01/01','endDate':'2024/12/31'},
        'heatmap_data' : {'ACA':[{'date':'2024/01/01','count':10},{'date':'2024/01/02','count':10},{'date':'2024/01/03','count':10},{'date':'2024/01/04','count':10},{'date':'2024/01/05','count':10}],
                          'ACN':[{'date':'2024/02/01','count':1},{'date':'2024/01/02','count':10},{'date':'2024/01/03','count':10},{'date':'2024/01/04','count':10},{'date':'2024/01/05','count':10}],
                          'DSA':[{'date':'2024/03/01','count':20},{'date':'2024/01/02','count':10},{'date':'2024/01/03','count':10},{'date':'2024/01/04','count':10},{'date':'2024/01/05','count':10}],
                          'AOS':[{'date':'2024/04/01','count':5},{'date':'2024/01/02','count':10},{'date':'2024/01/03','count':10},{'date':'2024/01/04','count':10},{'date':'2024/01/05','count':10}],
                          }
    }
    return Response(data=json_resp)

