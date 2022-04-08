<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    public function toArray() 
    {
        return [
          'id' => $this->id,
          'name' => $this->name,
          'score' => $this->score,
          'safety' => $this->safety,
          'purpose' => $this->purpose,
          'cancer' => $this->cancer,
          'developmental' => $this->developmental,
          'allergies' => $this->allergies,
          'explain' => $this->explain,
        ];
    }
}
