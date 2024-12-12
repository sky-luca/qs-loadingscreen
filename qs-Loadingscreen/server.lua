RegisterNetEvent('loadingScreen:requestPlayerName')
AddEventHandler('loadingScreen:requestPlayerName', function()
    local src = source
    local playerName = GetPlayerName(src)
    TriggerClientEvent('loadingScreen:setPlayerName', src, playerName)
end)
