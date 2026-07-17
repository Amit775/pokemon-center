import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsScalarWhereInput } from './pokedex-version-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput } from './pokedex-version-groups-unchecked-update-many-without-version-group.input';

@InputType()
export class PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => PokedexVersionGroupsScalarWhereInput, {nullable:false})
    @Type(() => PokedexVersionGroupsScalarWhereInput)
    where!: PokedexVersionGroupsScalarWhereInput;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput)
    data!: PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput;
}
