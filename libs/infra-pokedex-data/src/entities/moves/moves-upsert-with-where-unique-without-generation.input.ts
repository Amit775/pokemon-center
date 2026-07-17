import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutGenerationInput } from './moves-update-without-generation.input';
import { MovesCreateWithoutGenerationInput } from './moves-create-without-generation.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => MovesUpdateWithoutGenerationInput)
    update!: Identity<MovesUpdateWithoutGenerationInput>;

    @Field(() => MovesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => MovesCreateWithoutGenerationInput)
    create!: Identity<MovesCreateWithoutGenerationInput>;
}
