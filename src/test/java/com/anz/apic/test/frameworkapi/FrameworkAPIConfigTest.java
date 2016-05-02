package com.anz.apic.test.frameworkapi;


import org.junit.runner.RunWith;

import de.helwich.junit.JasmineTest;
import de.helwich.junit.JasmineTestRunner;

@RunWith(JasmineTestRunner.class)
@JasmineTest(
    src =  { "Require" },
    test = { "SandboxFrameworkAPIConfigTest"},
    browser = false
)
public class FrameworkAPIConfigTest {
}
