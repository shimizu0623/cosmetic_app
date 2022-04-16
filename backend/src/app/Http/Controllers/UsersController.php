<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
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

    public function me(Request $request)
    {
        $user = $request->user();

        return response()->json($user->toArray());
    }

    public function updateMe(Request $request)
    {
        
        //入力バリデーション
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'birth_date' => 'required',
            'email' => 'required|email',
            'skin_type_id' => 'required',
            // 'password' => 'alpha_num',
        ]);

        //バリデーションで問題がある時はエラーを返す。
        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //バリエーションで問題がなかったらユーザを作成する。
        $user = $request->user();

        // Log::debug('before ' . $user->password);

        $user->name = $request->name;
        $user->birth_date = $request->birth_date;
        $user->email = $request->email;
        $user->skin_type_id = $request->skin_type_id;
        
        
        if(!empty($request->password) && $request->password !== 0){
            $user->password = Hash::make($request->password);
        }

        $user->save();

        // Log::debug('after ' . $user->password);

        //ユーザの作成が完了するとjsonを返す
        return response()->json($user->toArray());

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
        $user = User::find($id);

        
        return response()->json(
            [
                'id' => $user->id,
                'name' => $user->name,
                'gender' => $user->gender->name,
                'gender' => $user->email,
                'barth_date' => $user->barth_date,
                'skin_type' => $user->skin_type->name,
                'items' => $user->unmatchedItems->map(function($unmatchedItem) { return $unmatchedItem->toArray(); }),
            ]
        );
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
