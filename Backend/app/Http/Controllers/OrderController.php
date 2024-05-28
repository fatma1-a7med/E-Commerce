<?php

namespace App\Http\Controllers;

use App\Enums\Status;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
// View all orders
 // View all orders
 public function index()
 {
     // Load orders with related user and order items including products
     $orders = Order::with(['user', 'items.product'])->get();
     return response()->json($orders);
 }


// View a specific order
public function show(Order $order)
{
    $order->load('User', 'items.product');
    return response()->json($order);
}

 // Modify order state
 public function update(Request $request, Order $order)
 {
     $request->validate([
         'state' => 'required|in:Pending,Accepted,Rejected',
     ]);

     $order->state = $request->input('state');
     $order->save();

     return response()->json(['success' => 'Order state updated successfully.']);
 }
}

