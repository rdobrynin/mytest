<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $email = $request->input('email');
        // @todo Complete functionality
        $data = array();
        if (empty($email)) {
            $data['email'] = 'Email is required.';
            $data['success'] = false;
        }
        else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $data['email'] = 'Invalid email format';
            $data['success'] = false;
        }
         else {
            $data['success'] = true;
             $data['email'] = 'Subscription successfull.';
        }
        return response()->json($data);
    }
}
