import 'package:flutter/material.dart';

class TextInputToggle extends StatefulWidget {
  const TextInputToggle({
    super.key,
    required this.controller,
    required this.validator,
    required this.hintText,
    this.margin = EdgeInsets.zero,
  });

  final TextEditingController controller;
  final String? Function(String?)? validator;
  final String hintText;
  final EdgeInsets margin;

  @override
  State<TextInputToggle> createState() => _TextInputToggleState();
}

class _TextInputToggleState extends State<TextInputToggle> {
  bool obscureText = true;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: widget.margin,
      child: TextFormField(
        controller: widget.controller,
        validator: widget.validator,
        obscureText: obscureText,
        decoration: InputDecoration(
          hintText: widget.hintText,
          hintStyle: TextStyle(
            fontSize: 24,
            color: Theme.of(context).colorScheme.secondary,
          ),
          filled: true,
          fillColor: Theme.of(context).colorScheme.onSurface,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(5),
            borderSide: BorderSide(
              color: Theme.of(context).colorScheme.tertiary,
              width: 3,
            ),
          ),
          suffixIcon: IconButton(
            onPressed: () {},
            icon: Icon(
              obscureText ? Icons.visibility_off : Icons.visibility,
              size: 28,
              color: Theme.of(context).colorScheme.onSecondaryFixed,
            ),
          ),
        ),
      ),
    );
  }
}
