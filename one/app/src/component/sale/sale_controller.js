import * as saleService from "../sale/sale_service.js";
import * as responseSender from "../../sender/response_sender.js";

export function getSaleCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createSale(request, response) {
    saleService.createSale(request.params.id)
        .then((sale) => {
            responseSender.sendCreatedResponse(sale, response);
        })
        .catch((error) => {
            throw error;
        })
}

export function getSaleEditFormById(request, response) {
    response.send("This URL is under construction");
}

export function updateSaleById(request, response) {
    response.send("This URL is under construction");
}

export function removeAllSales(request, response) {
    saleService.removeAllSales()
        .then((rows) => {
            responseSender.sendDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        })
}

export function removeSaleById(request, response) {
    response.send("This URL is under construction");
}

export function getAllSales(request, response) {
    saleService.getAllSales()
        .then((sales) => {
            responseSender.sendGotResponse(sales, response);
        })
        .catch((error) => {
            throw error;
        })
}

export function getSaleById(request, response) {
    saleService.getSaleById(request.params.id)
        .then((sale) => {
            responseSender.sendGotResponse(sale, response);
        })
        .catch((error) => {
            throw error;
        })
}
