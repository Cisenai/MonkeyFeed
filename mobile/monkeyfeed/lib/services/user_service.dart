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

    if (response.statusCode == 200) {
      return User.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
    } else {
      throw Exception('Invalid email or password.');
    }
  }
}
