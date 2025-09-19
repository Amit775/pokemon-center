import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectCreateManyInput } from "../../../inputs/ItemFlingEffectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => [ItemFlingEffectCreateManyInput], {
    nullable: false
  })
  data!: ItemFlingEffectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
