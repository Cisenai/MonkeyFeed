import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:monkeyfeed/constants.dart';
import 'package:monkeyfeed/model/user.dart';

class SubscriptionsService {
  static Future<User> addSubscription({
    required Map<String, dynamic> data,
    required String authToken,
  }) async {
    final response = await http.post(
      Uri.parse('$apiUrl/subs'),
      headers: {
        'content-type': 'application/json',
        'Authorization': authToken,
      },
      body: jsonEncode(data),
    );

    if (response.statusCode == 202) {
      final res = await http
          .get(Uri.parse('$apiUrl/client/${data['idClient']}'), headers: {
        'Authorization': authToken,
      });

      Map<String, dynamic> dataNew = {
        'user': jsonDecode(res.body),
        'authToken': authToken
      };

      if (res.statusCode == 200) {
        return User.fromJson(dataNew);
      } else {
        throw Exception('Could not add subscription.');
      }
    } else {
      throw Exception('Could not add subscription.');
    }
  }

  static Future<User> removeSubscription(
      {required String userId,
      required String subId,
      required String authToken}) async {
    final response = await http.delete(
      Uri.parse('$apiUrl/subs/$subId'),
      headers: {
        'content-type': 'application/json',
        'Authorization': authToken,
      },
    );

    if (response.statusCode == 202) {
      final res = await http.get(
        Uri.parse('$apiUrl/client/$userId'),
        headers: {'Authorization': authToken},
      );

      Map<String, dynamic> dataNew = {
        'user': jsonDecode(res.body),
        'authToken': authToken
      };

      if (res.statusCode == 200) {
        return User.fromJson(dataNew);
      } else {
        throw Exception('Could not add subscription.');
      }
    } else {
      throw Exception('Could not delete subscription.');
    }
  }
}
