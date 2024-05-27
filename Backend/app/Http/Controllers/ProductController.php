<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{ 
    public function index(){

    $products = Product::all();
    if ($products->isEmpty()) {
        return response()->json(['message' => 'No products Yet'], 404);
    }
      return $products;
    }

    public function show($id){
        $product = Product::find($id);
    
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        return $product;
    }
    
    public function store(StoreProductRequest $request)
    {
        $imageName = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move("images/products",$imageName);
        }
    
        $product = Product::create([
            'title' => $request->input('title'),
            'details' => $request->input('details'),
            'price' => $request->input('price'),
            'image' => $imageName,
        ]);
        return response()->json(['message' => 'Product added', 'data' => $product], 200);
    }

    public function update(UpdateProductRequest $request, $id){
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['error' => 'Product not found'], 404);
    }

    $imageName = $product->image;
    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        if ($product->image && Storage::exists('images/products/' . $product->image)) {
            Storage::delete('images/products/' . $product->image);
        }
        $image->move("images/products", $imageName);
    }
    $product->update([
        'title' => $request->title,
        'details' => $request->details,
        'price' => $request->price,
        'image' => $imageName,
    ]);
    return response()->json(['message' => 'Product updated', 'data' => $product], 200);
    }

    public function destroy($id){

    $product = Product::find($id);
    if (!$product) {
        return response()->json(['error' => 'Product not found'], 404);
    }
    $product->delete();
    if ($product->image && Storage::exists('images/products/' . $product->image)) {
        Storage::delete('images/products/' . $product->image);
    }
       return response()->json(['message' => 'Product deleted successfully'], 200);
            $originalFilename = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $originalFilename);
            $product->image = $originalFilename;
        }

        $product->save();

        return response()->json($product, 201);
    }


    public function search($name){
    $products = Product::where('title', 'like', '%' . $name . '%')->get();

    if ($products->isEmpty()) {
        return response()->json(['message' => 'No products found for the given search term'], 404);
    }
      return $products;
    }
}