<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = ['title',	'brand', 'price', 'description', 'city_id'];
}
