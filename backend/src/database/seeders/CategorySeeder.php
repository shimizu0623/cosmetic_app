<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'メイク落とし',
        ]);
        DB::table('categories')->insert([
            'name' => '洗顔',
        ]);
        DB::table('categories')->insert([
            'name' => '化粧水',
        ]);
        DB::table('categories')->insert([
            'name' => '美容液',
        ]);
        DB::table('categories')->insert([
            'name' => '乳液',
        ]);
        DB::table('categories')->insert([
            'name' => 'クリーム',
        ]);
        DB::table('categories')->insert([
            'name' => 'フェイスパック',
        ]);
        DB::table('categories')->insert([
            'name' => 'その他',
        ]);
    }
}