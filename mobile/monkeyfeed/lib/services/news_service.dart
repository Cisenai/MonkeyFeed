import 'dart:convert';

import 'package:monkeyfeed/constants.dart';
import 'package:monkeyfeed/model/new.dart';
import 'package:http/http.dart' as http;

class NewsService {
  static Future<List<New>> getNews() async {
    final response = await http.get(Uri.parse('$apiUrl/feed/diolinux'));

    if (response.statusCode == 200) {
      final body = jsonDecode(response.body) as Map<String, dynamic>;
      final List data = body['data'];
      return data.map((e) => New.fromJson(e)).toList();
    } else {
      throw Exception('Could not get news.');
    }
  }
}
