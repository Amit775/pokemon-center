import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersUpdateWithoutPokemonInput } from './encounters-update-without-pokemon.input';
import { EncountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';

@InputType()
export class EncountersUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutPokemonInput)
    update!: EncountersUpdateWithoutPokemonInput;

    @Field(() => EncountersCreateWithoutPokemonInput, {nullable:false})
    @Type(() => EncountersCreateWithoutPokemonInput)
    create!: EncountersCreateWithoutPokemonInput;
}
