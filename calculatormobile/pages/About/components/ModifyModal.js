import React, { useState } from 'react';
import { View } from 'react-native';
import { Overlay } from 'react-native-elements';
import Dialog from 'react-native-dialog';

export default function ModifyModal({
	visible1,
	visible2,
	visible3,
	toggleOverlay1,
	toggleOverlay2,
	toggleOverlay3,
	updateUser,
}) {
	const [user, setUser] = useState({
		name: '',
		height: 0,
		weight: 0,
	});
	return (
		<View>
			<Overlay
				overlayStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
				isVisible={visible1}
				onBackdropPress={toggleOverlay1}
			>
				<View>
					<Dialog.Container visible={visible1}>
						<Dialog.Title>이름 변경</Dialog.Title>
						<Dialog.Description>새로운 이름을 입력해 주세요.</Dialog.Description>
						<Dialog.Input
							onChangeText={value => {
								setUser({ ...user, name: value });
							}}
						/>
						<Dialog.Button label='취소' onPress={toggleOverlay1} />
						<Dialog.Button label='확인' onPress={() => updateUser(user)} />
					</Dialog.Container>
				</View>
			</Overlay>
			<Overlay
				overlayStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
				isVisible={visible2}
				onBackdropPress={toggleOverlay2}
			>
				<View>
					<Dialog.Container visible={visible2}>
						<Dialog.Title>키 변경</Dialog.Title>
						<Dialog.Description>새로운 키를 입력해 주세요.</Dialog.Description>
						<Dialog.Input
							onChangeText={value => {
								setUser({ ...user, height: value });
							}}
						/>
						<Dialog.Button label='취소' onPress={toggleOverlay2} />
						<Dialog.Button label='확인' onPress={() => updateUser(user)} />
					</Dialog.Container>
				</View>
			</Overlay>
			<Overlay
				overlayStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
				isVisible={visible3}
				onBackdropPress={toggleOverlay3}
			>
				<View>
					<Dialog.Container visible={visible3}>
						<Dialog.Title>몸무게 변경</Dialog.Title>
						<Dialog.Description>새로운 몸무게를 입력해 주세요.</Dialog.Description>
						<Dialog.Input
							onChangeText={value => {
								setUser({ ...user, weight: value });
							}}
						/>
						<Dialog.Button label='취소' onPress={toggleOverlay3} />
						<Dialog.Button label='확인' onPress={() => updateUser(user)} />
					</Dialog.Container>
				</View>
			</Overlay>
		</View>
	);
}
