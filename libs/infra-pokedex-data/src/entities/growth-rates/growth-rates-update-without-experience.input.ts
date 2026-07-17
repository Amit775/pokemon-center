import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput } from '../pokemon-species/pokemon-species-update-many-without-growth-rate-nested.input';

@InputType()
export class GrowthRatesUpdateWithoutExperienceInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    formula?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput;
}
