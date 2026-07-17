import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-egg-group-nested.input';

@InputType()
export class EggGroupsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput, {nullable:true})
    species?: PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput;
}
