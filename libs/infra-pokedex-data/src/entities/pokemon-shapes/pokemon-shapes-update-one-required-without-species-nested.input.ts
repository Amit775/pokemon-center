import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesCreateWithoutSpeciesInput } from './pokemon-shapes-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonShapesCreateOrConnectWithoutSpeciesInput } from './pokemon-shapes-create-or-connect-without-species.input';
import { PokemonShapesUpsertWithoutSpeciesInput } from './pokemon-shapes-upsert-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput } from './pokemon-shapes-update-to-one-with-where-without-species.input';

@InputType()
export class PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => PokemonShapesCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesCreateWithoutSpeciesInput)
    create?: Identity<PokemonShapesCreateWithoutSpeciesInput>;

    @Field(() => PokemonShapesCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<PokemonShapesCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonShapesUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesUpsertWithoutSpeciesInput)
    upsert?: Identity<PokemonShapesUpsertWithoutSpeciesInput>;

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonShapesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;

    @Field(() => PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput)
    update?: Identity<PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput>;
}
