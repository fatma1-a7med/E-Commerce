<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'image', 'price', 'details', 'quantity', 'created_at', 'updated_at'];

    public function promotions()
    {
        return $this->hasMany(Promotion::class);
    }
}
