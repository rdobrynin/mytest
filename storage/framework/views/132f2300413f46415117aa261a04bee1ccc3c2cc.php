<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Vaimo Store</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="description" content="Roman Dobrynin Front Test"/>
    <meta name="keywords" content="test" />
    <meta name="robots" content="INDEX,FOLLOW" />
    <meta name="author" content="Roman Dobrynin"/>
    <?php echo $__env->make('layout.assets', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>
<header>
  <div class="container">
      <?php echo $__env->make('layout.header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
  </div>
</header>
<div class="container">
    <section class="home-block">
        <div class="static-block" style="background-image: url('<?php echo e(url('my-assets/images/splash.jpg')); ?>')">
            <div class="banner-title">
                <h3>get ready for the autumn</h3>
                <h4>we have prepared everything for you!</h4>
            </div>
        </div>
        <article>
            <h1>This is Vaimo Store</h1>
            <h2>your one-stop fashion destination</h2>
            <p>Shop from over 850 of the best brands, including VAIMO’s own label. Plus, get your daily fix of the freshest style, celebrity and music news.</p>
        </article>
    </section>
    <?php if(count($products) > 0): ?>
    <section>
        <div class="content-header">
            <span class="title">our favourites</span>
        </div>
    </section>
    <section>
            <?php echo $__env->make('layout.products', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </section>
    <?php endif; ?>
</div>

<footer>
    <div class="container">
    <?php echo $__env->make('layout.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </div>

</footer>
<?php /*End footer*/ ?>
</body>
</html>
