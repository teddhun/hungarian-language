# Hungarian Language Pack for [Flarum](https://flarum.org/) with Third Party Extensions

## Installation

Flarum use Composer to manage its dependencies and extensions. The French language pack is available [on Packagist](https://packagist.org/packages/teddhun/hungarian-language) and can be managed that way. Make sure that [Composer](https://getcomposer.org/) is installed on your machine, then run the following command in the location where Flarum is installed:

```bash
composer require teddhun/hungarian-language
```

## Updating

Run the following command in the location where Flarum is installed:

```bash
composer update teddhun/hungarian-language
php flarum cache:clear
```
