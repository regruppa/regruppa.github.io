jQuery(function() {
  jQuery('.entry, .text').each(function(e) {
    var text = jQuery(this).html();
    text = text.
      replace('*SMILE*', '<img src="/images/smilies/icon_smile.gif" alt="*SMILE" class="wp-smiley">').
      replace('*COOL*', '<img src="/images/smilies/icon_smile.gif" alt="*COOL*" class="wp-smiley">').
      replace('*EVIL*', '<img src="/images/smilies/icon_evil.gif" alt="*EVIL*" class="wp-smiley">').
      replace('*BLUSH*','<img src="/images/smilies/icon_blush.gif" alt="*BLUSH*" class="wp-smiley">').
      replace('*BLUM*', '<img src="/images/smilies/icon_blum.gif" alt="*BLUM*" class="wp-smiley">').
      replace('*WINK*', '<img src="/images/smilies/icon_wink.gif" alt="*WINK*" class="wp-smiley">').
      replace('*ROFL*', '<img src="/images/smilies/icon_rofl.gif" alt="*ROFL*" class="wp-smiley">').
      replace('*SAD*', '<img src="/images/smilies/icon_sad.gif" alt="*SAD*" class="wp-smiley">').
      replace('*BO*', '<img src="/images/smilies/icon_bo.gif" alt="*BO*" class="wp-smiley">').
      replace('*BOMB*', '<img src="/images/smilies/icon_bomb.gif" alt="*BOMB*" class="wp-smiley">').
      replace('*DANCE*', '<img src="/images/smilies/icon_dance.gif" alt="*DANCE*" class="wp-smiley">').
      replace('*IN_LOVE*', '<img src="/images/smilies/icon_man_in_love.gif" alt="*IN_LOVE*" class="wp-smiley">').
      replace('*MUSIC*', '<img src="/images/smilies/icon_music.gif" alt="*MUSIC*" class="wp-smiley">').
      replace('*PARDON*', '<img src="/images/smilies/icon_pardon.gif" alt="*PARDON*" class="wp-smiley">').
      replace('*UNKNOWN*', '<img src="/images/smilies/icon_unknown.gif" alt="*UNKNOWN*" class="wp-smiley">').
      replace('*CRAZY*', '<img src="/images/smilies/icon_crazy.gif" alt="*CRAZY*" class="wp-smiley">').
      replace('*ANGEL*', '<img src="/images/smilies/icon_angel.gif" alt="*ANGEL*" class="wp-smiley">').
      replace('*BEEE*', '<img src="/images/smilies/icon_beee.gif" alt="*BEEE*" class="wp-smiley">').
      replace('*DRINK*', '<img src="/images/smilies/icon_drink.gif" alt="*DRINK*" class="wp-smiley">').
      replace('*FOOL*', '<img src="/images/smilies/icon_fool.gif" alt="*FOOL*" class="wp-smiley">').
      replace('*THUMBS_UP*', '<img src="/images/smilies/icon_good.gif" alt="*THUMBS_UP*" class="wp-smiley">').
      replace('*HEART*', '<img src="/images/smilies/icon_heart.gif" alt="*HEART*" class="wp-smiley">').
      replace('*JOKINGLY*', '<img src="/images/smilies/icon_mocking.gif" alt="*JOKINGLY*" class="wp-smiley">').
      replace('*NO*', '<img src="/images/smilies/icon_nea.gif" alt="*NO*" class="wp-smiley">').
      replace('*SECRET*', '<img src="/images/smilies/icon_secret.gif" alt="*SECRET*" class="wp-smiley">').
      replace(' :-) ', '<img src="/images/smilies/icon_smile.gif" alt=":-)" class="wp-smiley">').
      replace(' :-D ', '<img src="/images/smilies/icon_biggrin.gif" alt=":-D" class="wp-smiley">').
      replace(' :-P ', '<img src="/images/smilies/icon_blum.gif" alt=":-P" class="wp-smiley">').
      replace(' ;-) ', '<img src="/images/smilies/icon_wink.gif" alt=";-)" class="wp-smiley">').
      replace(' :-[ ', '<img src="/images/smilies/icon_blush.gif" alt=":-[" class="wp-smiley">').
      replace(' %-) ', '<img src="/images/smilies/icon_wacko.gif" alt="%-)" class="wp-smiley">').
      replace(' @= ', '<img src="/images/smilies/icon_bomb.gif" alt="@=" class="wp-smiley">').
      replace(' =-O ', '<img src="/images/smilies/icon_chok.gif" alt="=-O" class="wp-smiley">').
      replace(' 8) ', '<img src="/images/smilies/icon_cool.gif" alt="8)" class="wp-smiley">').
      replace(' :) ', '<img src="/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley">').
      replace(' :( ', '<img src="/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">').
      replace(' =) ', '<img src="/images/smilies/icon_smile2.gif" alt="=)" class="wp-smiley">').
      replace(' :D ', '<img src="/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley">').
      replace(' :P ', '<img src="/images/smilies/icon_blum.gif" alt=":P" class="wp-smiley">').
      replace(' ;) ', '<img src="/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley">').
      replace(' :[ ', '<img src="/images/smilies/icon_blush.gif" alt=":[" class="wp-smiley">').
      replace(' %) ', '<img src="/images/smilies/icon_wacko.gif" alt="%)" class="wp-smiley">').
      replace(' O:-) ', '<img src="/images/smilies/icon_angel.gif" alt="O:-)" class="wp-smiley">').
      replace(' :-\\ ', '<img src="/images/smilies/icon_angel.gif" alt=":-\\" class="wp-smiley">').
      replace(' :-| ', '<img src="/images/smilies/icon_fool.gif" alt=":-|" class="wp-smiley">');
    jQuery(this).html(text);
  });
});
