import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsUpdateInput } from "../../../inputs/ItemFlagsUpdateInput";
import { ItemFlagsWhereUniqueInput } from "../../../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsUpdateInput, {
    nullable: false
  })
  data!: ItemFlagsUpdateInput;

  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagsWhereUniqueInput;
}
