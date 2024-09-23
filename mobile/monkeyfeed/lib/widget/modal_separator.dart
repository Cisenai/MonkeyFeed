import 'package:flutter/material.dart';

class ModalSeparator extends StatelessWidget {
  const ModalSeparator({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 15),
      child: Container(
        width: MediaQuery.of(context).size.width * 0.75,
        height: 5,
        decoration: BoxDecoration(
          color: Theme.of(context)
              .colorScheme
              .primary
              .withOpacity(0.25),
          borderRadius: BorderRadius.circular(5),
        ),
      ),
    );
  }
}
