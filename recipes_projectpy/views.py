from recipes_projectpy.models import DetailsModel
from recipes_projectpy.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from recipes_projectpy import serialize


class DetailsTable(APIView):
    def get(self, request):
        detailsObj = DetailsModel.objects.all()
        dlSerializerObj = DetailsSerializer(detailsObj, many=True)
        return Response(dlSerializerObj.data)

    def post(self, request):
        serializeObj = DetailsSerializer(data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)

    def put(self, request, pk):
        try:
            detailObj = DetailsModel.objects.get(pk=pk)
        except:
            return Response("Not Found in Database")

        serializeObj = DetailsSerializer(detailObj, data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)

    def delete(self, request, pk):
        try:
            detailObj = DetailsModel.objects.get(pk=pk)
        except:
            return Response("Not Found in Database")

        detailObj.delete()
        return Response(200)
