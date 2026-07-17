import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many-without-egg-group-nested.input';

@InputType()
export class EggGroupsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput, {nullable:true})
    species?: PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput;
}
