<script setup>
</script>
<template>
    <form action="#" method="GET">
        <table>
            <tr>
                <td class="td_left"><label for="username">UserName</label></td>
                <td class="td_right"><input type="text" name="username" id="username" placeholder="plz input username">
                </td>
            </tr>

            <tr>
                <td class="td_left"><label for="password">PassWord</label></td>
                <td class="td_right"><input type="password" name="password" id="password"
                        placeholder="plz input password"></td>
            </tr>

            <tr>
                <td class="td_left"><label for="email">Email</label></td>
                <td class="td_right"><input type="email" name="email" id="email" placeholder="plz input email"></td>
            </tr>

            <tr>
                <td class="td_left"><label for="name">Name</label></td>
                <td class="td_right"><input type="text" name="name" id="name" placeholder="plz input name"></td>
            </tr>

            <tr>
                <td class="td_left"><label for="tel">Telephone</label></td>
                <td class="td_right"><input type="text" name="tel" id="tel" placeholder="plz input tel"></td>
            </tr>

            <tr>
                <td class="td_left"><label>Gender</label></td>
                <td class="td_right">
                    <input type="radio" name="gender" value="male"> M
                    <input type="radio" name="gender" value="female"> F
                </td>
            </tr>

            <tr>
                <td class="td_left"><label for="birthday">Birthday</label></td>
                <td class="td_right"><input type="date" name="birthday" id="birthday" placeholder="plz input birthday">
                </td>
            </tr>

            <tr>
                <td class="td_left"><label for="checkcode">CheckCode</label></td>
                <td class="td_right"><input type="text" name="checkcode" id="checkcode"
                        placeholder="plz input checkcode">
                    <img id="img_check" src="img/checkcode.png">
                </td>
            </tr>

            <tr>
                <td colspan="2" align="center">

                    <input type="button" id="btn_sub" value="register" onclick="location.href='index.html'">
                </td>
            </tr>
        </table>
    </form>
</template>
<style>

</style>