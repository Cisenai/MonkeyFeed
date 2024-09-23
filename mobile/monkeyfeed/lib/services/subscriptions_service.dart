import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:monkeyfeed/constants.dart';
import 'package:monkeyfeed/model/user.dart';

class SubscriptionsService {
  static Future<User> addSubscription({
    required Map<String, dynamic> data,
  }) async {
    final response = await http.post(
      Uri.parse('$apiUrl/subs'),
      headers: {
        'content-type': 'application/json',
      },
      body: jsonEncode(data),
    );

    if (response.statusCode == 202) {
      final res =
          await http.get(Uri.parse('$apiUrl/client/${data['idClient']}'));

      if (res.statusCode == 200) {
        return User.fromJson(jsonDecode(res.body) as Map<String, dynamic>);
      } else {
        throw Exception('Could not add subscription.');
      }
    } else {
      throw Exception('Could not add subscription.');
    }
  }

  static Future<User> removeSubscription({
    required int userId,
    required int subId,
  }) async {
    final body = {
      'id': subId,
      'idClient': userId,
    };
    final response = await http.delete(
      Uri.parse('$apiUrl/subs'),
      headers: {'content-type': 'application/json'},
      body: jsonEncode(body),
    );

    if (response.statusCode == 202) {
      final res = await http.get(Uri.parse('$apiUrl/client/$userId'));

      if (res.statusCode == 200) {
        return User.fromJson(jsonDecode(res.body) as Map<String, dynamic>);
      } else {
        throw Exception('Could not add subscription.');
      }
    } else {
      throw Exception('Could not delete subscription.');
    }
  }
}
