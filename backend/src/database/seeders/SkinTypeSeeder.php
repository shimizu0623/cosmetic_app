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
        ]);
        DB::table('skin_types')->insert([
            'name' => 'INNER DRY SKIN',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'DRY SKIN',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'OILY SKIN',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'COMBINATION SKIN',
        ]);
        DB::table('skin_types')->insert([
            'name' => 'SENSITIVE SKIN',
        ]);
    }
}
