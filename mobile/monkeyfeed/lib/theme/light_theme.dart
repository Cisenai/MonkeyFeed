import 'package:flutter/material.dart';

class LightTheme {
  final ThemeData _theme = ThemeData(
    brightness: Brightness.light,
    fontFamily: 'Poppins',
    scaffoldBackgroundColor: const Color(0xFFE5E5E5),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFFFFFFFF),
      centerTitle: true,
      titleTextStyle: TextStyle(
        fontSize: 32,
        color: Color(0xFF000000),
        fontWeight: FontWeight.bold
      ),
    ),
    colorScheme: const ColorScheme.light(
      primary: Color(0xFF000000),
      secondary: Color(0xFF14213D),
      tertiary: Color(0xFFFCA311),
      surface: Color(0xFFE5E5E5),
      onSurface: Color(0xFFFFFFFF),
      onSecondaryFixed: Color(0xFF14213D),
      onSecondaryFixedVariant: Color(0xFF000000),
    ),
  );

  ThemeData get theme => _theme;
}