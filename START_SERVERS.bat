@echo off
echo ======================================
echo   Luxury Gemstone Website Starter
echo ======================================
echo.
echo Starting backend server...
echo.

start "Backend Server" cmd /k "npm run server"

timeout /t 3 /nobreak > nul

echo Starting frontend...
echo.

start "Frontend Dev Server" cmd /k "npm run dev"

echo.
echo ======================================
echo   Servers Starting!
echo ======================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo Admin: http://localhost:5173/admin/login
echo.
echo Two command windows will open:
echo - Backend Server (keep open)
echo - Frontend Dev Server (keep open)
echo.
echo To stop: Close both command windows
echo        or press Ctrl+C in each
echo.
echo ======================================

timeout /t 5
