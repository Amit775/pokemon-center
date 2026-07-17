import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../contest-types/contest-types-update-one-required-without-berry-flavors-nested.input';
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../types/types-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class BerryFlavorsUpdateWithoutBerryInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;

    @Field(() => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    contestType?: ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;

    @Field(() => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
}
