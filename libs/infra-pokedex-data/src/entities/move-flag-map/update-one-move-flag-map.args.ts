import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagMapUpdateInput } from './move-flag-map-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';

@ArgsType()
export class UpdateOneMoveFlagMapArgs {

    @Field(() => MoveFlagMapUpdateInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateInput)
    data!: MoveFlagMapUpdateInput;

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;
}
