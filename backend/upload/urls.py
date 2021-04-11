from django.urls import path
from .views import ImageUploadView, ImageLoadView

urlpatterns = [
    path('', ImageUploadView.as_view()),
    path('load/', ImageLoadView.as_view())
]