<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<div class="blog-articals">
    <?php foreach($arResult["ITEMS"] as $arItem): ?>
        <div class="blog-artical">
            <div class="blog-artical-info">
                <div class="blog-artical-info-img">
                    <a href="<?= $arItem["DETAIL_PAGE_URL"];?>"><img src="<?=$arItem['PREVIEW_PICTURE']['SRC']; ?>" title="post-name"></a>
                </div>
                <div class="blog-artical-info-head">
                    <h2><a href="single.html"><?= $arItem["NAME"]?></a></h2>
                    <h6>Posted on: <?= $arItem["ACTIVE_FROM"] ?> <a href="#">Автор: <?= $arItem["PROPERTIES"]["author"]["VALUE"] ?></a></h6>

                </div>
                <div class="blog-artical-info-text">
                    <p><?=$arItem["PREVIEW_TEXT"]; ?><a href="<?= $arItem["DETAIL_PAGE_URL"] ?>">[...]</a></p>
                </div>
                <div class="artical-links">
                    <ul>
                        <li><small> </small><span><?= $arItem["ACTIVE_FROM"] ?></span></li>
                        <li><a href="#"><small class="admin"> </small><span><?=$arItem["PROPERTIES"]["author"]["VALUE"]; ?></span></a></li>
                        <li><a href="#"><small class="no"> </small><span>No comments</span></a></li>
                        <li><a href="#"><small class="posts"> </small><span>View posts: <?= $arItem["SHOW_COUNTER"] ?></span></a></li>
                        <li><a href="<?= $arItem["DETAIL_PAGE_URL"] ?>"><small  class="link"> </small><span>permalink</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    <?php endforeach?>
    <?php if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
    	<br /><?=$arResult["NAV_STRING"]?>
    <?php endif;?>
</div>
<!--<div class="news-list">-->
<?//if($arParams["DISPLAY_TOP_PAGER"]):?>
<!--	--><?php //=$arResult["NAV_STRING"]?><!--<br />-->
<?//endif;?>
<?//foreach($arResult["ITEMS"] as $arItem):?>
<!--	--><?//
//	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
//	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
//	?>
<!--	<p class="news-item" id="--><?php //=$this->GetEditAreaId($arItem['ID']);?><!--">-->
<!--		--><?//if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arItem["PREVIEW_PICTURE"])):?>
<!--			--><?//if(!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])):?>
<!--				<a href="--><?php //=$arItem["DETAIL_PAGE_URL"]?><!--"><img-->
<!--						class="preview_picture"-->
<!--						border="0"-->
<!--						src="--><?php //=$arItem["PREVIEW_PICTURE"]["SRC"]?><!--"-->
<!--						width="--><?php //=$arItem["PREVIEW_PICTURE"]["WIDTH"]?><!--"-->
<!--						height="--><?php //=$arItem["PREVIEW_PICTURE"]["HEIGHT"]?><!--"-->
<!--						alt="--><?php //=$arItem["PREVIEW_PICTURE"]["ALT"]?><!--"-->
<!--						title="--><?php //=$arItem["PREVIEW_PICTURE"]["TITLE"]?><!--"-->
<!--						style="float:left"-->
<!--						/></a>-->
<!--			--><?//else:?>
<!--				<img-->
<!--					class="preview_picture"-->
<!--					border="0"-->
<!--					src="--><?php //=$arItem["PREVIEW_PICTURE"]["SRC"]?><!--"-->
<!--					width="--><?php //=$arItem["PREVIEW_PICTURE"]["WIDTH"]?><!--"-->
<!--					height="--><?php //=$arItem["PREVIEW_PICTURE"]["HEIGHT"]?><!--"-->
<!--					alt="--><?php //=$arItem["PREVIEW_PICTURE"]["ALT"]?><!--"-->
<!--					title="--><?php //=$arItem["PREVIEW_PICTURE"]["TITLE"]?><!--"-->
<!--					style="float:left"-->
<!--					/>-->
<!--			--><?//endif;?>
<!--		--><?//endif?>
<!--		--><?//if($arParams["DISPLAY_DATE"]!="N" && $arItem["DISPLAY_ACTIVE_FROM"]):?>
<!--			<span class="news-date-time">--><?//echo $arItem["DISPLAY_ACTIVE_FROM"]?><!--</span>-->
<!--		--><?//endif?>
<!--		--><?//if($arParams["DISPLAY_NAME"]!="N" && $arItem["NAME"]):?>
<!--			--><?//if(!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])):?>
<!--				<a href="--><?//echo $arItem["DETAIL_PAGE_URL"]?><!--"><b>--><?//echo $arItem["NAME"]?><!--</b></a><br />-->
<!--			--><?//else:?>
<!--				<b>--><?//echo $arItem["NAME"]?><!--</b><br />-->
<!--			--><?//endif;?>
<!--		--><?//endif;?>
<!--		--><?//if($arParams["DISPLAY_PREVIEW_TEXT"]!="N" && $arItem["PREVIEW_TEXT"]):?>
<!--			--><?//echo $arItem["PREVIEW_TEXT"];?>
<!--		--><?//endif;?>
<!--		--><?//if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arItem["PREVIEW_PICTURE"])):?>
<!--			<div style="clear:both"></div>-->
<!--		--><?//endif?>
<!--		--><?//foreach($arItem["FIELDS"] as $code=>$value):?>
<!--			<small>-->
<!--			--><?php //=GetMessage("IBLOCK_FIELD_".$code)?><!--:&nbsp;--><?php //=$value;?>
<!--			</small><br />-->
<!--		--><?//endforeach;?>
<!--		--><?//foreach($arItem["DISPLAY_PROPERTIES"] as $pid=>$arProperty):?>
<!--			<small>-->
<!--			--><?php //=$arProperty["NAME"]?><!--:&nbsp;-->
<!--			--><?//if(is_array($arProperty["DISPLAY_VALUE"])):?>
<!--				--><?php //=implode("&nbsp;/&nbsp;", $arProperty["DISPLAY_VALUE"]);?>
<!--			--><?//else:?>
<!--				--><?php //=$arProperty["DISPLAY_VALUE"];?>
<!--			--><?//endif?>
<!--			</small><br />-->
<!--		--><?//endforeach;?>
<!--	</p>-->
<?//endforeach;?>
<?//if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
<!--	<br />--><?php //=$arResult["NAV_STRING"]?>
<?//endif;?>
<!--</div>-->
