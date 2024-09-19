import 'package:flutter/material.dart';
import 'package:monkeyfeed/theme/dark_theme.dart';
import 'package:monkeyfeed/theme/light_theme.dart';

class ThemeProvider with ChangeNotifier {
  ThemeData _theme = LightTheme().theme;
  bool _darkMode = false;

  ThemeData get theme => _theme;
  bool get darkMode => _darkMode;

  set theme(ThemeData theme) {
    _theme = theme;
    notifyListeners();
  }

  set darkMode(bool darkmode) {
    _darkMode = darkmode;
    notifyListeners();
  }

  void toggleTheme() {
    if (_darkMode) {
      theme = DarkTheme().theme;
    } else {
      theme = LightTheme().theme;
    }
  }
}