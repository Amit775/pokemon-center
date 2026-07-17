import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsScalarWhereInput } from './pokedex-version-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput } from './pokedex-version-groups-unchecked-update-many-without-version-group.input';

@InputType()
export class PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => PokedexVersionGroupsScalarWhereInput, {nullable:false})
    @Type(() => PokedexVersionGroupsScalarWhereInput)
    where!: Identity<PokedexVersionGroupsScalarWhereInput>;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput)
    data!: Identity<PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupInput>;
}
