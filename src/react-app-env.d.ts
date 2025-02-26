/// <reference types="react-scripts" />

type QuestionType = {
  question: string;
  answer: string;
};

type FaqPropsType = {
  questions: Question[]; // It's an array of objects with questions and answers.
};

// type bookType = {
//   id: number;
//   image: string;
//   name: string;
//   categoryId?: number
//   title?: string
//   code?: number,
//   description?: string
//   publisher?: string;
//   categoryName?: string;
//   discount?: number;
//   sale?: number;
//   price?: number;
//   shabak?: number
//   author?: string
//   language?: string
//   publishYear?: number,
//   size?: string
//   pages?: number
//   printNumber?: number
//   weight?: number
//   sale?: number
// };

// type PrimaryButtonComponentType = {
//   //type JSX.Element ro vase in gozashtim chun vase button login ye component loading gozashtim
//   value: string | ReadonlyArray<string> | number | undefined | JSX.Element;
//   onClick?: () => void | MouseEventHandler<HTMLButtonElement>
//   disabled?: boolean
//   type?: 'submit' | 'reset' | 'button';
// }

// type PrimaryInputComponentType = {
//   lableValue?: string;
//   inputName: string;
//   inputType?: string;
//   inputId: string;
//   inputPlaceholder?: string;
//   defaultValue?: string;
//   inputWidth?: string;
//   onChange?: React.FormEventHandler<HTMLInputElement>;
//   errorMessage?: string;
// };

// type indexSectionPropsType = {
//   SectionTitle: string;
//   titlePosition?: string;
//   bookList: {
//     id: number;
//     image: string;
//     name: string;
//     publisher?: string;
//     category?: string;
//     discount?: number;
//     sale?: number;
//     price?: number;
//   }[];
// };

// type bookPriceMinMaxInShopPageFilterType = { min: number; max: number } | null;
// type allCategoryInShopPageFilterType = { categoryId: string; categoryName: string }[] | null;

// type loginInfoType = {
//   username: string;
//   password: string;
// };

// type BlogPostType = {
//   loading: boolean;
//   posts: {
//     id: number;
//     name: string;
//     image: string;
//     description: string;
//   }[];
// };
