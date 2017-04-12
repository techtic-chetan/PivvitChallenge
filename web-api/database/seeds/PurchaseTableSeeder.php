<?php

use Illuminate\Database\Seeder;
use App\Purchase;
class PurchaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [];
        $faker = Faker\Factory::create();
        foreach (range(1,30) as $index) {
           $data[] = [
               'customer_name' => $faker->name,
               'offering_id' => $faker->numberBetween(1,10),
               'quantity' =>$faker->numberBetween(1,10),
               'created_at' => date('Y-m-d H:i:s'),
               'updated_at' => date('Y-m-d H:i:s')
             ];
        }
        Purchase::insert($data);
    }
}


