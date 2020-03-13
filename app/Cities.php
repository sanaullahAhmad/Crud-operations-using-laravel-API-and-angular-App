<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cities extends Model
{
    protected $fillable = ['title',	'area',	'population', 'description', 'country_id'];
}
