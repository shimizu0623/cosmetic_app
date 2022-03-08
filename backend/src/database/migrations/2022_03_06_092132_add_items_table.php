<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('items', function (Blueprint $table) {
            $table->bigInteger('skin_trouble_id')->unsigned()->after('skin_type_id');
            $table->foreign('skin_trouble_id')->references('id')->on('skin_troubles');
            $table->dropColumn('skin_trouble') ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('items', function (Blueprint $table) {
            $table->dropForeign(['skin_trouble_id']);
            $table->dropColumn('skin_trouble_id') ;
            $table->string('skin_trouble');
        });
    }
}
