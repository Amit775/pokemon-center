import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapUncheckedUpdateManyInput } from './move-flag-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveFlagMapArgs {

    @Field(() => MoveFlagMapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => MoveFlagMapUncheckedUpdateManyInput)
    data!: Identity<MoveFlagMapUncheckedUpdateManyInput>;

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    @Type(() => MoveFlagMapWhereInput)
    where?: Identity<MoveFlagMapWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
