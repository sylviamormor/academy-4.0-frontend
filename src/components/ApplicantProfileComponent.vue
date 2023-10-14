



<template>
    <div class="main">
        <div class="createProfile">
            <h1>Profiles Setting</h1>
            <button>Edit</button>
        </div>
        <form @submit.prevent="save()">
            <div class="img">
                <img src="../assets/icons/account.svg" alt="" srcset="" />
                <div class="formLabel">
                    <input class="fUpload" type="file" id="file" name="filename" />
                    <label class="fLabel" for="file"> Upload new image</label>
                </div>

                <h2 class="remove">x Remove</h2>
            </div>

            <div class="container">
                <div class="forms">
                    <div>
                        <label>Name</label>
                        <input class="inputField" placeholder="Full Name" readonly />
                    </div>
                    <div>
                        <label>Email</label>
                        <input class="inputField" placeholder="Email" readonly />
                    </div>

                    <div>
                        <label>Phone number</label>
                        <input type="tel" class="inputField" placeholder="Phone Number" readonly/>
                    </div>
                </div>
                <div class="forms">
                    <div>
                        <label>Country</label>
                        <input class="inputField" placeholder="Country" readonly/>
                    </div>
                    <div>
                        <label>Address</label>
                        <input class="inputAddress" placeholder="Address" readonly />
                    </div>
                </div>
            </div>
            <div class="mainButton">
                <button class="saveButton" type="submit">Save</button>
            </div>
        </form>
    </div>
</template>

<script>

</script>

<style scoped>
.createProfile {
    display: flex;
    justify-content: space-between;
}

.forms {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

.saveButton {
    height: 38px;
    width: 127px;
    border: none;
    color: white;
    background: #7557d3;
    border-radius: 3px;
    align-items: center;
    font-family: "Lato";
    font-size: 16px;
}

.inputAddress {
    width: 469px;
    height: 54px;
    left: 595px;
    top: 733px;
    color: black;
    background: rgba(117, 87, 211, 0.04);
}

.mainButton {
    text-align: center;
}

.inputField {
    width: 216px;
    height: 54px;
    left: 340px;
    top: 613px;
    color: black;
    background: rgba(117, 87, 211, 0.04);
}

::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    /* identical to box height, or 153% */
    letter-spacing: -0.117188px;
    color: #333758;
}

button {
    border: 1px solid #7557d3;
    border-radius: 3px;
    height: 38px;
    width: 127px;
    left: 937px;
    top: 382px;
    border-radius: 3px;
    color: #7557d3;
    background: white;
    cursor: pointer;
}

button:focus {
    color: #7557d3;
}

label {
    display: block;
    text-align: start;
}

input {
    width: 379px;
    height: 48px;
    left: 767px;
    top: 394px;
    margin-top: 3px;
    border: 1.5px solid #bdbdbd;
    border-radius: 4px;
    padding-left: 10px;

}

label {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    margin-top: 20px;
    color: #4f4f4f;
    margin-bottom: 8px;
}

.img {
    display: flex;
    gap: 32px;
    margin-top: 73px;
    margin-bottom: 40px;
}

.fLabel {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.117188px;
    text-decoration-line: underline;
    color: #333758;
    padding: 5px;
    opacity: 0.5;
}

.fUpload {
    display: none;
}

.formLabel {
    display: flex;
    justify-content: center;
}

h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    letter-spacing: -0.117188px;
    margin-top: 28px;
    color: #ff5722;
}

img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
}

.remove {
    cursor: pointer;
}
</style>
