import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutMetaInput } from './moves-update-without-meta.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutMetaInput {

    @Field(() => MovesUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MovesUpdateWithoutMetaInput)
    update!: MovesUpdateWithoutMetaInput;

    @Field(() => MovesCreateWithoutMetaInput, {nullable:false})
    @Type(() => MovesCreateWithoutMetaInput)
    create!: MovesCreateWithoutMetaInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
