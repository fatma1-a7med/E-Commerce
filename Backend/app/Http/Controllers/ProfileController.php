<?php
namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    //
    function index(){
        $user = User::find(1);

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }

    public function update(Request $request)
    {
        $user = User::find(1);
        if ($user) {
            $user->update($request->all());
            return response()->json(['message' => 'Profile updated successfully']);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
  /*   public function userOrders()
    {
       /*  $user = User::with('orders.items')->find(1);
             
        if ($user) {
            return response()->json($user->orders);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        } 
        $orders = Order::with(['user', 'items.product'])->get();
        return response()->json($orders);
    } */
    public function userOrders($userId)
    {
        $orders = Order::where('user_id', $userId)
            ->with(['user', 'items.product'])
            ->get();
    
        if ($orders->isEmpty()) {
            return response()->json(['error' => 'No orders found for this user'], 404);
        }
    
        // Calculate total price according to quantities
        foreach ($orders as $order) {
            $totalPrice = 0;
            foreach ($order->items as $item) {
                $totalPrice += $item->product->quantity * $item->product->price;
            }
            $order->total_price = $totalPrice;
        }
    
        return response()->json($orders);
    }
public function destroy($id)
{
    // Find the order by its ID
    $order = Order::findOrFail($id);

    // Retrieve all order items associated with the order
    $orderItems = OrderItem::where('order_id', $order->id)->get();

    // Delete each order item
    foreach ($orderItems as $orderItem) {
        $orderItem->delete();
    }

    // Once all order items are deleted, delete the order itself
    $order->delete();

    // Return a response indicating success
    return response()->json(['message' => 'Order deleted successfully']);
}
}