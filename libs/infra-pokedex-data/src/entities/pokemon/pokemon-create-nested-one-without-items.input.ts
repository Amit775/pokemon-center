import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutItemsInput } from './pokemon-create-without-items.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutItemsInput } from './pokemon-create-or-connect-without-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutItemsInput {

    @Field(() => PokemonCreateWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutItemsInput)
    create?: Identity<PokemonCreateWithoutItemsInput>;

    @Field(() => PokemonCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutItemsInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
