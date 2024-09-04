import 'package:flutter/material.dart';

class OutlinedFormButton extends StatelessWidget {
  const OutlinedFormButton({
    super.key,
    required this.onPressed,
    required this.text,
    this.margin = EdgeInsets.zero,
  });

  final Function()? onPressed;
  final String text;
  final EdgeInsets margin;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: margin,
      child: TextButton(
        onPressed: onPressed,
        style: TextButton.styleFrom(
          minimumSize: const Size(
            double.infinity,
            double.minPositive,
          ),
          padding: const EdgeInsets.symmetric(
            horizontal: 20,
            vertical: 15,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(5),
            side: BorderSide(
              color: Theme.of(context).colorScheme.secondary,
              width: 3,
            ),
          ),
          overlayColor: Theme.of(context).colorScheme.surface
        ),
        child: Text(
          text,
          style: TextStyle(
            fontSize: 24,
            color: Theme.of(context).colorScheme.onSecondaryFixedVariant,
          ),
        ),
      ),
    );
  }
}
