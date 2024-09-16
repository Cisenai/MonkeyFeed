import 'package:flutter/material.dart';
import 'package:monkeyfeed/theme/light_theme.dart';

class ThemeProvider with ChangeNotifier {
  ThemeData _theme = LightTheme().theme;

  ThemeData get theme => _theme;

  set theme(ThemeData theme) {
    _theme = theme;
    notifyListeners();
  }

  void toggleTheme() {
    return;
  }
}