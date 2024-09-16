import 'package:flutter/material.dart';

class DarkTheme {
  final ThemeData _theme = ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: const Color(0xFF000000),
    colorScheme: const ColorScheme.dark(),
  );

  ThemeData get theme => _theme;
}