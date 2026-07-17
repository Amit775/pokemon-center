import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateWithoutRegionInput } from './pokedexes-create-without-region.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutRegionInput } from './pokedexes-create-or-connect-without-region.input';
import { PokedexesUpsertWithWhereUniqueWithoutRegionInput } from './pokedexes-upsert-with-where-unique-without-region.input';
import type { Identity } from 'identity-type';
import { PokedexesCreateManyRegionInputEnvelope } from './pokedexes-create-many-region-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { PokedexesUpdateWithWhereUniqueWithoutRegionInput } from './pokedexes-update-with-where-unique-without-region.input';
import { PokedexesUpdateManyWithWhereWithoutRegionInput } from './pokedexes-update-many-with-where-without-region.input';
import { PokedexesScalarWhereInput } from './pokedexes-scalar-where.input';

@InputType()
export class PokedexesUpdateManyWithoutRegionNestedInput {

    @Field(() => [PokedexesCreateWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesCreateWithoutRegionInput)
    create?: Array<PokedexesCreateWithoutRegionInput>;

    @Field(() => [PokedexesCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<PokedexesCreateOrConnectWithoutRegionInput>;

    @Field(() => [PokedexesUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<PokedexesUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => PokedexesCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => PokedexesCreateManyRegionInputEnvelope)
    createMany?: Identity<PokedexesCreateManyRegionInputEnvelope>;

    @Field(() => [PokedexesWhereUniqueInput], {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>>;

    @Field(() => [PokedexesWhereUniqueInput], {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>>;

    @Field(() => [PokedexesWhereUniqueInput], {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>>;

    @Field(() => [PokedexesWhereUniqueInput], {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>>;

    @Field(() => [PokedexesUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<PokedexesUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [PokedexesUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<PokedexesUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [PokedexesScalarWhereInput], {nullable:true})
    @Type(() => PokedexesScalarWhereInput)
    deleteMany?: Array<PokedexesScalarWhereInput>;
}
