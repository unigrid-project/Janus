/*
 * This file is part of The UNIGRID Wallet
 * Copyright (C) 2020 The UNIGRID Organization
 *
 * The UNIGRID Wallet is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * The UNIGRID Wallet is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with The UNIGRID Wallet. If not, see <https://www.gnu.org/licenses/>.
 */

import React, { useState, useEffect } from "react";
import "./Transaction.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WarningMessage from "./WarningMessage";

function TransactionLoading({ style }) {

    return (
        <div className={"transaction--main--old " + style}>
            <div className="loading--item">
                <FontAwesomeIcon size="lg" icon={faClock} color="white" />
            </div>
            <div className="loading--item">
                Loading...
            </div >
        </div >
    )
}

export default TransactionLoading;