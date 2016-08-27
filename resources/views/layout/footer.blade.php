<div class="col-4">
    <nav>
        <h3>top categories</h3>
        <ul>
            <li><a href="javascript:void(0);">women</a></li>
            <li><a href="javascript:void(0);">men</a></li>
            <li><a href="javascript:void(0);">junior</a></li>
            <li><a href="javascript:void(0);">accessories</a></li>
        </ul>
    </nav>
</div>
<div class="col-4">
    <nav>
        <h3>customer service</h3>
        <ul>
            <li><a href="javascript:void(0);">returns</a></li>
            <li><a href="javascript:void(0);">shipping</a></li>
            <li><a href="javascript:void(0);">about us</a></li>
            <li><a href="javascript:void(0);">contact us</a></li>
        </ul>
    </nav>
</div>

<div class="col-3">
    <h3>newsletter subscribe</h3>
    <form action="{{url('newsletter/subscribe')}}" method="GET" id="subscribe">
        <span class="mail"></span>
        <input type="text" name="email" placeholder="Enter your email address">
        <input type="submit" class="button" value="Subscribe">
        <div class="ajax-process"></div>
    </form>
</div>