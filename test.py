import sys
import asyncio
from aioconsole import ainput

async def input_loop(loop):
    while True:
        input_ = await ainput(loop=loop)
        if input_ == "@end":
            sys.exit(0)
        print(f"Echo: {input_}")

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(input_loop(loop))
