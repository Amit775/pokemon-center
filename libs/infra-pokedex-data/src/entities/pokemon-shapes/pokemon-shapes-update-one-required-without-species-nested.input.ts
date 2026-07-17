import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonShapesCreateWithoutSpeciesInput } from './pokemon-shapes-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonShapesCreateOrConnectWithoutSpeciesInput } from './pokemon-shapes-create-or-connect-without-species.input';
import { PokemonShapesUpsertWithoutSpeciesInput } from './pokemon-shapes-upsert-without-species.input';
import { Prisma } from '@prisma/client';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput } from './pokemon-shapes-update-to-one-with-where-without-species.input';

@InputType()
export class PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => PokemonShapesCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesCreateWithoutSpeciesInput)
    create?: PokemonShapesCreateWithoutSpeciesInput;

    @Field(() => PokemonShapesCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: PokemonShapesCreateOrConnectWithoutSpeciesInput;

    @Field(() => PokemonShapesUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesUpsertWithoutSpeciesInput)
    upsert?: PokemonShapesUpsertWithoutSpeciesInput;

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonShapesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;

    @Field(() => PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput)
    update?: PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput;
}
