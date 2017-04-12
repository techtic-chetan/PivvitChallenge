<?php
namespace App\Api\Controllers;

use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Response;
use Carbon\Carbon;
use Log;

use App\Purchase;

class PurchasesController extends Controller
{

    public function __construct(){

    }

    public function get(Request $request){
      $queueId = $request->get('queueId');
       $accounts = Purchase::all()->toArray();
        return Response::json([
            'code' => 200,
            'response' => $accounts
        ]);
    }


    public function store(Request $request){
        $request = $request->only([
            'customer_name',
            'offering_id',
            'quantity'
          ]);
        $account = Response::create($request);
        return Response::json([
            'code' => 200,
            'response' => "Purchase successfully created."
        ]);
    }



}