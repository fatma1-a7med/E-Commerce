<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    

    
        protected $fillable = ['title', 'price', 'details','promotion_id' ,'image'];
      
  
  
     public function promotions()
    {
        return $this->hasMany(Promotion::class);
    }
     
}