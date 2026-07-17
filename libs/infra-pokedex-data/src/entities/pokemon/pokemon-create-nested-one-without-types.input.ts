import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutTypesInput } from './pokemon-create-without-types.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutTypesInput } from './pokemon-create-or-connect-without-types.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutTypesInput {

    @Field(() => PokemonCreateWithoutTypesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutTypesInput)
    create?: PokemonCreateWithoutTypesInput;

    @Field(() => PokemonCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutTypesInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
