import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { 
  HeartPulse, 
  Brain, 
  Pill, 
  Stethoscope, 
  Activity, 
  Utensils, 
  Clock, 
  Calendar, 
  Download,
  Heart
} from "lucide-react";
import { ScrollArea } from './ui/scroll-area';

export default function HealthInfo() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
            Health Information Center
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reliable health information to help you make informed decisions about your health and wellness.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general" className="flex flex-col items-center gap-1 py-2">
              <HeartPulse className="h-5 w-5" />
              <span className="text-xs">General</span>
            </TabsTrigger>
            <TabsTrigger value="conditions" className="flex flex-col items-center gap-1 py-2">
              <Brain className="h-5 w-5" />
              <span className="text-xs">Conditions</span>
            </TabsTrigger>
            <TabsTrigger value="medications" className="flex flex-col items-center gap-1 py-2">
              <Pill className="h-5 w-5" />
              <span className="text-xs">Medications</span>
            </TabsTrigger>
            <TabsTrigger value="wellness" className="flex flex-col items-center gap-1 py-2">
              <Activity className="h-5 w-5" />
              <span className="text-xs">Wellness</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex flex-col items-center gap-1 py-2">
              <Stethoscope className="h-5 w-5" />
              <span className="text-xs">Resources</span>
            </TabsTrigger>
          </TabsList>

          {/* General Health Information */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Health Information</CardTitle>
                <CardDescription>
                  Essential health information and guidance for overall well-being
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-blue-500" />
                      Preventive Care
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Regular check-ups, screenings, and immunizations are essential for maintaining good health and detecting potential issues early.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Schedule annual physical examinations</li>
                      <li>Keep up with recommended vaccines</li>
                      <li>Complete age-appropriate health screenings</li>
                      <li>Maintain dental check-ups every 6 months</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Utensils className="mr-2 h-5 w-5 text-green-500" />
                      Nutrition Basics
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A balanced diet provides essential nutrients for energy, growth, and body maintenance. 
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Eat a variety of fruits and vegetables</li>
                      <li>Choose whole grains over refined grains</li>
                      <li>Include lean proteins in your diet</li>
                      <li>Limit added sugars and highly processed foods</li>
                      <li>Stay hydrated with water throughout the day</li>
                    </ul>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How much physical activity do I need?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        The current recommendations for adults are:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>At least 150 minutes of moderate-intensity aerobic activity each week (e.g., brisk walking)</li>
                        <li>OR 75 minutes of vigorous-intensity activity each week (e.g., running)</li>
                        <li>PLUS muscle-strengthening activities at least 2 days per week</li>
                      </ul>
                      <p className="mt-4">
                        Children and adolescents should get at least 60 minutes of moderate to vigorous physical activity daily.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How much sleep do I need?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Sleep needs vary by age:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Newborns (0-3 months): 14-17 hours</li>
                        <li>Infants (4-12 months): 12-16 hours</li>
                        <li>Toddlers (1-2 years): 11-14 hours</li>
                        <li>Preschoolers (3-5 years): 10-13 hours</li>
                        <li>School-age children (6-12 years): 9-12 hours</li>
                        <li>Teenagers (13-18 years): 8-10 hours</li>
                        <li>Adults (18-64 years): 7-9 hours</li>
                        <li>Older adults (65+ years): 7-8 hours</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>When should I see a doctor?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        You should see a doctor for:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Annual check-ups and preventive screenings</li>
                        <li>Persistent symptoms that don't improve or worsen</li>
                        <li>Unexplained weight loss or gain</li>
                        <li>Severe pain or discomfort</li>
                        <li>Difficulty breathing</li>
                        <li>Persistent fever</li>
                        <li>Significant changes in mood, energy, or sleep patterns</li>
                      </ul>
                      <p className="mt-4 text-red-600 dark:text-red-400 font-medium">
                        Seek emergency care for chest pain, severe bleeding, difficulty breathing, sudden numbness or weakness, or severe head injury.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Health Conditions */}
          <TabsContent value="conditions">
            <Card>
              <CardHeader>
                <CardTitle>Common Health Conditions</CardTitle>
                <CardDescription>
                  Information about common health conditions, symptoms, and management strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Hypertension (High Blood Pressure)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-gray-600 dark:text-gray-300">
                        Hypertension is when blood pressure remains elevated over time. It often has no symptoms 
                        but can lead to serious health problems if left untreated.
                      </p>
                      <div className="mb-3">
                        <h4 className="font-medium mb-1">Key Facts:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                          <li>Normal blood pressure: below 120/80 mmHg</li>
                          <li>Elevated: 120-129/below 80 mmHg</li>
                          <li>Stage 1 hypertension: 130-139/80-89 mmHg</li>
                          <li>Stage 2 hypertension: 140+/90+ mmHg</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Management:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                          <li>Maintain a healthy diet low in sodium</li>
                          <li>Exercise regularly</li>
                          <li>Maintain a healthy weight</li>
                          <li>Limit alcohol consumption</li>
                          <li>Take medications as prescribed</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Type 2 Diabetes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-gray-600 dark:text-gray-300">
                        Type 2 diabetes affects how your body metabolizes glucose. It occurs when your body becomes 
                        resistant to insulin or doesn't produce enough insulin.
                      </p>
                      <div className="mb-3">
                        <h4 className="font-medium mb-1">Symptoms:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                          <li>Increased thirst and frequent urination</li>
                          <li>Increased hunger</li>
                          <li>Fatigue</li>
                          <li>Blurred vision</li>
                          <li>Slow-healing sores</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Management:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                          <li>Healthy eating and regular physical activity</li>
                          <li>Blood sugar monitoring</li>
                          <li>Diabetes medications or insulin therapy</li>
                          <li>Regular health check-ups</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <h3 className="text-lg font-semibold mb-4">Additional Health Conditions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Asthma</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        A chronic condition affecting the airways, causing wheezing, shortness of breath, chest tightness, and coughing.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Arthritis</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Inflammation of one or more joints, causing pain and stiffness that typically worsens with age.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Heart Disease</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Various conditions affecting heart function, including coronary artery disease, heart rhythm problems, and heart defects.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Migraine</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        A headache disorder characterized by recurrent headaches that are moderate to severe, often accompanied by nausea, vomiting, and sensitivity to light and sound.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Hypothyroidism</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        A condition where the thyroid gland doesn't produce enough thyroid hormone, causing symptoms like fatigue, cold sensitivity, and weight gain.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Gastroesophageal Reflux Disease (GERD)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        A digestive disorder that affects the ring of muscle between the esophagus and stomach, causing acid reflux and heartburn.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medications */}
          <TabsContent value="medications">
            <Card>
              <CardHeader>
                <CardTitle>Medication Information</CardTitle>
                <CardDescription>
                  Important information about medication usage, storage, and interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg">
                  <h3 className="text-amber-800 dark:text-amber-300 font-medium flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Medication Adherence
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Taking medications as prescribed is critical for their effectiveness. Set reminders, use pill organizers, 
                    and incorporate medications into your daily routine to help stay on track.
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="med-1">
                    <AccordionTrigger>Safe Medication Storage</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li>Store medications in a cool, dry place away from direct sunlight</li>
                        <li>Keep medications in their original containers with labels intact</li>
                        <li>Store medications away from children and pets</li>
                        <li>Don't store different medications in the same container</li>
                        <li>Check expiration dates regularly and dispose of expired medications properly</li>
                        <li>Some medications require refrigeration - check the label</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="med-2">
                    <AccordionTrigger>Medication Interactions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        Medications can interact with:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        <li><span className="font-medium">Other prescription medications</span> - Can enhance or diminish effects</li>
                        <li><span className="font-medium">Over-the-counter medications</span> - Common products like pain relievers can interact</li>
                        <li><span className="font-medium">Supplements and herbs</span> - Natural doesn't always mean safe with medications</li>
                        <li><span className="font-medium">Food and beverages</span> - Some medications interact with specific foods</li>
                        <li><span className="font-medium">Alcohol</span> - Can cause dangerous interactions with many medications</li>
                      </ul>
                      <p className="mt-3 text-blue-600 dark:text-blue-400 font-medium">
                        Always inform your healthcare provider about all medications, supplements, and herbal products you're taking.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="med-3">
                    <AccordionTrigger>Generic vs. Brand Name Medications</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        Generic medications contain the same active ingredients as brand-name medications but typically cost less.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                          <h4 className="font-medium mb-2">Generic Medications</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                            <li>Same active ingredients as brand-name</li>
                            <li>FDA-approved for safety and effectiveness</li>
                            <li>Usually 80-85% less expensive</li>
                            <li>May differ in inactive ingredients</li>
                          </ul>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                          <h4 className="font-medium mb-2">Brand-Name Medications</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                            <li>Developed and marketed by pharmaceutical companies</li>
                            <li>Protected by patents for a period of time</li>
                            <li>More expensive than generics</li>
                            <li>May be needed in specific cases</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-4">
                        Talk to your healthcare provider or pharmacist about whether generic medications are appropriate for your condition.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6">
                  <h3 className="font-semibold mb-3">Questions to Ask About Your Medications</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>What is the name of the medication and what is it for?</li>
                    <li>How and when should I take it, and for how long?</li>
                    <li>What side effects might I experience?</li>
                    <li>Should I take it with food or on an empty stomach?</li>
                    <li>What should I do if I miss a dose?</li>
                    <li>Are there any activities, foods, drinks, or other medications I should avoid?</li>
                    <li>How will I know if the medication is working?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wellness */}
          <TabsContent value="wellness">
            <Card>
              <CardHeader>
                <CardTitle>Wellness & Prevention</CardTitle>
                <CardDescription>
                  Tips and strategies for maintaining overall health and preventing illness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Activity className="mr-2 h-5 w-5 text-blue-500" />
                        Physical Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Aim for 150 minutes of moderate activity weekly</li>
                        <li>Include strength training twice weekly</li>
                        <li>Find activities you enjoy to stay motivated</li>
                        <li>Include flexibility exercises</li>
                        <li>Break up sitting time throughout the day</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Utensils className="mr-2 h-5 w-5 text-green-500" />
                        Nutrition
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Emphasize fruits, vegetables, and whole grains</li>
                        <li>Choose lean proteins and healthy fats</li>
                        <li>Limit processed foods and added sugars</li>
                        <li>Stay hydrated throughout the day</li>
                        <li>Practice mindful eating and portion control</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Brain className="mr-2 h-5 w-5 text-purple-500" />
                        Mental Well-being
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Practice stress management techniques</li>
                        <li>Prioritize quality sleep</li>
                        <li>Maintain social connections</li>
                        <li>Consider mindfulness or meditation</li>
                        <li>Seek help when needed - it's a sign of strength</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-lg border p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Preventive Health Screenings by Age</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="age-1">
                      <AccordionTrigger>Ages 20-39</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          <li>Blood pressure: At least every 2 years</li>
                          <li>Cholesterol: Every 5 years (more frequently if at risk)</li>
                          <li>Diabetes: Every 3 years starting at age 35</li>
                          <li>Skin exam: Annual self-exams, professional checks if changes noted</li>
                          <li>Dental cleaning: Every 6 months</li>
                          <li>Eye exam: Every 2 years</li>
                          <li>
                            Women: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Cervical cancer screening: Every 3 years</li>
                              <li>Clinical breast exam: Every 1-3 years</li>
                            </ul>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="age-2">
                      <AccordionTrigger>Ages 40-49</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          <li>Blood pressure: At least annually</li>
                          <li>Cholesterol: Every 5 years (more frequently if at risk)</li>
                          <li>Diabetes: Every 3 years</li>
                          <li>Skin exam: Annual self-exams, professional checks if changes noted</li>
                          <li>Dental cleaning: Every 6 months</li>
                          <li>Eye exam: Every 2 years</li>
                          <li>
                            Women: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Cervical cancer screening: Every 3 years</li>
                              <li>Mammogram: Discuss with doctor (typically every 1-2 years)</li>
                            </ul>
                          </li>
                          <li>
                            Men: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Prostate cancer screening: Discuss with doctor</li>
                            </ul>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="age-3">
                      <AccordionTrigger>Ages 50-64</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          <li>Blood pressure: At least annually</li>
                          <li>Cholesterol: At least every 5 years</li>
                          <li>Diabetes: Every 3 years</li>
                          <li>Colorectal cancer screening: Starting at age 45</li>
                          <li>Skin exam: Annual self-exams, professional checks if changes noted</li>
                          <li>Dental cleaning: Every 6 months</li>
                          <li>Eye exam: Every 1-2 years</li>
                          <li>
                            Women: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Cervical cancer screening: Every 3 years</li>
                              <li>Mammogram: Every 1-2 years</li>
                              <li>Bone density test: Discuss with doctor</li>
                            </ul>
                          </li>
                          <li>
                            Men: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Prostate cancer screening: Discuss with doctor</li>
                            </ul>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="age-4">
                      <AccordionTrigger>Ages 65 and older</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          <li>Blood pressure: At least annually</li>
                          <li>Cholesterol: At least every 5 years</li>
                          <li>Diabetes: Every 3 years</li>
                          <li>Colorectal cancer screening: Through age 75</li>
                          <li>Skin exam: Annual self-exams, professional checks if changes noted</li>
                          <li>Dental cleaning: Every 6 months</li>
                          <li>Eye exam: Annually</li>
                          <li>Hearing test: Every 3 years</li>
                          <li>
                            Women: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Mammogram: Every 1-2 years through age 74</li>
                              <li>Bone density test: At least once</li>
                            </ul>
                          </li>
                          <li>
                            Men: 
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Prostate cancer screening: Discuss with doctor</li>
                              <li>Abdominal aortic aneurysm screening: Once between ages 65-75 if ever smoked</li>
                            </ul>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Remember: These are general guidelines. Your healthcare provider may recommend different 
                    screenings based on your personal and family health history.
                  </p>
                  <Button className="flex items-center mx-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Create Your Preventive Care Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Health Resources</CardTitle>
                <CardDescription>
                  Trustworthy resources for further health information and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Trusted Health Organizations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-3 border rounded-md">
                        <h4 className="font-medium text-blue-600 dark:text-blue-400">Centers for Disease Control and Prevention (CDC)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Official source for health information, disease prevention, and public health recommendations.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Website: cdc.gov
                        </p>
                      </div>

                      <div className="p-3 border rounded-md">
                        <h4 className="font-medium text-blue-600 dark:text-blue-400">National Institutes of Health (NIH)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          The nation's medical research agency providing health information and latest research.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Website: nih.gov
                        </p>
                      </div>

                      <div className="p-3 border rounded-md">
                        <h4 className="font-medium text-blue-600 dark:text-blue-400">World Health Organization (WHO)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          International organization providing guidance on global health issues.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Website: who.int
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Health Education Materials</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Download these materials for more detailed information on common health topics.
                      </p>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full flex justify-between items-center">
                          <span className="flex items-center">
                            <Pill className="mr-2 h-4 w-4" />
                            Medication Safety Guide
                          </span>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full flex justify-between items-center">
                          <span className="flex items-center">
                            <Heart className="mr-2 h-4 w-4" />
                            Heart Health Booklet
                          </span>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full flex justify-between items-center">
                          <span className="flex items-center">
                            <Brain className="mr-2 h-4 w-4" />
                            Mental Health Resources
                          </span>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full flex justify-between items-center">
                          <span className="flex items-center">
                            <Utensils className="mr-2 h-4 w-4" />
                            Nutrition & Diet Guide
                          </span>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Emergency Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-red-600 dark:text-red-400">Emergency Services</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        Call 911 immediately for any life-threatening emergencies
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Poison Control Center</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        1-800-222-1222
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">National Suicide Prevention Lifeline</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        988 or 1-800-273-8255
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400">Crisis Text Line</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        Text HOME to 741741
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-10 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl mx-auto">
            Disclaimer: The information provided on this page is for general informational purposes only and 
            should not replace professional medical advice. Always consult with a qualified healthcare provider 
            for diagnosis and treatment recommendations tailored to your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
}