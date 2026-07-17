import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from '../berries/berries-update-one-required-without-flavors-nested.input';
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../contest-types/contest-types-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class BerryFlavorsUpdateWithoutTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;

    @Field(() => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {nullable:true})
    berry?: BerriesUpdateOneRequiredWithoutFlavorsNestedInput;

    @Field(() => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    contestType?: ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
}
