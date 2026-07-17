import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutPokedexesInput } from './regions-create-or-connect-without-pokedexes.input';
import { RegionsUpsertWithoutPokedexesInput } from './regions-upsert-without-pokedexes.input';
import { RegionsWhereInput } from './regions-where.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutPokedexesInput } from './regions-update-to-one-with-where-without-pokedexes.input';

@InputType()
export class RegionsUpdateOneWithoutPokedexesNestedInput {

    @Field(() => RegionsCreateWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsCreateWithoutPokedexesInput)
    create?: RegionsCreateWithoutPokedexesInput;

    @Field(() => RegionsCreateOrConnectWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: RegionsCreateOrConnectWithoutPokedexesInput;

    @Field(() => RegionsUpsertWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutPokedexesInput)
    upsert?: RegionsUpsertWithoutPokedexesInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    disconnect?: RegionsWhereInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    delete?: RegionsWhereInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutPokedexesInput)
    update?: RegionsUpdateToOneWithWhereWithoutPokedexesInput;
}
