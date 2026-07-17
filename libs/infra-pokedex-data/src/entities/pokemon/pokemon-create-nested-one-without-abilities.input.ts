import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutAbilitiesInput } from './pokemon-create-without-abilities.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutAbilitiesInput } from './pokemon-create-or-connect-without-abilities.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutAbilitiesInput {

    @Field(() => PokemonCreateWithoutAbilitiesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutAbilitiesInput)
    create?: PokemonCreateWithoutAbilitiesInput;

    @Field(() => PokemonCreateOrConnectWithoutAbilitiesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutAbilitiesInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
