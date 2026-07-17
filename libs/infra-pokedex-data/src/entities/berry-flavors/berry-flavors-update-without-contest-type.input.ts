import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from '../berries/berries-update-one-required-without-flavors-nested.input';
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../types/types-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class BerryFlavorsUpdateWithoutContestTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;

    @Field(() => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {nullable:true})
    berry?: BerriesUpdateOneRequiredWithoutFlavorsNestedInput;

    @Field(() => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
}
