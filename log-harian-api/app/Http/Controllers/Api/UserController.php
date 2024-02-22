<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function register(Request $request){
        $validate = Validator::make($request->all(), [
            "name"      => "required",
            "email"     => "required|email|unique:users",
            "password"  => "required|confirmed"
        ]);

        if($validate->fails()){
            return response()->json([
                "status"    =>  false,
                "message"   =>  $validate->errors()
            ], 419);
        }

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        return response()->json([
            "status"    => true,
            "message"   => "Akun berhasil dibuat",
            "data"      => $user
        ]);
    }

    public function login(Request $request){
        $validate = Validator::make($request->all(),[
            "email"     => "required|email",
            "password"  => "required"
        ]);

        if($validate->fails()){
            return response()->json([
                "status"    =>  false,
                "message"   =>  $validate->errors()
            ], 419);
        }

        $token = JWTAuth::attempt([
            "email"     => $request->email,
            "password"  => $request->password
        ]);

        if(!empty($token)){
            return response()->json([
                "status" => true,
                "message" => "Anda berhasil login",
                "token" => $token,
                "data"  =>  auth()->user()
            ], 200);
        }

        return response()->json([
            "status" => false,
            "message" => "Anda gagal login"
        ], 500);
    }

    public function logout(){
        auth()->logout();
        return response()->json([
            "status" => true,
            "message" => "Anda berhasil logout"
        ], 200);
    }

    public function getPegawai(Request $request){
        $query = $request->only(["role", "divisi"]);
        if($query){
            $user = User::query();
            $user->with("logDailies");
            if(isset($query["role"])){
                $user->where("role", $query["role"]);
            }
            if(isset($query["divisi"])){
                $user->where("divisi", $query["divisi"]);
            }
            return response()->json([
                "status"    =>  200,
                "message"   =>  "List pegawai",
                "data"      =>  $user->get()
            ], 200);
        }
    }

    public function getLog($id){

    }
}
