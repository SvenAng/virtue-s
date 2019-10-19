<?php

/**
 * @file
 * The template file for the popup.
 */
global $language;
$current_lang = $language->language;
?>
<?php if ($current_lang =="sv"){ ?>
<div id="popup-question-redirect" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="label" style="display: block;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <?php if (!empty($title)): ?>
        <div class="modal-header">
          
        </div>
      <?php endif; ?>
      <?php if (!empty($message)): ?>
        <div class="modal-body">
            <h4 class="modal-title" id="label"><?php print $title; ?></h4>
          <p><?php print $message; ?></p>
            <?php if (!empty($yes)): ?>
            <button type="button" class="btn btn-default close-button button-yes" data-type="1" data-dismiss="modal"><?php print $yes; ?></button>
            <?php endif; ?>
        </div>
      <?php endif; ?>
      <div class="modal-footer">

        <?php if (!empty($hide)): ?>
          <button type="button" class="btn btn-default close-button button-hide" data-type="2" data-dismiss="modal"><?php print $hide; ?></button>
        <?php endif; ?>

        <?php if (!empty($no)): ?>
          <button type="button" class="btn btn-default close-button button-no" data-type="3" data-dismiss="modal"><?php print $no; ?></button>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
<?php } ?>