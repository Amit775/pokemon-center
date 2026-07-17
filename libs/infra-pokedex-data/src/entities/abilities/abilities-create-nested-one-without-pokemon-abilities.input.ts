import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput } from './abilities-create-or-connect-without-pokemon-abilities.input';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput {

    @Field(() => AbilitiesCreateWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesCreateWithoutPokemonAbilitiesInput)
    create?: AbilitiesCreateWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput)
    connectOrCreate?: AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    connect?: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;
}
