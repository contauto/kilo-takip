export default function bmi(height, weight) {
    height=height/100;
    return (weight / (height * height)).toFixed(2);
}