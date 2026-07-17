import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersUpdateWithoutPokemonInput } from './encounters-update-without-pokemon.input';

@InputType()
export class EncountersUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutPokemonInput)
    data!: EncountersUpdateWithoutPokemonInput;
}
