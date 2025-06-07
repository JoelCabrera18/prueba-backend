"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEntity = exports.StatusCredential = void 0;
const error_messages_enum_1 = require("../../../utils/enums/auth/error-messages.enum");
const invalid_login_exception_1 = require("../../application/exceptions/invalid.login.exception");
const password_not_equals_exception_copy_1 = require("../exceptions/password-not-equals.exception copy");
const password_object_1 = require("../value-objects/password.object");
const username_object_1 = require("../value-objects/username.object");
var StatusCredential;
(function (StatusCredential) {
    StatusCredential[StatusCredential["Blocked"] = 0] = "Blocked";
    StatusCredential[StatusCredential["Active"] = 1] = "Active";
    StatusCredential[StatusCredential["Inactive"] = 2] = "Inactive";
})(StatusCredential || (exports.StatusCredential = StatusCredential = {}));
class AuthEntity {
    constructor(id_credential, id_enterprise, id_person, username, password, statusCredential) {
        this.id_enterprise = id_enterprise;
        this.id_credential = id_credential;
        this.username = username;
        this.password = password;
        this.statusCredential = statusCredential;
        this.id_person = id_person;
    }
    static createCredential(credentialLike, encriptPassword = false) {
        if (!credentialLike || credentialLike === undefined) {
            throw new invalid_login_exception_1.InvalidLoginException(error_messages_enum_1.ErrorMessages.InvalidCredential);
        }
        const { id_credential, id_enterprise, id_person, username, password, statusCredential, } = credentialLike;
        const $username = new username_object_1.Username(username);
        const $password = new password_object_1.Password(password, encriptPassword);
        return new AuthEntity(id_credential, id_enterprise, id_person, $username, $password, statusCredential);
    }
    changePassword(newPassword) {
        this.password = new password_object_1.Password(newPassword, true);
    }
    compareBothsPasswords(passwordForm) {
        const passwordsAreEquals = password_object_1.Password.comparePasswords(passwordForm, this.password);
        if (!passwordsAreEquals) {
            throw new password_not_equals_exception_copy_1.PasswordsNotEqualsException(error_messages_enum_1.ErrorMessages.CredentialsAreNotEquals);
        }
    }
    blockedUsername() {
        this.statusCredential = StatusCredential.Blocked;
    }
    get Password() {
        return this.password;
    }
    set Password(password) {
        this.password = password;
    }
    get Username() {
        return this.username;
    }
    get IdEnterprise() {
        return this.id_enterprise;
    }
    get IdPerson() {
        return this.id_person;
    }
    get IdCredential() {
        return this.id_credential;
    }
    get StatusCredential() {
        return this.statusCredential;
    }
}
exports.AuthEntity = AuthEntity;
