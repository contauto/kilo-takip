"use client";
import { useState } from 'react';
import Input from "@/components/form/Input";
import {useRouter} from "next/navigation";

const Form = () => {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
    });
    const [errors, setErrors] = useState({});
    const router=useRouter()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const savetoLocalStorage = (data) => {
        const date = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })
        const oldData = (localStorage.getItem('bmi')) || "";
        const newData =  "[" + data.height + ";" + data.weight + ";" + date + "]," + oldData;
        localStorage.setItem('bmi', newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            savetoLocalStorage(formData)
            setFormData({
                height: '',
                weight: '',
            });
            setErrors({});
        }
        router.refresh()
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.height.trim()) {
            errors.height = 'Boy bilgisi gereklidir';
        }
        else if (!parseFloat(data.height)) {
            errors.height = 'Boy bilgisi nümerik olmalıdır';
        }

        if (!data.weight.trim()) {
            errors.weight = 'Kilo bilgisi gereklidir';
        }
        else if (!parseFloat(data.weight)) {
            errors.weight = 'Kilo bilgisi nümerik olmalıdır';
        }

        return errors;
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <Input
                label="Boy (cm)"
                placeholder="Boyunuzu giriniz"
                value={formData.height}
                onChange={handleChange}
                error={errors.height}
                type="number"
                name="height"
            />
            <Input
                label="Kilo (kg)"
                placeholder="Kilonuzu giriniz"
                value={formData.weight}
                onChange={handleChange}
                error={errors.weight}
                type="number"
                name="weight"
            />
            <div className="flex justify-center">
                <button
                    className="px-4 py-2 bg-amber-900 text-white rounded-md"
                    type="submit"
                >
                    Kaydet
                </button>
            </div>

        </form>
    );
};

export default Form;
