import axios from 'axios';

export default async function dlocal(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    try {
        const response = await axios.post(apiUrl, req.body, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response?.status || 500).json({ error: 'Algo ha salido mal, por favor intenta nuevamente.' });
    }
}