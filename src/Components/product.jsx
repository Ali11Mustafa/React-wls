import {
  faBox,
  faBoxOpen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";

export default function Product({ data }) {
  return (
    <div className="flex flex-col justify-between text-gray-900  bg-white  w-[400px] scale-[65%] md:scale-75    rounded-[20px]   overflow-hidden shadow-lg ">
      <div className="p-4 overflow-hidden rounded-t-lg">
        <img
          className="object-cover object-top w-[300px]  mx-auto"
          src={data.imageUrl}
          alt="Mountain"
        />
      </div>

      <div className="p-4 text-center sm:mt-6">
        <h2 className="text-2xl font-bold md:text-3xl">{data.heading}</h2>
      </div>
      <ul className="flex items-center p-4 mt-4 text-gray-700 justify-evenly ">
        <li className="flex flex-col items-center justify-around text-2xl">
          <svg
            width="32"
            height="32"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.340507 3.26176C0.340507 3.16461 0.340507 3.06745 0.340507 2.9703C0.44771 2.68554 0.668815 2.55154 0.946872 2.46109C3.34888 1.67047 5.74753 0.873152 8.14954 0.0758334C8.6219 -0.0816202 8.83965 -0.00456823 9.11771 0.414191C9.70732 1.29861 10.2969 2.17968 10.8798 3.0641C10.977 3.21151 11.0206 3.21821 11.1211 3.0641C11.7006 2.18303 12.2869 1.30866 12.8731 0.430942C13.168 -0.0112684 13.3723 -0.0849699 13.8715 0.0825339C16.2802 0.879852 18.6855 1.67717 21.0942 2.47449C21.6872 2.67214 21.8212 3.07415 21.4694 3.59677C20.7659 4.63529 20.0624 5.67716 19.3522 6.71234C19.2718 6.82959 19.2751 6.90329 19.3555 7.01719C20.0691 8.05907 20.776 9.10429 21.4828 10.1495C21.8178 10.6453 21.6805 11.0574 21.111 11.245C20.518 11.4426 19.9284 11.647 19.3354 11.8279C19.1612 11.8815 19.121 11.9653 19.121 12.1328C19.1277 13.6671 19.1244 15.2014 19.1244 16.7358C19.1244 17.2148 18.9971 17.3924 18.5381 17.5431C16.1462 18.3405 13.7542 19.1344 11.3623 19.9384C11.1144 20.0222 10.8832 20.0188 10.6319 19.9384C8.23999 19.1378 5.84803 18.3405 3.45608 17.5431C3.00382 17.3924 2.87652 17.2148 2.87652 16.7324C2.87652 15.1847 2.87317 13.6369 2.87987 12.0892C2.87987 11.9452 2.83631 11.8849 2.70231 11.8413C2.11605 11.6537 1.53313 11.446 0.943521 11.2651C0.662115 11.178 0.444361 11.0373 0.337158 10.7559C0.337158 10.6587 0.337158 10.5616 0.337158 10.4644C0.437661 10.3003 0.534812 10.1328 0.642014 9.97196C1.30868 8.98369 1.97535 7.99542 2.64871 7.01384C2.72911 6.89659 2.72911 6.82289 2.64871 6.70898C2.1127 5.93177 1.58674 5.1512 1.06077 4.37063C0.816218 4.00547 0.548212 3.65372 0.340507 3.26176ZM10.3773 11.5063C10.3639 11.4996 10.3472 11.4962 10.3338 11.4895C9.92843 12.0993 9.51972 12.709 9.11436 13.3187C8.83965 13.7307 8.61855 13.8044 8.14284 13.647C6.87316 13.2249 5.60348 12.8095 4.3405 12.3807C4.1596 12.3204 4.12609 12.3539 4.12609 12.5381C4.13279 13.781 4.13279 15.0205 4.12609 16.2634C4.12609 16.4075 4.16965 16.4644 4.30365 16.508C6.25674 17.1545 8.20649 17.8044 10.1529 18.4611C10.3304 18.5214 10.3807 18.5147 10.3807 18.3036C10.374 16.0992 10.3773 13.8916 10.3773 11.6872C10.3773 11.6302 10.3773 11.5699 10.3773 11.5063ZM11.637 18.5214C11.6939 18.508 11.7408 18.4979 11.7877 18.4812C13.7643 17.8245 15.7408 17.1646 17.7207 16.5113C17.8547 16.4678 17.8782 16.4008 17.8782 16.2735C17.8748 15.044 17.8748 13.8178 17.8748 12.5884C17.8748 12.3204 17.8748 12.3204 17.6303 12.4041C16.374 12.8195 15.121 13.2349 13.8648 13.6537C13.3857 13.8111 13.168 13.7408 12.8932 13.3287C12.5214 12.7693 12.1462 12.2098 11.7743 11.6503C11.7375 11.5967 11.6973 11.5465 11.6403 11.4694C11.637 13.8413 11.637 16.173 11.637 18.5214ZM10.0021 3.99542C9.97533 3.95522 9.95188 3.91502 9.92508 3.87482C9.39912 3.0842 8.8698 2.29694 8.34719 1.50297C8.27014 1.38571 8.20314 1.37566 8.07583 1.41922C6.09259 2.07918 4.10599 2.7358 2.1194 3.38906C1.97535 3.43596 1.95525 3.47616 2.0457 3.60681C2.58506 4.39073 3.11772 5.17465 3.64368 5.96527C3.73079 6.09257 3.80114 6.11267 3.94519 6.06577C5.09762 5.67381 6.25674 5.2919 7.41252 4.90664C8.22659 4.63529 9.04066 4.36728 9.85472 4.09258C9.90498 4.07248 9.98203 4.07917 10.0021 3.99542ZM13.8246 1.38236C13.7241 1.36561 13.7073 1.43932 13.6738 1.48622C13.1378 2.28689 12.6051 3.0909 12.0658 3.88822C11.9887 4.00212 12.0021 4.04232 12.1294 4.08588C14.1194 4.74584 16.1093 5.40916 18.0993 6.07582C18.2132 6.11267 18.2701 6.09257 18.3371 5.99542C18.8731 5.19475 19.4125 4.39743 19.9586 3.60346C20.049 3.46946 20.0189 3.43261 19.8815 3.38906C17.8949 2.7358 15.9117 2.07918 13.9251 1.41922C13.8882 1.40581 13.848 1.39241 13.8246 1.38236ZM3.80784 7.62691C3.71738 7.62356 3.70063 7.69726 3.66713 7.74416C3.12442 8.54148 2.58841 9.33879 2.04235 10.1361C1.9586 10.2567 1.97535 10.2969 2.10935 10.3405C4.10264 10.9971 6.09259 11.6537 8.08254 12.3204C8.21989 12.3673 8.27684 12.3338 8.35054 12.2232C8.8698 11.4359 9.39242 10.652 9.91838 9.87146C10.0055 9.7408 10.0155 9.6939 9.84468 9.63695C7.87148 8.98704 5.90163 8.32707 3.93179 7.67381C3.88824 7.65371 3.84469 7.63696 3.80784 7.62691ZM20.039 10.2567C20.0155 10.2199 19.9954 10.1864 19.972 10.1495C19.4225 9.3388 18.8731 8.53143 18.3304 7.72071C18.2567 7.61016 18.1864 7.62691 18.0859 7.66041C16.1093 8.32037 14.1328 8.98034 12.1562 9.6336C12.0189 9.6805 11.9854 9.71735 12.0758 9.85136C12.6085 10.6386 13.1344 11.4292 13.6571 12.2199C13.7308 12.3304 13.7911 12.3572 13.9251 12.3137C14.7324 12.039 15.5398 11.7743 16.3505 11.5063C17.5264 11.1177 18.7023 10.7291 19.8782 10.3371C19.9318 10.3237 19.9988 10.3237 20.039 10.2567ZM5.49963 6.85974C5.57668 6.89324 5.60683 6.90999 5.64033 6.92004C7.38237 7.4996 9.12106 8.07917 10.8631 8.66208C10.967 8.69893 11.0608 8.68888 11.1646 8.65203C12.8731 8.07917 14.5817 7.513 16.2869 6.94014C16.3505 6.92004 16.4209 6.91334 16.4745 6.85639C16.4376 6.83964 16.4075 6.82289 16.3773 6.81284C14.6286 6.22992 12.8832 5.64701 11.1345 5.0641C11.0273 5.02725 10.9368 5.04735 10.8329 5.08085C9.79442 5.42926 8.7559 5.77431 7.72073 6.11937C6.99041 6.36393 6.26009 6.60513 5.49963 6.85974Z"
              fill="#FE0002"
              fillopacity="0.6"
            />
          </svg>
          <div className="mt-2 text-lg">M3 0.05515</div>
        </li>
        <li className="flex flex-col items-center justify-around text-2xl">
          <svg
            width="32"
            height="32"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z"
              fill="#FE0002"
              fillOpacity="0.6"
            />
            <path
              d="M7 19.2395C6.81789 19.0266 6.57675 18.7397 6.29448 18.3919C5.64467 17.5913 4.77908 16.4706 3.91448 15.1891C3.04892 13.9062 2.19053 12.4713 1.55005 11.0417C0.906636 9.60548 0.5 8.21133 0.5 7C0.5 3.40614 3.40614 0.5 7 0.5C10.5939 0.5 13.5 3.40614 13.5 7C13.5 8.21133 13.0934 9.60548 12.4499 11.0417C11.8095 12.4713 10.9511 13.9062 10.0855 15.1891C9.22092 16.4706 8.35533 17.5913 7.70552 18.3919C7.42325 18.7397 7.18211 19.0266 7 19.2395Z"
              stroke="#FE0002"
              strokeOpacity="0.6"
            />
          </svg>

          <div className="mt-2 text-lg">Jorden</div>
        </li>
        <li className="flex flex-col items-center justify-between text-2xl">
          <svg
            width="32"
            height="32"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.88055 20C9.27937 19.7364 8.65969 19.5283 8.04926 19.2971C6.61567 18.756 5.18209 18.2196 3.7485 17.6831C3.42941 17.5629 3.36467 17.4704 3.36467 17.1328C3.36467 15.2414 3.36467 13.35 3.3693 11.454C3.3693 11.306 3.3323 11.2413 3.18432 11.195C2.56001 10.9962 1.94033 10.7834 1.31603 10.5753C0.922951 10.4458 0.844335 10.2192 1.05706 9.85854C1.49639 9.12325 1.93571 8.38795 2.38428 7.65266C2.4629 7.5278 2.4629 7.45381 2.35191 7.34282C1.63049 6.63065 0.913702 5.90924 0.196909 5.19244C0.067424 5.06296 -0.0343146 4.92422 0.030428 4.72537C0.0859216 4.55889 0.215407 4.48952 0.372639 4.43865C2.03282 3.92071 3.69301 3.40277 5.3532 2.88483C5.77402 2.75535 6.19485 2.62124 6.61567 2.49175C6.72204 2.45938 6.78678 2.40389 6.83303 2.29752C7.50357 0.822318 8.95566 -0.0655793 10.5881 0.00378774C12.1373 0.0685303 13.5154 1.09054 14.0518 2.57962C14.0981 2.7091 14.1767 2.75997 14.2969 2.79234C16.045 3.32878 17.793 3.86984 19.5457 4.40628C19.7307 4.46178 19.8972 4.53577 19.9896 4.71612C19.9896 4.79474 19.9896 4.87336 19.9896 4.95197C19.911 5.07221 19.8139 5.17395 19.7122 5.27569C19.0416 5.94623 18.3757 6.61678 17.7005 7.2827C17.5942 7.38444 17.5942 7.43994 17.7005 7.54168C18.3757 8.2076 19.0416 8.87815 19.7122 9.54869C19.8139 9.65043 19.911 9.75217 19.9896 9.87241C19.9896 9.95102 19.9896 10.0296 19.9896 10.1083C19.8972 10.284 19.7446 10.358 19.5642 10.4135C18.9075 10.6169 18.2508 10.8297 17.5942 11.0239C17.4462 11.0655 17.4092 11.1303 17.4092 11.2782C17.4138 13.2159 17.4138 15.1536 17.4138 17.0912C17.4138 17.4612 17.3491 17.5537 16.9976 17.6693C15.3051 18.2335 13.6079 18.793 11.9199 19.3618C11.3188 19.5653 10.7083 19.741 10.121 19.9769C10.0332 20 9.95454 20 9.88055 20ZM10.3939 19.0566C10.4355 19.0427 10.4679 19.0381 10.4956 19.0289C12.498 18.3629 14.4958 17.697 16.4982 17.0311C16.623 16.9895 16.6277 16.9155 16.6277 16.8137C16.6277 15.0657 16.623 13.3176 16.6323 11.5696C16.6323 11.3939 16.6045 11.3522 16.4242 11.4077C15.0507 11.8471 13.6772 12.2771 12.3038 12.7072C12.0032 12.7997 11.8922 12.7673 11.6933 12.5222C11.3789 12.1338 11.069 11.7407 10.7546 11.3476C10.6436 11.2089 10.5326 11.0701 10.3939 10.899C10.3939 13.6414 10.3939 16.3374 10.3939 19.0566ZM4.15083 11.528C4.14621 11.5788 4.14158 11.6066 4.14158 11.639C4.14158 13.3778 4.14158 15.1119 4.13696 16.8507C4.13696 16.9895 4.20633 17.0218 4.30806 17.0635C6.00987 17.7016 7.71167 18.3398 9.41348 18.9826C9.56609 19.0381 9.60771 19.0289 9.60771 18.8531C9.60308 16.3698 9.60308 13.8818 9.60308 11.3985C9.60308 11.3522 9.62621 11.2967 9.56609 11.2505C9.29325 11.7037 9.0204 12.1569 8.75218 12.6055C8.56258 12.9199 8.44234 12.9616 8.09088 12.8459C7.38334 12.6101 6.67579 12.3742 5.96362 12.1384C5.36707 11.9349 4.76126 11.7314 4.15083 11.528ZM10.3985 7.04223C12.1049 7.03761 13.5061 5.63639 13.5108 3.93921C13.5154 2.19579 12.1188 0.79457 10.38 0.799195C8.68281 0.803819 7.2631 2.21428 7.2631 3.89759C7.26773 5.63639 8.66894 7.04686 10.3985 7.04223ZM18.8335 9.83541C18.815 9.75217 18.7549 9.7198 18.7087 9.67356C18.163 9.12325 17.6127 8.58218 17.0716 8.02725C16.9514 7.90701 16.8543 7.89313 16.697 7.944C14.7547 8.59605 12.8078 9.24348 10.8609 9.89553C10.7962 9.91865 10.7176 9.91866 10.6667 9.99265C11.1384 10.5846 11.6194 11.1765 12.0864 11.7777C12.1789 11.8933 12.2529 11.9118 12.3916 11.8702C13.9085 11.3892 15.4253 10.9129 16.9421 10.4366C17.5757 10.2331 18.2046 10.0343 18.8335 9.83541ZM3.17969 7.91626C3.11033 7.91626 3.09645 7.98563 3.06871 8.03187C2.708 8.62843 2.35654 9.22498 1.9912 9.81691C1.92646 9.92328 1.92646 9.9649 2.05595 10.0111C4.04447 10.6724 6.03299 11.3337 8.02151 11.9997C8.14637 12.0413 8.20187 12.0182 8.26661 11.9072C8.61345 11.3199 8.96028 10.7326 9.32099 10.1545C9.41348 10.0019 9.36261 9.97415 9.22388 9.9279C7.25385 9.27585 5.28383 8.61918 3.3138 7.9625C3.26756 7.94401 3.22594 7.93013 3.17969 7.91626ZM4.27107 7.41681C4.29882 7.48618 4.35431 7.48156 4.3913 7.49543C6.21335 8.10586 8.04001 8.71167 9.86205 9.3221C9.96842 9.35909 10.0609 9.34522 10.1626 9.30822C11.9616 8.70704 13.7605 8.11048 15.5594 7.5093C15.6149 7.4908 15.6889 7.49543 15.7213 7.41219C14.9258 7.14397 14.1351 6.885 13.3489 6.61678C13.2333 6.57979 13.1824 6.6399 13.1177 6.70464C11.4852 8.26771 8.99265 8.18448 7.48045 6.51042C7.38334 6.40405 7.30472 6.39943 7.17986 6.44105C6.29196 6.74164 5.40406 7.03298 4.52079 7.32895C4.43755 7.35207 4.35431 7.38444 4.27107 7.41681ZM6.52781 3.3519C4.71964 3.91609 2.93922 4.47103 1.15417 5.02596C1.17267 5.05833 1.1773 5.08146 1.19117 5.09071C1.79235 5.69189 2.39816 6.29307 2.99471 6.89887C3.06871 6.97287 3.13807 6.95899 3.22131 6.93124C4.40518 6.53354 5.58442 6.14046 6.76828 5.752C6.88852 5.71038 6.91164 5.66877 6.85615 5.55315C6.65267 5.13233 6.54168 4.68837 6.50469 4.22593C6.47694 3.94383 6.48157 3.66174 6.52781 3.3519ZM18.8428 5.06296C18.8197 5.03058 18.815 5.02596 18.8104 5.02134C17.3444 4.56814 15.8831 4.11957 14.4218 3.66174C14.2877 3.62012 14.283 3.67099 14.2877 3.77736C14.3015 4.4849 14.1536 5.16007 13.8067 5.77975C13.7512 5.88149 13.7512 5.92774 13.8761 5.96936C14.8519 6.28844 15.823 6.61678 16.7988 6.9405C16.8728 6.96362 16.9282 6.97286 16.993 6.91274C17.6034 6.29769 18.2185 5.68726 18.8428 5.06296Z"
              fill="#FE0002"
              fillOpacity="0.6"
            />
            <path
              d="M8.39606 17.7386C8.36369 17.7294 8.29433 17.7201 8.22496 17.6924C7.49429 17.4196 6.76363 17.1467 6.03758 16.8739C5.96359 16.8461 5.8896 16.8137 5.83411 16.7629C5.71387 16.6565 5.66763 16.5132 5.72774 16.3559C5.78786 16.1941 5.9081 16.1016 6.0792 16.097C6.14395 16.097 6.20869 16.1108 6.26881 16.1339C7.01797 16.4114 7.76714 16.6889 8.51168 16.971C8.67353 17.0311 8.78914 17.1375 8.81227 17.3178C8.84926 17.5398 8.66428 17.7386 8.39606 17.7386Z"
              fill="#FE0002"
              fillOpacity="0.6"
            />
            <path
              d="M8.36827 16.0692C8.04919 15.9628 7.6746 15.8565 7.33702 15.6622C7.18441 15.579 7.14741 15.3709 7.21678 15.2136C7.28615 15.0518 7.45726 14.9454 7.62374 14.9871C7.9752 15.0749 8.31278 15.2044 8.6365 15.3663C8.79835 15.4449 8.85385 15.6391 8.80298 15.801C8.74748 15.9721 8.59487 16.0784 8.36827 16.0692Z"
              fill="#FE0002"
              fillOpacity="0.6"
            />
            <path
              d="M6.09779 14.4599C6.30127 14.4645 6.48162 14.6495 6.48162 14.853C6.477 15.0565 6.29202 15.2368 6.08854 15.2368C5.88507 15.2322 5.70471 15.0472 5.70471 14.8437C5.70934 14.6356 5.89432 14.4553 6.09779 14.4599Z"
              fill="#FE0002"
              fillOpacity="0.6"
            />
            <path
              d="M9.99154 5.47915C9.86668 5.47453 9.76957 5.41441 9.6817 5.33117C9.44585 5.09995 9.21001 4.8641 8.97878 4.62825C8.78455 4.42478 8.77531 4.20742 8.94179 4.04094C9.10827 3.87446 9.32562 3.88371 9.52909 4.07794C9.64933 4.18893 9.76494 4.29992 9.8713 4.42478C9.96379 4.53114 10.0193 4.52189 10.1164 4.42478C10.7222 3.80972 11.3373 3.19929 11.9477 2.58886C12.2067 2.32989 12.4194 2.29752 12.6044 2.47788C12.794 2.66285 12.7616 2.8802 12.5073 3.13455C11.7905 3.85134 11.0737 4.56813 10.3569 5.28493C10.2551 5.38204 10.1488 5.47453 9.99154 5.47915Z"
              fill="#FE0002"
              fillOpacity="0.6"
            />
          </svg>
          <div className="mt-2 text-lg"> 6*24*60g</div>
        </li>
      </ul>
      <div className="mt-4">
        <button
          className="w-full py-8 mx-auto text-2xl font-semibold text-white cla hover:shadow-lg"
          style={{ backgroundColor: `${data.CustomBaclground}` }}
        >
          52 Weeks
        </button>
      </div>
    </div>
  );
}
