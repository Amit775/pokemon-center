import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagMapUncheckedUpdateManyInput } from './move-flag-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveFlagMapArgs {

    @Field(() => MoveFlagMapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => MoveFlagMapUncheckedUpdateManyInput)
    data!: MoveFlagMapUncheckedUpdateManyInput;

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    @Type(() => MoveFlagMapWhereInput)
    where?: MoveFlagMapWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
