<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vaimo Store</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Roman Dobrynin Front Test">
    <meta name="author" content="Roman Dobrynin">
    @include('layout.assets')
</head>
<body>
<header>
  <div class="container">
      @include('layout.header')
  </div>
</header>
<div class="container">
  <section>
      <h1>Lorem ipsum dolor sit.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.</p>
  </section>
    <section class="products">


        {{--{{ dd($products) }}--}}
    </section>
</div>

<footer>
    <div class="container">
    @include('layout.footer')
    </div>
</footer>
{{--End footer--}}
</body>
</html>
