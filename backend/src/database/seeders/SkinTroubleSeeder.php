<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkinTroubleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('skin_troubles')->insert([
            'name' => '乾燥',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'キメの乱れ',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'ハリ・弾力',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'テカリ',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'しわ',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'クマ',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'くすみ',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'シミ',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => '毛穴',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => 'にきび',
        ]);
        DB::table('skin_troubles')->insert([
            'name' => '敏感肌',
        ]);
    }
}
