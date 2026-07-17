import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesScalarWhereInput } from './pokedexes-scalar-where.input';
import { Type } from 'class-transformer';
import { PokedexesUpdateManyMutationInput } from './pokedexes-update-many-mutation.input';

@InputType()
export class PokedexesUpdateManyWithWhereWithoutRegionInput {

    @Field(() => PokedexesScalarWhereInput, {nullable:false})
    @Type(() => PokedexesScalarWhereInput)
    where!: PokedexesScalarWhereInput;

    @Field(() => PokedexesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokedexesUpdateManyMutationInput)
    data!: PokedexesUpdateManyMutationInput;
}
