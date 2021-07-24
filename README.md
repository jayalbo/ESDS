[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jayalbo/ESDS">
  </a>

  <h3 align="center">ESDS</h3>

  <p align="center">
    ES Javascript Data Structures (Queue, Stack, Linked List)
    <br />
    <a href="https://github.com/jayalbo/ESDS/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jayalbo/ESDS/issues">Report Bug</a>
    ·
    <a href="https://github.com/jayalbo/ESDS/discussions">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Install NPM package
   ```sh
   npm i ESDS
   ```

<!-- USAGE EXAMPLES -->

## Usage

#### Example Queue / Stack

```JavaScript
import {Queue, Stack} from 'esds'
const queue = new Queue();
cosnt stack = new Stack();

queue.add([1,2,3,4,5]);
stack.push([1,2,3,4,5]);

while (!queue.isEmpty){
    console.log(queue.poll()); // 1, 2, 3, 4, 5
}

while (!stack.isEmpty){
    console.log(stack.pop()); //5, 4, 3, 2, 1
}
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/jayalbo/ESDS/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/jayalbo/ESDS](https://github.com/jayalbo/ESDS)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jayalbo/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/jayalbo/ESDS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jayalbo/repo.svg?style=for-the-badge
[forks-url]: https://github.com/jayalbo/ESDS/network/members
[stars-shield]: https://img.shields.io/github/stars/jayalbo/repo.svg?style=for-the-badge
[stars-url]: https://github.com/jayalbo/ESDS/stargazers
[issues-shield]: https://img.shields.io/github/issues/jayalbo/repo.svg?style=for-the-badge
[issues-url]: https://github.com/jayalbo/ESDS/issues
[license-shield]: https://img.shields.io/github/license/jayalbo/repo.svg?style=for-the-badge
[license-url]: https://github.com/jayalbo/ESDS/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
