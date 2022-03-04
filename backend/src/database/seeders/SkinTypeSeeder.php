<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkinTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('skin_types')->insert([
            'name' => '乾燥肌',
        ]);
        DB::table('skin_types')->insert([
            'name' => '脂性肌',
        ]);
        DB::table('skin_types')->insert([
            'name' => '混合肌',
        ]);
        DB::table('skin_types')->insert([
            'name' => '敏感肌',
        ]);
    }
}
