<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller{


    public function getContacts()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }
    

    public function createContact(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'phone_number' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $contact = Contact::create($validatedData);
        return response()->json($contact, 201);
    }

    // public function show($id)
    // {
    //     $contact = Contact::findOrFail($id);
    //     return response()->json($contact);
    // }

    // public function update(Request $request, $id)
    // {
    //     $validatedData = $request->validate([
    //         'name' => 'required|string',
    //         'phone_number' => 'required|string',
    //         'latitude' => 'required|numeric',
    //         'longitude' => 'required|numeric',
    //     ]);

    //     $contact = Contact::findOrFail($id);
    //     $contact->update($validatedData);

    //     return response()->json($contact);
    // }

    // public function destroy($id)
    // {
    //     $contact = Contact::findOrFail($id);
    //     $contact->delete();

    //     return response()->json(null, 204);
    // }

}