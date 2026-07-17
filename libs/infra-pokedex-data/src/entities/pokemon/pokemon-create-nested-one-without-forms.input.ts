import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutFormsInput } from './pokemon-create-without-forms.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutFormsInput } from './pokemon-create-or-connect-without-forms.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedOneWithoutFormsInput {

    @Field(() => PokemonCreateWithoutFormsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutFormsInput)
    create?: PokemonCreateWithoutFormsInput;

    @Field(() => PokemonCreateOrConnectWithoutFormsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutFormsInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutFormsInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
