import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsCreateManyInput } from "../../../inputs/ItemFlingEffectsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnItemFlingEffectsArgs {
  @TypeGraphQL.Field(_type => [ItemFlingEffectsCreateManyInput], {
    nullable: false
  })
  data!: ItemFlingEffectsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
