import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setEnglish, setVietnamese } from "../redux/languageSlice";

function LanguageSwitcher() {
  const lang = useSelector((state: RootState) => state.language.lang);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={lang}
        onChange={(e) =>
          e.target.value === "en"
            ? dispatch(setEnglish())
            : dispatch(setVietnamese())
        }
        style={{ padding: "5px", marginBottom: "20px" }}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h2>{lang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}</h2>
    </div>
  );
}

export default LanguageSwitcher;