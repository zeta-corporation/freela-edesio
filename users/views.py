from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,UpdateAPIView
from .models import User
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status

class UserView(CreateAPIView,ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginView(APIView):
    def post(self,request):
        
        try:
            user = User.objects.filter(username=request.data['username'])[0]
            if user.check_password(request.data['password']):
                return Response({'username':user.username,'email':user.email,'tel':user.tel,'status':user.status,'is_superuser':user.is_superuser,'id':user.id},status.HTTP_200_OK)
            return Response({'message':'User ou senha inválidos'},status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'message':'User ou senha inválidos'},status.HTTP_400_BAD_REQUEST)
        

class DeletePatchGetIdView(DestroyAPIView,UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self,request,pk):
        user = User.objects.filter(id=pk)[0]
        dict_returned = {
            'id':user.id,
            'is_superuser':user.is_superuser,
            'username':user.username,
            'email':user.email,
            'tel':user.tel,
            'status':user.status,
            
        }



        return Response(dict_returned,status.HTTP_200_OK)


class PayView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

        


    