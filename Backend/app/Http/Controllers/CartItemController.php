<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;

class CartItemController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $cartItems = CartItem::with('product')->get();
        return response()->json($cartItems);
    }

    // Store a newly created resource in storage
    public function store(Request $request)
    {
        $request->validate([
            'cart_id' => 'required|exists:carts,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $cartItem = CartItem::create($request->all());
        return response()->json($cartItem, 201);
    }

    // Display the specified resource
    public function show($id)
    {
        $cartItem = CartItem::with('product')->find($id);

        if (!$cartItem) {
            return response()->json(['message' => 'CartItem not found'], 404);
        }

        return response()->json($cartItem);
    }

    // Update the specified resource in storage
    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'integer|min:1',
        ]);

        $cartItem = CartItem::find($id);

        if (!$cartItem) {
            return response()->json(['message' => 'CartItem not found'], 404);
        }

        $cartItem->update($request->all());
        return response()->json(['message' => 'CartItem updated successfully']);
    }

    // Remove the specified resource from storage
    public function destroy($id)
    {
        $cartItem = CartItem::find($id);

        if (!$cartItem) {
            return response()->json(['message' => 'CartItem not found'], 404);
        }

        $cartItem->delete();
        return response()->json(['message' => 'CartItem deleted successfully']);
    }
}
