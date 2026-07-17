import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessCreateManyInput } from './berry-firmness-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBerryFirmnessArgs {

    @Field(() => [BerryFirmnessCreateManyInput], {nullable:false})
    @Type(() => BerryFirmnessCreateManyInput)
    data!: Array<BerryFirmnessCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
