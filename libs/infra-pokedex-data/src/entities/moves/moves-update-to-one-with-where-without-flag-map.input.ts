import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutFlagMapInput } from './moves-update-without-flag-map.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutFlagMapInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => MovesUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesUpdateWithoutFlagMapInput)
    data!: MovesUpdateWithoutFlagMapInput;
}
