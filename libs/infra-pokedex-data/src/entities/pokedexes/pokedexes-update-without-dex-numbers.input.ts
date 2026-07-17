import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionsUpdateOneWithoutPokedexesNestedInput } from '../regions/regions-update-one-without-pokedexes-nested.input';
import { PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput } from '../pokedex-version-groups/pokedex-version-groups-update-many-without-pokedex-nested.input';

@InputType()
export class PokedexesUpdateWithoutDexNumbersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_main_series?: IntFieldUpdateOperationsInput;

    @Field(() => RegionsUpdateOneWithoutPokedexesNestedInput, {nullable:true})
    region?: RegionsUpdateOneWithoutPokedexesNestedInput;

    @Field(() => PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput, {nullable:true})
    versionGroups?: PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput;
}
