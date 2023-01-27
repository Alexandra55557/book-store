<template>
    <div class="create-post">
        <form>
            <h3 class="text-center">Добавить книгу в библиотеку.</h3>
            <div class="form-group">
                <p>Добавьте изображение</p>
                <input type="file"
                    ref="files"
                    @change="handleFileUpload()"
                    multiple
                    accept="image/*"
                    class="invisible"
                >  
                <i @click="addFiles"><strong class="secondary btn">Добавить изображение</strong></i> 
            </div>
            <div class="filesListing" v-for="(file, key) in files" :key="file" > 
                {{file.name}}
                <button class="waves-effect waves-light btn-small red accent-4" @click="removeFiles(key)"> Удалить </button>
            </div> 
            <div class="form-group">
                <p>Введите название книги</p>
                <input class="form-control item" type="text" name="title" id="text" placeholder="Название книги" required>
            </div>
            <div class="form-group">
                <p>Введите автора</p>
                <input class="form-control item" type="text" name="password" id="text" placeholder="Введите автора" required>  
            </div>
            <div class="form-group">
                <p>Добавьте описание</p>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="price">
                <p>Введите цену:</p>
                <a><input type="number" min="0" max="100" id="price" name="price"/> руб.</a>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block create-account" type="submit">Добавить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: [],
        }
    },

    methods: {
        handleFileUpload() {
            let uploadFiles = this.$refs.files.files
            for(let i = 0; i < uploadFiles.length; i++) {
                this.files.push(uploadFiles[i])
            }
        },
        addFiles() {
            this.$refs.files.click()  
        },
        removeFiles(key) {
            this.files.splice(key, 1)
        }
    }
}
</script>


<style scoped>
.create-post{
    padding: 50px 280px;
}

.form-group p {
    font-family: italic;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
}

.form-group h1 {
    font-family: italic;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
}

.create-post form {
  max-width: 800px;
  padding: 50px 70px;
  border-radius: 10px;
  box-shadow: 4px 4px 15px #2B4F5A;
  background-color:#fff;
}

.create-post form h3 {
  font-weight: bold;
  margin-bottom: 30px;
}

.create-post .item {
  border-radius: 10px;
  margin-bottom: 25px;
  padding: 10px 20px;
}

.create-post .create-account {
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: nowrap;
  background-color:#2B4F5A;
  border: none;
  color: white;
  margin-top: 20px;
  margin-left: 260px;
}

.invisible {
    position: absolute;
    top: -500px;
}

.price {
    display: flex; 
    margin-top: 15px; 
    font-family: italic;
    font-weight: bold;
    font-size: 18px;
    margin-left: 220px;  
}

.price input {
    margin-left: 10px; 
    border-color: #2B4F5A;
    background: white;
    border-radius: 5px;
    border-width: 2px;
}

.filesListing {
    margin-top: 10px;
}
.filesListing button {
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: nowrap;
    background-color:#2B4F5A;
    border: none;
    color: white;
}

</style>