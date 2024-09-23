import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:monkeyfeed/constants.dart';

class SubscriptionsService {
  static Future<void> addSubscription({
    required int userId,
    required Map<String, dynamic> data,
  }) async {
    final response = await http.post(
      Uri.parse('$apiUrl/subs'),
      headers: {
        'content-type': 'application/json',
      },
      body: jsonEncode(data),
    );

    if (response.statusCode != 202) {
      throw Exception('Could not add subscription.');
    }
  }
}
