"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimProductDTO = void 0;
const typeorm_1 = require("typeorm");
const DimCategory_1 = require("../DimCategory/DimCategory");
let DimProductDTO = class DimProductDTO {
};
exports.DimProductDTO = DimProductDTO;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'product_pk' }),
    __metadata("design:type", Number)
], DimProductDTO.prototype, "productPk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product_id' }),
    __metadata("design:type", Number)
], DimProductDTO.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'product_name' }),
    __metadata("design:type", String)
], DimProductDTO.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimCategory_1.DimCategoryDTO, (category) => category.products),
    (0, typeorm_1.JoinColumn)({ name: 'category_fk', referencedColumnName: 'categoryPk' }),
    __metadata("design:type", DimCategory_1.DimCategoryDTO)
], DimProductDTO.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        name: 'total_weight',
        precision: 5,
        scale: 3,
    }),
    __metadata("design:type", Number)
], DimProductDTO.prototype, "totalWeight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        name: 'gold_weight',
        precision: 5,
        scale: 3,
    }),
    __metadata("design:type", Number)
], DimProductDTO.prototype, "goldWeight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        name: 'gem_weight',
        precision: 4,
        scale: 3,
    }),
    __metadata("design:type", Number)
], DimProductDTO.prototype, "gemWeight", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], DimProductDTO.prototype, "wage", void 0);
exports.DimProductDTO = DimProductDTO = __decorate([
    (0, typeorm_1.Entity)('dim_products')
], DimProductDTO);
//# sourceMappingURL=DimProduct.js.map