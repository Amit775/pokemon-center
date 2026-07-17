import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutTargetInput } from './moves-update-without-target.input';

@InputType()
export class MovesUpdateWithWhereUniqueWithoutTargetInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutTargetInput, {nullable:false})
    @Type(() => MovesUpdateWithoutTargetInput)
    data!: MovesUpdateWithoutTargetInput;
}
