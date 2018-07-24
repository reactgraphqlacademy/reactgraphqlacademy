import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'

const SvgLogo = () => (
  <svg viewBox="0 0 200 71">
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M78 .775c-.003.412 0 10.722 0 14.881 0 18.708-13 37.054-38.998 55.037C13 52.609 0 34.263 0 15.656V.783C0 .313.36 0 .78 0h76.448c.432 0 .775.363.772.775z"
          fill="#73CFEF"
        />
        <path
          d="M67.844 28.913c0-3.835-4.789-7.47-12.13-9.723 1.694-7.504.94-13.475-2.377-15.386-.765-.449-1.659-.661-2.635-.661v2.631c.54 0 .976.106 1.341.307 1.6.92 2.294 4.425 1.753 8.932a36.42 36.42 0 0 1-.6 3.47 56.866 56.866 0 0 0-7.471-1.287c-1.588-2.183-3.235-4.165-4.894-5.9 3.835-3.575 7.435-5.534 9.882-5.534v-2.63c-3.235 0-7.47 2.312-11.753 6.324-4.282-3.989-8.518-6.278-11.753-6.278V5.81c2.435 0 6.047 1.947 9.882 5.498a55.695 55.695 0 0 0-4.859 5.888c-2.659.283-5.176.72-7.482 1.298-.27-1.18-.47-2.324-.612-3.422-.553-4.507.13-8.012 1.718-8.944.353-.212.811-.307 1.353-.307v-2.63c-.989 0-1.883.212-2.66.66-3.305 1.911-4.047 7.87-2.34 15.351-7.319 2.266-12.083 5.888-12.083 9.711 0 3.835 4.788 7.469 12.13 9.723-1.695 7.504-.942 13.475 2.376 15.386.765.449 1.659.66 2.647.66 3.236 0 7.471-2.312 11.754-6.324 4.282 3.989 8.518 6.278 11.753 6.278.988 0 1.883-.213 2.659-.661 3.306-1.912 4.047-7.87 2.341-15.351 7.295-2.254 12.06-5.888 12.06-9.711zm-15.319-7.87a53.249 53.249 0 0 1-1.588 4.66 55.892 55.892 0 0 0-1.541-2.831 63.877 63.877 0 0 0-1.694-2.761c1.67.247 3.282.554 4.823.932zm-5.388 12.566a62.888 62.888 0 0 1-2.836 4.508 61.04 61.04 0 0 1-5.317.236 65.5 65.5 0 0 1-5.295-.225 65.07 65.07 0 0 1-2.847-4.483 61.526 61.526 0 0 1-2.447-4.697 61.596 61.596 0 0 1 2.435-4.708 62.888 62.888 0 0 1 2.836-4.507 61.04 61.04 0 0 1 5.318-.236 65.5 65.5 0 0 1 5.294.224 65.07 65.07 0 0 1 2.847 4.484 61.526 61.526 0 0 1 2.447 4.696 66.136 66.136 0 0 1-2.435 4.708zm3.8-1.534a50.667 50.667 0 0 1 1.624 4.696 52.666 52.666 0 0 1-4.848.944 65.222 65.222 0 0 0 1.695-2.796c.54-.944 1.047-1.9 1.529-2.844zm-11.93 12.59a48.604 48.604 0 0 1-3.27-3.776 72.62 72.62 0 0 0 3.235.083c1.106 0 2.2-.024 3.27-.083a46.02 46.02 0 0 1-3.235 3.776zm-8.753-6.95a52.951 52.951 0 0 1-4.824-.932 53.249 53.249 0 0 1 1.588-4.66c.483.943.989 1.887 1.542 2.831a78.189 78.189 0 0 0 1.694 2.761zm8.694-24.554a48.604 48.604 0 0 1 3.271 3.776 72.62 72.62 0 0 0-3.235-.083c-1.106 0-2.2.024-3.271.083a46.02 46.02 0 0 1 3.235-3.776zm-8.706 6.95a65.222 65.222 0 0 0-3.224 5.628 50.667 50.667 0 0 1-1.623-4.696 56.99 56.99 0 0 1 4.847-.932zM19.595 34.883c-4.165-1.781-6.86-4.118-6.86-5.97 0-1.853 2.695-4.2 6.86-5.97 1.011-.437 2.117-.827 3.259-1.192a56.776 56.776 0 0 0 2.647 7.186 55.977 55.977 0 0 0-2.612 7.15 35.673 35.673 0 0 1-3.294-1.204zm6.33 16.862c-1.6-.92-2.295-4.425-1.754-8.932.13-1.11.341-2.278.6-3.47a56.866 56.866 0 0 0 7.471 1.287c1.588 2.183 3.236 4.165 4.894 5.9-3.835 3.575-7.435 5.533-9.882 5.533-.53-.011-.977-.118-1.33-.318zm27.906-8.991c.553 4.507-.13 8.012-1.717 8.944-.353.212-.812.306-1.353.306-2.436 0-6.048-1.946-9.883-5.498a55.695 55.695 0 0 0 4.859-5.888c2.659-.283 5.176-.72 7.482-1.298.271 1.192.483 2.336.612 3.434zm4.53-7.87c-1.012.436-2.118.825-3.26 1.191a56.776 56.776 0 0 0-2.646-7.186 55.977 55.977 0 0 0 2.612-7.15c1.164.366 2.27.767 3.306 1.203 4.164 1.782 6.859 4.118 6.859 5.971-.012 1.852-2.706 4.2-6.871 5.97z"
          fill="#FFF"
        />
        <ellipse fill="#FFF" cx={38.957} cy={29.055} rx={5.08} ry={5.095} />
      </g>
      <path
        d="M96.03 30.486l-3.36-7.452c-.037-.091-.1-.137-.191-.137h-2.487c-.11 0-.164.055-.164.164v7.316c0 .31-.155.465-.464.465H86.44c-.31 0-.464-.155-.464-.465V12.102c0-.31.155-.466.464-.466h7.678c1.166 0 2.19.242 3.074.726a5.075 5.075 0 0 1 2.049 2.042c.483.876.724 1.88.724 3.013 0 1.242-.31 2.31-.93 3.206-.618.895-1.474 1.525-2.567 1.89a.166.166 0 0 0-.11.096c-.018.046-.009.087.028.124l3.606 7.561a.401.401 0 0 1 .082.247.26.26 0 0 1-.11.22.49.49 0 0 1-.3.081h-3.087c-.237 0-.419-.118-.547-.356zm-6.202-15.343v4.603c0 .11.055.165.164.165h3.552c.765 0 1.389-.224 1.872-.672.482-.447.724-1.036.724-1.767 0-.73-.242-1.329-.724-1.794-.483-.466-1.107-.7-1.872-.7h-3.552c-.11 0-.164.056-.164.165zm22.295 11.398c.11-.128.228-.192.356-.192.109 0 .209.046.3.137l1.557 1.507c.11.11.164.22.164.329a.51.51 0 0 1-.109.328c-.601.75-1.37 1.338-2.309 1.768-.938.429-1.962.644-3.073.644-1.676 0-3.065-.43-4.167-1.288-1.102-.859-1.844-2.037-2.227-3.535a9.67 9.67 0 0 1-.328-2.548c0-1.059.1-1.954.3-2.685.365-1.351 1.098-2.438 2.2-3.26 1.102-.822 2.41-1.233 3.921-1.233 1.785 0 3.201.53 4.249 1.59 1.047 1.059 1.726 2.547 2.035 4.465.073.603.128 1.27.164 2 0 .31-.155.466-.464.466h-8.388c-.11 0-.164.055-.164.164.054.384.118.667.191.85.182.566.542 1 1.08 1.301.537.301 1.188.452 1.953.452 1.202-.055 2.122-.475 2.76-1.26zm-4.931-6.26c-.392.283-.66.68-.806 1.191a9.87 9.87 0 0 0-.164.685c-.019.11.027.165.136.165h4.645c.091 0 .137-.037.137-.11 0-.201-.037-.411-.11-.63-.163-.53-.446-.95-.847-1.26-.4-.311-.91-.466-1.53-.466-.582 0-1.07.141-1.461.424zm19.412-3.124c.93.411 1.653.973 2.172 1.685.52.712.779 1.507.779 2.384v9.15c0 .311-.155.466-.464.466h-2.924c-.31 0-.464-.155-.464-.465v-.658c0-.073-.019-.114-.055-.123-.036-.01-.082.013-.137.068-.838.932-2.085 1.398-3.743 1.398-1.402 0-2.532-.348-3.388-1.042-.856-.694-1.284-1.717-1.284-3.068 0-1.407.492-2.498 1.475-3.274.984-.777 2.387-1.165 4.208-1.165h2.76c.109 0 .164-.054.164-.164v-.575c0-.603-.187-1.073-.56-1.411-.374-.338-.916-.507-1.626-.507-.547 0-.997.091-1.353.274-.355.182-.596.438-.724.767-.109.256-.291.374-.546.356l-3.033-.384a.687.687 0 0 1-.341-.123c-.082-.064-.114-.15-.096-.26.091-.749.405-1.425.943-2.028.537-.602 1.247-1.073 2.13-1.41.884-.338 1.863-.507 2.938-.507 1.184 0 2.24.205 3.17.616zm-1.721 10.398c.546-.42.82-.96.82-1.617v-.959c0-.11-.055-.164-.164-.164h-1.94c-.82 0-1.467.155-1.94.466-.474.31-.71.748-.71 1.315 0 .493.177.88.532 1.164.355.283.824.425 1.407.425.784 0 1.448-.21 1.995-.63zm10.014 2.41c-1.066-.73-1.826-1.735-2.282-3.013-.31-.913-.464-1.991-.464-3.233 0-1.224.154-2.283.464-3.178.437-1.242 1.193-2.22 2.268-2.932 1.075-.712 2.34-1.068 3.798-1.068 1.457 0 2.737.365 3.839 1.095 1.102.731 1.835 1.654 2.199 2.768.11.255.182.539.219.849v.055c0 .237-.137.383-.41.438l-2.87.439-.136.027c-.218 0-.346-.11-.382-.329l-.082-.383c-.128-.475-.41-.868-.847-1.179-.437-.31-.957-.465-1.558-.465-.582 0-1.074.146-1.475.438-.4.292-.683.694-.847 1.206-.2.548-.3 1.296-.3 2.246s.09 1.699.273 2.247c.164.548.45.977.86 1.288.41.31.907.465 1.49.465.564 0 1.06-.15 1.488-.452.429-.301.725-.707.888-1.219l.028-.137c.018-.073.082-.16.191-.26a.42.42 0 0 1 .355-.123l2.87.438c.145.036.25.1.313.192.064.091.087.2.069.328-.037.293-.082.503-.137.63-.383 1.224-1.125 2.183-2.227 2.877-1.102.694-2.372 1.042-3.811 1.042-1.457 0-2.719-.366-3.784-1.096zm20.15-10.11h-2.46c-.108 0-.163.056-.163.165v5.672c0 .602.123 1.045.369 1.328.246.283.642.425 1.188.425h.765c.31 0 .465.155.465.466v2.356c0 .292-.155.457-.465.493a32.18 32.18 0 0 1-1.502.055c-1.512 0-2.642-.256-3.388-.767-.747-.512-1.13-1.461-1.148-2.85V20.02c0-.11-.055-.164-.164-.164h-1.393c-.31 0-.465-.156-.465-.466v-2.164c0-.311.155-.466.465-.466h1.393c.11 0 .164-.055.164-.165V13.5c0-.31.155-.465.465-.465h2.786c.31 0 .465.155.465.465v3.096c0 .11.055.165.164.165h2.459c.31 0 .464.155.464.466v2.164c0 .31-.155.466-.464.466zm5.478 10.426c-1.047-.52-1.862-1.251-2.445-2.192-.583-.94-.875-2.032-.875-3.274v-.96c0-.31.155-.465.465-.465h2.923c.31 0 .465.155.465.466v.959c0 .877.282 1.584.847 2.123.564.539 1.311.808 2.24.808.947 0 1.712-.269 2.295-.808s.875-1.246.875-2.123V12.129c0-.31.154-.465.464-.465h2.896c.31 0 .465.155.465.465v12.686c0 1.242-.292 2.333-.875 3.274-.582.94-1.402 1.671-2.459 2.192-1.056.52-2.276.78-3.66.78-1.367 0-2.574-.26-3.621-.78zm16.954.068c-1.075-.475-1.904-1.141-2.487-2-.583-.858-.874-1.863-.874-3.014v-.465c0-.31.155-.466.464-.466h2.87c.309 0 .464.119.464.356v.384c0 .73.332 1.347.997 1.849s1.535.753 2.61.753c.965 0 1.68-.205 2.144-.616.465-.411.697-.918.697-1.52 0-.44-.146-.809-.437-1.11-.292-.302-.683-.567-1.175-.795-.492-.228-1.284-.543-2.377-.945-1.239-.42-2.277-.85-3.115-1.288a6.406 6.406 0 0 1-2.131-1.794c-.583-.758-.875-1.694-.875-2.809 0-1.096.283-2.054.847-2.876.565-.822 1.353-1.453 2.364-1.89 1.01-.44 2.163-.658 3.456-.658 1.385 0 2.623.246 3.716.74 1.093.492 1.944 1.182 2.555 2.068.61.886.915 1.913.915 3.082v.274c0 .31-.155.466-.465.466h-2.868c-.31 0-.465-.091-.465-.274v-.274c0-.767-.314-1.42-.942-1.96-.629-.538-1.49-.807-2.582-.807-.875 0-1.549.182-2.022.548-.474.365-.71.867-.71 1.507 0 .456.136.84.41 1.15.272.31.687.594 1.242.85.556.255 1.417.584 2.582.986 1.275.475 2.286.89 3.033 1.247.747.356 1.416.9 2.008 1.63.592.73.888 1.671.888 2.822 0 1.114-.287 2.091-.86 2.931-.574.84-1.385 1.489-2.432 1.946-1.047.456-2.282.685-3.702.685-1.421 0-2.669-.238-3.743-.713zm13.715-.096a2.277 2.277 0 0 1-.71-1.685c0-.639.255-1.192.765-1.657.51-.466 1.084-.699 1.721-.699.674 0 1.266.233 1.776.699.51.465.765 1.018.765 1.657 0 .658-.246 1.22-.737 1.685-.492.466-1.093.699-1.804.699-.71 0-1.302-.233-1.776-.699zM97.752 57.857l-.765-2.548c-.018-.092-.073-.137-.164-.137h-6.694c-.091 0-.146.045-.164.137l-.765 2.548c-.091.255-.264.383-.52.383h-3.169c-.164 0-.282-.05-.355-.15-.073-.1-.082-.224-.027-.37l5.82-18.275c.09-.255.264-.383.519-.383h4.016c.255 0 .428.128.52.383l5.819 18.275a.383.383 0 0 1 .027.164c0 .11-.036.197-.11.26a.44.44 0 0 1-.3.096h-3.17c-.254 0-.427-.128-.518-.383zm-6.694-5.672h4.836c.11 0 .155-.064.136-.191l-2.459-8.357c-.018-.073-.05-.11-.095-.11-.046 0-.087.037-.123.11l-2.432 8.357c-.018.127.027.191.137.191zm15.205 5.179c-1.066-.731-1.826-1.736-2.282-3.014-.31-.913-.464-1.991-.464-3.233 0-1.224.155-2.283.464-3.178.437-1.242 1.193-2.22 2.268-2.932 1.075-.712 2.34-1.068 3.798-1.068 1.457 0 2.737.365 3.839 1.096 1.102.73 1.835 1.653 2.2 2.767.108.255.181.539.218.849v.055c0 .237-.137.383-.41.438l-2.869.439-.137.027c-.218 0-.346-.11-.382-.329l-.082-.383c-.128-.475-.41-.868-.847-1.178-.437-.311-.956-.466-1.557-.466-.583 0-1.075.146-1.476.438-.4.292-.683.694-.847 1.206-.2.548-.3 1.296-.3 2.246s.09 1.699.273 2.247c.164.548.45.977.86 1.288.41.31.907.465 1.49.465.564 0 1.06-.15 1.489-.452.428-.301.724-.707.888-1.219l.027-.137c.018-.073.082-.16.191-.26a.42.42 0 0 1 .355-.123l2.87.438c.145.036.25.1.313.192.064.091.087.2.069.328-.037.293-.082.503-.137.63-.382 1.224-1.125 2.183-2.227 2.877-1.102.694-2.372 1.042-3.811 1.042-1.457 0-2.719-.366-3.784-1.096zm21.352-12.809c.93.411 1.653.973 2.172 1.685.52.712.779 1.507.779 2.384v9.15c0 .311-.155.466-.465.466h-2.923c-.31 0-.464-.155-.464-.465v-.658c0-.073-.019-.114-.055-.123-.037-.01-.082.013-.137.068-.838.932-2.085 1.398-3.743 1.398-1.402 0-2.532-.348-3.388-1.042-.856-.694-1.284-1.717-1.284-3.068 0-1.407.492-2.498 1.475-3.274.984-.777 2.387-1.165 4.208-1.165h2.76c.109 0 .164-.054.164-.164v-.575c0-.603-.187-1.073-.56-1.411-.374-.338-.916-.507-1.626-.507-.547 0-.998.091-1.353.274-.355.182-.596.438-.724.767-.11.256-.291.374-.546.356l-3.033-.384a.687.687 0 0 1-.342-.123c-.082-.064-.113-.15-.095-.26.09-.749.405-1.425.942-2.028.538-.602 1.248-1.073 2.132-1.41.883-.338 1.862-.507 2.937-.507 1.184 0 2.24.205 3.17.616zm-1.721 10.398c.546-.42.82-.96.82-1.617v-.959c0-.11-.055-.164-.164-.164h-1.94c-.82 0-1.467.155-1.94.466-.474.31-.71.748-.71 1.315 0 .493.177.881.532 1.164.355.283.824.425 1.407.425.784 0 1.448-.21 1.995-.63zm16.557-15.891h2.924c.31 0 .464.155.464.466v18.247c0 .31-.155.465-.464.465h-2.924c-.31 0-.464-.155-.464-.465v-.74c0-.073-.023-.114-.069-.123-.045-.01-.086.013-.123.068-.746.986-1.785 1.48-3.114 1.48-1.239 0-2.336-.37-3.293-1.11-.956-.74-1.616-1.712-1.98-2.918-.31-.877-.465-1.973-.465-3.288 0-1.351.173-2.484.52-3.397.4-1.17 1.06-2.1 1.98-2.795.92-.694 2-1.04 3.238-1.04 1.348 0 2.386.447 3.114 1.342.037.054.078.073.123.054.046-.018.069-.063.069-.137v-5.643c0-.311.155-.466.464-.466zm-.492 12.137c0-1.205-.19-2.146-.573-2.822-.456-.712-1.066-1.068-1.831-1.068-.838 0-1.475.347-1.913 1.04-.437.731-.655 1.69-.655 2.877 0 1.078.191 1.973.574 2.685.437.786 1.102 1.179 1.994 1.179.802 0 1.42-.393 1.858-1.179.364-.675.546-1.58.546-2.712zm16.585 2.74c.11-.128.228-.192.355-.192.11 0 .21.046.3.137l1.558 1.507c.11.11.164.22.164.329a.51.51 0 0 1-.11.329c-.6.748-1.37 1.337-2.308 1.767-.938.429-1.963.644-3.074.644-1.675 0-3.064-.43-4.166-1.288-1.102-.859-1.845-2.037-2.227-3.535a9.67 9.67 0 0 1-.328-2.548c0-1.059.1-1.954.3-2.685.365-1.351 1.098-2.438 2.2-3.26 1.102-.822 2.409-1.233 3.92-1.233 1.786 0 3.202.53 4.25 1.59 1.047 1.059 1.725 2.547 2.035 4.465.073.603.127 1.27.164 2 0 .31-.155.466-.465.466h-8.388c-.109 0-.163.055-.163.164.054.384.118.667.19.85.183.566.543 1 1.08 1.301.537.301 1.189.452 1.954.452 1.202-.055 2.122-.475 2.76-1.26zm-4.932-6.26c-.391.283-.66.68-.806 1.191a9.87 9.87 0 0 0-.164.685c-.018.11.028.165.137.165h4.645c.091 0 .137-.037.137-.11 0-.2-.037-.411-.11-.63-.164-.53-.446-.95-.847-1.26-.4-.311-.91-.466-1.53-.466-.583 0-1.07.141-1.462.424zm29.522-2.453c.802.859 1.202 2.064 1.202 3.617v8.932c0 .31-.154.465-.464.465h-2.924c-.31 0-.464-.155-.464-.465v-8.083c0-.749-.191-1.342-.574-1.78-.382-.44-.892-.658-1.53-.658-.637 0-1.156.219-1.557.657-.4.439-.601 1.023-.601 1.754v8.11c0 .31-.155.465-.465.465h-2.896c-.31 0-.464-.155-.464-.465v-8.083c0-.73-.2-1.32-.602-1.767-.4-.448-.92-.671-1.557-.671-.583 0-1.07.173-1.462.52-.391.347-.624.831-.696 1.452v8.549c0 .31-.155.465-.465.465h-2.923c-.31 0-.465-.155-.465-.465V44.624c0-.311.155-.466.465-.466h2.923c.31 0 .465.155.465.466v.876c0 .073.022.119.068.137.045.019.086-.009.123-.082.747-1.078 1.894-1.616 3.443-1.616.91 0 1.703.187 2.377.561a3.79 3.79 0 0 1 1.557 1.63c.018.073.05.105.096.096.045-.009.086-.04.123-.096.418-.73.965-1.278 1.639-1.643.674-.366 1.439-.548 2.295-.548 1.42 0 2.532.429 3.333 1.287zm3.907 18V60.98c0-.31.055-.466.164-.466h.164c1.13 0 1.936-.141 2.418-.424.483-.283.834-.863 1.052-1.74.037-.091.037-.164 0-.22l-4.399-13.452a.383.383 0 0 1-.027-.164c0-.11.036-.196.11-.26a.44.44 0 0 1 .3-.096h3.142c.255 0 .428.128.519.383l2.24 8.165c.019.073.055.11.11.11.054 0 .09-.037.109-.11l2.131-8.137c.055-.274.228-.411.52-.411h3.141c.164 0 .283.05.356.15.072.1.082.224.027.37l-4.672 14.083c-.456 1.333-.92 2.333-1.394 3-.473.667-1.138 1.155-1.994 1.466-.856.31-2.068.466-3.634.466h-.191c-.128 0-.192-.156-.192-.466z"
        fill="#73CFEF"
      />
    </g>
  </svg>
)

const LinkLogo = styled(Link)`
  /* margin-top: 15px; */
  width: 160px;
  display: inline-block;
  text-decoration: none;
`

export const RJSALogo = ({ position }) => (
  <LinkLogo to="/">
    <SvgLogo style={{ width: '100%' }} />
  </LinkLogo>
)
