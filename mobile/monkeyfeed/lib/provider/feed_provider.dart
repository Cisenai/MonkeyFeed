import 'package:flutter/material.dart';

class FeedProvider with ChangeNotifier {
  String _feed = 'diolinux';

  String get feed => _feed.toLowerCase();

  set feed(String feed) {
    _feed = feed;
    notifyListeners();
  } 
}