<?php
namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    function index(Request $request){
        $user = JWTAuth::parseToken()->authenticate();
            
        // Get the user ID from the token
       

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            $user->update($request->all());
            return response()->json(['message' => 'Profile updated successfully']);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
 
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
    
    $order = Order::findOrFail($id);
    $orderItems = OrderItem::where('order_id', $order->id)->get();
    foreach ($orderItems as $orderItem) {
        $orderItem->delete();
    }
    $order->delete();
    return response()->json(['message' => 'Order deleted successfully']);
}
}
