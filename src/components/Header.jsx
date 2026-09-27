import { Smile, TreePalm, Laptop, BookSearch, CircleQuestionMark, Store, Mail, Users, Heart, Sun, Rocket, Handshake, Truck, Menu, AlignJustify, Search, Languages, ExternalLink} from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function NewCards() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const CardsProps = [
        // {
        // //   icon: TreePalm,
        //   title: "عن المركز"
        // },
        // {
        // //   icon: Laptop,
        //   title: "الخدمات الالكترونية"
        // },
        // {
        // //   icon: BookSearch,
        //   title: "الادلة الارشادية"
        // },
        // {
        // //   icon: CircleQuestionMark,
        //   title: "الاسئلة الشائعة"
        // },
        // {
        // //   icon: Store,
        //   title: "دليل الاعمال"
        // },
        // {
        // //   icon: Mail ,
        //   title: "تواصل معنا"
        // },
        // {
        // //   icon: Users ,
        //   title: "تواصل معنا"
        // },
        // {
        // //   icon: Heart,
        //   title: "العملاء"
        // },
        //         {
        // //   icon: Sun ,
        //   title: "الخدمات"
        // },
        //         {
        // //   icon: Rocket,
        //   title: "الافراد"
        // },
        //         {
        // //   icon: Handshake ,
        //   title: "المعاملات"
        // },
        //         {
        // //   icon: Truck ,
        //   title: "شركات"
        // },
        //         {
        // //   icon: Sun ,
        //   title: "منارات"
        // },
        //  {
        // //   icon: TreePalm,
        //   title: "عن المركز"
        // },
        // {
        // //   icon: Laptop,
        //   title: "الخدمات الالكترونية"
        // },
        // {
        // //   icon: BookSearch,
        //   title: "الادلة الارشادية"
        // },
        // {
        // //   icon: CircleQuestionMark,
        //   title: "الاسئلة الشائعة"
        // },
        {
            //   icon: Store,
            title: "دليل الاعمال"
        },
        {
            //   icon: TreePalm,
            title: "عن المركز"
        },
        {
            //   icon: Laptop,
            title: "الخدمات الالكترونية"
        },
        {
            //   icon: BookSearch,
            title: "الادلة الارشادية"
        },
        {
            //   icon: CircleQuestionMark,
            title: "الاسئلة الشائعة"
        },
        {
            //   icon: Store,
            title: "دليل الاعمال"
        },
    ];

    const getCardsData = () => {
        switch (currentLang) {
            case 'ar':
                return [
                    { title: "عن ثابي" },
                    { title: "جدولة ذكية للزيارات" },
                    { title: "تقارير لحظية" },
                    { title: "متابعة الامتثال" },
                    { title: "إشعارات فورية" },
                    { title: "لوحة تحكم موحدة" },];
            case 'en':
                return [
                    { title: "About Thaby" },
                    { title: "Smart Visit Scheduling" },
                    { title: "Real-Time Reports" },
                    { title: "Compliance Monitoring" },
                    { title: "Instant Notifications" },
                    { title: "Unified Dashboard" }
                ];
            case 'sp':
                return [
                    { title: "Sobre Thaby" },
                    { title: "Programación inteligente de visitas" },
                    { title: "Informes en tiempo real" },
                    { title: "Seguimiento del cumplimiento" },
                    { title: "Notificaciones instantáneas" },
                    { title: "Panel de control unificado" }
                ];
            case 'ur':
                return [
                    { title: "ثابی کے بارے میں" },
                    { title: "ذہین وزٹ شیڈولنگ" },
                    { title: "حقیقی وقت کی رپورٹس" },
                    { title: "تعمیل کی نگرانی" },
                    { title: "فوری اطلاعات" },
                    { title: "متحدہ ڈیش بورڈ" }
                ];
        }
    }
    const cardsData = getCardsData();
    console.log(cardsData);
    return (
        <>
            {cardsData.map((e) => (

                <button style={{ fontFamily: "Thamanyah" }} class="w-50 h-30 justify-items-center content-center rounded-4xl bg-gray-100 p-10 border text-center text-sm text-white transition-all shadow-lg hover:shadow-lg focus:shadow-none active:bg-gray-30 hover:bg-gray-200 hover:text-black active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button ">
                    <div>
                        <h1 class="text-black  text-sm" > {e.title} </h1>
                    </div>
                </button>

            ))}

        </>
    );
}