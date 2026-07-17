import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutGenerationInput } from './moves-create-without-generation.input';

@InputType()
export class MovesCreateOrConnectWithoutGenerationInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => MovesCreateWithoutGenerationInput)
    create!: Identity<MovesCreateWithoutGenerationInput>;
}
