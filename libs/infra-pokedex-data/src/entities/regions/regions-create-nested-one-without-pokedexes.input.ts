import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutPokedexesInput } from './regions-create-or-connect-without-pokedexes.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class RegionsCreateNestedOneWithoutPokedexesInput {

    @Field(() => RegionsCreateWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsCreateWithoutPokedexesInput)
    create?: Identity<RegionsCreateWithoutPokedexesInput>;

    @Field(() => RegionsCreateOrConnectWithoutPokedexesInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutPokedexesInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
