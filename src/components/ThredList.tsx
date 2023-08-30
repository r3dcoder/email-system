import { Thread } from '@/type/thread';
import { type } from 'os';
import React from 'react';

interface Porps {
    threads: Thread[]
}

const ThreadList: React.FC<Porps> = ({ threads }: Porps) => {
    console.log("threads", threads)
    return (
        <div>
            {
                threads.length > 0 &&
                <div className="flex flex-col space-y-4">
                    {threads?.map((thread) => (
                        <div key={thread.id} className="border rounded-lg p-4 bg-white">
                            <div className="font-semibold text-gray-700 mb-2">{thread.snippet}</div>
                            <div className="text-gray-500">History ID: {thread.historyId}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default ThreadList;
