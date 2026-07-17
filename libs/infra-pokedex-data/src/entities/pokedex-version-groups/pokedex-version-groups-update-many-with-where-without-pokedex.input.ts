import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsScalarWhereInput } from './pokedex-version-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexInput } from './pokedex-version-groups-unchecked-update-many-without-pokedex.input';

@InputType()
export class PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput {

    @Field(() => PokedexVersionGroupsScalarWhereInput, {nullable:false})
    @Type(() => PokedexVersionGroupsScalarWhereInput)
    where!: PokedexVersionGroupsScalarWhereInput;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexInput)
    data!: PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexInput;
}
