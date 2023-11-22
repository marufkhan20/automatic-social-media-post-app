import React from 'react';

const CustomerTable = () => {
    // Sample customer data
    const customers = [
        {
            id: 1,
            user: '/images/user1.png',
            name: 'John Doe',
            email: 'john@example.com',
            spent: '$1000',
            country: 'usa',
            flag: '/images/china.png'
        },
        {
            id: 2,
            user: '/images/user2.jpg',
            name: 'Alice Smith',
            email: 'alice@example.com',
            spent: '$800',
            country: 'canada',
            flag: '/images/philippines.png'

        },
        {
            id: 3,
            user: '/images/user3.png',

            name: 'John Doe',
            email: 'john@example.com',
            spent: '$1000',
            country: 'usa',
            flag: '/images/south-africa.png'
        },
        {
            id: 4,
            user: '/images/user4.png',
            name: 'Alice Smith',
            email: 'alice@example.com',
            spent: '$800',
            country: 'canada',
            flag: '/images/united-states.png'

        },
    ];

    return (
        <table className=" divide-y divide-[#B2B2B2]/50 ">
            <thead className="">
                <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Spent
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Country
                    </th>
                </tr>
            </thead>
            <tbody className=" divide-y divide-[#B2B2B2]/50 ">
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    {/* User image */}
                                    <img
                                        className="h-10 w-10 rounded-full object-cover object-top"
                                        src={`${customer.user}`}
                                        alt=""
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-white">
                                        {customer.name}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{customer.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-[#50ae67]">{customer.spent}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img
                                className="h-6 w-6 object-cover"
                                src={`${customer.flag}`}
                                alt=""
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CustomerTable;
