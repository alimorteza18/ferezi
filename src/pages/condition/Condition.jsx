import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import TrayWrapper from "layouts/wrappers/TrayWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

const Condition = () => {
  const { i18n } = useTranslation();

  const { t } = useTranslation();
  const conditions = {
    fa: (
      <div className="text-justify flex-wrap">
        <h1 className="mt-6 text-xl font-bold  mb-3">
          قوانین و مقررات سایت Ferezi :
        </h1>

        <p>به وب سایت فروشگاه اینترنتی Ferezi خوش آمدید.</p>

        <p>
          تمامی افرادی که به طور مستقیم یا غیر مستقیم از جمله میهمانان یا
          کاربران ثبت نام شده از محتوای وب سایت Ferezi استفاده می کنند، باید
          شرایط زیر را به طور کامل بپذیرند.
        </p>

        <p>
          محتوای این صفحه و شرایط و ضوابط استفاده از سایت ممکن است در هر زمان
          بدون اطلاع کاربران تغییر کند.
        </p>

        <p>تمام تغییرات ایجاد شده در این صفحه قابل مشاهده خواهد بود.</p>

        <h1 className="mt-6 text-xl font-bold  mb-3"> دسترسی به وب سایت:</h1>

        <p>
          خدمات و محتوای این وب سایت به صورت کامل رایگان بوده و در دسترس همه
          عموم قرار دارد.
        </p>

        <p>
          بنابراین در صورت عدم دسترسی به این وب سایت به هر دلیلی یا قطع خدمات و
          مسدود شدن محتوای وب سایت ما هیچ گونه مسئولیتی را قبول نخواهیم کرد.
        </p>

        <p>
          اگرچه محتوای این وب سایت بسیار قابل اعتماد است ما ضمانت نمیکنیم که این
          وب سایت و محتوای آن بدون اشکال و خطا باشد.
        </p>

        <p>
          تمامی لینکهای خارجی داده شده تنها برای اطلاع رسانی بوده و این وب سایت
          هیچ گونه مسئولیتی را در قبال محتوای آنها ندارد.
        </p>

        <h1 className="mt-6 text-xl font-bold  mb-3"> مالکیت حقوقی:</h1>

        <p>
          تمامی حقوق مادی و معنوی این وب سایت و محتوای آن از جمله حقوق کپی رایت
          نزد ما محفوظ است.
        </p>

        <p>
          هیچ یک از محتوای ما کپی برداری از منابع داخلی فارسی نبوده و اکثر
          محتوای موجود به صورت اختصاصی تولید شده اند.
        </p>

        <p>
          به دلیل آن که محتوای موجود به صورت اختصاصی تولید میشوند کپی برداری از
          آن با ذکر آدرس وب سایت Ferezi و همچنین کسب اجازه از مدیر وب سایت از
          طریق فرم تماس با ما بلا مانع است.
        </p>

        <p>
          همچنین استفاده غیر شخصی از محتوای وب سایت Ferezi نیز در صورت عدم داشتن
          اجازه کافی ممنوع است.
        </p>

        <p>
          در غیر این صورت ما این اجازه را به خود میدهیم تا از فرد و وب سایت کپی
          کننده شکایت کرده و یا وب سایت خاطی را از لیست نتایج موتورهای جستجوگر
          معروف از جمله گوگل حذف کنیم‌.
        </p>

        <h1 className="mt-6 text-xl font-bold  mb-3"> حریم شخصی افراد:</h1>

        <p>
          هیچ یک از اطلاعات وارد شده حساس در این وب سایت از جمله ایمیلها شماره
          تلفن و موبایلها و سایر (موارد منتشر نخواهد شد و به صورت کامل نزد ما
          محفوظ خواهد ماند.
        </p>

        <p>
          برخی از اطلاعات پایه‌ای شما مانند آدرس IP توسط سرویسهای آمارگیری از
          جمله Google Webmasters، Google Analytics) جمع آوری خواهند شد که فقط و
          فقط برای افزایش رضایت کاربران از این وب سایت استفاده قرار خواهندگرفت.
        </p>

        <p>
          اطلاعات غیرحساس مانند ،نام نام خانوادگی ممکن است در قسمتهای مختلف سایت
          از جمله قسمت نظرات به صورت عمومی نشان داده شوند.
        </p>

        <h1 className="mt-6 text-xl font-bold  mb-3">
          {" "}
          شرایط و ضوابط استفاده از فروشگاه اینترنتی Ferezi :
        </h1>

        <p>
          استفاده از فروشگاه اینترنتی Ferezi به معنی توافق کامل شما با شرایط و
          ضوابط ذیل تلقی می گردد:
        </p>

        <p>
          • خرید کالا از فروشگاه اینترنتی Ferezi بر مبنای قوانین و آئین نامه های
          موجود در تجارت الکترونیک و با رعایت کامل تمام قوانین ایران صورت
          میپذیرد.
        </p>

        <p>
          استفاده غیرتجاری از محتویات سایت با ذکر منبع بلامانع است و اگر مایلید
          از اطلاعات موجود در سایت جهت مقاصد تجاری استفاده نمایید باید از طریق
          پست الکترونیکی ....... درخواست خود را ارسال نموده و اجازه نامه کتبی
          اخذ نمایید.
        </p>

        <p>
          کاربران هنگام سفارش کالا ملزم می باشند اطلاعات صحیح کامل را در پایگاه
          درج کنند. بدیهی است کاستی یا نادرستی اطلاعات، مانع تکمیل مراحل سفارش
          خواهد شد.
        </p>

        <p>
          ارتباط فروشگاه اینترنتی Ferezi با کاربران از طريق وبسایت .... برقرار
          می گردد و فقط با استفاده از اطلاعاتی که کاربران در سایت درج کردهاند
          همانند نشانی، تلفن و ... صورت می پذیرد.
        </p>

        <p>
          فروشگاه اینترنتی Ferezi به هیچ وجه اطلاعات منحصر به فرد کاربران را به
          اشخاص و طرفین غیر واگذار نخواهد کرد و ضمنا با استفاده از آخرین فن آوری
          ها متعهد است حتى المقدور از حریم شخصی کاربران دفاع کند. هدف از ایجاد
          بخش نظرات در فروشگاه اینترنتی Ferezi ، اشتراک گذاری تجربه خرید
          محصولاتی است که به فروش می رسد.
        </p>

        <p>
          بخش نظرات فروشگاه اینترنتی Ferezi با دیگر سایت ها و شبکه های اجتماعی
          متفاوت است.
        </p>

        <p>
          در این بخش هر کاربر مجاز است در چهارچوب شرایط و قوانین سایت نظرات خود
          را به اشتراک بگذارد که پس از بررسی و تایید کارشناسان امکان مشاهده وجود
          دارد. بدیهی است که اگر قوانین سایت در نظرات کاربری رعایت نشود تایید
          نمیشود و در نتیجه در سایت به نمایش درنمی آید.
        </p>

        <p>
          فروشگاه اینترنتی Ferezi در قبال درستی یا نادرستی نظرات منتشر شده در
          این قسمت هیچگونه مسئولیتی ندارد.
        </p>

        <h1 className="mt-6 text-xl font-bold  mb-3">
          {" "}
          شرایط و ضوابط خدمات فروش کالا :
        </h1>

        <p>
          از نظر حقوقی در معاملات فروشگاه اینترنتیFerezi ، وبسایت.....به عنوان
          فروشنده و کاربر اینترنتی سفارش دهنده به عنوان خریدار تلقی می شوند.
        </p>

        <p>
          1- فروش کالا بر مبنای نوع و مقداری صورت می گیرد که خریدار آن را در
          فروشگاه اینترنتیFerezi درج نموده است.
        </p>

        <p>
          2- فروشنده ثبت سفارش کالا و مشخصات ارسال سفارش را به اطلاع خریدار
          میرساند.
        </p>

        <p>
          3- ارزش کالا یا کالاهای سفارش داده شده طبق فهرست قیمت سایت محاسبه شده
          و شامل کلیه مالیاتها و عوارض فروش خواهد بود.
        </p>

        <p>
          4- در صورت بروز مشکل در پردازش نهایی سبد خرید مانند اتمام موجودی کالا
          یا انصراف خریدار مبلغ پرداخت شده طی ۲۴ الی ۴۸ ساعت کاری به حساب خریدار
          واریز خواهد شد.
        </p>

        <p>
          همچنین تا پیش از ثبت نهایی هرگونه تغییر از جمله تغییر در موجودی کالا
          یا قیمت روی کالای افزوده شده به سبد خرید اعمال خواهد شد.
        </p>

        <p>
          بنابراین به خریدارانی که تمایل و تصمیم به خرید قطعی ،دارند توصیه میشود
          در اسرع وقت سفارش خود را نهایی کنند تا با اتمام موجودی یا تغییر قیمتی
          کالاها روبرو نشوند. بدیهی است که فروشنده هیچگونه مسئولیتی نسبت به
          کالاهایی که در سبد خرید رها شدهاست ندارد.
        </p>
      </div>
    ),
    en: (
      <div className="text-justify flex-wrap">
        <h1 className="mt-6 text-xl font-bold  mb-3">
          Ferezi rules and regulations:
        </h1>
        <p>Welcome to Ferezi online store website.</p>
        <p>
          All persons who directly or indirectly, including guests or registered
          users, use the content of the Ferezi website, must fully accept the
          following terms.
        </p>
        <p>
          The content of this page and the terms and conditions may change at
          any time without informing the users.
        </p>
        <p>All changes will be visible on this page.</p>
        <h1 className="mt-6 text-xl font-bold  mb-3">Access to the website:</h1>
        <p>
          The services and content of this website are completely free and in
        </p>
        <p>It is available to the public.</p>
        <p>
          Therefore, we will not accept any responsibility if this website is
          not accessible for any reason or if the service is interrupted and the
          content of our website is blocked.
        </p>
        <p>
          However the content of this website is very reliable, we do not
          guarantee that this website and its content are error-free.
        </p>
        <p>
          All external links given are for information only and this website is
          not responsible for their content.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">property rights:</h1>
        <p>
          We reserve the legal ownership of all material and moral rights of
          this website and its content, including copyright. None of our content
          is a copy of internal Persian sources and most of the existing content
          is produced exclusively. Because of the fact that the existing content
          is produced exclusively, copying it by mentioning the address of the
          Ferezi website and also obtaining permission from the webmaster
          through the contact form is unrestricted. The impersonal use of the
          Ferezi website content is also prohibited if there is not enough
          permission. Otherwise, we allow ourselves to sue the person and the
          copier's website or remove the wrong website from the list of results
          of popular search engines, including Google.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">Privacy:</h1>
        <p>
          None of the sensitive information entered on this website, including
          emails, phone numbers, mobile numbers, etc. (Items will not be
          published and will be fully protected by us)
        </p>
        <p>
          Some of your basic information, such as your IP address, will be
          collected by statistical services such as Google Webmasters, Google
          Analytics, which will only be used to increase user satisfaction from
          this website. Insensitive information, such as the last name, may be
          displayed in different parts of the site, including the comments
          section.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">
          Terms and conditions of use of Ferezi online store:
        </h1>
        <p>
          Using the Ferezi online store means your complete agreement with the
          following terms and conditions
        </p>
        <p>
          Purchase of goods from Ferezi online store is based on the rules and
          regulations in electronic commerce and in full compliance with all
          Iranian laws.
        </p>
        <p>
          The non-commercial use of the website's contents is prohibited by
          citing the source, and if you want to use the information on the site
          for commercial purposes, you must send your request via e-mail.
        </p>
        <p>
          Users are required when ordering goods do Inserting complete correct
          information in the database is obviously a deficiency or inaccuracy of
          the information.
        </p>
        <p>
          Ferezi online store communicates with users through the website... and
          only by using the information entered by users on the site, such as
          (address, phone, etc.).
        </p>
        <p>
          Ferezi online store will not hand over users' unique information to
          third parties and is committed to protecting users' privacy as much as
          possible by using the latest technologies.
        </p>
        <p>
          The purpose of creating a comment section in the Ferezi online store
          is to share the experience of buying products that are sold.
        </p>
        <p>
          The comment section of Ferezi online store is different from other
          sites and social networks.
        </p>
        <p>
          In this section, every user is allowed to share their opinions within
          the framework of the terms and conditions of the site, which can be
          viewed after review and approval by experts. It is obvious that if the
          rules of the site are not followed in the user comments, it will not
          be approved and as a result it will not be displayed on the site
        </p>
        <p>
          Ferezi online store is not responsible for the correctness or
          incorrectness of the opinions published in this section.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">
          Terms and conditions of sales services:
        </h1>
        <p>
          In the transactions of Ferezi online store, the website... is
          considered as the seller and the ordering internet user as the buyer.
        </p>
        <p>
          1.The sale of goods is based on the type and quantity that the buyer
          has entered in the Ferezi online store.
        </p>
        <p>
          2. The seller informs the buyer about the registration of the product
          order and the details of the order.
        </p>
        <p>
          3. The value of the goods or goods ordered is calculated according to
          the price list of the site and will include all taxes and duties.
        </p>
        <p>
          4.If there is a problem in the final processing of the shopping cart,
          such as the end of the product inventory or the buyer's cancellation,
          the amount paid will be credited to the buyer's account within 24 to
          48 working hours.
        </p>
        <p>
          Also, before the final registration, any changes, including changes in
          product inventory or price, will be applied to the product added to
          the shopping cart.
        </p>
        <p>
          Therefore, buyers who have the desire and decision to make a definite
          purchase are advised to finalize their order as soon as possible to
          avoid running out of stock or changing the price of the goods.
          Obviously, the seller has no responsibility
        </p>
      </div>
    ),
    ar: (
      <div className="text-justify flex-wrap">
        <h1 className="mt-6 text-xl font-bold  mb-3">قواعد موقع فريزي:</h1>
        <p>مرحبا بکم فی موقع متجر فریزی إلکترونی</p>
        <p>
          يستخدم جميع الأشخاص ، بما في ذلك الضيوف أو المستخدمون المسجلون ، محتوى
          موقع Ferezi ، يجب عليهم قبول الشروط التالية تمامًا.
        </p>
        <p>
          قد يتغير محتوى هذه الصفحة وشروط وأحكام استخدام الموقع في أي وقت دون
          إبلاغ المستخدمين.
        </p>
        <p>ستكون كافة التغييرات مرئية على هذه الصفحة.</p>
        <h1 className="mt-6 text-xl font-bold  mb-3">الوصول إلى الموقع:</h1>
        <p>
          الخدمات والمحتوى الموجود في هذا الموقع مجاني تمامًا وفي و هي متاحة
          للجمهور.
        </p>
        <p>
          ولذلك، فإننا لن نتحمل أي مسؤولية إذا تعذر الوصول إلى هذا الموقع لأي
          سبب من الأسباب أو إذا انقطعت الخدمة وتم حظر محتوى موقعنا.
        </p>
        <p>
          على الرغم من أن محتوى هذا الموقع موثوق للغاية، إلا أننا لا نضمن أن هذا
          الموقع ومحتواه خاليان من الأخطاء.
        </p>
        <p>
          جميع الروابط الخارجية المقدمة هي للعلم فقط وهذا الموقع ليس مسؤولاً عن
          محتواها.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">حقوق الملكية:</h1>
        <p>
          نحتفظ جميع الحقوق المادية والفكرية لهذا الموقع ومحتواه ، بما في ذلك
          حقوق النشر. لا يوجد أي من محتوياتنا نسخة من المصادر الفارسية الداخلية
          ويتم إنتاج معظم المحتوى الحالي حصريًا. نظرًا لحقيقة أن المحتوى الحالي
          يتم إنتاجه حصريًا ، فإن نسخه من خلال ذكر عنوان موقع Ferezi والحصول
          أيضًا على إذن من مشرف الموقع من خلال نموذج الاتصال أمر غير مقيد. يحظر
          أيضًا الاستخدام غير الشخصي لمحتوى موقع Ferezi إذا لم يكن هناك إذن
          كافٍ. بخلاف ذلك ، نسمح لأنفسنا بمقاضاة الشخص وموقع ناسخة الويب أو
          إزالة موقع الويب الخطأ من قائمة نتائج محركات البحث الشهيرة ، بما في
          ذلك Google.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">الخصوصية:</h1>
        <p>
          لن يتم جمع أي من المعلومات الحساسة التي تم إدخالها على هذا الموقع ،
          بما في ذلك رسائل البريد الإلكتروني وأرقام التلیفون وأرقام الموبایل
          المحمولة وما إلى ذلك (لن يتم نشر العناصر وستتم حمايتها بالكامل من
          قبلنا. التحليلات) ، والتي سيتم استخدامها فقط لزيادة رضا مستخدمي هذا
          الموقع. قد يتم عرض معلومات غير حساسة، مثل الاسم الأخير، في أجزاء
          مختلفة من الموقع، بما في ذلك قسم التعليقات.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">
          شروط وأحكام استخدام متجر فريزي الإلكتروني:
        </h1>
        <p>
          إن استخدام متجر Ferezi الإلكتروني يعني موافقتك الكاملة على الشروط
          والأحكام التالية
        </p>
        <p>
          • شراء البضائع من متجر فريزي الكتروني يعتمد على القواعد والأنظمة
          الخاصة بالتجارة الكترونية وبالامتثال الكامل لجميع القوانين الإيرانية.
        </p>
        <p>
          يمنع الاستخدام غير التجاري لمحتويات الموقع بذكر المصدر، وإذا كنت تريد
          استخدام المعلومات الموجودة في الموقع لأغراض تجارية، فيجب عليك إرسال
          طلبك عبر البريد الإلكتروني أرسل واحصل على إذن كتابي.
        </p>
        <p>
          يتعين على المستخدمين إدخال معلومات صحيحة وكاملة في قاعدة البيانات لطلب
          البضائع. ومن الواضح أن نقص المعلومات أو عدم دقتها يشكل عقبةسيتم
          الانتهاء من الطلب.
        </p>
        <p>
          يتواصل متجر فريزي الإلكتروني مع المستخدمين من خلال الموقع... وذلك فقط
          من خلال استخدام المعلومات التي يدخلها المستخدمون في الموقع مثل
          (العنوان،رقم التلیفون، وغيرها).
        </p>
        <p>
          لن يقوم متجر Ferezi عبر الإنترنت بتسليم المعلومات الفريدة للمستخدمين
          إلى أطراف ثالثة ويلتزم بحماية خصوصية المستخدمين قدر الإمكان باستخدام
          أحدث التقنيات.
        </p>
        <p>
          الغرض من إنشاء قسم التعليقات في متجر Ferezi الإلكتروني هو مشاركة تجربة
          شراء المنتجات التي يتم بيعها.
        </p>
        <p>
          يختلف قسم التعليقات في متجر Ferezi الإلكتروني عن المواقع وشبكات
          التواصل الاجتماعي الأخرى.
        </p>
        <p>
          في هذا القسم يُسمح لكل مستخدم بمشاركة آرائه في إطار شروط وأحكام
          الموقع، والتي يمكن الاطلاع عليها بعد مراجعتها والموافقة عليها من قبل
          الخبراء. ومن الواضح أنه إذا لم يتم اتباع قواعد الموقع في تعليقات
          المستخدمين فلن يتم الموافقة عليها ونتيجة لذلك لن يتم عرضها على الموقع
        </p>
        <p>
          متجر فريزي الإلكتروني غير مسؤول عن صحة أو عدم صحة الآراء المنشورة في
          هذا القسم.
        </p>
        <h1 className="mt-6 text-xl font-bold  mb-3">
          شروط وأحكام خدمات بيع البضائع:
        </h1>
        <p>
          في معاملات متجر Ferezi الإلكتروني، يعتبر الموقع الإلكتروني بمثابة
          البائع ومستخدم الإنترنت الذي يقوم بالطلب باعتباره المشتري.
        </p>
        <p>
          1. يتم بيع البضائع حسب النوع والكمية التي أدخلها المشتري في متجر فريزي
          الإلكتروني.
        </p>
        <p>2. يقوم البائع بإبلاغ المشتري بتسجيل طلب المنتج وتفاصيل الطلب.</p>
        <p>
          3. يتم احتساب قيمة السلعة أو البضائع المطلوبة حسب قائمة الأسعار الخاصة
          بالموقع وستشمل جميع الضرائب والرسوم.
        </p>
        <p>
          4.في حالة وجود مشكلة في المعالجة النهائية لسلة التسوق، مثل انتهاء
          مخزون المنتج أو إلغاء المشتري، سيتم إضافة المبلغ المدفوع إلى حساب
          المشتري خلال 24 إلى 48 ساعة عمل.
        </p>
        <p>
          أيضًا، قبل التسجيل النهائي، سيتم تطبيق أي تغييرات، بما في ذلك
          التغييرات في مخزون المنتج أو السعر، على المنتج المضاف إلى عربة التسوق
          أصبح.
        </p>
        <p>
          لذلك، ننصح المشترين الذين لديهم الرغبة والقرار بإجراء عملية شراء محددة
          بإتمام طلبهم في أسرع وقت ممكن لتجنب نفاد المخزون أو تغيير سعر البضائع.
          من الواضح أن البائع لا يتحمل أي مسؤولية عن البضائع المتبقية في عربة
          التسوق
        </p>
      </div>
    ),
  };
  return (
    <>
      <TitleWithUnderline
        title={t("conditions")}
        className="all-center mt-3 mb-2"
      />
      {conditions[i18n.language]}
    </>
  );
};

export default Condition;
