import 'package:flutter/material.dart';

class TextInput extends StatelessWidget {
  const TextInput({
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
  Widget build(BuildContext context) {
    return Padding(
      padding: margin,
      child: TextFormField(
        controller: controller,
        validator: validator,
        style: TextStyle(
          color: Theme.of(context).colorScheme.primary,
          fontSize: 20,
        ),
        decoration: InputDecoration(
          contentPadding: const EdgeInsets.symmetric(
            horizontal: 20,
            vertical: 15,
          ),
          hintText: hintText,
          hintStyle: TextStyle(
            fontSize: 24,
            color: Theme.of(context).colorScheme.secondary,
          ),
          filled: true,
          fillColor: Theme.of(context).colorScheme.onSurface,
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(5),
            borderSide: BorderSide(
              color: Theme.of(context).colorScheme.tertiary,
              width: 3,
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(5),
            borderSide: BorderSide(
              color: Theme.of(context).colorScheme.secondary,
              width: 3,
            ),
          ),
        ),
      ),
    );
  }
}
