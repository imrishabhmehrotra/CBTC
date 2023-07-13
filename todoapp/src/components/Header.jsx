"use client";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Todo.
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/about");
                }}
              >
                About
              </a>
            </li>
            {localStorage.getItem("token") ? (
              <li>
                <a
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
