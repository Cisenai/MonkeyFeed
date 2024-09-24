import 'package:flutter/material.dart';

class DarkTheme {
  final ThemeData _theme = ThemeData(
    brightness: Brightness.dark,
    fontFamily: 'Poppins',
    scaffoldBackgroundColor: const Color.fromARGB(255, 25, 25, 25),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFF000000),
      centerTitle: true,
      titleTextStyle: TextStyle(
        fontSize: 32,
        fontFamily: 'Poppins',
        color: Color(0xFFFFFFFF),
        fontWeight: FontWeight.w700,
      ),
    ),
    bottomNavigationBarTheme: const BottomNavigationBarThemeData(
      backgroundColor: Color(0xFF000000),
    ),
    snackBarTheme: const SnackBarThemeData(
      backgroundColor: Color(0xFFE5E5E5),
      actionTextColor: Color(0xFF14213D),
      contentTextStyle: TextStyle(
        fontFamily: 'Poppins',
        fontWeight: FontWeight.w700,
        color: Color(0xFF14213D),
      ),
    ),
    drawerTheme: const DrawerThemeData(
      backgroundColor: Color(0xFF000000),
    ),
    colorScheme: const ColorScheme.dark(
      primary: Color(0xFFFFFFFF),
      secondary: Color(0xFFE5E5E5),
      tertiary: Color(0xFFFCA311),
      surface: Color.fromARGB(255, 25, 25, 25),
      onSurface: Color(0xFF000000),
      onSecondaryFixed: Color(0xFF14213D),
    ),
    textTheme: const TextTheme(
      titleMedium: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.w700,
        color: Color(0xFFFFFFFF),
      ),
    ),
  );

  ThemeData get theme => _theme;
}
