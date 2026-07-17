import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationAreasUncheckedUpdateManyWithoutLocationNestedInput } from '../location-areas/location-areas-unchecked-update-many-without-location-nested.input';
import { LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-location-nested.input';

@InputType()
export class LocationsUncheckedUpdateWithoutEvolutionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    region_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => LocationAreasUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    areas?: LocationAreasUncheckedUpdateManyWithoutLocationNestedInput;

    @Field(() => LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput, {nullable:true})
    gameIndices?: LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;
}
