class IndexController {
    getAccountDetails(req: import("express").Request, res: import("express").Response): void {
        // Logic to retrieve account details
        res.send("Account details");
    }

    createTransaction(req: import("express").Request, res: import("express").Response): void {
        // Logic to create a transaction
        res.send("Transaction created");
    }
}

export default IndexController;