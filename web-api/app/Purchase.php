<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $table = 'purchases';
	protected $fillable = ['customer_name', 'offering_id', 'quantity'];

	function Offers(){
		return $this->hasMany(Offering::class, 'id', 'offering_id');
	}
}
