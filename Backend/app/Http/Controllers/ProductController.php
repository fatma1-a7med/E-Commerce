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
            'title' => 'required|string|max:255',
            'details' => 'required|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image'
        ]);

        // Create a new product
        $product = new Product([
            'title' => $request->title,
            'details' => $request->details,
            'price' => $request->price,
            
        ]);

        if ($request->hasFile('image')) {
            $originalFilename = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $originalFilename);
            $product->image = $originalFilename;
        } 
        $product->save();

        return response()->json($product, 201);
    }
}
?>


