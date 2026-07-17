import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput } from './abilities-create-or-connect-without-pokemon-abilities.input';
import { Prisma } from '@pokemon-center/prisma';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput {

    @Field(() => AbilitiesCreateWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesCreateWithoutPokemonAbilitiesInput)
    create?: Identity<AbilitiesCreateWithoutPokemonAbilitiesInput>;

    @Field(() => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput, {nullable:true})
    @Type(() => AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput)
    connectOrCreate?: Identity<AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput>;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    connect?: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;
}
