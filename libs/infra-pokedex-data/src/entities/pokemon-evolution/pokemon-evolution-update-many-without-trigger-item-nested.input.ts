import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutTriggerItemInput } from './pokemon-evolution-create-without-trigger-item.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutTriggerItemInput } from './pokemon-evolution-create-or-connect-without-trigger-item.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput } from './pokemon-evolution-upsert-with-where-unique-without-trigger-item.input';
import { PokemonEvolutionCreateManyTriggerItemInputEnvelope } from './pokemon-evolution-create-many-trigger-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput } from './pokemon-evolution-update-with-where-unique-without-trigger-item.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput } from './pokemon-evolution-update-many-with-where-without-trigger-item.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutTriggerItemInput)
    create?: Array<PokemonEvolutionCreateWithoutTriggerItemInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutTriggerItemInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutTriggerItemInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput>;

    @Field(() => PokemonEvolutionCreateManyTriggerItemInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyTriggerItemInputEnvelope)
    createMany?: PokemonEvolutionCreateManyTriggerItemInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
