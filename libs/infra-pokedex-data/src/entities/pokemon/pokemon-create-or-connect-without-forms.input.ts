import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutFormsInput } from './pokemon-create-without-forms.input';

@InputType()
export class PokemonCreateOrConnectWithoutFormsInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutFormsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutFormsInput)
    create!: Identity<PokemonCreateWithoutFormsInput>;
}
