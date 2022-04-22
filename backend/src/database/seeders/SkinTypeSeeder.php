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
            'name' => 'NORMAL SKIN',
            'detail' => '普通肌：水分と皮脂のバランスが良い状態の肌',
        ]);
        // DB::table('skin_types')->insert([
        //     'name' => 'INNER DRY SKIN',
        //     'detail' => 'インナードライ：DRY SKINよりも乾燥が進み、過剰に皮脂が分泌されている状態の肌',
        // ]);
        DB::table('skin_types')->insert([
            'name' => 'DRY SKIN',
            'detail' => '乾燥肌：水分も皮脂も少ない状態の肌',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'OILY SKIN',
            'detail' => '脂性肌：水分・皮脂ともに多い状態の肌',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'COMBINATION SKIN',
            'detail' => '混合肌：Tゾーンなど部分的に皮脂が多く、他の部分は乾燥しがちな肌',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'SENSITIVE SKIN',
            'detail' => '敏感肌：敏感な状態の肌',
        ]);
    }
}
