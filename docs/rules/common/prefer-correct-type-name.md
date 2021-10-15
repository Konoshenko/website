# Prefer correct type name

![Configurable](https://img.shields.io/badge/-configurable-informational)

## Rule id

prefer-correct-type-name

## Description

Type name should only contain alphanumeric characters, start with an uppercase character and span between `min-length` and `max-length` characters in length.

The rule can be configured using fields `min-length` and `max-length`. By
default `min-length = 3` and `max-length = 40`. You can also add
exceptions `excluded`.

### Config example

```yaml
dart_code_metrics:
  ...
  rules:
    ...
    excluded: [ 'exampleExclude' ]
    max-identifier-length: 30
    min-identifier-length: 4
```

### Example

Bad:

```dart

class example { // first character is lowercase 
  //...
} 
class ex { // length equals 2
  //...
} 
class multiplatformConfigurationPointWithExtras { // length equals 41
  //...
} 
```

Good:

```dart

class Example { // length equals 7
  //...
}

class _Example { // length equals 7
  //...
} 
```
