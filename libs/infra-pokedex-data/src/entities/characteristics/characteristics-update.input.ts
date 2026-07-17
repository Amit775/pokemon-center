import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StatsUpdateOneRequiredWithoutCharacteristicsNestedInput } from '../stats/stats-update-one-required-without-characteristics-nested.input';

@InputType()
export class CharacteristicsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    gene_mod_5?: IntFieldUpdateOperationsInput;

    @Field(() => StatsUpdateOneRequiredWithoutCharacteristicsNestedInput, {nullable:true})
    stat?: StatsUpdateOneRequiredWithoutCharacteristicsNestedInput;
}
