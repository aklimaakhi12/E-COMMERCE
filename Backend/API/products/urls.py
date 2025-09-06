from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView

urlpatterns = [
    path('listproducts/', ProductListCreateView.as_view(), name='product-list-create'),
    path('listproducts/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
]
