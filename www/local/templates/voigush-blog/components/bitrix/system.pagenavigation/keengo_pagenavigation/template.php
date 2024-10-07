<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
if(!$arResult["NavShowAlways"]) {
	if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
	return;
}
$strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"]."&amp;" : "");
$strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?".$arResult["NavQueryString"] : "");
?>

<?php if($arResult["NavRecordCount"]  > 1 ): ?>
<div class="pagination">
    <?php if($arResult["NavPageNomer"] > 1): ?>
        <a class="paginationPrevNext" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>">Назад</a>
    <?php endif;?>
    <?php $page = $arResult["nStartPage"];?>
    <?php  while($page <= $arResult["nEndPage"]): ?>
        <?php if($arResult["NavPageNomer"] === $page):?>
            <a class="page active" href="<?=$arResult["sUrlPath"]?>?PAGEN_<?=$arResult["NavNum"]?>=<?=$page?>"><?= $page?></a>
        <?php else: ?>
            <a class="page" href="<?=$arResult["sUrlPath"]?>?PAGEN_<?=$arResult["NavNum"]?>=<?=$page?>"><?= $page?></a>
        <?php endif;?>
        <?php ++$page;?>
    <?php endwhile;?>
    <?php if($arResult["NavPageNomer"] < $arResult["nEndPage"]):?>
        <a class="paginationPrevNext" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>">Вперед</a>
    <?php endif;?>
</div>
<?php endif;?>