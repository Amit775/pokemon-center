import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionsCreateManyInput } from './regions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRegionsArgs {

    @Field(() => [RegionsCreateManyInput], {nullable:false})
    @Type(() => RegionsCreateManyInput)
    data!: Array<RegionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
