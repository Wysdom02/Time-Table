from students.models import Student
from rest_framework import viewsets, permissions
from .serializer import StudentSerializer

# Student Viewset
class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = StudentSerializer
    def get_queryset(self):
        return self.request.user.students.all()

    def perform_create(self, serialzer):
        serialzer.save(owner=self.request.user)    