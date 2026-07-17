import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutEvolutionTriggerInput } from './pokemon-evolution-create-without-evolution-trigger.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput } from './pokemon-evolution-create-or-connect-without-evolution-trigger.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput } from './pokemon-evolution-upsert-with-where-unique-without-evolution-trigger.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope } from './pokemon-evolution-create-many-evolution-trigger-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput } from './pokemon-evolution-update-with-where-unique-without-evolution-trigger.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput } from './pokemon-evolution-update-many-with-where-without-evolution-trigger.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutEvolutionTriggerInput)
    create?: Array<PokemonEvolutionCreateWithoutEvolutionTriggerInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput>;

    @Field(() => PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope>;

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

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
