import React from "react";
import { Head } from "@inertiajs/react";
import {
    Box,
    Flex,
    Text,
    Container,
    Grid,
    GridItem,
    Input,
    Icon,
    Stack,
    Button,
    Badge,
    Avatar,
    IconButton,
    Image,
    Link,
} from "@chakra-ui/react";
import {
    FiSearch,
    FiSettings,
    FiBell,
    FiUser,
    FiCalendar,
    FiEdit,
    FiTrash2,
} from "react-icons/fi";

// Component for Card with shadow
const Card = ({ children, ...rest }) => (
    <Box bg="white" borderRadius="xl" boxShadow="sm" p={6} {...rest}>
        {children}
    </Box>
);

// Transaction Item Component
const TransactionItem = ({
    company,
    date,
    amount = "",
    isPositive = false,
    isPending = false,
}) => {
    const amountColor = isPending
        ? "gray.700"
        : isPositive
        ? "green.500"
        : "red.500";

    const iconBorderColor = isPending
        ? "gray.400"
        : isPositive
        ? "green.500"
        : "red.500";

    return (
        <Flex justifyContent="space-between" alignItems="center" py={3}>
            <Box flex={1}>
                <Text fontWeight="bold" fontSize="sm" color="gray.400">
                    {date}
                </Text>
                <Text fontWeight="bold" color="gray.800">
                    {company}
                </Text>
            </Box>
            <Flex gap={4} alignItems="center">
                <Text fontWeight="bold" color={amountColor}>
                    {isPending ? "Pending" : amount}
                </Text>
                <Flex
                    w="32px"
                    h="32px"
                    borderRadius="full"
                    alignItems="center"
                    justifyContent="center"
                    border="1px"
                    borderColor={iconBorderColor}
                >
                    {isPositive && !isPending && (
                        <Image
                            src="/img/arrow-forward.svg"
                            alt="Incoming"
                            transform="rotate(180deg)"
                            w="16px"
                            h="16px"
                        />
                    )}
                    {!isPositive && !isPending && (
                        <Image
                            src="/img/arrow-forward.svg"
                            alt="Outgoing"
                            w="16px"
                            h="16px"
                        />
                    )}
                    {isPending && (
                        <Text fontWeight="bold" color="gray.400">
                            !
                        </Text>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

// Invoice Item Component
const InvoiceItem = ({ id, date, amount }) => (
    <Flex justifyContent="space-between" alignItems="center" py={3}>
        <Box flex={1}>
            <Text fontWeight="bold" fontSize="sm" color="gray.400">
                {id}
            </Text>
            <Text fontWeight="bold" color="gray.800">
                {date}
            </Text>
        </Box>
        <Flex gap={3} alignItems="center">
            <Text fontWeight="bold" color="gray.500">
                {amount}
            </Text>
            <Flex gap={1} alignItems="center">
                <Image
                    src="/img/document-icon.svg"
                    alt="Document"
                    w="16px"
                    h="16px"
                />
                <Text
                    textTransform="uppercase"
                    fontSize="xs"
                    fontWeight="bold"
                    color="gray.700"
                >
                    PDF
                </Text>
            </Flex>
        </Flex>
    </Flex>
);

// Billing Information Card Item
const BillingInfoItem = ({ name, company, email, vatNumber }) => (
    <Box bg="gray.50" p={4} borderRadius="xl" mb={4}>
        <Box mb={4}>
            <Text fontWeight="bold" color="gray.800">
                {name}
            </Text>
            <Text fontSize="sm" color="gray.400">
                Company Name: {company} <br />
                Email Address: {email} <br />
                VAT Number: {vatNumber}
            </Text>
        </Box>
        <Flex justifyContent="space-between">
            <Flex gap={1} alignItems="center" color="teal.500">
                <Text fontSize="xs" fontWeight="bold">
                    EDIT
                </Text>
                <Image src="/img/edit-icon.svg" alt="Edit" w="16px" h="16px" />
            </Flex>
            <Flex gap={1} alignItems="center" color="red.500">
                <Text fontSize="xs" fontWeight="bold">
                    DELETE
                </Text>
                <Icon as={FiTrash2} fontSize="sm" />
            </Flex>
        </Flex>
    </Box>
);

// Payment Method Card
const PaymentMethodCard = ({ type, cardNumber }) => (
    <Flex
        border="1px"
        borderColor="gray.200"
        p={4}
        borderRadius="xl"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
    >
        <Flex gap={3} alignItems="center">
            <Flex
                w="32px"
                h="32px"
                borderRadius="full"
                bg="blue.50"
                alignItems="center"
                justifyContent="center"
            >
                {type === "visa" && (
                    <Text color="blue.700" fontWeight="bold" fontSize="xs">
                        VISA
                    </Text>
                )}
                {type === "mastercard" && (
                    <Flex>
                        <Box
                            w="12px"
                            h="12px"
                            borderRadius="full"
                            bg="red.500"
                            mr="-4px"
                        />
                        <Box
                            w="12px"
                            h="12px"
                            borderRadius="full"
                            bg="yellow.500"
                        />
                    </Flex>
                )}
            </Flex>
            <Text color="gray.500">{cardNumber}</Text>
        </Flex>
        <Image
            src="/img/edit-icon.svg"
            alt="Edit"
            w="16px"
            h="16px"
            color="gray.700"
        />
    </Flex>
);

export default function Billing() {
    const bgGradient = "linear(to-br, teal.400, teal.600)";
    const bgColor = "gray.50";

    return (
        <>
            <Head title="Billing" />

            <Box bg={bgColor} minH="100vh" bgColor="#F8F9FA">
                {/* Sidebar placeholder - would be a separate component in a real app */}
                <Box
                    display={{ base: "none", md: "block" }}
                    w="200px"
                    position="fixed"
                    h="full"
                    bg="white"
                    boxShadow="sm"
                >
                    {/* Sidebar content would go here */}
                </Box>

                <Box ml="210px" p={8}>
                    {/* Breadcrumb */}
                    <Flex
                        mb={8}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Text color="gray.400" fontSize="sm">
                                Pages /{" "}
                                <Text
                                    as="span"
                                    color="gray.700"
                                    fontWeight="bold"
                                >
                                    Billing
                                </Text>
                            </Text>
                            <Text
                                color="gray.800"
                                fontWeight="bold"
                                fontSize="xl"
                            >
                                Billing
                            </Text>
                        </Box>

                        <Flex gap={4} alignItems="center">
                            <Input
                                type="text"
                                placeholder="Search..."
                                rounded="xl"
                                borderColor="gray.200"
                                width="200px"
                            />
                            <Icon as={FiBell} color="gray.500" />
                            <Icon as={FiSettings} color="gray.500" />
                            <Flex gap={2} alignItems="center">
                                <Icon as={FiUser} color="gray.500" />
                                <Text color="gray.500" fontWeight="bold">
                                    Sign In
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* Credit Card */}
                    <Box
                        mb={8}
                        bgGradient={bgGradient}
                        borderRadius="xl"
                        p={6}
                        color="white"
                        boxShadow="md"
                    >
                        <Box mb={10}>
                            <Text fontSize="2xl" fontWeight="bold" mb={1}>
                                Purity UI
                            </Text>
                            <Flex gap={2}>
                                <Box
                                    w="32px"
                                    h="32px"
                                    bg="white"
                                    opacity={0.4}
                                    borderRadius="full"
                                />
                                <Box
                                    w="32px"
                                    h="32px"
                                    bg="white"
                                    opacity={0.4}
                                    borderRadius="full"
                                />
                            </Flex>
                        </Box>
                        <Text fontSize="2xl" mb={4} letterSpacing="wider">
                            7812 2139 0823 XXXX
                        </Text>
                        <Flex justifyContent="space-between">
                            <Box>
                                <Text fontSize="xs" opacity={0.8}>
                                    VALID THRU
                                </Text>
                                <Text fontWeight="bold">05/24</Text>
                            </Box>
                            <Box>
                                <Text fontSize="xs" opacity={0.8}>
                                    CVV
                                </Text>
                                <Text fontWeight="bold">09X</Text>
                            </Box>
                        </Flex>
                    </Box>

                    {/* Analytics Cards - 2 columns */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={8}
                        mb={8}
                    >
                        <Card display="flex" alignItems="stretch">
                            <Box flex={1}>
                                <Text
                                    fontWeight="bold"
                                    color="gray.800"
                                    fontSize="xl"
                                    mb={2}
                                >
                                    Salary
                                </Text>
                                <Text color="gray.400" mb={3}>
                                    Belong Interactive
                                </Text>
                                <Box
                                    borderTop="1px"
                                    borderColor="gray.200"
                                    my={3}
                                />
                                <Text
                                    fontWeight="bold"
                                    fontSize="xl"
                                    color="gray.800"
                                >
                                    +$2000
                                </Text>
                            </Box>
                            <Box>
                                <Flex
                                    w="48px"
                                    h="48px"
                                    borderRadius="xl"
                                    bg="teal.500"
                                    color="white"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Image
                                        src="/img/wallet-icon.svg"
                                        alt="Wallet"
                                        w="24px"
                                        h="24px"
                                    />
                                </Flex>
                            </Box>
                        </Card>

                        <Card display="flex" alignItems="stretch">
                            <Box flex={1}>
                                <Text
                                    fontWeight="bold"
                                    color="gray.800"
                                    fontSize="xl"
                                    mb={2}
                                >
                                    Paypal
                                </Text>
                                <Text color="gray.400" mb={3}>
                                    Freelance Payment
                                </Text>
                                <Box
                                    borderTop="1px"
                                    borderColor="gray.200"
                                    my={3}
                                />
                                <Text
                                    fontWeight="bold"
                                    fontSize="xl"
                                    color="gray.800"
                                >
                                    $455.00
                                </Text>
                            </Box>
                            <Box>
                                <Flex
                                    w="48px"
                                    h="48px"
                                    borderRadius="xl"
                                    bg="teal.500"
                                    color="white"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text fontWeight="bold">PP</Text>
                                </Flex>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Payment Method Card */}
                    <Card mb={8}>
                        <Text fontWeight="bold" color="gray.700" mb={4}>
                            Payment Method
                        </Text>

                        <PaymentMethodCard
                            type="visa"
                            cardNumber="7812 2139 0823 XXXX"
                        />

                        <PaymentMethodCard
                            type="mastercard"
                            cardNumber="7812 2139 0823 XXXX"
                        />

                        <Button
                            w="full"
                            mt={4}
                            bgGradient="linear(to-r, gray.800, gray.900)"
                            color="white"
                            borderRadius="xl"
                            size="md"
                        >
                            <Text fontSize="xs" fontWeight="bold">
                                ADD A NEW CARD
                            </Text>
                        </Button>
                    </Card>

                    {/* Invoices Card */}
                    <Card mb={8}>
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            mb={6}
                        >
                            <Text
                                fontWeight="bold"
                                color="gray.800"
                                fontSize="xl"
                            >
                                Invoices
                            </Text>
                            <Button
                                variant="outline"
                                borderColor="teal.500"
                                color="teal.500"
                                borderRadius="xl"
                                size="sm"
                            >
                                <Text fontSize="xs" fontWeight="bold">
                                    VIEW ALL
                                </Text>
                            </Button>
                        </Flex>

                        <InvoiceItem
                            id="#MS-415646"
                            date="March, 01, 2020"
                            amount="$180"
                        />
                        <Box borderTop="1px" borderColor="gray.100" my={2} />

                        <InvoiceItem
                            id="#RV-126749"
                            date="February, 10, 2021"
                            amount="$250"
                        />
                        <Box borderTop="1px" borderColor="gray.100" my={2} />

                        <InvoiceItem
                            id="#FB-212562"
                            date="April, 05, 2020"
                            amount="$560"
                        />
                        <Box borderTop="1px" borderColor="gray.100" my={2} />

                        <InvoiceItem
                            id="#QW-103578"
                            date="June, 25, 2019"
                            amount="$120"
                        />
                        <Box borderTop="1px" borderColor="gray.100" my={2} />

                        <InvoiceItem
                            id="#AR-803481"
                            date="March, 01, 2019"
                            amount="$300"
                        />
                    </Card>

                    {/* 2 columns for billing info and transactions */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={8}
                        mb={8}
                    >
                        <Card>
                            <Text
                                fontWeight="bold"
                                color="gray.800"
                                fontSize="xl"
                                mb={6}
                            >
                                Billing Information
                            </Text>

                            <BillingInfoItem
                                name="Oliver Liam"
                                company="Viking Burrito"
                                email="oliver@burrito.com"
                                vatNumber="FRB1235476"
                            />

                            <BillingInfoItem
                                name="Oliver Liam"
                                company="Viking Burrito"
                                email="oliver@burrito.com"
                                vatNumber="FRB1235476"
                            />

                            <BillingInfoItem
                                name="Oliver Liam"
                                company="Viking Burrito"
                                email="oliver@burrito.com"
                                vatNumber="FRB1235476"
                            />
                        </Card>

                        <Card>
                            <Flex
                                justifyContent="space-between"
                                alignItems="center"
                                mb={6}
                            >
                                <Text
                                    fontWeight="bold"
                                    color="gray.800"
                                    fontSize="xl"
                                >
                                    Your Transactions
                                </Text>
                                <Flex
                                    gap={2}
                                    alignItems="center"
                                    color="gray.400"
                                >
                                    <Icon as={FiCalendar} fontSize="sm" />
                                    <Text fontSize="sm" fontWeight="bold">
                                        23 - 30 March 2020
                                    </Text>
                                </Flex>
                            </Flex>

                            <Text
                                fontSize="xs"
                                fontWeight="bold"
                                color="gray.400"
                                mb={3}
                            >
                                NEWEST
                            </Text>

                            <TransactionItem
                                company="Netflix"
                                date="27 March 2020, at 12:30 PM"
                                amount="-$2500"
                                isPositive={false}
                            />
                            <Box
                                borderTop="1px"
                                borderColor="gray.100"
                                my={2}
                            />

                            <TransactionItem
                                company="Apple"
                                date="27 March 2020, at 12:30 PM"
                                amount="+$2500"
                                isPositive={true}
                            />
                            <Box
                                borderTop="1px"
                                borderColor="gray.100"
                                my={2}
                            />

                            <Text
                                fontSize="xs"
                                fontWeight="bold"
                                color="gray.400"
                                my={3}
                            >
                                YESTERDAY
                            </Text>

                            <TransactionItem
                                company="Stripe"
                                date="26 March 2020, at 13:45 PM"
                                amount="+$800"
                                isPositive={true}
                            />
                            <Box
                                borderTop="1px"
                                borderColor="gray.100"
                                my={2}
                            />

                            <TransactionItem
                                company="HubSpot"
                                date="26 March 2020, at 12:30 PM"
                                amount="+$1700"
                                isPositive={true}
                            />
                            <Box
                                borderTop="1px"
                                borderColor="gray.100"
                                my={2}
                            />

                            <TransactionItem
                                company="Webflow"
                                date="26 March 2020, at 05:00 AM"
                                isPending={true}
                            />
                            <Box
                                borderTop="1px"
                                borderColor="gray.100"
                                my={2}
                            />

                            <TransactionItem
                                company="Microsoft"
                                date="25 March 2020, at 16:30 PM"
                                amount="-$987"
                                isPositive={false}
                            />
                        </Card>
                    </Grid>

                    {/* Footer */}
                    <Box mt={12} pt={6} borderTop="1px" borderColor="gray.200">
                        <Flex justifyContent="space-between">
                            <Text color="gray.400" fontSize="sm">
                                @ 2021, Made with ❤️ by Creative Tim & Simmmple
                                for a better web
                            </Text>
                            <Flex gap={4} alignItems="center">
                                <Link href="#" color="gray.400" fontSize="sm">
                                    Creative Tim
                                </Link>
                                <Link href="#" color="gray.400" fontSize="sm">
                                    Simmmple
                                </Link>
                                <Link href="#" color="gray.400" fontSize="sm">
                                    Blog
                                </Link>
                                <Link href="#" color="gray.400" fontSize="sm">
                                    License
                                </Link>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
