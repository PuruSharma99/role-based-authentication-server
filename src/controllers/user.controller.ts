export const me = (req: any, res: any) => {
    return res.json({
        user: (req as any).user
    })
}
