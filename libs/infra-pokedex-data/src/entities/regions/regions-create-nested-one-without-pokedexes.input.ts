import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutPokedexesInput } from './regions-create-or-connect-without-pokedexes.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class RegionsCreateNestedOneWithoutPokedexesInput {

    @Field(() => RegionsCreateWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsCreateWithoutPokedexesInput)
    create?: RegionsCreateWithoutPokedexesInput;

    @Field(() => RegionsCreateOrConnectWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: RegionsCreateOrConnectWithoutPokedexesInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
