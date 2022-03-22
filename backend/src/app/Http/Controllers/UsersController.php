<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            User::all()
        );
    }

    public function me()
    {
        $user = User::find(1);

        return response()->json(
            // User::find(1)
            // [
            //     'id' => 1,
            //     'name' => 'Shimizu',             
            // ]
            [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'password' => $user->password,
                // 'password' => $user->password,
                'birthday_string' => $user->birthday_string(),
                'birth_date' => $user->birth_date,
                'gender_name' => $user->gender->name,
                // 'gender_name' => $user->gender()->name,
                'skin_type_name' => $user->skin_type->name,
                // 'skin_type_name' => $user->skin_type()->name,
            ]
        );
    }

    public function updateMe(Request $request)
    {
        
        //入力バリデーション
        $validator = Validator::make($request->all(),[
            // 'id' => 'required',
            'name' => 'required',
            'birth_date' => 'required',
            'email' => 'required|email',
            // 'password' => 'alpha_num',
        ]);

        //バリデーションで問題がある時はエラーを返す。
        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //バリエーションで問題がなかったらユーザを作成する。
        $user = $request->user();

        // $user->id = $user->id;
        $user->name = $request->name;
        $user->birth_date = $request->birth_date;
        $user->email = $request->email;
        
        
        if($request->password === ''){
            $user->password = $user->password;
        }else{
            $user->password = Hash::make($request->password);
        }

        // if($request->password === ""){
        //     // return $user->password = $user->password;
        //     // $user->password = Hash::make($request->password);
        //     $request->password = '1234'
        //     $user->password = Hash::make($request->password);
        // // }else{
        // //     $user->password = Hash::make($request->password);
        // }

        $user->save();

        //ユーザの作成が完了するとjsonを返す
        return response()->json($user, Response::HTTP_OK);

    }    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
