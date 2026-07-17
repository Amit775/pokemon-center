import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutHeldItemInput } from './pokemon-evolution-create-without-held-item.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutHeldItemInput } from './pokemon-evolution-create-or-connect-without-held-item.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput } from './pokemon-evolution-upsert-with-where-unique-without-held-item.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyHeldItemInputEnvelope } from './pokemon-evolution-create-many-held-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput } from './pokemon-evolution-update-with-where-unique-without-held-item.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput } from './pokemon-evolution-update-many-with-where-without-held-item.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUpdateManyWithoutHeldItemNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutHeldItemInput)
    create?: Array<PokemonEvolutionCreateWithoutHeldItemInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutHeldItemInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutHeldItemInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput>;

    @Field(() => PokemonEvolutionCreateManyHeldItemInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyHeldItemInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyHeldItemInputEnvelope>;

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

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
