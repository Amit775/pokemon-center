import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutTypesInput } from './pokemon-create-without-types.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutTypesInput } from './pokemon-create-or-connect-without-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutTypesInput {

    @Field(() => PokemonCreateWithoutTypesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutTypesInput)
    create?: Identity<PokemonCreateWithoutTypesInput>;

    @Field(() => PokemonCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutTypesInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
