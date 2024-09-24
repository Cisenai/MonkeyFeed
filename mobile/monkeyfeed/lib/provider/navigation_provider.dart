import 'package:flutter/material.dart';

class NavigationProvider with ChangeNotifier {
  int _currentScreen = 1;

  int get currentScreen => _currentScreen;

  set currentScreen(int screen) {
    _currentScreen = screen;
    notifyListeners();
  }
}