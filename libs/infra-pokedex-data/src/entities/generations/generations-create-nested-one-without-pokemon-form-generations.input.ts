import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from './generations-create-without-pokemon-form-generations.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput } from './generations-create-or-connect-without-pokemon-form-generations.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput {

    @Field(() => GenerationsCreateWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonFormGenerationsInput)
    create?: Identity<GenerationsCreateWithoutPokemonFormGenerationsInput>;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
