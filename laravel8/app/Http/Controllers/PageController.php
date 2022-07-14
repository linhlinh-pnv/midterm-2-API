<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class PageController extends Controller
{
    public function Editform(){
        return view ('Admin.Edit');
    }




    
      public function getAdminEdit($id){
        $product = product::find($id);
        return view('Admin.Edit')->with('product',$product);
    }
    public function postAdminEdit(Request $request){
        $id = $request->editId;

        $product = product::find($id);
        if($request->hasFile('editImage')){
            $file = $request -> file ('editImage');
            $fileName=$file->getClientOriginalName('editImage');
            $file->move('sources/image/product',$fileName);
        }
        if ($request->file('editImage')!=null){
            $product ->image=$fileName;
        }
        $product->name=$request->editName;
        // $product->image=$file_name;
        $product->description=$request->editDescription;
        $product->unit_price=$request->editPrice;
        $product->promotion_price=$request->editPromotionPrice;
        $product->unit=$request->editUnit;
        $product->new=$request->editNew;
        $product->id_type=$request->editType;
        $product->save();
        return redirect('/showadmin');
    }
}
