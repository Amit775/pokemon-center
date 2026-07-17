import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokedexVersionGroupsUncheckedCreateNestedManyWithoutPokedexInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-create-nested-many-without-pokedex.input';

@InputType()
export class PokedexesUncheckedCreateWithoutDexNumbersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => PokedexVersionGroupsUncheckedCreateNestedManyWithoutPokedexInput, {nullable:true})
    versionGroups?: PokedexVersionGroupsUncheckedCreateNestedManyWithoutPokedexInput;
}
