import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutGenerationInput } from './moves-create-without-generation.input';

@InputType()
export class MovesCreateOrConnectWithoutGenerationInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => MovesCreateWithoutGenerationInput)
    create!: MovesCreateWithoutGenerationInput;
}
