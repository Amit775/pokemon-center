import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutItemsInput } from './pokemon-create-without-items.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutItemsInput } from './pokemon-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutItemsInput {

    @Field(() => PokemonCreateWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutItemsInput)
    create?: PokemonCreateWithoutItemsInput;

    @Field(() => PokemonCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutItemsInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutItemsInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
