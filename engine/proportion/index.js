export default function proportion(width)
{
    const lwidth = width;
    const proportion = { tile1: lwidth.toString() + "%", tile2: (100 - lwidth).toString() + "%" }
    return proportion;
}