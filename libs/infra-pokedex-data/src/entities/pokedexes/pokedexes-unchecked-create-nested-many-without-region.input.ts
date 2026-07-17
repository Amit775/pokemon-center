import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateWithoutRegionInput } from './pokedexes-create-without-region.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutRegionInput } from './pokedexes-create-or-connect-without-region.input';
import { PokedexesCreateManyRegionInputEnvelope } from './pokedexes-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class PokedexesUncheckedCreateNestedManyWithoutRegionInput {

    @Field(() => [PokedexesCreateWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesCreateWithoutRegionInput)
    create?: Array<PokedexesCreateWithoutRegionInput>;

    @Field(() => [PokedexesCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<PokedexesCreateOrConnectWithoutRegionInput>;

    @Field(() => PokedexesCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => PokedexesCreateManyRegionInputEnvelope)
    createMany?: PokedexesCreateManyRegionInputEnvelope;

    @Field(() => [PokedexesWhereUniqueInput], {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>>;
}
