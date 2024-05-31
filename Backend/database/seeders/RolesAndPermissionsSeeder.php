<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
// class RolesAndPermissionsSeeder extends Seeder
// {
//     /**
//      * Run the database seeds.
//      */
//     public function run()
//     {
//         $adminRole = Role::create(['name' => 'admin']);
//         $userRole = Role::create(['name' => 'user']);

//         $admin = User::create([
//             'username' => 'Admin',
//             'email' => 'admin@example.com',
//             'password' => Hash::make('password'),
//         ]);

//         $admin->assignRole($adminRole);
//     }
// }
