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
 public function index()
    {
        $orders = Order::with(['user', 'items.product'])->get();
        return response()->json($orders);
    }

    public function show(Order $order)
    {
        $order->load('user', 'items.product');
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

