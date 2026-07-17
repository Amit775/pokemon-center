import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';

@InputType()
export class RegionsCreateOrConnectWithoutPokedexesInput {

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => RegionsCreateWithoutPokedexesInput)
    create!: Identity<RegionsCreateWithoutPokedexesInput>;
}
