import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutTargetInput } from './moves-update-without-target.input';
import { MovesCreateWithoutTargetInput } from './moves-create-without-target.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutTargetInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutTargetInput, {nullable:false})
    @Type(() => MovesUpdateWithoutTargetInput)
    update!: Identity<MovesUpdateWithoutTargetInput>;

    @Field(() => MovesCreateWithoutTargetInput, {nullable:false})
    @Type(() => MovesCreateWithoutTargetInput)
    create!: Identity<MovesCreateWithoutTargetInput>;
}
