<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convention extends Model
{
    use HasFactory;

    /**
     * La table est au singulier selon le besoin métier du projet.
     */
    protected $table = 'convention';

    /**
     * Convention annuelle unique: une seule ligne est attendue en base.
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'theme',
        'location',
        'date_start',
        'date_end',
        'description',
        'poster',
        'year',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_start' => 'date',
        'date_end' => 'date',
        'year' => 'integer',
    ];
}
