var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var resume = document.querySelector("button");
resume === null || resume === void 0 ? void 0 : resume.addEventListener("click", function (even) {
    var _a;
    even.preventDefault();
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Phone = document.getElementById("phone");
    var Company = document.getElementById("company");
    var CompanyDescrib = document.getElementById("companydescription");
    var Education = document.getElementById("Education");
    var Skills = document.getElementById("Skills");
    var createImageInput = document.getElementById("pic");
    var UserURL = document.getElementById('userURL');
    if (Name &&
        Email &&
        Phone &&
        Company &&
        CompanyDescrib &&
        Education &&
        Skills &&
        createImageInput &&
        UserURL) {
        var NameValue_1 = Name.value;
        var EmailValue_1 = Email.value;
        var PhoneValue_1 = Phone.value;
        var CompanyValue_1 = Company.value;
        var CompanyDescribValue_1 = CompanyDescrib.value;
        var EducationValue_1 = Education.value;
        var SkillsValue_1 = Skills.value;
        // here is the code of PDF
        var urlPDFValue = UserURL.value;
        var path_1 = "resume/".concat(urlPDFValue.replace(/\s+/g, "__"), "__cv.html");
        // Handle image
        var imageURL_1 = "";
        var file = (_a = createImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                imageURL_1 = reader_1.result;
                // input
                var resumeOutput = "\n<div style=\"background-color: #ebd6c9;\">\n<h2 style=\"display: flex; justify-content: center; color: #DCA47C;\">RESUME</h2>\n<br>\n<h3 style=\"color: #DCA47C; display: flex; justify-content: center;\">INFORMATION</h3>\n<div style=\"display: flex; justify-content: center ;gap: 20px;\">\n<img src=\"".concat(imageURL_1, "\" alt=\"profile-image\" height=\"100\" width=\"100\" />\n<p>Name:").concat(NameValue_1, "  </p> \n<p>Email: ").concat(EmailValue_1, "</p> \n<p>Phone:").concat(PhoneValue_1, "  </p> \n</div>\n<br>\n\n<h3 style=\"display: flex; justify-content: center; color: #DCA47C;\">EXPERIENCE</h3>\n<p style=\"display: flex; justify-content: center;\"> Company: ").concat(CompanyValue_1, "  </p>\n<p style=\"display: flex; justify-content: center;\">Company Description: ").concat(CompanyDescribValue_1, "  </p>\n<br>\n<h3 style=\"display: flex; justify-content: center; color: #DCA47C;\">EDUCATION</h3>\n<p style=\"display: flex; justify-content: center;\">Education: ").concat(EducationValue_1, "  </p>\n\n\n\n<br>\n<h3 style=\"display: flex; justify-content: center; color: #DCA47C;\">SKILLS</h3>\n<p style=\"display: flex; justify-content: center; \">Skills: ").concat(SkillsValue_1, " </p>\n</div>\n");
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
                downloadLink.download = path_1;
                downloadLink.textContent = 'download your 2024 resume';
                var resumeOutputElement = document.getElementById('output-resume');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    resumeOutputElement.classList.remove('hidden');
                    // Create Container for Button
                    var buttonContainer = document.createElement("div");
                    buttonContainer.id = 'buttonContainer';
                    resumeOutputElement.appendChild(buttonContainer);
                    // Add download PDF button
                    var downloadButton = document.createElement('button');
                    downloadButton.textContent = 'Download as PDF';
                    downloadButton.addEventListener('click', function () {
                        window.print(); //Open the print dialog, allowing the user to save the PDF;
                    });
                    buttonContainer.appendChild(downloadButton);
                    // Add sharable link in button
                    var sharableLinkButton = document.createElement('button');
                    sharableLinkButton.textContent = "Copy Shareable Link";
                    sharableLinkButton.addEventListener('click', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var shareLink, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        shareLink = "https://yourdomain.com/resume/".concat(NameValue_1.replace(/\s+/g, "__"), "_cv.html");
                                        return [4 /*yield*/, navigator.clipboard.writeText(shareLink)];
                                    case 1:
                                        _a.sent();
                                        alert("Link copied to clipboard");
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_1 = _a.sent();
                                        console.error('failed too copied', error_1);
                                        alert('Failed to copy to clipboard.Please try again.');
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    });
                    buttonContainer.appendChild(sharableLinkButton);
                    resumeOutputElement.appendChild(downloadLink);
                    makeEditable();
                }
                else {
                    console.error('The resume output element is missing');
                }
            };
            reader_1.readAsDataURL(file); // Read file as Data URL
        }
        else {
            console.error("No image file selected.");
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
;
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (editableElement) {
        editableElement.addEventListener('click', function () {
            var _a;
            var currentElement = editableElement;
            var currentValue = currentElement.textContent || "";
            // Replace Contact
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
