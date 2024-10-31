import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import SortEventsBar from "./SortEventsBar";

const ExistingPremium = ({ events, onClick }) => {
    const [eventsInThisComponents, setEventsInThisComponents] =
        useState(events);
    useEffect(() => {
        // events.sort((a, b) => a.title.localeCompare(b.title))
        setEventsInThisComponents(events);
    }, [events]);

    const baseDomain = `${window.location.protocol}//${window.location.host}`;

    const baseImgPath = `${baseDomain}/storage/`;
    const baseVoicePath = `${baseDomain}/storage/`;



    return (
        <Box sx={{ width: "60%", display: "flex", flexDirection: "column" }}>
            <Stack
                direction={"row"}
                sx={{ marginBottom: "20px " }}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Typography variant={"h5"}>Existing Premium</Typography>
                <SortEventsBar />
            </Stack>
            <Stack sx={{ margin: "0px 0px", flexDirection: "column" }}>
                {eventsInThisComponents.map((eve, index) => (
                    <Box
                        key={eve.id}
                        sx={{
                            backgroundColor: "white",
                            padding: "10px",
                            margin: "5px 0px",
                            border: "2px solid #333",
                            borderRadius: "7px",
                            transition: "all 300ms ease",
                            "&:hover": {
                                background: "#eee",
                                cursor: "pointer",
                            },
                        }}
                        // onClick={() => {
                        //     onClick(eve.id);
                        // }}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ position: "relative" }}
                        >
                            <img
                                src={`${baseImgPath}${eve.image}`}
                                alt="background icon"
                                style={{
                                    position: "absolute",
                                    left: -2,

                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    zIndex: 1,
                                }}
                            />

                            <Typography
                                style={{
                                    paddingLeft: 50,
                                }}
                                variant={"h6"}
                            >
                                {eve.title}
                            </Typography>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Typography
                                    padding={"0px 5px"}
                                    variant={"body2"}
                                >
                                    Premium: &nbsp; &nbsp;
                                    {eve.is_premium == "true" ? "Yes" : "No"}
                                </Typography>
                            </Stack>
                        </Stack>
                        <br />
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {eve.voice && (
                                <audio controls>
                                    <source
                                        src={`${baseVoicePath}${eve.voice}`}
                                        type="audio/mpeg"
                                    />{" "}
                                    Your browser does not support the audio
                                    element.
                                </audio>
                            )}
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default ExistingPremium;
