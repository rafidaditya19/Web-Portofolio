@echo off
title Menjalankan Website Portofolio Nur Rafid Aditya
color 0B
cls
echo ====================================================================
echo           MENJALANKAN WEBSITE PORTOFOLIO NUR RAFID ADITYA
echo ====================================================================
echo.
echo Sedang menyiapkan server lokal Next.js...
echo Browser kamu akan otomatis terbuka di http://localhost:3000
echo.
echo PENTING: Jangan tutup jendela hitam ini selama kamu membuka website!
echo          (Kalau mau stop, tinggal tutup jendela ini).
echo ====================================================================
echo.

:: Tambahkan path Node.js jika belum masuk di environment cmd
set "PATH=%PATH%;C:\Program Files\nodejs"

:: Buka browser otomatis setelah 3 detik
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"

:: Jalankan Next.js server
call npm.cmd run dev

pause
