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
exports.DimVendorDTO = void 0;
const typeorm_1 = require("typeorm");
const FactOrderSale_1 = require("../FactOrderSale/FactOrderSale");
let DimVendorDTO = class DimVendorDTO {
};
exports.DimVendorDTO = DimVendorDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'vendor_pk' }),
    __metadata("design:type", Number)
], DimVendorDTO.prototype, "vendorPk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vendor_id' }),
    __metadata("design:type", Number)
], DimVendorDTO.prototype, "vendorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'vendor_name' }),
    __metadata("design:type", String)
], DimVendorDTO.prototype, "vendorName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'vendor_code' }),
    __metadata("design:type", String)
], DimVendorDTO.prototype, "vendorCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'vendor_address' }),
    __metadata("design:type", String)
], DimVendorDTO.prototype, "vendorAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FactOrderSale_1.FactOrderSaleDTO, (orderSale) => orderSale.goldPrice),
    __metadata("design:type", Promise)
], DimVendorDTO.prototype, "orderSales", void 0);
exports.DimVendorDTO = DimVendorDTO = __decorate([
    (0, typeorm_1.Entity)('dim_vendors')
], DimVendorDTO);
//# sourceMappingURL=DimVendor.js.map