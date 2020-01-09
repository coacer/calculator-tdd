let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/dev/practice/js/React/calculator-tdd
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +15 src/components/App/App.spec.tsx
badd +43 src/index.css
badd +5 src/components/Calculator/Calculator.css
badd +30 src/components/Calculator/Calculator.tsx
badd +20 src/components/Calculator/Calculator.spec.tsx
badd +10 src/components/Display/Display.spec.tsx
badd +8 src/components/Display/Display.tsx
badd +5 src/components/App/App.tsx
badd +6 src/components/Display/Display.css
badd +6 src/components/Keypad/Keypad.tsx
badd +91 ~/dotfiles/nvim/settings/plugins/neosnippet.rc.d/snippets/typescript.tsx.snip
badd +9 src/components/Keypad/Keypad.spec.tsx
argglobal
%argdel
edit src/components/Calculator/Calculator.spec.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 102 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 101 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((17 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 06|
wincmd w
argglobal
if bufexists("src/components/Calculator/Calculator.tsx") | buffer src/components/Calculator/Calculator.tsx | else | edit src/components/Calculator/Calculator.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((16 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 07|
wincmd w
exe 'vert 1resize ' . ((&columns * 102 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 101 + 102) / 204)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
