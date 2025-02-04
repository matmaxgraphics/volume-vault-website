import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const VaultSelector = ({ vaultData, selectedMode, setSelectedMode }) => {
  return (
    <div className="mode-dropdown">
      <label htmlFor="packages-mode">Mode:</label>
      <div className="select">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="dropdown-trigger">
            {selectedMode}
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="dropdown-content" modal={false}>
            {Object.keys(vaultData).map((mode) => (
              <DropdownMenu.Item
                key={mode}
                className="dropdown-item"
                onClick={() => setSelectedMode(mode)}
              >
                {mode}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default VaultSelector;
