$(function () {

    $('.tombolTambahData').on('click', function () {
        $('#judulForm').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit').html('Tambah Data');
    });

    $('.tampilModalUbah').on('click', function () {

        $('#judulForm').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit').html('Ubah Data');

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: { id: id },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#nama').val(data.nama);
                $('#nim').val(data.nim);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
            }

        });
    });

});