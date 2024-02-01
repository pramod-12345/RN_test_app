import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import RNPickerSelect from 'react-native-picker-select';

import DatePicker from 'react-native-date-picker'

const ActionSheet = () => {

    const actionSheetRef = useRef(null);
    // const actionSheetRef2 = useRef(null);
    // const actionSheetRef3 = useRef(null);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <SafeAreaView >
            <View style={{ height: '100%', backgroundColor: 'black', justifyContent: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, width: 100, alignSelf: 'center' }} onPress={() => { actionSheetRef.current?.show(); }}>
                    <Text style={{ color: 'black', alignSelf: 'center' }}>Click   </Text>

                </TouchableOpacity>
            </View>

            <ActionSheet ref={actionSheetRef} containerStyle={{ height: '60%', paddingHorizontal: 10, marginHorizontal: 10, }}>
                <ScrollView style={{ flex: 1, }}>
                    <View style={{ borderColor: 'black', height: 'auto', borderWidth: 1, marginTop: 20, }}>

                        <RNPickerSelect

                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football', color: 'black' },
                                { label: 'Baseball', value: 'baseball', color: 'black' },
                                { label: 'Hockey', value: 'hockey', color: 'black' },
                            ]}
                        />



                    </View>
                    <View style={{ marginVertical: 20 }}></View>
                    <Button title="Date Picker" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    {/* <View style={{ height: 'auto', backgroundColor: 'red' }}>
            <Text style={{ color: 'black' }}>Start Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsum, quo sed provident illo ut, error architecto, iusto voluptates accusantium vero deserunt et? Placeat incidunt totam qui natus corporis possimus eveniet, blanditiis esse vero fugit. Nulla sunt totam, voluptates consectetur cum esse ipsam nesciunt excepturi quibusdam mollitia, neque dolorum, saepe ut commodi! Exercitationem, reiciendis voluptatem delectus quasi quas atque, accusantium, aut in tenetur magni voluptatibus labore repellendus ut nemo molestiae excepturi. Dolorem, quasi recusandae velit iusto, reiciendis, quos doloremque atque error inventore tenetur laboriosam odit hic! Aliquid minima modi sit autem natus iusto nisi est quia, soluta ab quos saepe itaque nemo ipsum inventore amet tenetur aut nesciunt assumenda omnis cum laudantium eum vel? Voluptatum quis deleniti eum libero accusamus, natus minima obcaecati vitae consequuntur! Autem perferendis molestias minima, sequi amet voluptatum. Numquam temporibus commodi unde, quia magni, quis culpa harum enim pariatur perferendis magnam tempore suscipit eius veritatis veniam neque sunt sint accusamus distinctio blanditiis consequuntur. In possimus ut autem animi repellat consequatur adipisci, dolores alias nulla vitae, deserunt est perferendis eveniet ducimus sint suscipit asperiores sit ab enim maxime? Aliquid natus tempore et reprehenderit aperiam iure iste porro quos blanditiis nulla laudantium doloremque fuga aspernatur ducimus adipisci, labore animi at, laborum soluta harum in vel placeat magnam ex? Nihil, itaque. Harum ea, eaque quibusdam repudiandae maxime officia nobis laborum expedita vel accusantium inventore voluptatum ex rem dolor ut, est alias. Repellat voluptatum, quos consequatur vero ut reprehenderit sit suscipit animi voluptate. Reiciendis consequuntur repudiandae qui distinctio, doloribus aut tempore sit nulla hic repellat rerum numquam nemo maxime aliquam amet, magni cumque? Repellat fuga deleniti incidunt quas qui dignissimos in vel repellendus ipsa maxime nam ea ad debitis, porro aperiam laudantium minima eveniet alias consectetur corporis aut corrupti ipsum nisi. Voluptatum explicabo asperiores, dignissimos nesciunt necessitatibus adipisci placeat autem architecto dicta quam, minus aperiam laudantium alias commodi similique labore, eligendi accusantium tenetur optio blanditiis ex deleniti? Eaque perspiciatis praesentium incidunt necessitatibus iusto neque numquam optio ullam minus sit exercitationem, explicabo eveniet, inventore consequatur facere adipisci molestias sed reprehenderit harum. Tenetur possimus ipsa repellat, quaerat deleniti voluptatum quisquam provident perspiciatis magnam? Magni, quos dolorum possimus a quaerat, iusto asperiores est accusamus illum similique vel corporis hic tempora porro rem modi quidem consequuntur. Facere necessitatibus esse aliquam ipsam reiciendis voluptas nisi adipisci repellat quis mollitia, suscipit dolore, delectus, quisquam perspiciatis? Suscipit voluptates quo deleniti enim ullam iusto eius porro voluptas illo maiores nam fuga quidem, dignissimos necessitatibus hic fugiat aliquam in assumenda explicabo dolores. Tempore maiores debitis enim, accusamus esse tempora quibusdam sequi quae, nihil cupiditate vel alias deleniti quod natus dolores voluptas numquam! Dolores ad similique odio ducimus facere, qui cupiditate totam iure quo officiis a nemo maxime error facilis, accusantium quasi dolor odit? Iure veniam illo soluta officiis voluptatum amet laborum dicta dignissimos ad nisi quasi, earum provident maiores deserunt placeat ipsa vitae accusantium dolor? Aut ab rerum quisquam deserunt, velit, aliquam omnis, dolore accusantium soluta nihil adipisci architecto incidunt nostrum minima. Libero nam quae quod ratione iure quasi quibusdam delectus harum optio omnis aut amet ipsum animi placeat suscipit labore praesentium deleniti, eos repudiandae sint? Vitae sit suscipit consequatur dignissimos inventore aliquid asperiores nam quasi quam hic, voluptatibus recusandae enim repudiandae, obcaecati commodi, ipsam laudantium et laboriosam cupiditate! Neque quibusdam non delectus praesentium autem eius accusantium veniam repellat cumque itaque eum illo doloribus suscipit, sapiente, maxime iste architecto quo, unde fugiat? Amet rem quasi dolores officiis quas sit qui. A, ipsa suscipit aperiam facilis, ipsam eveniet illum debitis praesentium deleniti perferendis, sapiente consequatur earum et sequi rerum unde nisi qui quam ab error? Molestiae est ipsa, quisquam quia tempora laboriosam, inventore ea, sint soluta praesentium error laborum deserunt. Fuga unde ad id illo aspernatur consequatur! Et suscipit iure, soluta, dolorum doloremque ab pariatur, hic accusantium quae nesciunt error odio iusto nulla possimus expedita harum maiores similique officiis numquam voluptate minima! Adipisci natus libero beatae ratione repellat, illum architecto sit sunt. Culpa quis quisquam nulla distinctio numquam possimus, beatae, nobis dicta non cum quas, voluptatum consequatur. Molestias recusandae facere tempore vero minima qui. Adipisci quibusdam iusto soluta asperiores dolor possimus sapiente a. Consequuntur minus accusantium eaque quos ducimus maiores qui est ipsam similique deleniti quibusdam placeat ab natus tenetur, laudantium harum distinctio eum quam consequatur. Nihil ratione numquam voluptate et nisi quaerat rerum voluptatum totam quisquam delectus, sunt fugit facilis ab. Eius assumenda optio cupiditate laboriosam, facilis nihil impedit itaque ab nesciunt rem praesentium soluta natus ipsam unde exercitationem. Rem tempore ipsa, accusantium perferendis dolor aperiam deserunt sed vero quos sequi inventore laboriosam explicabo voluptatum iure corporis nemo labore dignissimos itaque neque omnis deleniti sapiente blanditiis dolorem qui. Corporis, fugit maiores nihil natus eius omnis sapiente sequi nam quasi magni ex et dicta incidunt saepe voluptate suscipit quae sed similique illovv totam eaque, error magnam commodi. Aliquam, nihil sunt. End  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </Text>
          </View>
          <View style={{ height: 'auto', backgroundColor: 'black' }}>
            <Text style={{ color: 'red' }}>Start Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsum, quo sed provident illo ut, error architecto, iusto voluptates accusantium vero deserunt et? Placeat incidunt totam qui natus corporis possimus eveniet, blanditiis esse vero fugit. Nulla sunt totam, voluptates consectetur cum esse ipsam nesciunt excepturi quibusdam mollitia, neque dolorum, saepe ut commodi! Exercitationem, reiciendis voluptatem delectus quasi quas atque, accusantium, aut in tenetur magni voluptatibus labore repellendus ut nemo molestiae excepturi. Dolorem, quasi recusandae velit iusto, reiciendis, quos doloremque atque error inventore tenetur laboriosam odit hic! Aliquid minima modi sit autem natus iusto nisi est quia, soluta ab quos saepe itaque nemo ipsum inventore amet tenetur aut nesciunt assumenda omnis cum laudantium eum vel? Voluptatum quis deleniti eum libero accusamus, natus minima obcaecati vitae consequuntur! Autem perferendis molestias minima, sequi amet voluptatum. Numquam temporibus commodi unde, quia magni, quis culpa harum enim pariatur perferendis magnam tempore suscipit eius veritatis veniam neque sunt sint accusamus distinctio blanditiis consequuntur. In possimus ut autem animi repellat consequatur adipisci, dolores alias nulla vitae, deserunt est perferendis eveniet ducimus sint suscipit asperiores sit ab enim maxime? Aliquid natus tempore et reprehenderit aperiam iure iste porro quos blanditiis nulla laudantium doloremque fuga aspernatur ducimus adipisci, labore animi at, laborum soluta harum in vel placeat magnam ex? Nihil, itaque. Harum ea, eaque quibusdam repudiandae maxime officia nobis laborum expedita vel accusantium inventore voluptatum ex rem dolor ut, est alias. Repellat voluptatum, quos consequatur vero ut reprehenderit sit suscipit animi voluptate. Reiciendis consequuntur repudiandae qui distinctio, doloribus aut tempore sit nulla hic repellat rerum numquam nemo maxime aliquam amet, magni cumque? Repellat fuga deleniti incidunt quas qui dignissimos in vel repellendus ipsa maxime nam ea ad debitis, porro aperiam laudantium minima eveniet alias consectetur corporis aut corrupti ipsum nisi. Voluptatum explicabo asperiores, dignissimos nesciunt necessitatibus adipisci placeat autem architecto dicta quam, minus aperiam laudantium alias commodi similique labore, eligendi accusantium tenetur optio blanditiis ex deleniti? Eaque perspiciatis praesentium incidunt necessitatibus iusto neque numquam optio ullam minus sit exercitationem, explicabo eveniet, inventore consequatur facere adipisci molestias sed reprehenderit harum. Tenetur possimus ipsa repellat, quaerat deleniti voluptatum quisquam provident perspiciatis magnam? Magni, quos dolorum possimus a quaerat, iusto asperiores est accusamus illum similique vel corporis hic tempora porro rem modi quidem consequuntur. Facere necessitatibus esse aliquam ipsam reiciendis voluptas nisi adipisci repellat quis mollitia, suscipit dolore, delectus, quisquam perspiciatis? Suscipit voluptates quo deleniti enim ullam iusto eius porro voluptas illo maiores nam fuga quidem, dignissimos necessitatibus hic fugiat aliquam in assumenda explicabo dolores. Tempore maiores debitis enim, accusamus esse tempora quibusdam sequi quae, nihil cupiditate vel alias deleniti quod natus dolores voluptas numquam! Dolores ad similique odio ducimus facere, qui cupiditate totam iure quo officiis a nemo maxime error facilis, accusantium quasi dolor odit? Iure veniam illo soluta officiis voluptatum amet laborum dicta dignissimos ad nisi quasi, earum provident maiores deserunt placeat ipsa vitae accusantium dolor? Aut ab rerum quisquam deserunt, velit, aliquam omnis, dolore accusantium soluta nihil adipisci architecto incidunt nostrum minima. Libero nam quae quod ratione iure quasi quibusdam delectus harum optio omnis aut amet ipsum animi placeat suscipit labore praesentium deleniti, eos repudiandae sint? Vitae sit suscipit consequatur dignissimos inventore aliquid asperiores nam quasi quam hic, voluptatibus recusandae enim repudiandae, obcaecati commodi, ipsam laudantium et laboriosam cupiditate! Neque quibusdam non delectus praesentium autem eius accusantium veniam repellat cumque itaque eum illo doloribus suscipit, sapiente, maxime iste architecto quo, unde fugiat? Amet rem quasi dolores officiis quas sit qui. A, ipsa suscipit aperiam facilis, ipsam eveniet illum debitis praesentium deleniti perferendis, sapiente consequatur earum et sequi rerum unde nisi qui quam ab error? Molestiae est ipsa, quisquam quia tempora laboriosam, inventore ea, sint soluta praesentium error laborum deserunt. Fuga unde ad id illo aspernatur consequatur! Et suscipit iure, soluta, dolorum doloremque ab pariatur, hic accusantium quae nesciunt error odio iusto nulla possimus expedita harum maiores similique officiis numquam voluptate minima! Adipisci natus libero beatae ratione repellat, illum architecto sit sunt. Culpa quis quisquam nulla distinctio numquam possimus, beatae, nobis dicta non cum quas, voluptatum consequatur. Molestias recusandae facere tempore vero minima qui. Adipisci quibusdam iusto soluta asperiores dolor possimus sapiente a. Consequuntur minus accusantium eaque quos ducimus maiores qui est ipsam similique deleniti quibusdam placeat ab natus tenetur, laudantium harum distinctio eum quam consequatur. Nihil ratione numquam voluptate et nisi quaerat rerum voluptatum totam quisquam delectus, sunt fugit facilis ab. Eius assumenda optio cupiditate laboriosam, facilis nihil impedit itaque ab nesciunt rem praesentium soluta natus ipsam unde exercitationem. Rem tempore ipsa, accusantium perferendis dolor aperiam deserunt sed vero quos sequi inventore laboriosam explicabo voluptatum iure corporis nemo labore dignissimos itaque neque omnis deleniti sapiente blanditiis dolorem qui. Corporis, fugit maiores nihil natus eius omnis sapiente sequi nam quasi magni ex et dicta incidunt saepe voluptate suscipit quae sed similique illovv totam eaque, error magnam commodi. Aliquam, nihil sunt. End       </Text>
          </View> */}
                    {/* <View style={{ backgroundColor: 'red', justifyContent: 'center', height: '50%' }}>
            <View style={{ height: 400, backgroundColor: 'blue' }}></View>

            <Text style={{ color: 'black' }}>Add Your Demographics</Text>

            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, width: 100, alignSelf: 'center' }} onPress={() => { actionSheetRef2.current?.show(); actionSheetRef.current?.hide(); }}>
              <Text style={{ color: 'black' }}>Save</Text>

            </TouchableOpacity>
            <View style={{ height: 400, backgroundColor: 'black' }}></View>

            <View style={{ height: 400, backgroundColor: 'green' }}></View>
            <View style={{ height: 400, backgroundColor: 'yellow' }}></View>

          </View> */}
                </ScrollView>
            </ActionSheet>

            {/* <ActionSheet ref={actionSheetRef2}>
        <View style={{ backgroundColor: 'blue', height: '80%', justifyContent: 'center' }}>

          <TouchableOpacity style={{ backgroundColor: 'white', width: 100, height: 20, alignSelf: 'center' }} onPress={() => { actionSheetRef3.current?.show(); actionSheetRef2.current?.hide(); }}>
            <Text style={{ color: 'black' }}>
              Click
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet> */}
            {/* <ActionSheet ref={actionSheetRef3}>
        <View style={{ backgroundColor: 'green', height: '40%', justifyContent: 'center' }}>

          <TouchableOpacity style={{ backgroundColor: 'white', width: 100, height: 20, alignSelf: 'center' }}>
            <Text style={{ color: 'black' }}>
              Click
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet> */}
        </SafeAreaView>
    )
}

export default ActionSheet