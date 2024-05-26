<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'Title' => 'required|string|max:255',
            'Details' => 'required|string',
            'Price' => 'required|numeric',
            'Image' => 'nullable|string' 
        ]);

        // Create a new product
        $product = new Product([
            'Title' => $request->Title,
            'Details' => $request->Details,
            'Price' => $request->Price,
            'Image' => $request->Image,
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $product->Image = $imagePath; 
        }

        $product->save();

        
        return response()->json($product, 201);
    }
}
?>

