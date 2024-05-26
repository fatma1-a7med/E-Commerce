<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class PromotionController extends Controller
{
    public function index()
    {
        // Retrieve products that have promotions
        $productsWithPromotions = Product::has('promotions')->with('promotions')->get();
        return response()->json($productsWithPromotions);
    }
}
