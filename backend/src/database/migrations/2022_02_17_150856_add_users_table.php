<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->date('birth_date')->after('remember_token') ;
            // $table->foreignId('skin_type_id')->constrained('skin_types')->after('birth_date') ;
            $table->bigInteger('skin_type_id')->unsigned()->after('birth_date');
            $table->foreign('skin_type_id')->references('id')->on('skin_types') ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('birth_date') ;
            $table->dropForeign(['skin_type_id']);
            $table->dropColumn('skin_type_id') ;
        });
    }
}
