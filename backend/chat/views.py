from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Channel
from .serializers import ChannelSerializer
from rest_framework import viewsets
# Create your views here.


@api_view(['GET', 'POST'])
def ChannelList(request):
    if request.method == 'GET':
        channels = Channel.objects.all()
        serializer = ChannelSerializer(
            channels, many=True, context={'request': request})
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ChannelSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data)


@api_view('GET', 'PUT', 'DELETE')
def ChannelDetail(request, id):
    channel = get_object_or_404(Channel, pk=id)
    if request.method == 'GET':
        serializer = ChannelSerializer(channel)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ChannelSerializer(channel, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        channel.delete()
        return Response("Channel deleted", status.HTTP_204_NO_CONTENT)

# class ChannelViewSet(viewsets.ModelViewSet):
#     queryset = Channel.objects.all()
#     serializer_class = ChannelSerializer
