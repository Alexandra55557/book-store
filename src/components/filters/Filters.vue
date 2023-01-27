<template>
    <div class="content">
        <div class="selects">
            <UISelect v-for='select, index in selects' :key="index" :select='select' />
        </div>
        <div class="button">
            <div class="apply-button">
                <ApplyButton />
            </div>
            <div class="reset-button">
                <ResetButton />
            </div>
        </div>
        <div class="button">
            <div class="add-buttom">
                <AddButton />
            </div>
        </div>
    </div> 
</template>

<script>
import UISelect from '@/components/ui/UISelect';
import ResetButton from '@/components/ui/ResetButton';
import ApplyButton from '@/components/ui/ApplyButton';
import AddButton from '@/components/ui/AddButton'
export default {
    components: {
        ResetButton,
        ApplyButton,
        UISelect,
        AddButton,
    },
     data() {
        return {
            selects: [
                {
                    title: 'Жанры',
                    options: [
                        'Показать все',
                        'Художественная литература',
                        'Книги для детей',
                        'Образование',
                        'Деловая литература',
                        'Психология',
                        'Фантастика.Фэнтези',
                        'Научная фантастика',
                        'Мистика.Ужасы',
                        'Наука и техника',
                        'Искусство'
                    ]
                },
                {
                    title: 'Подборка',
                    options: [
                        'Показать все',
                        'Новинки литературы',
                        'Лучшее из лучших',
                        'Скоро в продаже'
                    ]
                },
                {
                    title: 'Издательство',
                    options: [
                        'Показать все',
                        'Эксмо',
                        'АСТ',
                        'Азбука',
                        'Росмэн'
                    ]
                }
            ]
        }
    }
}

</script>

<style scoped>
.content {
    display: flex;
    align-items: flex-end;
    gap: 20px;
}
.selects {
    display: flex;
    margin-top: 10px;
    gap: 20px;
}
.button {
    display: flex;
}
</style>