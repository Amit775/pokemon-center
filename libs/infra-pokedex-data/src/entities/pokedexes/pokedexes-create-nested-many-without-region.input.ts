import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateWithoutRegionInput } from './pokedexes-create-without-region.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutRegionInput } from './pokedexes-create-or-connect-without-region.input';
import type { Identity } from 'identity-type';
import { PokedexesCreateManyRegionInputEnvelope } from './pokedexes-create-many-region-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class PokedexesCreateNestedManyWithoutRegionInput {

    @Field(() => [PokedexesCreateWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesCreateWithoutRegionInput)
    create?: Array<PokedexesCreateWithoutRegionInput>;

    @Field(() => [PokedexesCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<PokedexesCreateOrConnectWithoutRegionInput>;

    @Field(() => PokedexesCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => PokedexesCreateManyRegionInputEnvelope)
    createMany?: Identity<PokedexesCreateManyRegionInputEnvelope>;

    @Field(() => [PokedexesWhereUniqueInput], {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>>;
}
