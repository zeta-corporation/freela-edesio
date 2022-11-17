from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path('users/',views.UserView.as_view()),
    path('login/',views.LoginView.as_view()),
    path('users/<pk>/',views.DeletePatchGetIdView.as_view()),
    path('users/<pk>/pay/',views.PayView.as_view())

]