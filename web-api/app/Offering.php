<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offering extends Model
{
    protected $table = 'offering';
	protected $fillable = ['title', 'price'];

	function Purchase(){
		return $this->hasOne(Purchase::class, 'offering_id', 'id');
	}
}
