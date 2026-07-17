import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutFlagMapInput } from './moves-update-without-flag-map.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutFlagMapInput {

    @Field(() => MovesUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesUpdateWithoutFlagMapInput)
    update!: MovesUpdateWithoutFlagMapInput;

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create!: MovesCreateWithoutFlagMapInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
