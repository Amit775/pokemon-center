import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutFormsInput } from './pokemon-create-without-forms.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutFormsInput } from './pokemon-create-or-connect-without-forms.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutFormsInput {

    @Field(() => PokemonCreateWithoutFormsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutFormsInput)
    create?: Identity<PokemonCreateWithoutFormsInput>;

    @Field(() => PokemonCreateOrConnectWithoutFormsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutFormsInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutFormsInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
