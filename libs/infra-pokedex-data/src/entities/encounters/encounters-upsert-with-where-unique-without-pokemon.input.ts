import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersUpdateWithoutPokemonInput } from './encounters-update-without-pokemon.input';
import { EncountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';

@InputType()
export class EncountersUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutPokemonInput)
    update!: Identity<EncountersUpdateWithoutPokemonInput>;

    @Field(() => EncountersCreateWithoutPokemonInput, {nullable:false})
    @Type(() => EncountersCreateWithoutPokemonInput)
    create!: Identity<EncountersCreateWithoutPokemonInput>;
}
