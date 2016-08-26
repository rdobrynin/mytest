<ol class="products-list">
    <?php foreach($products as $item): ?>
        <li class="col-4">
            <div class="item-container">
                <a href="javascript:void(0);" title="<?php echo e($item['title']); ?>" class="product-image">
                    <img src="<?php echo e($item['image']); ?>" width="260" height="260" alt="<?php echo e($item['title']); ?>"></a>
            </div>
            <div class="item-description">
                <div class="item-title"><?php echo e($item['title']); ?></div>
                <div class="item-price"><?php if($item['specialPrice']): ?> <del>&#8364;<?php echo e($item['price']); ?></del> <?php else: ?> &#8364;<?php echo e($item['price']); ?> <?php endif; ?>&nbsp;<?php if($item['specialPrice']): ?> <span class="item-special-price">&#8364;<?php echo e($item['specialPrice']); ?></span><?php endif; ?></div>
                <button class="button">add to cart</button>

            </div>
        </li>
    <?php endforeach; ?>
</ol>