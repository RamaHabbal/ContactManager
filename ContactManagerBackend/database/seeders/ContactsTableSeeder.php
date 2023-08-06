<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Contact;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::create([
            'name' => 'John Doe',
            'phone_number' => '123-456-7890',
            'latitude' => 34.0522,
            'longitude' => -118.2437,
        ]);
    }
}
