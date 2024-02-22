<?php

namespace App\Http\Controllers\Api;

use App\Models\LogDaily;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class LogDailyController extends Controller
{
    public function index($id)
    {
        $logDaily = LogDaily::where("user_id", $id)->get();
        return response()->json([
            "status"    => true,
            "message"   => "List log daily",
            "data"      => $logDaily
        ], 200);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "user_id"       =>  "required",
            "description"   =>  "required",
            "date"          =>  "required"
        ]);

        if($validate->fails()){
            return response()->json([
                "status"    =>  false,
                "message"   =>  $validate->errors()
            ], 419);
        }

        $image = $request->file('image');
        if(isset($image)){
            $image->storeAs('public/log', $image->hashName());
            $logDaily = LogDaily::create([
                "user_id"       =>  $request->user_id,
                "image"         =>  $image->hashName(),
                "description"   =>  $request->description,
                "date"          =>  $request->date,
            ]);
        }else{
            $logDaily = LogDaily::create([
                "user_id"       =>  $request->user_id,
                "image"         => "",
                "description"   =>  $request->description,
                "date"          =>  $request->date,
            ]);
        }

        return response()->json([
            "status"    =>  true,
            "message"   =>  "Log daily berhasil dibuat",
            "data"      =>  $logDaily
        ], 200);
    }

    public function update(Request $request, $id)
    {
        // return dd($request->all());
        $validate = Validator::make($request->all(), [
            "description"   =>  "required",
            "date"          =>  "required"
        ]);

        if($validate->fails()){
            return response()->json([
                "status"    =>  false,
                "message"   =>  $validate->errors()
            ], 419);
        }

        $logDaily = LogDaily::find($id);
        $image = $request->file('image');
        if($image){
            $image->storeAs('public/log', $image->hashName());
            Storage::delete('public/log/'.basename($logDaily->image));
            $logDaily->update([
                "image"         =>  $image->hashName(),
                "description"   =>  $request->description,
                "date"          =>  $request->date,
            ]);
        }else{
            $logDaily->update([
                "description"   =>  $request->description,
                "date"          =>  $request->date,
            ]);
        }

        return response()->json([
            "status"    =>  true,
            "message"   =>  "Log daily berhasil diupdate",
            "data"      =>  $logDaily
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $logDaily = LogDaily::find($id);
        if($logDaily){
            $logDaily->delete();
            return response()->json([
                "status"    =>  true,
                "message"   =>  "log berhasil dihapus"
            ], 200);
        }

        return response()->json([
            "status"    =>  false,
            "message"   =>  "log berhasil digagal"
        ], 404);
    }

    public function updateStatus(Request $request, $id){
        $validate = Validator::make($request->all(), [
            "status"    =>  "required"
        ]);

        if($validate->fails()){
            return response()->json([
                "status"    =>  false,
                "message"   =>  $validate->errors()
            ], 419);
        }

        $logDaily = LogDaily::find($id);
        $logDaily->update([
            "status"    =>  $request->status
        ]);

        return response()->json([
            "status"    =>  true,
            "message"   =>  "Log daily berhasil diupdate",
            "data"      =>  $logDaily
        ], 200);
    }
}
