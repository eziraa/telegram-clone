from django.urls import path
from . import views
urlpatterns = [
    path('channels/', views.ChannelList),
    path('channels/<int:id>', views.ChannelDetail)
]
