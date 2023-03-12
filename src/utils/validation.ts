// eslint-disable-next-line max-classes-per-file
import block from "./block";

export enum ValidationType {
    first_name = "first_name",
    second_name = "second_name",
    display_name = "display_name",
    login = "login",
    email = "email",
    oldPassword = 'oldPassword',
    newPassword = 'newPassword',
    password = 'password',
    repeatPassword = 'repeatPassword',
    phone = "phone",
    addUser = 'addUser'
}

class UnreachableCaseError extends Error {
    constructor(val: never) {
    super(`Smth goes wrong: ${JSON.stringify(val)}`);
}}

class Validator {
    dname(value: string): [boolean, string] {
        return [
        /^[A-ZА-Я][A-ZА-Яa-zа-я-]+$/.test(value),
        "Latin and Cyrillic characters, as well as a hyphen, are allowed",
        ];
    }

    login(value: string): [boolean, string] {
        return [
        /(?!^\d+$)[A-Za-z0-9_-]{3,20}/.test(value),
        "Only English letters and numbers without spaces, _ and - characters are also allowed",
        ];
    }

    email(value: string): [boolean, string] {
        const regexp =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.+[a-zA-Z0-9]+$/.test(
            value
        );
        return [regexp, "Try again"];
    }

    password(value: string): [boolean, string] {
        return [
        /[A-Za-z0-9]{2,20}/.test(value) &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value),
        "2 to 20 characters, at least one uppercase letter and number required",
        ];
    }

    phone(value: string): [boolean, string] {
        return [/\+?[0-9]{10,15}/.test(value), "Try again"];
    }

    validate(type: ValidationType, value: string): [boolean, string] {
        switch (!value.length) {
        case true:
            return [false, "Value must not be empty"];
        case false:
            switch (type) {
            case ValidationType.login:
            case ValidationType.addUser:
                return this.login(value);
            case ValidationType.first_name:
            case ValidationType.second_name:
            case ValidationType.display_name:
                return this.dname(value);
            case ValidationType.email:
                return this.email(value);
                case ValidationType.password:
                case ValidationType.newPassword:
                case ValidationType.oldPassword:
                case ValidationType.repeatPassword:
                    return this.password(value);
            case ValidationType.phone:
                return this.phone(value);
            default:
                throw new UnreachableCaseError(type);
            }
        }
    }
    }

    export default new Validator();


    export function Validation(
    inputs: NodeListOf<HTMLInputElement>,
    refs: {
        [x: string]: Record<string, block<any>>;
        login?: any;
        password?: any;
        email?: any;
        first_name?: any;
        second_name?: any;
        phone?: any;
        repeatPassword?: any;
        newPassword?: any;
        oldPassword?: any;
    },
    ): [Record<string, unknown>, boolean] {
        const loginData: Record<string, unknown> = {};
        const validator = new Validator();
        const isValid = true;
        let validation = true;

    inputs.forEach((input) => {
        loginData[input.name] = input.value;
        const [valid, text] = validator.validate(
        <ValidationType>input.name,
        input.value
        );

        if (!valid && isValid) {
            validation = !isValid;
        }

        if (input.name === "login") {
        refs.login.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "password") {
        refs.password.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "email") {
        refs.email.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "first_name") {
        refs.first_name.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "second_name") {
        refs.second_name.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "display_name") {
        // @ts-ignore
        refs.display_name.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "phone") {
        refs.phone.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "repeatPassword") {
        refs.repeatPassword.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === "oldPassword") {
        refs.oldPassword.refs.error.setProps({
            isValid: valid,
            validateMessage: text,
        });
        }

        if (input.name === 'newPassword') {
            refs.newPassword.refs.error.setProps({
                isValid: valid,
                validateMessage: text,
            });
        }

    });
    return [loginData, validation];
    }
