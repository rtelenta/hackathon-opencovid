import { Box, ChakraComponent } from "@chakra-ui/react";

interface IProps {
  name: string;
  size?: number;
}

const icons: any = {
  oxygen:
    "M11 1C10.4477 1 10 1.44772 10 2V3H8.91465C8.70873 2.4174 8.15311 2 7.5 2C6.67157 2 6 2.67157 6 3.5C6 4.32843 6.67157 5 7.5 5C8.15311 5 8.70873 4.5826 8.91465 4H10V6.41604C8.2341 7.1876 7 8.94968 7 11V22C7 22.5523 7.44772 23 8 23H15.2676C15.6134 23.5978 16.2597 24 17 24C18.1046 24 19 23.1046 19 22C19 20.8954 18.1046 20 17 20V11V4.5C17 3.94772 17.4477 3.5 18 3.5H19V2.5H18C16.8954 2.5 16 3.39543 16 4.5V7.99951C15.4844 7.31322 14.7963 6.76394 14 6.41604V2C14 1.44772 13.5523 1 13 1H11ZM18 22C18 22.5523 17.5523 23 17 23C16.4477 23 16 22.5523 16 22C16 21.4477 16.4477 21 17 21C17.5523 21 18 21.4477 18 22Z",
  confeti:
    "M13.2337 1.81699C13.5086 2.09183 13.9533 2.09183 14.2282 1.81699C14.503 1.54214 14.503 1.09756 14.2282 0.822723C13.1312 -0.274078 11.3474 -0.274078 10.2506 0.822723C9.15376 1.91953 9.15376 3.70334 10.2506 4.80014L10.7477 5.29727C11.0222 5.57175 11.0222 6.01743 10.7477 6.29172C10.4734 6.56601 10.0277 6.56601 9.75343 6.29172C9.47859 6.01688 9.03383 6.01688 8.75899 6.29172C8.48415 6.56656 8.48415 7.01132 8.75899 7.28616C9.5815 8.10867 10.9196 8.10867 11.7421 7.28616C12.5645 6.46365 12.5645 5.12552 11.7421 4.30301L11.245 3.80588C10.6968 3.25766 10.6968 2.36539 11.245 1.81717C11.793 1.26895 12.6855 1.26895 13.2337 1.81699ZM15.7195 3.30878C15.994 3.03412 16.4393 3.03412 16.7138 3.30878C16.9885 3.58325 16.9885 4.02856 16.7138 4.30304C16.4393 4.5777 15.994 4.5777 15.7195 4.30304C15.4449 4.02856 15.4449 3.58325 15.7195 3.30878ZM18.7025 16.2365C18.9771 15.9619 19.4222 15.9619 19.6969 16.2365C19.9714 16.5112 19.9714 16.9563 19.6969 17.2308C19.4222 17.5054 18.9771 17.5054 18.7025 17.2308C18.4278 16.9563 18.4278 16.5112 18.7025 16.2365ZM20.6911 7.28613C20.4166 7.01147 19.9713 7.01147 19.6968 7.28613C19.4222 7.56079 19.4222 8.00592 19.6968 8.28058C19.9713 8.55505 20.4166 8.55505 20.6911 8.28058C20.9658 8.00592 20.9658 7.56079 20.6911 7.28613ZM6.77032 4.30334C7.04498 4.02869 7.49011 4.02869 7.76477 4.30334C8.03925 4.57782 8.03925 5.02313 7.76477 5.29761C7.49011 5.57227 7.04498 5.57227 6.77032 5.29761C6.49567 5.02313 6.49567 4.57782 6.77032 4.30334ZM22.1829 10.7664C21.9081 10.4916 21.9081 10.0468 22.1829 9.77199C22.4578 9.49715 22.9025 9.49715 23.1774 9.77199C24.2742 10.8688 24.2742 12.6526 23.1774 13.7494C22.0806 14.8462 20.2968 14.8462 19.2 13.7494L18.7026 13.2523C18.4283 12.978 17.9827 12.978 17.7084 13.2523C17.4339 13.5266 17.4339 13.9722 17.7084 14.2467C17.9832 14.5214 17.9832 14.9661 17.7084 15.241C17.4335 15.5158 16.9888 15.5158 16.7139 15.241C15.8914 14.4185 15.8914 13.0805 16.7139 12.258C17.5364 11.4355 18.8746 11.4355 19.6971 12.258L20.1942 12.7551C20.7424 13.3032 21.6347 13.3032 22.1829 12.7551C22.7311 12.2069 22.7311 11.3147 22.1829 10.7664ZM21.8916 2.81146C21.8916 2.4231 21.577 2.10834 21.1885 2.10834C20.8001 2.10834 20.4855 2.4231 20.4855 2.81146C20.4855 3.52026 19.9088 4.09723 19.2 4.09723C17.7157 4.09668 16.5076 5.30463 16.5079 6.78888C16.5079 7.17743 16.8227 7.492 17.2111 7.492C17.5994 7.492 17.9142 7.17743 17.9142 6.78888C17.9142 6.08008 18.491 5.5033 19.1998 5.5033C20.684 5.50385 21.8922 4.29572 21.8916 2.81146ZM14.7251 8.28041C14.9999 8.00557 15.4448 8.00557 15.7197 8.28041C15.9943 8.55525 15.9943 9.00002 15.7197 9.27486L15.2224 9.77199L15.7197 10.2693C15.9943 10.544 15.9943 10.9887 15.7197 11.2636C15.4448 11.5384 14.9999 11.5384 14.7251 11.2636L14.2281 10.7664L13.7308 11.2636C13.4559 11.5384 13.0114 11.5384 12.7365 11.2636C12.4617 10.9887 12.4617 10.544 12.7365 10.2693L13.2337 9.77199L12.7365 9.27486C12.4617 9.00002 12.4617 8.55525 12.7365 8.28041C13.0114 8.00557 13.4559 8.00557 13.7308 8.28041L14.2281 8.77773L14.7251 8.28041ZM16.0269 18.5313L16.7139 19.2185C16.9888 19.4934 17.4335 19.4934 17.7084 19.2185C17.9832 18.9437 17.9832 18.4989 17.7084 18.2241L17.1474 17.6631L3.99255 12.401L3.38501 14.2238L15.0054 18.8719L16.0269 18.5313ZM2.93976 15.5598L12.9408 19.5602L10.3953 20.4088L2.39062 17.2068L2.93976 15.5598ZM4.78168 6.2917C4.50684 6.56654 4.50684 7.01131 4.78168 7.28615L5.46869 7.97316L4.43799 11.0651L14.624 15.1397L5.77594 6.2917C5.5011 6.01686 5.05652 6.01686 4.78168 6.2917ZM0.206073 23.7942C0.0176578 23.6058 -0.047894 23.3275 0.0361514 23.0746L1.94558 18.5425L8.33065 21.0969L0.925678 23.9641C0.672626 24.0482 0.394306 23.9826 0.206073 23.7942Z",
  covid:
    "M22.7578 10.7578C22.2141 10.7578 21.7547 11.1047 21.5859 11.5922C21.5625 11.5875 21.5391 11.5875 21.5156 11.5875H19.4484C19.4438 11.5875 19.4391 11.5875 19.4391 11.5875C19.3406 9.72656 18.6 8.03906 17.4328 6.74063C17.4375 6.73594 17.4375 6.73594 17.4422 6.73125L18.9047 5.26875C18.9187 5.25469 18.9281 5.24531 18.9375 5.23125C19.1859 5.37656 19.4719 5.46094 19.7812 5.46094C20.6953 5.46094 21.4359 4.72031 21.4359 3.80625C21.4359 2.89219 20.6953 2.15156 19.7812 2.15156C18.8672 2.15156 18.1266 2.89219 18.1266 3.80625C18.1266 4.11562 18.2109 4.40156 18.3563 4.65C18.3422 4.65937 18.3281 4.67344 18.3187 4.68281L16.8563 6.14531C16.8516 6.15 16.8516 6.15 16.8469 6.15469C15.5484 4.9875 13.8609 4.24219 12 4.14844C12 4.14375 12 4.13906 12 4.13906V2.48438C12 2.46094 11.9953 2.4375 11.9953 2.41406C12.4828 2.24531 12.8297 1.78594 12.8297 1.24219C12.8297 0.557812 12.2719 0 11.5875 0C10.9031 0 10.3453 0.557812 10.3453 1.24219C10.3453 1.78594 10.6922 2.24531 11.1797 2.41406C11.175 2.4375 11.175 2.46094 11.175 2.48438V4.13906C11.175 4.14375 11.175 4.14844 11.175 4.14844C9.31406 4.24687 7.62656 4.9875 6.32812 6.15469C6.32344 6.15 6.32344 6.15 6.31875 6.14531L4.85625 4.68281C4.84219 4.66875 4.83281 4.65937 4.81875 4.65C4.96406 4.40156 5.04844 4.11562 5.04844 3.80625C5.04844 2.89219 4.30781 2.15156 3.39375 2.15156C2.47969 2.15156 1.73906 2.89219 1.73906 3.80625C1.73906 4.72031 2.47969 5.46094 3.39375 5.46094C3.70312 5.46094 3.98906 5.37656 4.2375 5.23125C4.24688 5.24531 4.25625 5.25938 4.27031 5.26875L5.73281 6.73125C5.7375 6.73594 5.7375 6.73594 5.74219 6.74063C4.575 8.03906 3.82969 9.72656 3.73594 11.5875C3.73125 11.5875 3.72656 11.5875 3.72656 11.5875H2.06719C2.03906 11.5875 2.01094 11.5922 1.98281 11.5969C1.82344 11.2266 1.45781 10.9688 1.03125 10.9688C0.464062 10.9641 0 11.4281 0 12C0 12.5719 0.464063 13.0359 1.03594 13.0359C1.4625 13.0359 1.82813 12.7781 1.9875 12.4078C2.01562 12.4125 2.04375 12.4172 2.07188 12.4172H3.72656C3.73125 12.4172 3.73594 12.4172 3.73594 12.4172C3.83437 14.2781 4.575 15.9656 5.74219 17.2641C5.7375 17.2687 5.7375 17.2687 5.73281 17.2734L4.27031 18.7359C4.25625 18.75 4.24688 18.7594 4.2375 18.7734C3.98906 18.6281 3.70312 18.5438 3.39375 18.5438C2.47969 18.5438 1.73906 19.2844 1.73906 20.1984C1.73906 21.1125 2.47969 21.8531 3.39375 21.8531C4.30781 21.8531 5.04844 21.1125 5.04844 20.1984C5.04844 19.8891 4.96406 19.6031 4.81875 19.3547C4.83281 19.3453 4.84687 19.3313 4.85625 19.3219L6.31875 17.8594C6.32344 17.8547 6.32344 17.8547 6.32812 17.85C7.62656 19.0172 9.31406 19.7625 11.175 19.8563C11.175 19.8609 11.175 19.8656 11.175 19.8656V21.5156C11.175 21.5391 11.1797 21.5625 11.1797 21.5859C10.6922 21.7547 10.3453 22.2141 10.3453 22.7578C10.3453 23.4422 10.9031 24 11.5875 24C12.2719 24 12.8297 23.4422 12.8297 22.7578C12.8297 22.2141 12.4828 21.7547 11.9953 21.5859C12 21.5625 12 21.5391 12 21.5156V19.8609C12 19.8563 12 19.8516 12 19.8516C13.8609 19.7531 15.5484 19.0125 16.8469 17.8453C16.8516 17.85 16.8516 17.85 16.8563 17.8547L18.3187 19.3172C18.3328 19.3313 18.3422 19.3406 18.3563 19.35C18.2109 19.5984 18.1266 19.8844 18.1266 20.1937C18.1266 21.1078 18.8672 21.8484 19.7812 21.8484C20.6953 21.8484 21.4359 21.1078 21.4359 20.1937C21.4359 19.2797 20.6953 18.5391 19.7812 18.5391C19.4719 18.5391 19.1859 18.6234 18.9375 18.7687C18.9281 18.7547 18.9141 18.7406 18.9047 18.7313L17.4375 17.2687C17.4328 17.2641 17.4328 17.2641 17.4281 17.2594C18.5953 15.9609 19.3406 14.2734 19.4344 12.4125C19.4391 12.4125 19.4437 12.4125 19.4437 12.4125H21.5156C21.5391 12.4125 21.5625 12.4078 21.5859 12.4078C21.7547 12.8953 22.2141 13.2422 22.7578 13.2422C23.4422 13.2422 24 12.6844 24 12C24 11.3156 23.4422 10.7578 22.7578 10.7578ZM14.4375 7.25625C15.3516 7.25625 16.0922 7.99688 16.0922 8.91094C16.0922 9.825 15.3516 10.5656 14.4375 10.5656C13.5234 10.5656 12.7828 9.825 12.7828 8.91094C12.7828 7.99688 13.5234 7.25625 14.4375 7.25625ZM14.0203 13.875C14.0203 14.5594 13.4625 15.1172 12.7781 15.1172C12.0938 15.1172 11.5359 14.5594 11.5359 13.875C11.5359 13.1906 12.0938 12.6328 12.7781 12.6328C13.4625 12.6328 14.0203 13.1906 14.0203 13.875ZM8.61094 14.0344C8.59219 14.0859 8.55937 14.1328 8.52188 14.1703C8.44219 14.2453 8.33906 14.2875 8.22656 14.2922C8.17031 14.2922 8.11875 14.2781 8.06719 14.2594C8.01562 14.2406 7.96875 14.2078 7.93125 14.1703C7.89375 14.1328 7.86563 14.0859 7.84219 14.0344C7.81875 13.9828 7.80938 13.9312 7.80938 13.875C7.80938 13.7672 7.85156 13.6594 7.93125 13.5797C7.97344 13.5422 8.01562 13.5141 8.06719 13.4906C8.22188 13.4297 8.4 13.4625 8.51719 13.5797C8.59219 13.6594 8.63438 13.7625 8.63906 13.875C8.64375 13.9312 8.62969 13.9828 8.61094 14.0344ZM7.81406 10.1531C7.81406 9.46875 8.37187 8.91094 9.05625 8.91094C9.74062 8.91094 10.2984 9.46875 10.2984 10.1531C10.2984 10.8375 9.74062 11.3953 9.05625 11.3953C8.37187 11.3906 7.81406 10.8375 7.81406 10.1531ZM10.6781 16.5141C10.6594 16.5656 10.6266 16.6125 10.5891 16.65C10.5094 16.725 10.4062 16.7672 10.2938 16.7719C10.2375 16.7719 10.1859 16.7578 10.1344 16.7391C10.0828 16.7203 10.0359 16.6875 9.99844 16.65C9.96094 16.6125 9.93281 16.5656 9.90937 16.5141C9.88594 16.4625 9.87656 16.4109 9.87656 16.3547C9.87656 16.2469 9.91875 16.1391 9.99844 16.0594C10.0406 16.0219 10.0828 15.9938 10.1344 15.9703C10.2891 15.9094 10.4672 15.9422 10.5844 16.0594C10.6594 16.1391 10.7016 16.2422 10.7062 16.3547C10.7109 16.4109 10.7016 16.4672 10.6781 16.5141ZM11.5875 18.6188C11.3578 18.6188 11.175 18.4312 11.175 18.2062C11.175 17.9812 11.3625 17.7938 11.5875 17.7938C14.7844 17.7891 17.3766 15.1969 17.3812 12C17.3812 11.7703 17.5688 11.5875 17.7938 11.5875C18.0188 11.5875 18.2062 11.775 18.2062 12C18.2016 15.6562 15.2391 18.6141 11.5875 18.6188Z",
  face:
    "M15.6987 3.0037L13.7799 3C11.6242 3 10.231 4.71724 10.231 7.37513V9.39236H8.30172C8.135 9.39236 8 9.55475 8 9.75505V12.6778C8 12.8781 8.13516 13.0403 8.30172 13.0403H10.231V20.4153C10.231 20.6156 10.366 20.7778 10.5327 20.7778H13.0499C13.2166 20.7778 13.3517 20.6154 13.3517 20.4153V13.0403H15.6075C15.7742 13.0403 15.9092 12.8781 15.9092 12.6778L15.9101 9.75505C15.9101 9.65887 15.8782 9.56677 15.8217 9.49871C15.7652 9.43065 15.6883 9.39236 15.6082 9.39236H13.3517V7.68233C13.3517 6.86042 13.5147 6.44318 14.4058 6.44318L15.6984 6.44263C15.865 6.44263 16 6.28024 16 6.08013V3.3662C16 3.16627 15.8651 3.00407 15.6987 3.0037Z",
  insta:
    "M4 8.9434C4 6.21323 6.21323 4 8.9434 4H15.0566C17.7868 4 20 6.21323 20 8.9434V15.0566C20 17.7868 17.7868 20 15.0566 20H8.9434C6.21323 20 4 17.7868 4 15.0566V8.9434ZM12.0001 9.16588C10.4354 9.16588 9.16686 10.4344 9.16686 11.9991C9.16686 13.5639 10.4354 14.8324 12.0001 14.8324C13.5649 14.8324 14.8334 13.5639 14.8334 11.9991C14.8334 10.4344 13.5649 9.16588 12.0001 9.16588ZM7.95801 11.9991C7.95801 9.76674 9.76772 7.95703 12.0001 7.95703C14.2325 7.95703 16.0422 9.76674 16.0422 11.9991C16.0422 14.2315 14.2325 16.0412 12.0001 16.0412C9.76772 16.0412 7.95801 14.2315 7.95801 11.9991ZM16.5053 8.54667C17.0866 8.54667 17.5579 8.07539 17.5579 7.49404C17.5579 6.91269 17.0866 6.44141 16.5053 6.44141C15.9239 6.44141 15.4526 6.91269 15.4526 7.49404C15.4526 8.07539 15.9239 8.54667 16.5053 8.54667Z",
};

const Icon: ChakraComponent<"div", IProps> = ({ name, size = 24, ...rest }) => {
  if (name === "pastilla") {
    return (
      <Box as="span" display="inline-block" {...rest}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4771 1.41922C16.607 -0.450932 13.5664 -0.457125 11.6963 1.41922L7.00232 6.11317L13.7894 12.9002L18.4771 8.20006C20.3473 6.32372 20.3473 3.28937 18.4771 1.41922ZM13.6655 4.19348L11.5291 6.29895L11.5229 6.30514C11.2752 6.54665 10.8851 6.54046 10.6497 6.29276C10.4082 6.04505 10.4144 5.65492 10.6621 5.41961L12.8048 3.31414L12.8109 3.30795C13.0586 3.06644 13.4488 3.07263 13.6841 3.32033C13.9194 3.56184 13.9132 3.95816 13.6655 4.19348Z"
            fill="currentColor"
          />
          <path
            d="M6.12289 6.98633L1.39797 11.7174C-0.46599 13.5938 -0.46599 16.6219 1.39797 18.4983C3.2867 20.3622 6.32725 20.3622 8.21598 18.4983L12.9161 13.7796L6.12289 6.98633Z"
            fill="currentColor"
          />
          <path
            d="M23.0099 16.3123L16.3281 23.0003C18.2292 24.4555 20.9106 24.2822 22.6012 22.5916C24.2979 20.901 24.4713 18.2134 23.0099 16.3123Z"
            fill="currentColor"
          />
          <path
            d="M19.2326 14.4546C16.6008 14.4546 14.4644 16.5848 14.4644 19.2229C14.4644 20.2756 14.8111 21.2974 15.449 22.1272L22.1308 15.4454C21.301 14.8014 20.2854 14.4546 19.2326 14.4546Z"
            fill="currentColor"
          />
        </svg>
      </Box>
    );
  }
  if (icons[name]) {
    return (
      <Box as="span" display="inline-block" {...rest}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={icons[name]}
            fill="currentColor"
          />
        </svg>
      </Box>
    );
  }

  return (
    <Box as="span" fontSize={size} className="material-icons" {...rest}>
      {name}
    </Box>
  );
};

export default Icon;
