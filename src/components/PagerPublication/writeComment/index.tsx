import { Publication } from "@/pages"
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

interface CardProps {
    publication: Publication
}

export const WriteComments = ({ publication }: CardProps) => {
    const router = useRouter()
    const [userData, setUserData] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [isAble, setIsAble] = useState(false)

    function fetchUserDataFromToken() {
        try {
            const accessToken = getAccessToken();

            if (!accessToken) {
                setIsAble(false)
                console.error("User is not authenticated");
                return;
            }

            const decodedToken = jwt_decode(accessToken);

            console.log(decodedToken)
            setUserData(decodedToken);
            setIsAble(true)
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    useEffect(() => {
        fetchUserDataFromToken();
    }, []);

    function getAccessToken() {
        return localStorage.getItem("@Token");
    }

    const handleCommentSubmit = async () => {
        try {
            if (!commentText) {
                return;
            }
            const accessToken = getAccessToken();

            if (!accessToken) {
                console.error("User is not authenticated");
                return;
            }

            const headers = {
                Authorization: `Bearer ${accessToken}`,
            };

            const response = await api.post("/comments", {
                description: commentText,
                publishId: publication.id,
            }, { headers });

            setCommentText("");
            window.location.reload()
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };
    return (
        <>
            <div style={{
                width: '100%',
                maxWidth: '700px',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
                position: 'relative',
                bottom: '150px'
            }}>
                <div style={{
                    display: 'flex',
                    background: '#ffffff',
                    width: '100%',
                    maxWidth: '720px',
                    height: '100%',
                    padding: '36px, 44px, 36px, 44px',
                    gap: '40px',
                    borderRadius: '4px'
                }}>
                    <div>
                        <div className="flex items-start gap-4 rounded-full w-10 h-10 bg-brands-brand1 p-4">

                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '25px',
                                marginTop: '-9px'


                            }}>
                                {userData && userData.name && (
                                    <>
                                        <p className="text-center mt-0.5 text-grey-whiteFixed">{userData.name.charAt(0)}</p>
                                        <p className="font-semibold">{userData.name}</p>
                                    </>
                                )}
                            </div>
                        </div>



                        <div style={{


                        }}>
                            <input className="border border-grey-grey7" placeholder="Carro Confortavel" style={{
                                width: '100%',
                                maxWidth: '728px',
                                height: '128px',
                            }}
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            ></input>

                            <button
                                className={
                                    isAble
                                        ? "bg-brands-brand1 text-grey-whiteFixed rounded w-[108px] h-[38px]"
                                        : "bg-grey-grey3 text-grey-whiteFixed rounded w-[108px] h-[38px]"
                                }
                                disabled={!isAble} 
                                onClick={handleCommentSubmit}
                            >
                                Comentar
                            </button>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: "100%",
                                maxWidth: '507px'
                            }}>
                                <p style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: "300px",
                                    background: '#E9ECEF',
                                    borderRadius: '24px',
                                    fontSize: '12px',
                                    lineHeight: '24px',
                                    fontWeight: '500',
                                    padding: '0px, 12px, 0px, 12px',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    height: '24px'
                                }}>Gostei muito!</p>
                                <p style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: "300px",
                                    background: '#E9ECEF',
                                    borderRadius: '24px',
                                    fontSize: '12px',
                                    lineHeight: '24px',
                                    fontWeight: '500',
                                    padding: '0px, 12px, 0px, 12px',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    height: '24px'
                                }}>Incrivel!</p>
                                <p style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: "100%",
                                    background: '#E9ECEF',
                                    borderRadius: '24px',
                                    fontSize: '12px',
                                    lineHeight: '24px',
                                    fontWeight: '500',
                                    padding: '0px, 12px, 0px, 12px',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    height: '24px'
                                }}>Recomendarei para meus amigos!</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}