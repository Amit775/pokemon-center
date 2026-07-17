import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from './abilities-create-without-pokemon-abilities.input';

@InputType()
export class AbilitiesCreateOrConnectWithoutPokemonAbilitiesInput {

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesCreateWithoutPokemonAbilitiesInput, {nullable:false})
    @Type(() => AbilitiesCreateWithoutPokemonAbilitiesInput)
    create!: AbilitiesCreateWithoutPokemonAbilitiesInput;
}
