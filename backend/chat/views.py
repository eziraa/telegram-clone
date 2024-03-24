from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Channel
from .serializers import ChannelSerializer

# Create your views here.


@api_view()
def ChannelList(request):
    channels = Channel.objects.all()
    serializer = ChannelSerializer(channels, many=True)
    return Response(serializer.data)


@api_view()
def ChannelDetail(request, id):
    channel = get_object_or_404(Channel, pk=id)
    serializer = ChannelSerializer(channel)
    return Response(serializer.data)
