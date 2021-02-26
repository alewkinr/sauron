package ru.sber.aas21.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import ru.sber.aas21.model.ErrorResponse;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public final ResponseEntity<ErrorResponse> handleUserNotFoundException
            (CustomException ex, WebRequest request) {
        ex.printStackTrace();
        ErrorResponse error = new ErrorResponse(ex.getMessage(), ex.getClass(), ex.getLocalizedMessage());
        return new ResponseEntity<>(error, ex.getHttpStatus());
    }

    @ExceptionHandler(RuntimeException.class)
    public final ResponseEntity<ErrorResponse> handleInvalidTraceIdException
            (RuntimeException ex, WebRequest request) {
        ex.printStackTrace();
        ErrorResponse error = new ErrorResponse(ex.getMessage(), ex.getClass(), ex.getLocalizedMessage());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
