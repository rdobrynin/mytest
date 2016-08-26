<ol class="products-list">
    @foreach ($products as $item)
        <li class="col-4">
            <div class="item-container">
                <a href="javascript:void(0);" title="{{$item['title']}}" class="product-image">
                    <img src="{{$item['image']}}" width="260" height="260" alt="{{$item['title']}}"></a>
            </div>
            <div class="item-description">
                <div class="item-title">{{$item['title']}}</div>
                <div class="item-price @if($item['specialPrice']) item-price-old @endif">{{$item['price']}}&nbsp;@if($item['specialPrice']) <span class="item-special-price">{{$item['specialPrice']}}</span>@endif</div>
                <button class="button">add to cart</button>

            </div>
        </li>
    @endforeach
</ol>