import 'dart:convert';

import 'package:monkeyfeed/constants.dart';
import 'package:monkeyfeed/model/user.dart';
import 'package:http/http.dart' as http;

class UserService {
  static Future<User> login({
    required String email,
    required String password,
  }) async {
    final data = <String, dynamic>{
      'email': email,
      'password': password,
    };

    final headers = <String, String>{
      'content-type': 'application/json',
    };

    final response = await http.post(
      Uri.parse('$apiUrl/login'),
      body: jsonEncode(data),
      headers: headers,
    );

    print(response.body);

    if (response.statusCode == 200) {
      return User.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
    } else {
      throw Exception('Invalid email or password.');
    }
  }

  static Future<User> updateUser({
    required String id,
    required Map<String, dynamic> data,
  }) async {
    final response = await http.patch(
      Uri.parse('$apiUrl/client/$id'),
      headers: {'content-type': 'application/json'},
      body: jsonEncode(data),
    );

    if (response.statusCode == 202) {
      return User.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
    } else {
      throw Exception('Could not update user.');
    }
  }

  static Future<void> registerUser({
    required Map<String, dynamic> data,
  }) async {
    final response = await http.post(
      Uri.parse('$apiUrl/client'),
      headers: {
        'content-type': 'application/json',
      },
      body: jsonEncode(data),
    );

    if (response.statusCode != 202) {
      throw Exception('Could not create new user.');
    }
  }
}
