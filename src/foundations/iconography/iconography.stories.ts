import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/icon/icon';

const Template = () => html`
  <div>
    <p class="trg-14 my-5 text-[#777777]">피터팬 플랫폼에서 사용되는 아이콘을 정의합니다.</p>
    <h2 class="tbd-16">01_Users</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center">
        <dwc-icon name="User"></dwc-icon>
        <div class="trg-12">User</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="UserFill"></dwc-icon>
        <div class="trg-12">UserFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Gender"></dwc-icon>
        <div class="trg-12">Gender</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Roommate"></dwc-icon>
        <div class="trg-12">Roommate</div>
      </div>
    </div>
    <h2 class="tbd-16">02_Arrows</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center">
        <dwc-icon name="ArrowExchangeHorizontal"></dwc-icon>
        <div class="trg-12">ArrowExchangeHorizontal</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ArrowExchangeVertical"></dwc-icon>
        <div class="trg-12">ArrowExchangeVertical</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ArrowDown"></dwc-icon>
        <div class="trg-12">ArrowDown</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ArrowUp"></dwc-icon>
        <div class="trg-12">ArrowUp</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ArrowRight"></dwc-icon>
        <div class="trg-12">ArrowRight</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ArrowLeft"></dwc-icon>
        <div class="trg-12">ArrowLeft</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ShevronDown"></dwc-icon>
        <div class="trg-12">ShevronDown</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ShevronUp"></dwc-icon>
        <div class="trg-12">ShevronUp</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ShevronRight"></dwc-icon>
        <div class="trg-12">ShevronRight</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ShevronLeft"></dwc-icon>
        <div class="trg-12">ShevronLeft</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ShevronDoubleLeft"></dwc-icon>
        <div class="trg-12">ShevronDoubleLeft</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ShevronDoubleRight"></dwc-icon>
        <div class="trg-12">ShevronDoubleRight</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Repeat"></dwc-icon>
        <div class="trg-12">Repeat</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Reset"></dwc-icon>
        <div class="trg-12">Reset</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ZoomIn"></dwc-icon>
        <div class="trg-12">ZoomIn</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Download"></dwc-icon>
        <div class="trg-12">Download</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Upload"></dwc-icon>
        <div class="trg-12">Upload</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Share"></dwc-icon>
        <div class="trg-12">Share</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CaretDownFill"></dwc-icon>
        <div class="trg-12">CaretDownFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CaretDownFillSmall"></dwc-icon>
        <div class="trg-12">CaretDownFillSmall</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ChangeMeasure"></dwc-icon>
        <div class="trg-12">ChangeMeasure</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ChangeSqaremeter"></dwc-icon>
        <div class="trg-12">ChangeSqaremeter</div>
      </div>
    </div>

    <h2 class="tbd-16">03_Interfaces</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center">
        <dwc-icon name="Backspace"></dwc-icon>
        <div class="trg-12">Backspace</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="SettingFill"></dwc-icon>
        <div class="trg-12">SettingFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Setting"></dwc-icon>
        <div class="trg-12">Setting</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HamburgerMenu"></dwc-icon>
        <div class="trg-12">HamburgerMenu</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Menu"></dwc-icon>
        <div class="trg-12">Menu</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="List"></dwc-icon>
        <div class="trg-12">List</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="MenuFill"></dwc-icon>
        <div class="trg-12">MenuFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ListFill"></dwc-icon>
        <div class="trg-12">ListFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ImageView"></dwc-icon>
        <div class="trg-12">ImageView</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Search"></dwc-icon>
        <div class="trg-12">Search</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Filter"></dwc-icon>
        <div class="trg-12">Filter</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HeartFill"></dwc-icon>
        <div class="trg-12">HeartFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Heart"></dwc-icon>
        <div class="trg-12">Heart</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Check"></dwc-icon>
        <div class="trg-12">Check</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CheckCircleFill"></dwc-icon>
        <div class="trg-12">CheckCircleFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Calender"></dwc-icon>
        <div class="trg-12">Calender</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Calender02"></dwc-icon>
        <div class="trg-12">Calender02</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CameraFill"></dwc-icon>
        <div class="trg-12">CameraFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Camera"></dwc-icon>
        <div class="trg-12">Camera</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Complain"></dwc-icon>
        <div class="trg-12">Complain</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="File"></dwc-icon>
        <div class="trg-12">File</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Plus"></dwc-icon>
        <div class="trg-12">Plus</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Minus"></dwc-icon>
        <div class="trg-12">Minus</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Xmark"></dwc-icon>
        <div class="trg-12">Xmark</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="DotMenuHorizon"></dwc-icon>
        <div class="trg-12">DotMenuHorizon</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="DotMenuVertical"></dwc-icon>
        <div class="trg-12">DotMenuVertical</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Home"></dwc-icon>
        <div class="trg-12">Home</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HomeFill"></dwc-icon>
        <div class="trg-12">HomeFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HomeCheck"></dwc-icon>
        <div class="trg-12">HomeCheck</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomOut"></dwc-icon>
        <div class="trg-12">RoomOut</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomRegeister"></dwc-icon>
        <div class="trg-12">RoomRegeister</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomManage"></dwc-icon>
        <div class="trg-12">RoomManage</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomSearch"></dwc-icon>
        <div class="trg-12">RoomSearch</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HomeSearch"></dwc-icon>
        <div class="trg-12">HomeSearch</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HomeHeart"></dwc-icon>
        <div class="trg-12">HomeHeart</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HomeTime"></dwc-icon>
        <div class="trg-12">HomeTime</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="HomeCall"></dwc-icon>
        <div class="trg-12"></div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Help"></dwc-icon>
        <div class="trg-12">Help</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Password"></dwc-icon>
        <div class="trg-12">Password</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Information"></dwc-icon>
        <div class="trg-12">Information</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="InformationFill"></dwc-icon>
        <div class="trg-12">InformationFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Image"></dwc-icon>
        <div class="trg-12">Image</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ImageSlash"></dwc-icon>
        <div class="trg-12">ImageSlash</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CallFill"></dwc-icon>
        <div class="trg-12">CallFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Call"></dwc-icon>
        <div class="trg-12">Call</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="">Subcall</dwc-icon>
        <div class="trg-12">Subcall</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="MessageFill"></dwc-icon>
        <div class="trg-12">MessageFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Message"></dwc-icon>
        <div class="trg-12">Message</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="InquiryFill"></dwc-icon>
        <div class="trg-12">InquiryFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Inquiry"></dwc-icon>
        <div class="trg-12">Inquiry</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="ChatFill"></dwc-icon>
        <div class="trg-12">ChatFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Chat"></dwc-icon>
        <div class="trg-12">Chat</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="SendFill"></dwc-icon>
        <div class="trg-12">SendFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Send"></dwc-icon>
        <div class="trg-12">Send</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Emoji"></dwc-icon>
        <div class="trg-12">Emoji</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="EmojiFill"></dwc-icon>
        <div class="trg-12">EmojiFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Mobile"></dwc-icon>
        <div class="trg-12">Mobile</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Copy"></dwc-icon>
        <div class="trg-12">Copy</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Comment"></dwc-icon>
        <div class="trg-12">Comment</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Notice"></dwc-icon>
        <div class="trg-12">Notice</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Member"></dwc-icon>
        <div class="trg-12">Member</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Event"></dwc-icon>
        <div class="trg-12">Event</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="BizKakao"></dwc-icon>
        <div class="trg-12">BizKakao</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Question"></dwc-icon>
        <div class="trg-12">Question</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="QuestionMarkFill"></dwc-icon>
        <div class="trg-12">QuestionMarkFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="QuestionMark"></dwc-icon>
        <div class="trg-12">QuestionMark</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="WarningFill"></dwc-icon>
        <div class="trg-12">WarningFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Warning"></dwc-icon>
        <div class="trg-12">Warning</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Time"></dwc-icon>
        <div class="trg-12">Time</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="View"></dwc-icon>
        <div class="trg-12">View</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Premium"></dwc-icon>
        <div class="trg-12">Premium</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="PlusCircleFill"></dwc-icon>
        <div class="trg-12">PlusCircleFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="XmarkCircleFill"></dwc-icon>
        <div class="trg-12">XmarkCircleFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Thumb"></dwc-icon>
        <div class="trg-12">Thumb</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Exit"></dwc-icon>
        <div class="trg-12">Exit</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="LicenseFill"></dwc-icon>
        <div class="trg-12">LicenseFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Spinner"></dwc-icon>
        <div class="trg-12">Spinner</div>
      </div>
    </div>

    <h2 class="tbd-16">04_Location</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Gps"></dwc-icon>
        <div class="trg-12">Gps</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="MapFill"></dwc-icon>
        <div class="trg-12">MapFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Map"></dwc-icon>
        <div class="trg-12">Map</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Metro"></dwc-icon>
        <div class="trg-12">Metro</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="MetroFill"></dwc-icon>
        <div class="trg-12">MetroFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoadView"></dwc-icon>
        <div class="trg-12">RoadView</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Location"></dwc-icon>
        <div class="trg-12">Location</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="LocationFill"></dwc-icon>
        <div class="trg-12">LocationFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="LocationUnderline"></dwc-icon>
        <div class="trg-12">LocationUnderline</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="University"></dwc-icon>
        <div class="trg-12">University</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="UniversityFill"></dwc-icon>
        <div class="trg-12">UniversityFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomNumber"></dwc-icon>
        <div class="trg-12">RoomNumber</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Apt"></dwc-icon>
        <div class="trg-12">Apt</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Officetels"></dwc-icon>
        <div class="trg-12">Officetels</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="AgentFill"></dwc-icon>
        <div class="trg-12">AgentFill</div>
      </div>
    </div>

    <h2 class="tbd-16">05_Room Option</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Road"></dwc-icon>
        <div class="trg-12">Road</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Toilet"></dwc-icon>
        <div class="trg-12">Toilet</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Elevator"></dwc-icon>
        <div class="trg-12">Elevator</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="NewBuild"></dwc-icon>
        <div class="trg-12">NewBuild</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Bank"></dwc-icon>
        <div class="trg-12">Bank</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="FullOption"></dwc-icon>
        <div class="trg-12">FullOption</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Parking"></dwc-icon>
        <div class="trg-12">Parking</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Pet"></dwc-icon>
        <div class="trg-12">Pet</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Study"></dwc-icon>
        <div class="trg-12">Study</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="DeliveryFood"></dwc-icon>
        <div class="trg-12">DeliveryFood</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Parcel"></dwc-icon>
        <div class="trg-12">Parcel</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="BuildType"></dwc-icon>
        <div class="trg-12">BuildType</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Floor"></dwc-icon>
        <div class="trg-12">Floor</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomCount"></dwc-icon>
        <div class="trg-12">RoomCount</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="RoomSize"></dwc-icon>
        <div class="trg-12">RoomSize</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Vacancy"></dwc-icon>
        <div class="trg-12">Vacancy</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Fee"></dwc-icon>
        <div class="trg-12">Fee</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Shower"></dwc-icon>
        <div class="trg-12">Shower</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="WindowInside"></dwc-icon>
        <div class="trg-12">WindowInside</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="WindowOutside"></dwc-icon>
        <div class="trg-12">WindowOutside</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="AirConditionerairConditioner"></dwc-icon>
        <div class="trg-12">AirConditionerairConditioner</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Heating"></dwc-icon>
        <div class="trg-12">Heating</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Internet"></dwc-icon>
        <div class="trg-12">Internet</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Option"></dwc-icon>
        <div class="trg-12">Option</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Meal"></dwc-icon>
        <div class="trg-12">Meal</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="PersonalFacility"></dwc-icon>
        <div class="trg-12">PersonalFacility</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Safety"></dwc-icon>
        <div class="trg-12">Safety</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Amenity"></dwc-icon>
        <div class="trg-12">Amenity</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Terrace"></dwc-icon>
        <div class="trg-12">Terrace</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CommonFacility"></dwc-icon>
        <div class="trg-12">CommonFacility</div>
      </div>
    </div>

    <h2 class="tbd-16">06_Room Type</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Villa"></dwc-icon>
        <div class="trg-12">Villa</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Flat"></dwc-icon>
        <div class="trg-12">Flat</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Apartment"></dwc-icon>
        <div class="trg-12">Apartment</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Office"></dwc-icon>
        <div class="trg-12">Office</div>
      </div>
    </div>

    <h2 class="tbd-16">07_Social</h2>
    <div class="grid grid-cols-6 gap-y-[20px] place-items-center mb-[40px] py-[20px] px-[20px]">
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Cafe"></dwc-icon>
        <div class="trg-12">Cafe</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="CafeFill"></dwc-icon>
        <div class="trg-12">CafeFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Blog"></dwc-icon>
        <div class="trg-12">Blog</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Facebook"></dwc-icon>
        <div class="trg-12">Facebook</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="FacebookFill"></dwc-icon>
        <div class="trg-12">FacebookFill</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Instagram"></dwc-icon>
        <div class="trg-12">Instagram</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Kakao"></dwc-icon>
        <div class="trg-12">Kakao</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Naver"></dwc-icon>
        <div class="trg-12">Naver</div>
      </div>
      <div class="flex flex-col w-[60px] justify-center items-center ">
        <dwc-icon name="Apple"></dwc-icon>
        <div class="trg-12">Apple</div>
      </div>
    </div>
  </div>
`;

const meta = {
  title: 'Foundations/Iconography',
  tags: ['autodocs'],
  render: Template,
} satisfies Meta;
export default meta;

type Story = StoryObj;

export const Default: Story = {};
