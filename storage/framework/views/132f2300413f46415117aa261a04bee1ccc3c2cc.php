<!DOCTYPE html>
<html lang="en">
<head>
    <title>Roman Dobrynin Front Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Roman Dobrynin Front Test">
    <meta name="author" content="Roman Dobrynin">
    <?php echo $__env->make('layout.assets', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>
<header>
  <div class="container">
      <?php echo $__env->make('layout.header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
  </div>
</header>
<div class="container">
  <section>
      <h1>Lorem ipsum dolor sit.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laudantium.</p>
  </section>
    <section class="products">
        <?php echo e(dd($products)); ?>

    </section>
</div>

<footer>
    <div class="container">
    <?php echo $__env->make('layout.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </div>
</footer>
<?php /*End footer*/ ?>
</body>
</html>
