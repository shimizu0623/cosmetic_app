<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->insert([
            'name' => 'FANCL',
        ]);
        DB::table('brands')->insert([
            'name' => 'CLINIQUE',
        ]);
        DB::table('brands')->insert([
            'name' => 'SHISEIDO',
        ]);
    }
}
