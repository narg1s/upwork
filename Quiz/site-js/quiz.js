let questions = [
  {
    id: 1,
    question: "What will be the result of compiling and executing Test class?",
    answer: "1947-08-14T23:59:59.999999999",
    options: [
      "1947-08-14T23:59:59",
      "1947-08-14T23:59:59.999",
      "1947-08-14T23:59:59.0",
      "1947-08-14T23:59:59.999999999",
      ``,
      ``
    ],
    images: [
      `<p class="quiz_images">package com.udayan.oca; <br>
<br>
  import java.time.LocalDate;<br>
  import java.time.LocalTime;<br>
<br>
public class Test {<br>
     public static void main(String [] args) {<br>
         LocalDate date = LocalDate.parse("1947-08-14");<br>
         LocalTime time = LocalTime.MAX;<br>
         System.out.println(date.atTime(time));<br>
     }<br>
}</p>`,
      ``,
      ``
    ]
  },
  {
    id: 2,
    question: "Which of the following lambda expressions, if used to replace /*INSERT*/, prints [Jack, Liya] on to the console?",
    answer: `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="(Employee e)"> (Employee e) -> { return e.getSalary() >= 10000; }</form>`,
    options: [
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="(Employee e)"> (Employee e) -> { return e.getSalary() >= 10000; }</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="getSalary()"> e -> { e.getSalary() >= 10000 }</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="e.getSalary()"> e -> e.getSalary() >= 10000</form>`,
      `<form action="/action_page.php" method="get">
        <input type="checkbox" name="vehicle" value="(e)"> (e) -> { e.getSalary() >= 10000; }</form>`,
      `<form class="option" action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value=">= 10000"> e - > e.getSalary() >= 10000</form>`,
      ""
    ],
    // language=HTML
    images: [
      `<p class="quiz_images" style="margin-top: -450px; margin-right: 50px;">| 1 | package com.udayan.oca;<br>
<br>
import java.util.ArrayList;<br>
import java.util.Iterator;<br>
import java.util.List;<br>
import java.util.function.Predicate;<br>
        <br>
class Employee {<br>
     private String name;<br>
     private int age;<br>
     private double salary;<br>
        <br>
     public Employee(String name, int age, double salary) {<br>
         this.name = name;<br>
         this.age = age;<br>
         this.salary = salary;<br>
     }</p>`,
     `<p class="quiz_images" style="margin-top: -130px; margin-right: 50px;">| 2 | public String getName() {<br>
            return name;<br>
            }<br>
            <br>
            public int getAge() {<br>
            return age;<br>
            }<br>
            <br>
            public double getSalary() {<br>
            return salary;<br>
            }<br>
            <br>
            public String toString() {<br>
            return name;<br>
            }<br>
            }<br>
            public class Test {<br>
            public static void main(String [] args) {<br>
            List list = new ArrayList<>();<br>
            process(list, /*INSERT*/);<br>
            <br>
            System.out.println(list);<br>
            }<br>
        </p>`,
      `<p class="quiz_images" style="margin-top: 13px; margin-right: 30px;">| 3 | <br>private static void process(List<Employee> list, Predicate<Employee> predicate) {<br>
    Iterator<Employee> iterator = list.iterator();<br>
      while(iterator.hasNext()) {<br>
        if(predicate.test(iterator.next()))<br>
        iterator.remove();<br>
      }<br>
    }<br>
    }<br>
    list.add(new Employee("Lucy", 23, 12000));<br>
    list.add(new Employee("Bill", 27, 10000));<br>
    list.add(new Employee("Jack", 19, 5000));<br>
    list.add(new Employee("Liya", 20, 8000));<br>
    list.add(new Employee("James", 25, 15000));<br>
    <br></p>`
    ]
  },
  {
    id: 3,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Infinite loop",
    options: [
      "Infinite loop",
      `1\n 2\n 3\n 4\n 5`,
      `1\n 2\n 3\n 4`,
      `2\n 2\n 4\n 5`,
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             int x = 1;<br>
             while(checkAndIncrement(x)) {<br>
                 System.out.println(x);<br>
             }<br>
         }<br>
<br>
         private static boolean checkAndIncrement(int x) {<br>
             if(x < 5) {<br>
                 x++;<br>
                 return true;<br>
             } else {<br>
                 return false;<br>
             }<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 4,
    question: "Which of the following is the correct way to make the variable 'passportNo' read only for any other class?",
    answer: "Make 'passportNo' private and provide a public method getPassportNo() which will return its value.",
    options: [
      "Make 'passportNo' static and provide a public static method getPassportNo() which will return its value.",
      "Remove 'public' from the 'passportNo' declaration. i.e., change line 2 to int passportNo;",
      "Make 'passportNo' private.",
      "Make 'passportNo' private and provide a public method getPassportNo() which will return its value.",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
     <br>
    public class Employee {<br>
         public int passportNo; //line 2<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 5,
    question: "What will be the result of compiling and executing Test class?",
    answer: "false:true",
    options: [
      "An exception is thrown at runtime",
      "false:true",
      "Compilation error",
      "true:false",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>package com.udayan.oca;<br>
<br>
import java.time.LocalDate;<br>
<br>
public class Test {<br>
    public static void main(String [] args) {<br>
        LocalDate newYear = LocalDate.of(2018, 1, 1);<br>
        LocalDate christmas = LocalDate.of(2018, 12, 25);<br>
        boolean flag1 = newYear.isAfter(christmas);<br>
        boolean flag2 = newYear.isBefore(christmas);<br>
        System.out.println(flag1 + ":" + flag2);<br>
    }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 6,
    question: "What will be the result of compiling and executing the Test class?",
    answer: "Compilation error",
    options: [
      "Produces no output",
      "You passed",
      "You failed",
      "Compilation error",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             int grade = 60;<br>
             if(grade = 60)<br>
                 System.out.println("You passed...");<br>
             else<br>
                 System.out.println("You failed...");<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 7,
    question: "For the class Test, which options, if used to replace /*INSERT*/, will print \"Lucky no. 7\" on to the console? ",
    answer: `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="Integer"> Integer var = 7;</form>`,
    options: [
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="'7'"> har var = '7';</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="Integer"> Integer var = 7;</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="char"> char var = 7</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="Character"> Character var = 7;</form>`,
      `<form class="option" action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="\"7\""> Character var = \"7\"</form>`,
      ""
    ],
    images: [
      `<p class='quiz_images' style="margin-top: -446px;">    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
         <br>
             /*INSERT*/<br><br>
             switch(var) {<br>
                 case 7:<br>
                     System.out.println("Lucky no. 7");<br>
                     break;<br>
                 default:<br>
                     System.out.println("DEFAULT");<br>
             }<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 8,
    question: "What will be the result of compiling and executing Test class?",
    answer: "0:0",
    options: [
      "100:0",
      "16:0",
      "0:0",
      "100:100",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>package com.udayan.oca;<br>
<br>
public class Test {<br>
    public static void main(String[] args) {<br>
        StringBuilder sb = new StringBuilder(100);<br>
        System.out.println(sb.length() + ":" + sb.toString().length());<br>
    }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 9,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Happy New Year!\\n Happy New Year\"",
    options: [
      "null\n Happy New Year",
      "Happy Hollidays!\n Happy Hollidays!",
      "Happy New Year!\n Happy New Year",
      "Happy New Year!\n Happy Hollidays!",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    class Message {<br>
         String msg = "Happy New Year!";<br>
<br>
         public void print() {<br>
             System.out.println(msg);<br>
         }<br>
    }<br>
<br>
    public class Test {<br>
         public static void change(Message m) {<br>
             m = new Message();<br>
             m.msg = "Happy Holidays!";<br>
         }<br>
<br>
         public static void main(String[] args) {<br>
             Message obj = new Message();<br>
             obj.print();<br>
             change(obj);<br>
             obj.print();<br>
         }
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 10,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Line 3 causes compilation error",
    options: [
      "Line 3 causes compilation error",
      "Line 4 causes runtime exception",
      "0",
      "0.0",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             double [] arr = new int[2]; //Line 3<br>
             System.out.println(arr[0]); //Line 4<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 11,
    question: "What will be the result of compiling and executing Test class?",
    answer: `Java\n Java<br> <'Some text containing @ symbol'>`,
    options: [
      "Java\n Java\n Java",
      "Compilation error",
      `Java\n <'Some text containing @ symbol'><br> <'Some text containing @ symbol'>`,
      `Java\n Java<br> <'Some text containing @ symbol'>`,
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>package com.udayan.oca;<br>
<br>
class SpecialString {<br>
     String str;<br>
     SpecialString(String str) {<br>
         this.str = str;<br>
     }<br>
}<br>
<br>
public class Test {<br>
     public static void main(String[] args) {<br>
         System.out.println(new String("Java"));<br>
         System.out.println(new StringBuilder("Java"));<br>
         System.out.println(new SpecialString("Java"));<br>
     }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 12,
    question: `What is the result?
<javac Guest.java<br>
java Guest James Gosling`,
    answer: "Welcome! Gosling",
    options: [
      "Compilation error as main method is not public.",
      "Welcome! Gosling",
      "Some other error as main method can't be invoked manually.",
      "Welcome! James",
      "",
      "",
    ],
    images: [
      `<p class='quiz_images'>class Message {<br>
     static void main(String [] args) <br>
         System.out.println("Welcome! " + args[1]);<br>
     }<br>
}<br>
<br>
public class Guest {<br>
     public static void main(String [] args) {<br>
         Message.main(args);<br>
     }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 13,
    question: "What will be the result of compiling and executing Test class?",
    answer: "CoRe",
    options: [
      "CoRe",
      "true",
      "Core",
      "false",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String str1 = new String("Core");<br>
             String str2 = new String("CoRe");<br>
             System.out.println(str1 = str2);<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 14,
    question: "What will be the result of compiling and executing Test class?",
    answer: "int version. char version",
    options: [
      "char version. char version",
      "Compilation error",
      "char version. int version",
      "int version. char version",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         private static void m(int x) {<br>
             System.out.println("int version");<br>
         }<br>
<br>
         private static void m(char x) {<br>
             System.out.println("char version");<br>
         }<br>
<br>
         public static void main(String [] args) {<br>
             int i = '5';<br>
             m(i);<br>
             m('5');<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 15,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Student[James, 25] Student[James, 27] Student[James, 25] Student[James, 25]",
    options: [
      "Student[James, 27] Student[James, 25] Student[James, 25]",
      "Student[James, 25] Student[James, 27] Student[James, 25]",
      "Student[James, 25] Student[James, 27] Student[James, 25] Student[James, 25]",
      "Student[James, 27]",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images' style="margin-top: -420px;">package com.udayan.oca;<br>
<br>
import java.util.ArrayList;<br>
import java.util.List;<br>
<br>
class Student {<br>
     private String name;<br>
     private int age;<br>
<br>
     Student(String name, int age) {<br>
         this.name = name;<br>
         this.age = age;<br>
     }<br>
<br>
     public String toString() {<br>
         return "Student[" + name + ", " + age + "]";<br>
     }<br>
}<br><br>
public class Test {<br>
     public static void main(String[] args) {<br>
         List<Student> students = new ArrayList<>();<br>
         students.add(new Student("James", 25));<br>
         students.add(new Student("James", 27));<br>
         students.add(new Student("James", 25));<br>
         students.add(new Student("James", 25));<br>
<br>
         students.remove(new Student("James", 25));<br>
<br>
         for(Student stud : students) {<br>
             System.out.println(stud);<br>
         }<br>
     }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 16,
    question: "What will be the result of compiling and executing Test class?",
    answer: "false",
    options: [
      "false",
      "Compilation error",
      "true",
      "An exception is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             StringBuilder sb = new StringBuilder("Java");<br>
             String s1 = sb.toString();<br>
             String s2 = sb.toString();<br>
<br>
             System.out.println(s1 == s2);<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 17,
    question: "What will be the result of compiling and executing Test class?",
    answer: "[Counter-5]",
    options: [
      "Compilation error",
      "An exception is thrown at runtime",
      "[Counter-5]",
      "[Counter-10]",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>package com.udayan.oca;<br>
<br>
import java.util.ArrayList;<br>
<br>
class Counter {<br>
     int count;<br>
     Counter(int count) {<br>
         this.count = count;<br>
     }<br>
<br>
     public String toString() {<br>
         return "Counter-" + count;<br>
     }<br>
}<br>
<br>
public class Test {<br>
     public static void main(String[] args) {<br>
         ArrayList<Counter> original = new ArrayList<>();<br>
         original.add(new Counter(10));<br>
<br>
         ArrayList<Counter> cloned = (ArrayList<Counter>) original.clone();<br>
         cloned.get(0).count = 5;<br>
<br>
         System.out.println(original);<br>
     }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 18,
    question: "What will be the result of compiling and executing Test class?",
    answer: "NullPointerException is thrown at runtime",
    options: [
      "NullPointerException is thrown at runtime",
      "ClassCastException is thrown at runtime",
      "Compilation error",
      "0.0",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
           <br>
          public class Test {<br>
               public static void main(String[] args) {<br>
                   Double [] arr = new Double[2];<br>
                   System.out.println(arr[0] + arr[1]);<br>
               }<br>
          }</p>`,
      "",
      ""
    ]
  },
  {
    id: 19,
    question: "Which of these access modifiers can be used for a top level interface?",
    answer: "public",
    options: [
      "protected",
      "private",
      "All of the other options",
      "public",
      "",
      ""
    ],
    images: [
      ``,
      "",
      ""
    ]
  },
  {
    id: 20,
    question: "What will be the result of compiling and executing Test class?",
    answer: "[A, B, C, D]",
    options: [
      "[A, D, B, C]",
      "[A, B, C, D]",
      "[A, B, C]",
      "[A, D]",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    //Test.java<br>
    package com.udayan.oca;<br>
<br>
    import java.util.ArrayList;<br>
    import java.util.List;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             List<String> list1 = new ArrayList<>();<br>
             list1.add("A");<br>
             list1.add("D");<br>
<br>
             List<String> list2 = new ArrayList<>();<br>
             list2.add("B");<br>
             list2.add("C");<br>
<br>
             list1.addAll(1, list2);<br>
<br>
             System.out.println(list1);<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 21,
    question: "What will be the result of compiling and executing Test class?",
    answer: "apple salad!",
    options: [
      "None of the other options.",
      "apple salad!",
      "apple banana orange salad!",
      "apple banana mango salad!",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String [] fruits = {"apple", "banana", "mango", "orange"};<br>
             for(String fruit : fruits) {<br>
                 System.out.print(fruit + " ");<br>
                 if(fruit.equals("mango")) {<br>
                     continue;<br>
                 }<br>
                 System.out.println("salad!");<br>
                 break;<br>
             }<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 22,
    question: "What will be the result of compiling and executing Test class?",
    answer: "ANY FRUIT WILL DO. APPLE. MANGO. BANANA",
    options: [
      "MANGO BANANA",
      "ANY FRUIT WILL DO. APPLE. MANGO. BANANA",
      "MANGO",
      "ANY FRUIT WILL DO",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String fruit = "mango";<br>
             switch (fruit) {<br>
                 default:<br>
                     System.out.println("ANY FRUIT WILL DO");<br>
                 case "Apple":<br>
                     System.out.println("APPLE");<br>
                 case "Mango":<br>
                     System.out.println("MANGO");<br>
                 case "Banana":<br>
                     System.out.println("BANANA");<br>
                     break;<br>
             }<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 23,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error at Line 3",
    options: [
      "NOT THROWING ANY EXCEPTION",
      "Compilation error at Line 3",
      "Compilation error at Line 7",
      "Compilation error at Line 6",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    package com.udayan.oca;<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             m1(); //Line 3<br>
         }<br>
<br>
         private static void m1() throws Exception { //Line 6<br>
             System.out.println("NOT THROWING ANY EXCEPTION"); //Line 7<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 24,
    question: "Above code is currently giving compilation error. Which 2 modifications, done independently, enable the code to compile?",
    answer: "Insert at Line 14 and Replace the code at Line 12 with",
    options: [
      "Insert at Line 14",
      "Replace the code at Line 12",
      "Replace the code at Line 7",
      "Insert at Line 9",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    interface Printable {<br>
         public void setMargin();<br>
         public void setOrientation();<br>
    }<br>
<br>
    abstract class Paper implements Printable { //Line 7<br>
         public void setMargin() {}<br>
         //Line 9<br>
    }<br>
<br>
    class NewsPaper extends Paper { //Line 12<br>
         public void setMargin() {}<br>
         //Line 14<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 25,
    question: `Currently above code is giving compilation error.<br>
      Which of the options can successfully replace //TODO statement such that on executing Test class, output is 64:TYPE-C?`,
    answer: `1| super(capacity);<br> 2|this.type = type`,
    options: [
      `1|this.type = type;<br> 2| super(capacity)`,
      `super(capacity)`,
      `1| super capacity = capacity;<br> 2| this.type = type`,
      `1| super(capacity);<br> 2|this.type = type`,
      "",
      ""
    ],
    images: [
      `<p class='quiz_images' style="margin-top: -430px;">package com.udayan.oca;<br>
<br>
class PenDrive {<br>
     int capacity;<br>
     PenDrive(int capacity) {<br>
         this.capacity = capacity;<br>
     }<br>
}<br>
<br>
class OTG extends PenDrive {<br>
     String type;<br>
     OTG(int capacity, String type) {<br>
         //TODO<br>
     }<br>
}<br>
<br>
public class Test {<br>
     public static void main(String[] args) {<br>
         OTG obj = new OTG(64, "TYPE-C");<br>
         System.out.println(obj.capacity + ":" + obj.type);<br>
     }<br>
}</p>`,
      "",
      ""
    ]
  },
  {
    id: 26,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Point(10, 20);Point(0, 20)",
    options: [
      "Point(0, 20);Point(10, 20)",
      "Point(10, 20);Point(10, 20)",
      "Point(10, 20);Point(10, 20)",
      "Point(10, 20);Point(0, 20)",
      "",
      "",
    ],
    images: [
      `<p class='quiz_images'>package com.udayan.oca;<br>
<br>
    class Point {<br>
         int x;<br>
         int y;<br>
         void assign(int x, int y) {<br>
             x = this.x;<br>
             this.y = y;<br>
         }<br>
<br>
         public String toString() {<br>
             return "Point(" + x + ", " + y + ")";<br>
         }<br>
    }<br>
<br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             Point p1 = new Point();<br>
             p1.x = 10;<br>
             p1.y = 20;<br>
             Point p2 = new Point();<br>
             p2.assign(p1.x, p1.y);<br>
             System.out.println(p1.toString() + ";" + p2.toString());<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 27,
    question: "For the class Shop, which options, if used to replace /*INSERT*/, will resolve all the compilation errors?",
    answer: `1| import orders.Orders; <br>2| import orders.items`,
    options: [
      `1| import orders.*; <br>2| import items.*;`,
      `1| import orders.Orders; <br>2| import orders.items`,
      `import orders.*`,
      `import orders.items.*;`,
      `<div class="option"> 1| import orders.*; <br>2| import orders.item.*;</div>`,
      "",
    ],
    images: [
      `<p class='quiz_images' style="margin-top: -465px;">     //Item.java<br>
    package orders.items;<br>
<br>
    public class Item {<br>
<br>
    }</p>`,
      `<p class='quiz_images' style="margin-top: -326px;">    //Order.java<br>
    package orders;<br>
<br>
    public class Order {<br>
<br>
    }</p>`,
      `<p class='quiz_images' style="margin-top: -185px;">    //Shop.java<br>
    package shopping;<br>
<br>
    /*INSERT*/<br>
<br>
    public class Shop {<br>
         Order order = null;<br>
         Item item = null;<br>
    }</p>`
    ]
  },
  {
    id: 28,
    question: `Which of the following code correctly extracts country code from the swift code referred by String reference variable swiftCode?`,
    answer: "swiftCode.substring(4, 6);",
    options: [
      "swiftCode.substring(5, 6);",
      "swiftCode.substring(5, 7);",
      "swiftCode.substring(4, 6);",
      "swiftCode.substring(4, 5);",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>A bank's swift code is generally of 11 characters and used in international money transfers.<br>
An example of swift code: ICICINBBRT4<br>
ICIC: First 4 letters for bank code<br>
IN: Next 2 letters for Country code<br>
BB: Next 2 letters for Location code<br>
RT4: Next 3 letters for Branch code</p>`,
      "",
      ""
    ]
  },
  {
    id: 29,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "MN",
      "Compilation error",
      "N",
      "Program ends abruptly",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images' style="margin-top: -375px;">package com.udayan.oca;<br>
<br>
import java.io.FileNotFoundException;<br>
import java.io.IOException;<br>
<br>
abstract class Super {<br>
     public abstract void m1() throws IOException;<br>
}<br>
<br>
class Sub extends Super {<br>
     @Override<br>
     public void m1() throws IOException {<br>
         throw new FileNotFoundException();<br>
     }<br>
}</p>`,
      `<p class="quiz_images" style="margin-top: -70px;">public class Test {<br>
     public static void main(String[] args) {<br>
         Super s = new Sub();<br>
         try {<br>
             s.m1();<br>
         } catch (FileNotFoundException e) {<br>
             System.out.print("M");<br>
         } finally {<br>
             System.out.print("N");<br>
         }<br>
     }<br>
}</p>`,
      ""
    ]
  },
  {
    id: 30,
    question: "Fill in the blanks for the definition of java.lang.Error class:",
    answer: "Trowable",
    options: [
      "RuntimeException",
      "Exception",
      "Trowable",
      "None",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>public class java.lang.Error extends ________________ {...}</p>`,
      "",
      ""
    ]
  },
  {
    id: 31,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "16-03-1980",
      "Compilation error",
      "16-3-1980",
      "An exception is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'>    //Test.java<br>
    package com.udayan.oca;<br>
     <br>
    import java.time.LocalDate;<br>
     <br>
    class MyLocalDate extends LocalDate {<br>
         @Override<br>
         public String toString() {<br>
             return super.getDayOfMonth() + "-" + super.getMonthValue() + <br>
                "-" +  super.getYear();<br>
         }<br>
    }<br>
     <br>
    public class Test {<br>
         public static void main(String [] args) {<br>
             MyLocalDate date = LocalDate.parse("1980-03-16");<br>
             System.out.println(date);<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 32,
    question: "Which of the following correctly defines class Printer?",
    answer: `package com.uyadan.oca;<br>public class Printer{}`,
    options: [
      `package com.uyadan.oca;<br>public class Printer{}`,
      `import java.util.*;<br>package com.uyadan.oca;<br>public class Printer {}`,
      `public class Printer {}<br>package com.uyadan.oca`,
      `public class Printer {<br>package com.uyadan.oca}`,
      "",
      ""
    ],
    images: [
      ``,
      "",
      ""
    ]
  },
  {
    id: 33,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Runtime exception",
    options: [
      "VTE",
      "VET",
      "Compilation error",
      "Runtime exception",
      "",
      ""
    ],
    images: [
      `<p class='quiz_images'> package com.udayan.oca;<br>
     <br>
    import java.util.ArrayList;<br>
    import java.util.List;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             List<Character> list = new ArrayList<>();<br>
             list.add(0, 'V');<br>
             list.add('T');<br>
             list.add(1, 'E');<br>
             list.add(3, 'O');<br>
     <br>
             if(list.contains('O')) {<br>
                 list.remove('O');<br>
             }<br>
     <br>
             for(char ch : list) {<br>
                 System.out.print(ch);<br>
             }<br>
         }<br>
    }</p>`,
      "",
      ""
    ]
  },
  {
    id: 34,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "An exception is thrown at runtime",
      "AM",
      "PM",
      "Compilation error",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">     package com.udayan.oca;<br>
     <br>
    import java.time.LocalTime;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             LocalTime time = LocalTime.of(16, 40);<br>
             String amPm = time.getHour() >= 12 ? (time.getHour() == 12) ? "PM" : "AM";<br>
             System.out.println(amPm);<br>
         }<br>
    }`,
      "",
      ""
    ]
  },
  {
    id: 35,
    question: "What will be the result of compiling and executing Test class?",
    answer: "-100",
    options: [
      "-101",
      "Compilation error",
      "-100",
      "-99",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String [] args) {<br>
             int a = 100;<br>
             System.out.println(-a++);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 36,
    question: "What will be the result of compiling and executing Test class?",
    answer: "P0D",
    options: [
      "p0d",
      "P0D",
      "P0Y0M0D",
      "p0y0m0d",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //Test.java<br>
    package com.udayan.oca;<br>
     <br>1
    import java.time.Period;<br>
     <br>
    public class Test {<br>
         public static void main(String [] args) {<br>
             Period period = Period.of(0, 0, 0);<br>
             System.out.println(period);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 37,
    question: "What will be the result of compiling and executing Test class?",
    answer: "0 1 2",
    options: [
      "2 1 0",
      "0 1 2",
      "Compilation Error",
      "ArrayIndexOutOfBoundsException is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             int [] arr = {2, 1, 0};<br>
             for(int i : arr) {<br>
                 System.out.println(arr[i]);<br>
             }<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 38,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation Error",
    options: [
      "Output is: false",
      "Output is: true",
      "Compilation Error",
      "Output is: 10 != 5",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             System.out.println("Output is: " + 10 != 5);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 39,
    question: "What will be the result of compiling and executing Test class?",
    answer: "An exception is thrown at runtime",
    options: [
      "[Walnut, Date]",
      "[Walnut, Apricot, Almond, Date]",
      "An exception is thrown at runtime",
      "Compilation Error",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //Test.java<br>
    package com.udayan.oca;<br>
     <br>
    import java.util.ArrayList;<br>
    import java.util.Iterator;<br>
    import java.util.List;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             List<String> dryFruits = new ArrayList<>();<br>
             dryFruits.add("Walnut");<br>
             dryFruits.add("Apricot");<br>
             dryFruits.add("Almond");<br>
             dryFruits.add("Date");<br>
     <br>
             Iterator<String> iterator = dryFruits.iterator();<br>
             while(iterator.hasNext()) {<br>
                 String dryFruit = iterator.next();<br>
                 if(dryFruit.startsWith("A")) {<br>
                     dryFruits.remove(dryFruit);<br>
                 }<br>
             }<br>
            <br>
             System.out.println(dryFruits);<br>
        }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 40,
    question: "For the class Test, which options, if used to replace /*INSERT*/, will print \"Hurrah! I passed...\" on to the console?",
    answer: `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="static public void main(String [] args)"> static public void main(String [] args)</form>`,
    options: [
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="static public void main(String [] args)"> static public void main(String [] args)</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="public void main(String [] args)"> public void main(String [] args)</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="static public void Main(String [] args)"> static public void Main(String [] args)</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="protected static void main(String [] args)"> protected static void main(String [] args)</form>`,
      `<form class="option" action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="public void static main(String [] args)"> public void static main(String [] args)</form>`,
      `<form class="option" action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="public void main(String [] a)"> public void main(String [] a)</form>`
    ],
    images: [
      `<p class="quiz_images">    public class Test {<br>
         /*INSERT*/ {<br>
             System.out.println("Hurrah! I passed...");<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 41,
    question: "What will be the result of compiling and executing Test class?",
    answer: "ClassCastException is thrown at runtime",
    options: [
      "Compilation error",
      "B",
      "ClassCastException is thrown at runtime",
      "A",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //A.java<br>
    package com.udayan.oca;<br>
     <br>
    public class A {<br>
         public void print() {<br>
             System.out.println("A");<br>
         }<br>
    }</p>`,
      `<p class="quiz_images">    //B.java<br>
    package com.udayan.oca;<br>
     <br>
    public class B extends A {<br>
         public void print() {<br>
             System.out.println("B");<br>
         }<br>
    }</p>`,
      `<p class="quiz_images">    //Test.java<br>
    package com.udayan.oca.test;<br>
     <br>
    import com.udayan.oca.*;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             A obj1 = new A();<br>
             B obj2 = (B)obj1;<br>
             obj2.print();<br>
         }<br>
    }</p>`
    ]
  },
  {
    id: 42,
    question: "What will be the result of compiling and executing Test class?",
    answer: "null:0",
    options: [
      "null:0",
      "An exception is thrown at runtime",
      "Compilation error",
      "James:25",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    class Student {<br>
         String name;<br>
         int age;<br>
     <br>
         void Student() {<br>
             Student("James", 25);<br>
         }<br>
     <br>
         void Student(String name, int age) {<br>
             this.name = name;<br>
             this.age = age;<br>
         }<br>
    }<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             Student s = new Student();<br>
             System.out.println(s.name + ":" + s.age);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 43,
    question: "What will be the result of compiling and executing Test class?",
    answer: "None of the System.out.println statements are executed",
    options: [
      "None of the System.out.println statements are executed",
      "Compilation error",
      "CATCH-OUT",
      "OUT",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>1
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             try {<br>
                 main(args);<br>
             } catch (Exception ex) {<br>
                 System.out.println("CATCH-");<br>
             }<br>
                 System.out.println("OUT");<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 44,
    question: "Which of the following is a checked Exception?",
    answer: "FileNotFoundException",
    options: [
      "RuntimeException",
      "ClassCastException",
      "FileNotFoundException",
      "ExceptionInInitializerError",
      "",
      ""
    ],
    images: [
      ``,
      ``,
      ``
    ]
  },
  {
    id: 45,
    question: "What will be the result of compiling and executing Test class?",
    answer: "An exception is thrown at runtime",
    options: [
      "2020-09-03",
      "2020-10-01",
      "Compilation error",
      "An exception is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //Test.java<br>
    package com.udayan.oca;<br>
     <br>
    import java.time.LocalDate;<br>
     <br>
    public class Test {<br>
         public static void main(String [] args) {<br>
              LocalDate date = LocalDate.of(2020, 9, 31);<br>
              System.out.println(date);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 46,
    question: "What will be the result of compiling and executing Test class?",
    answer: "[Hello, Hello, Hello]",
    options: [
      "[HeLLo, Hello, Hello]",
      "[HeLLo, Hello, HeLLo]",
      "[HeLLo, HeLLo, HeLLo]",
      "[Hello, Hello, Hello]",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //Test.java<br>
    package com.udayan.oca;<br>
     <br>
    import java.util.ArrayList;<br>
    import java.util.List;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String s = new String("Hello");<br>
             List<String> list = new ArrayList<>();<br>
             list.add(s);<br>
             list.add(new String("Hello"));<br>
             list.add(s);<br>
             s.replace("l", "L");<br>
     <br>
             System.out.println(list);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 47,
    question: "Which option, if used to replace /*INSERT*/, on execution will print ACE on to the console?",
    answer: "int n = 0; n < arr.length; n += 2",
    options: [
      "int n = 1; n < arr.length; n += 2",
      "int n = 1; n < arr.length; n += 1",
      "int n = 0; n < arr.length; n += 1",
      "int n = 0; n < arr.length; n += 2",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String [] arr = {"A", "B", "C", "D", "E"};<br>
             for(/*INSERT*/) {<br>
                 System.out.print(arr[n]);<br>
             }<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 48,
    question: "On execution, does Test class print \"HELLO\" on to the console?",
    answer: "No, HELLO is not printed on the console",
    options: [
      "No, HELLO is not printed on the console",
      "No, HELLO is not printed on the console",
      "",
      "",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images" style="margin-top: -325px;">    public class Test {<br>
         static {<br>
             System.out.println(1/0);<br>
         }<br>
     <br>
         public static void main(String[] args) {<br>
             System.out.println("HELLO");<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 49,
    question: "What will be the result of compiling and executing Test class?",
    answer: `><br>>0.0<br>>0.0`,
    options: [
      `>null<br>>0.0<br>>0.0`,
      `><br>>0.0<br>>0.0f`,
      `null<br>>0.0<br>>0.0f`,
      `><br>>0.0<br>>0.0`,
      "",
      ""
    ],
    images: [
      `<p class="quiz_images" style="margin-top: -450px;">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         char c;<br>
         double d;<br>
         float f;<br>
         public static void main(String[] args) {<br>
             Test obj = new Test();<br>
             System.out.println(">" + obj.c);<br>
             System.out.println(">" + obj.d);<br>
             System.out.println(">" + obj.f);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 50,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "[50, 50]",
      "[5, 10]",
      "Compilation error",
      "An exception is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             short [] args = new short[]{50, 50};<br>
             args[0] = 5;<br>
             args[1] = 10;<br>
             System.out.println("[" + args[0] + ", " + args[1] + "]");<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 51,
    question: "What will be the result of compiling and executing Test class?",
    answer: "25-60",
    options: [
      "25-60",
      "35-25",
      "25-25",
      "35-60",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">//Test.java<br>
package com.udayan.oca;<br>
 <br>
class Student {<br>
     String name;<br>
     int marks;<br>
 <br>
     Student(String name, int marks) {<br>
         this.name = name;<br>
         this.marks = marks;<br>
     }<br>
}</p>`,
      `<p class="quiz_images">public class Test {<br>
     public static void main(String[] args) {<br>
         Student student = new Student("James", 25);<br>
         int marks = 25;<br>
         review(student, marks);<br>
         System.out.println(marks + "-" + student.marks);<br>
     }<br>
 <br>
     private static void review(Student stud, int marks) {<br>
         marks = marks + 10;<br>
         stud.marks+=marks;<br>
     }<br>
}</p>`,
      ``
    ]
  },
  {
    id: 52,
    question: `For the given code snippet:
      Which of the following options, if used to replace /*INSERT*/, compiles successfully?`,
    answer: `ArrayList<'String'>`,
    options: [
      `ArrayList<'String'>`,
      "ArrayList<>",
      "List<>",
      "List<'String'>",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">List<String> list = new /*INSERT*/();</p>`,
      ``,
      ``
    ]
  },
  {
    id: 53,
    question: "What will be the result of compiling and executing Test class?",
    answer: "[2018-07-11, 2020-04-08]",
    options: [
      "Runtime exception",
      "[2018-07-11, 2020-04-08]",
      "[2018-07-11, 1919-02-25, 2020-04-08, 1980-12-31]",
      "[1919-02-25, 1980-12-31]",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    import java.time.LocalDate;<br>
    import java.time.Month;<br>
    import java.util.ArrayList;<br>
    import java.util.List;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             List<LocalDate> dates = new ArrayList<>();<br>
             dates.add(LocalDate.parse("2018-07-11"));<br>
             dates.add(LocalDate.parse("1919-02-25"));<br>
             dates.add(LocalDate.of(2020, 4, 8));<br>
             dates.add(LocalDate.of(1980, Month.DECEMBER, 31));<br>
     <br>
             dates.removeIf(x -> x.getYear() < 2000);<br>
     <br>
             System.out.println(dates);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 54,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error for Dog(String) constructor",
    options: [
      "Compilation error for Dog(String) constructor",
      "null:Beagle:Bubbly:Poodle",
      "Compilation error for Animal(String) constructor",
      "Compilation error for Dog(String, String) constructor",
      `<div class="option">:Beagle:Bubble:Poodle</div>`,
      `<div class="option">Compilation error for Animal Class</div>`
    ],
    images: [
      `<p class="quiz_images" style="margin-top: -520px;">package com.udayan.oca.test;<br>
 <br>
abstract class Animal {<br>
     private String name;<br>
 <br>
     Animal(String name) {<br>
        this.name = name;<br>
     }<br>
 <br>
     public String getName() {<br>
         return name;<br>
     }<br>
}<br>
 <br>
class Dog extends Animal {<br>
     private String breed;<br>
     Dog(String breed) {<br>
         this.breed = breed;<br>
     }</p>`,
      `<p class="quiz_images">    Dog(String name, String breed) {<br>
         super(name);<br>
         this.breed = breed;<br>
     }<br>
 <br>
     public String getBreed() {<br>
         return breed;<br>
     }<br>
}<br>
 <br>
public class Test {<br>
     public static void main(String[] args) {<br>
         Dog dog1 = new Dog("Beagle");<br>
         Dog dog2 = new Dog("Bubbly", "Poodle");<br>
         System.out.println(dog1.getName() + ":" + dog1.getBreed() + ":" + <br>
                             dog2.getName() + ":" + dog2.getBreed());<br>
     }<br>
}</p>`,
      ``
    ]
  },
  {
    id: 55,
    question: "____________ uses access modifiers to protect variables and hide them within a class. Which of the following options accurately fill in the blanks above?",
    answer: "Encapsulation",
    options: [
      "Abstraction",
      "Polymorphism",
      "Inheritance",
      "Encapsulation",
      "",
      ""
    ],
    images: [
      ``,
      ``,
      ``
    ]
  },
  {
    id: 56,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Exception is thrown at runtime",
    options: [
      "[200]",
      "Compilation error",
      "[100, 200, 200]",
      "Exception is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    import java.util.ArrayList;<br>
    import java.util.List;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             List<Integer> list = new ArrayList<>();<br>
             list.add(100);<br>
             list.add(200);<br>
             list.add(100);<br>
             list.add(200);<br>
             list.remove(100);<br>
     <br>
             System.out.println(list);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 57,
    question: "What will be the result of compiling and executing Test class?",
    answer: "A ab Aa aba Abab",
    options: [
      "Runtime exception",
      "ab aba",
      "A ab Aa aba Abab",
      "A Aa Abab",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    import java.util.function.Predicate;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String [] arr = {"A", "ab", "bab", "Aa", "bb", "baba", "aba", "Abab"};<br>
     <br>
             Predicate<String> p = s -> s.toUpperCase().substring(0,1).equals("A");<br>
     <br>
             processStringArray(arr, p);<br>
         }<br>
     <br>
         private static void processStringArray(String [] arr, <br>
                                                    Predicate<String> predicate) {<br>
             for(String str : arr) {<br>
                 if(predicate.test(str)) {<br>
                     System.out.println(str);<br>
                 }<br>
             }<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 58,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "null",
      "Tesla Model S",
      "Tesla Model X",
      "Compilation error",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             double price = 90000;<br>
             String model;<br>
             if(price > 100000) {<br>
                 model = "Tesla Model X";<br>
             } else if(price <= 100000) {<br>
                 model = "Tesla Model S";<br>
             }<br>
               System.out.println(model);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 59,
    question: "What will be the result of compiling and executing Test class?",
    answer: "11-11-11",
    options: [
      "01-11-11",
      "11-11-11",
      "Runtime exception",
      "11-11-12",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //Test.java<br>
    package com.udayan.oca;<br>
     <br>
    import java.time.LocalDate;<br>
    import java.time.Period;<br>
    import java.time.format.DateTimeFormatter;<br>
     <br>
    public class Test {<br>
         public static void main(String [] args) {<br>
             LocalDate date = LocalDate.of(2012, 1, 11);<br>
             Period period = Period.ofMonths(2);<br>
             DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yy");<br>
             System.out.print(formatter.format(date.minus(period)));<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 60,
    question: "What will be the result of compiling and executing Test class?",
    answer: "[2,1]",
    options: [
      "[2,1]",
      "An exception is thrown at runtime",
      "Compilation error",
      "[1,0]",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    import java.util.ArrayList;<br>
    import java.util.List;<br>
     <br>
    public class Test {<br>
         public static void main(String [] args) {<br>
             List<Integer> list = new ArrayList<Integer>();<br>
             list.add(new Integer(2));<br>
             list.add(new Integer(1));<br>
             list.add(new Integer(0));<br>
     <br>
             list.remove(list.indexOf(0));<br>
     <br>
             System.out.println(list);<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 61,
    question: "For the class Test, which options, if used to replace /*INSERT*/, will print [5, 10] on to the console?",
    answer: `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="short [] arr = new short[2]{100, 100};"> short [] arr = new short[2]{100, 100};</form>`,
    options: [
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="short [] arr = new short[2]{100, 100};"> short [] arr = new short[2]{100, 100};</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="short [] arr = {};"> short [] arr = {};</form>`,
      `<form action="/action_page.php" method="get">
        <input type="checkbox" name="vehicle" value="short [] arr; <br> arr = new short[2]"> short [] arr; <br> arr = new short[2]</form>`,
      `<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="short arr [] = new short[2];"> short arr [] = new short[2];</form>`,
      `<form class="option" action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="short [] arr = new short[2]{100, 100};"> short [] arr = new short[2]{100, 100};</form>`,
      `<form class="option" action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="short [2] arr;"> short [2] arr;</form>`
    ],
    images: [
      `<p class="quiz_images" style="margin-top: -490px;">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             /*INSERT*/<br>
             arr[0] = 5;<br>
             arr[1] = 10;<br>
             System.out.println("[" + arr[0] + ", " + arr[1] + "]");<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 62,
    question: "What will be the result of compiling and executing Test class?",
    answer: "true",
    options: [
      "false",
      "OCAJP",
      "true",
      "Compilation error",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">package com.udayan.oca;<br>
 <br>
public class Test {<br>
    public static void main(String[] args) {<br>
        String s1 = "OCAJP";<br>
        String s2 = "OCAJP" + "";<br>
        System.out.println(s1 == s2);<br>
    }<br>
}</p>`,
      ``,
      ``
    ]
  },
  {
    id: 63,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "1",
      "Compilation error",
      "4",
      "NullPointerException is thrown at runtime",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
        public static void main(String[] args) {<br>
            StringBuilder sb = new StringBuilder();<br>
            System.out.println(sb.append(null).length());<br>
        }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 64,
    question: "What will be the result of compiling and executing Test class?",
    answer: "Compilation error",
    options: [
      "In default",
      "Compilation error",
      "var is 200",
      "var is 100",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             byte var = 100;<br>
             switch(var) {<br>
                 case 100:<br>
                     System.out.println("var is 100");<br>
                     break;<br>
                 case 200:<br>
                     System.out.println("var is 200");<br>
                     break;<br>
                 default:<br>
                     System.out.println("In default");<br>
             }<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 65,
    question: "Which of the following statement is correct about below code?",
    answer: "100 Bye",
    options: [
      "Compiles successfully and prints 100 in infinite loop",
      "Compiles successfully and prints \"Bye\"",
      "100 Bye",
      "Unreachable code compilation error",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             do {<br>
                 System.out.println(100);<br>
             } while (false);<br>
             System.out.println("Bye");<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 66,
    question: "How many objects of Pen class are eligible for Garbage Collection at Line 4?",
    answer: "2",
    options: [
      "0",
      "3",
      "2",
      "1",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    class Pen {<br>
<br>         
    }<br>1
     <br>
    public class TestPen {<br>
         public static void main(String[] args) {<br>
             new Pen(); //Line 1<br>
             Pen p = new Pen(); // Line 2<br>
             change(p); //Line 3<br>
             System.out.println("About to end."); //Line 4<br>
         }<br>
     <br>
         public static void change(Pen pen) { //Line 5<br>
             pen = new Pen(); //Line 6<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 67,
    question: "Which of the following is not a valid array declaration?",
    answer: "int arr4[][] = new int[][8];",
    options: [
      `int [][] arr2 = new int[8][8];`,
      `int arr4[][] = new int[][8];`,
      `int [] arr1 = new int[8];`,
      `int [] arr3 [] = new int[8][];`,
      "",
      ""
    ],
    images: [
      ``,
      ``,
      ``
    ]
  },
  {
    id: 68,
    question: "What will be the result of compiling and executing Test class?",
    answer: "false:false",
    options: [
      "false:true",
      "true:true",
      "false:false",
      "true:false",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    package com.udayan.oca;<br>
     <br>
    public class Test {<br>
         public static void main(String[] args) {<br>
             String str = "java";<br>
             StringBuilder sb = new StringBuilder("java");<br>
     <br>
             System.out.println(str.equals(sb) + ":" + sb.equals(str));<br>
         }<br>
    }</p>`,
      ``,
      ``
    ]
  },
  {
    id: 69,
    question: "One of the statements inside print() method is causing compilation failure. Which of the below solutions will help to resolve compilation error?",
    answer: "Comment the statement at Line 9",
    options: [
      "Comment the statement at Line 8",
      "Comment the statement at Line 9",
      "Comment the statement at Line 10",
      "Comment the statement at Line 11",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">package com.udayan.oca;<br>
 <br>
import java.time.LocalDateTime;<br>
 <br>
public class Test {<br>
     public static void main(String [] args) {<br>
         LocalDateTime obj = LocalDateTime.now();<br>
         System.out.println(obj.getSecond());<br>
     }<br>
}</p>`,
      ``,
      ``
    ]
  },
  {
    id: 70,
    question: "\"Which of the following statement is correct?\"",
    answer: "It will print any int value between 0 and 59",
    options: [
      "Code fails to compile",
      "It will print any unit value between 1 and 60",
      "It will print any int value between 0 and 59",
      "Code compiles successfully but throws Runtime exception",
      "",
      ""
    ],
    images: [
      `<p class="quiz_images">    //A.java<br>
    package com.udayan.oca;<br>
     <br>
    public class A {<br>
         public int i1 = 1;<br>
         protected int i2 = 2;<br>
    }</p>`,
      `<p class="quiz_images">    //B.java<br>
    package com.udayan.oca.test;<br>
     <br>
    import com.udayan.oca.A;<br>
     <br>
    public class B extends A {<br>
         public void print() {<br>
             A obj = new A();<br>
             System.out.println(obj.i1); //Line 8<br>
             System.out.println(obj.i2); //Line 9<br>
             System.out.println(this.i2); //Line 10<br>
             System.out.println(super.i2); //Line 11<br>
         }<br>
     <br>
         public static void main(String [] args) {<br>
             new B().print();<br>
         }<br>
    }</p>`,
      ``
    ]
  },
];

let question_count = 0;
let points = 0;
let img_count = 0;
let score = 0;
const score_span = document.getElementById("number_q");

window.onload = function() {
  show(question_count);
  images(img_count);
  counter(score);
  congrats();
};

function next() {

  // if the question is last then redirect to final page
  if (question_count == questions.length) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "quiz-end.html";
  }
  console.log(question_count);


  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);


  question_count++;
  show(question_count);
  img_count++;
  images(img_count);
  score++;
  counter(score);
  congrats();
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth, five, six] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  <li>${five}</li>
  <li>${six}</li>
</ul>
  `;
  toggleActive();
}
function images(img) {
  let images = document.getElementById("images");
  let [image1, image2, image3] = questions[img].images;

  images.innerHTML = `
  <ul class="option_group">
    <li>${image1}</li>
    <li>${image2}</li>
    <li>${image3}</li>
  </ul>
  `;
  toggleActive();
}


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function counter(score) {
    score++;
    score_span.innerHTML = score;
}

// START

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;

  sessionStorage.setItem("name", name);

  location.href = "quiz.html";
}
//TIMER

let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
  time++;

  if(seconds < 59) {
    seconds++;
  } else {
    seconds = 0;
    minutes++;
  }
  let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
  let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`;
  document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
}, 1000);

//USER INFO


let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;

function congrats() {
  const text = document.getElementById("text");
  text.innerHTML = points < 30 ? "You have to exercise more" : points > 30 || points < 50 ? "Keep going, you near to success" : "Great! You did it";
}
