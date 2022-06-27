from .models import Image
from os import stat
from django.shortcuts import render
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.conf import settings
import time

from .serializers import ImageSerializer

# Create your views here.


class ImageUploadView(APIView):
    parser_class = (FileUploadParser, )

    def post(self, request, *args, **kwargs):
        image_serializer = ImageSerializer(data=request.data)
        print(request.data)
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_201_CREATED)
        return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageLoadView(APIView):
    def get(self, request, *args, **kwargs):
        last_image = {
            'image': str(Image.objects.latest('created_at'))
        }
        return Response(last_image, status=status.HTTP_200_OK)

