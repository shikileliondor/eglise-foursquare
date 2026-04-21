<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('convention', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('theme');
            $table->string('location');
            $table->date('date_start');
            $table->date('date_end');
            $table->text('description');
            $table->string('poster')->nullable();
            $table->integer('year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('convention');
    }
};
