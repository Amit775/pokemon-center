import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from './generations-create-without-pokemon-form-generations.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput } from './generations-create-or-connect-without-pokemon-form-generations.input';
import { GenerationsUpsertWithoutPokemonFormGenerationsInput } from './generations-upsert-without-pokemon-form-generations.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput } from './generations-update-to-one-with-where-without-pokemon-form-generations.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput {

    @Field(() => GenerationsCreateWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonFormGenerationsInput)
    create?: Identity<GenerationsCreateWithoutPokemonFormGenerationsInput>;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput>;

    @Field(() => GenerationsUpsertWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutPokemonFormGenerationsInput)
    upsert?: Identity<GenerationsUpsertWithoutPokemonFormGenerationsInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput>;
}
