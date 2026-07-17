import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutPokemonSpeciesInput } from './generations-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutPokemonSpeciesInput } from './generations-create-or-connect-without-pokemon-species.input';
import { GenerationsUpsertWithoutPokemonSpeciesInput } from './generations-upsert-without-pokemon-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput } from './generations-update-to-one-with-where-without-pokemon-species.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput {

    @Field(() => GenerationsCreateWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutPokemonSpeciesInput)
    create?: Identity<GenerationsCreateWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutPokemonSpeciesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsUpsertWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutPokemonSpeciesInput)
    upsert?: Identity<GenerationsUpsertWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput>;
}
