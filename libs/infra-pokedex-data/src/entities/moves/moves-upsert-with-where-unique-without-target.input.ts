import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutTargetInput } from './moves-update-without-target.input';
import { MovesCreateWithoutTargetInput } from './moves-create-without-target.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutTargetInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutTargetInput, {nullable:false})
    @Type(() => MovesUpdateWithoutTargetInput)
    update!: MovesUpdateWithoutTargetInput;

    @Field(() => MovesCreateWithoutTargetInput, {nullable:false})
    @Type(() => MovesCreateWithoutTargetInput)
    create!: MovesCreateWithoutTargetInput;
}
