<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        //入力バリデーション
        $validator = Validator::make($request->all(),[
            'gender_id' => 'required',
            'name' => 'required',
            'birth_date' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|alpha_num',
            // 'skin_type_id' => 'required',
        ]);

        //バリデーションで問題があった際にはエラーを返す。
        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //バリエーションで問題がなかった場合にはユーザを作成する。
        $user = User::create([
            'gender_id' => $request->gender_id,
            'name' => $request->name,
            'birth_date' => $request->birth_date,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        //ユーザの作成が完了するとjsonを返す
        return response()->json($user, Response::HTTP_OK);
    }
}
