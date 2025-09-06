from rest_framework import generics, permissions
from .models import Product
from .serializers import ProductSerializer

# List all products, or create new product
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]  # Change to [permissions.IsAuthenticated] if needed

# Retrieve, update, or delete a specific product
class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]  # Change as needed
