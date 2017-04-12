<?php

use Illuminate\Database\Seeder;
use App\Offering;


class OfferingsTableSeeder extends Seeder
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
        foreach (range(1,10) as $index) {
           $data[] = [
               'title' => $faker->sentence($nbWords = 3, $variableNbWords = true),
               'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 10, $max = 130),
               'created_at' => date('Y-m-d H:i:s'),
               'updated_at' => date('Y-m-d H:i:s')
             ];
        }
        Offering::insert($data);         
    }
}


