import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <Link href="/auth">
        <div>Prijava za delavce test</div>
      </Link>
      <Link href="/auth">
        <div>Prijava za podjetja develop branch</div>
      </Link>
    </div>
  );
}
