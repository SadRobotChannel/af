$(document).ready(function () {
    $('#registration_form').validate({
        onfocusout: function (element) {
            this.element(element);
        },
        rules: {
            full_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone_number: {
                required: true
            },
            institute: {
                required: true
            },
            year_of_graduation: {
                required: true
            }
        },
        submitHandler: function () {
            var data = $('#registration_form').serialize();
            var url = "/application/register_submit";
            $.ajax(url, {
                data: data,
                success: registration_success,
                error: onError,
                type: "POST"
            });
            return false;
        }
    });
    
     $('#enrollment_form').submit(function () {
        var data = $('#enrollment_form').serialize();
        var url = "/application/enroll_submit/" + course_id + "/" + student_id + "/" + student_unique_key + "/";
        $.ajax(url, {
            data: data,
            success: enrollment_success,
            error: onError,
            type: "POST"
        });
        return false;
    });
});
var registration_success = function (data) {
    data = JSON.parse(data);

    if (typeof data.is_redirect !== 'undefined' && data.is_redirect) {
        window.location.href = data.redirect_url;
    } else {
        if (data.success) {
            showSuccess(data.successMessage, '/');
        } else {
            showError(data.errorMessage);
        }
    }
};
