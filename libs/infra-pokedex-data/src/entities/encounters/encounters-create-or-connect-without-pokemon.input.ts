import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersCreateWithoutPokemonInput } from './encounters-create-without-pokemon.input';

@InputType()
export class EncountersCreateOrConnectWithoutPokemonInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateWithoutPokemonInput, {nullable:false})
    @Type(() => EncountersCreateWithoutPokemonInput)
    create!: EncountersCreateWithoutPokemonInput;
}
