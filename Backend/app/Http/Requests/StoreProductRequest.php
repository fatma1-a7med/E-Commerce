<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')){
            return [
                'title' => 'sometimes|string|required|max:255',
                'details' => 'sometimes|string|required',
                'price' => 'sometimes|required|numeric',
                'image' => 'sometimes|required|image|mimes:jpeg,png,jpg,gif,PNG|max:2048',
            ];
            }else{
            return [
                'title' => 'sometimes|string|required|max:255',
                'details' => 'sometimes|string|required',
                'price' => 'sometimes|required|numeric',
                'image' => 'sometimes|required|image|mimes:jpeg,png,jpg,gif,PNG|max:2048',
            ];
         }
    }
    public function messages(): array
    {
        return [
            'title.required' => 'The title field is required.',
            'title.max' => 'The title may not be greater than :max characters.',
            'details.required' => 'The details field is required.',
            'price.required' => 'The price field is required.',
            'price.numeric' => 'The price must be a number.',
            'image.required' => 'The image field is required.',
            'image.image' => 'The file must be an image.',
            'image.mimes' => 'The image must be a file of type: :values.',
            'image.max' => 'The image may not be greater than :max kilobytes.',
        ];
    }

}