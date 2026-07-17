import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutFlagMapInput } from './moves-update-without-flag-map.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutFlagMapInput {

    @Field(() => MovesUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesUpdateWithoutFlagMapInput)
    update!: Identity<MovesUpdateWithoutFlagMapInput>;

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create!: Identity<MovesCreateWithoutFlagMapInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;
}
