import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-growth-rate-nested.input';

@InputType()
export class GrowthRatesUncheckedUpdateWithoutExperienceInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formula?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput, {nullable:true})
    species?: PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput;
}
